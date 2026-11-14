/** Generate dist/sitemap.xml from the prerendered/featured route list. */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { resolvePageSeo, ALL_SEO_PATHS } from "../src/data/seo.ts";
import { company } from "../src/data/company.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const BASE = company.siteUrl;

const prioritized = (r) => {
  if (r === "/") return "1.0";
  if (r.startsWith("/solutions/") && ["cctv-security-dubai", "network-solutions-dubai", "computer-systems-dubai", "microsoft-solutions-uae"].some((c) => r.endsWith(c)))
    return "0.9";
  if (r.startsWith("/solutions/")) return "0.8";
  if (r.startsWith("/locations/") || r.startsWith("/industries/")) return "0.7";
  if (r.startsWith("/blog/")) return "0.6";
  if (["/about", "/contact", "/products", "/industries", "/locations", "/solutions", "/blog"].includes(r)) return "0.8";
  return "0.5";
};

function main() {
  const entries = ALL_SEO_PATHS.map((route) => {
    const seo = resolvePageSeo(route);
    const loc = `${BASE}${route === "/" ? "" : route}`;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>`,
      `    <priority>${prioritized(route)}</priority>`,
      `    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>`,
    ].join("\n") + "\n  </url>";
  });

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries.join("\n") +
    `\n</urlset>\n`;

  mkdirSync(DIST, { recursive: true });
  writeFileSync(path.join(DIST, "sitemap.xml"), xml);
  console.log(`sitemap.xml generated with ${ALL_SEO_PATHS.length} URLs`);
}

main();
