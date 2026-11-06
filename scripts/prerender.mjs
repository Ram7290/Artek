/**
 * Static prerendering script.
 * 1. Reads the vite client build's dist/index.html as the template.
 * 2. Renders each crawlable route's body markup via the compiled SSR bundle.
 * 3. Injects route-specific <title>, meta description, canonical, Open Graph
 *    and JSON-LD head tags, writes dist/<route>/index.html (+ dist/404.html).
 *
 * Run after `npm run build` (client) and the SSR build:
 *    node scripts/prerender.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { resolvePageSeo, ALL_SEO_PATHS } from "../src/data/seo.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SSR_OUT = path.join(ROOT, ".ssr-out");

async function main() {
  const templatePath = path.join(DIST, "index.html");
  if (!existsSync(templatePath)) {
    console.error("dist/index.html not found — run `npm run build` first.");
    process.exit(1);
  }
  const template = readFileSync(templatePath, "utf8");

  // import the SSR bundle compiled by `vite build --ssr`
  const ssrEntry = path.join(SSR_OUT, "entry-server.js");
  if (!existsSync(ssrEntry)) {
    console.error(".ssr-out/entry-server.js not found — run the SSR build first.");
    process.exit(1);
  }
  const { renderPage } = await import(pathToFileURL(ssrEntry).href);

  const routes = [...ALL_SEO_PATHS, "/404"];

  for (const route of routes) {
    let html = template;
    const is404 = route === "/404";
    const bodyHtml = renderPage(is404 ? "/__not_found__" : route);
    if (is404) {
      html = html.replace("<!-- prerendered content is injected here per route -->", bodyHtml);
      html = injectSeo(html, {
        title: "Page Not Found | ARTEK Computers LLC",
        description: "The page could not be found.",
        path: "/404.html",
        noindex: true,
        jsonLd: [],
      });
    } else {
      const seo = resolvePageSeo(route);
      html = html.replace("<!-- prerendered content is injected here per route -->", bodyHtml);
      html = injectSeo(html, {
        title: seo.title,
        description: seo.description,
        path: seo.path,
        noindex: false,
        jsonLd: seo.jsonLd ?? [],
      });
    }
    const outPath = is404
      ? path.join(DIST, "404.html")
      : path.join(DIST, ...route.replace(/^\//, "").split("/"), "index.html");
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);
    console.log("prerendered:", is404 ? "/404.html" : route);
  }

  console.log(`\nDone — ${routes.length} static pages generated in dist/`);
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function injectSeo(html, { title, description, path: pagePath, jsonLd, noindex }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  /* replace the template's fallback title + description + canonical */
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${safeDesc}" />`)
    .replace(/<link\s+rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${escapeHtml(pagePath)}" />`);

  /* per-route OG tags */
  const og =
    `<meta property="og:title" content="${safeTitle}" />\n    ` +
    `<meta property="og:description" content="${safeDesc}" />\n    ` +
    `<meta property="og:url" content="${escapeHtml(pagePath)}" />\n    ` +
    (noindex ? `<meta name="robots" content="noindex" />` : "");

  const ld = (jsonLd ?? [])
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`)
    .join("\n    ");

  const marker = "</head>";
  const idx = html.lastIndexOf(marker);
  if (idx === -1) return html;
  return html.slice(0, idx) + "\n    " + og + "\n    " + ld + "\n  " + html.slice(idx);
}


main().catch((err) => {
  console.error(err);
  process.exit(1);
});
