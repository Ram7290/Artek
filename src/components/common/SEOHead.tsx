import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolvePageSeo } from "@/data/seo";

/**
 * Client-side SEO metadata updater for SPA navigation.
 *
 * For first-load HTML (what search engines crawl) the same metadata is
 * compiled into static HTML by scripts/prerender.mjs — this component only
 * keeps the head in sync after client-side route changes.
 *
 * JSON-LD structured data IS rendered inside the component tree, because
 * inline JSON-LD is valid anywhere in a document and React SSR will bake it
 * into the prerendered pages directly.
 */
export function SEOHead() {
  const { pathname } = useLocation();
  const seo = resolvePageSeo(pathname);

  useEffect(() => {
    document.title = seo.title;

    const setMeta = (selector: string, attr: "name" | "property", key: string, content: string | undefined) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!content) {
        el?.remove();
        return;
      }
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    setMeta('meta[property="og:type"]', "property", "og:type", seo.ogType ?? "website");
    setMeta('meta[property="og:url"]', "property", "og:url", seo.path);
    /* article timestamps only exist on blog posts; drop them on other routes */
    setMeta('meta[property="article:published_time"]', "property", "article:published_time", seo.publishedTime);
    setMeta('meta[property="article:modified_time"]', "property", "article:modified_time", seo.modifiedTime);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = seo.path;
  }, [seo]);

  if (!seo.jsonLd?.length) return null;
  return (
    <>
      {seo.jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
