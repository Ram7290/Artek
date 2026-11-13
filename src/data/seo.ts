import type { Service, JsonLdObject, PageSeo } from "../types/index.ts";
import { company } from "./company.ts";
import { coreServices, getServiceBySlug, services } from "./services.ts";
import { locations, getLocationBySlug, getLocationService } from "./locations.ts";
import { getIndustryBySlug, industries } from "./industries.ts";
import { homeFaqs } from "./faqs.ts";
import { getPostBySlug, publishedPosts } from "./blog.ts";
import { getAuthor } from "./authors.ts";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SEO ROUTE REGISTRY
 *  resolvePageSeo(path) is the single function both runtimes use:
 *   - scripts/prerender.mjs  → injects <title>/<meta>/<link> into static HTML
 *   - <SEOHead />            → updates the same tags on client-side navigation
 * ─────────────────────────────────────────────────────────────────────────────
 */

const canonical = (path: string) => `${company.siteUrl}${path === "/" ? "" : path}`;

const STATIC_PAGE_META: Record<string, PageSeo> = {
  "/": {
    path: canonical("/"),
    title: "IT Solutions, CCTV & Networking for Businesses in Dubai | ARTEK Computers LLC",
    description:
      "Artek Computers LLC is an IT integrated systems company in Dubai — end-to-end solutions from computers and networks to CCTV, cabling and cloud, for customers from residential to corporate.",
    ogType: "website",
  },
  "/about": {
    path: canonical("/about"),
    title: "About Us | ARTEK Computers LLC — IT Solutions Company in Dubai",
    description:
      "About Artek Computers LLC — a Dubai-based IT integrated systems company serving residential, commercial and corporate customers with IT, CCTV and networking solutions.",
  },
  "/contact": {
    path: canonical("/contact"),
    title: "Contact Us | CCTV, Networking & IT Support in Dubai | ARTEK",
    description:
      "Contact ARTEK Computers LLC for CCTV installation, IT infrastructure, networking or technical support in Dubai. Call +971 4 379 7128 or request a free quote.",
  },
  "/products": {
    path: canonical("/products"),
    title: "Products | Computers, CCTV, Networking & Telephony | ARTEK Dubai",
    description:
      "IT products supplied by ARTEK Computers LLC in Dubai — laptops and desktops, servers, CCTV cameras, networking equipment, telephony and peripherals.",
  },
  "/industries": {
    path: canonical("/industries"),
    title: "Industries We Serve | Office, Retail, Warehouse IT in Dubai | ARTEK",
    description:
      "Technology solutions for every industry — corporate offices, retail, residential, warehousing, hospitality and industrial facilities across the UAE.",
  },
  "/locations": {
    path: canonical("/locations"),
    title: "Service Locations | IT & CCTV Across the UAE | ARTEK Computers",
    description:
      "ARTEK serves businesses across the UAE — Dubai, Abu Dhabi, Sharjah and Ajman. IT infrastructure, networking and CCTV where your business needs it.",
  },
  "/solutions": {
    path: canonical("/solutions"),
    title: "IT & Security Solutions | CCTV, Networking, Cloud — Dubai | ARTEK",
    description:
      "Explore ARTEK's complete range of IT and security solutions: Microsoft, computer systems, networking, telephony, CCTV, IT services, server relocation and cybersecurity.",
  },
  "/blog": {
    path: canonical("/blog"),
    title: "Insights | CCTV, Networking & IT Guidance for UAE Businesses | ARTEK",
    description:
      "Practical guidance from ARTEK's engineers on CCTV compliance, office networks, Wi-Fi coverage, maintenance contracts and business IT in Dubai and the UAE.",
    ogType: "website",
  },
  "/privacy-policy": {
    path: canonical("/privacy-policy"),
    title: "Privacy Policy | ARTEK Computers LLC",
    description:
      "How ARTEK Computers LLC handles personal information across the website and services.",
  },
  "/terms-and-conditions": {
    path: canonical("/terms-and-conditions"),
    title: "Terms & Conditions | ARTEK Computers LLC",
    description: "Terms covering the use of this website and ARTEK's services.",
  },
};

/* ── JSON-LD builders ─────────────────────────────────────────────────── */

function breadcrumbsJsonLd(items: { name: string; url: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function faqJsonLd(faqs: Service["faqs"]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

function addressNode(): Record<string, unknown> {
  const addr: Record<string, unknown> = {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  };
  if (company.address) {
    addr.streetAddress = company.address;
    addr.addressRegion = "Dubai";
  }
  if (company.postalCode) addr.postalCode = company.postalCode;
  return addr;
}

/** Facts only — no ratings, reviews or hours that were never verified. */
function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    description: company.positioning,
    telephone: company.phoneDisplay,
    url: company.siteUrl,
    address: addressNode(),
    areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  };
}

function localBusinessJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    telephone: company.phoneDisplay,
    url: canonical("/contact"),
    image: `${company.siteUrl}/favicon.svg`,
    address: addressNode(),
    areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${company.siteUrl}/solutions/${s.slug}`,
      },
    })),
  };
}

function serviceJsonLd(svc: Service): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: svc.shortDescription,
    url: `${company.siteUrl}/solutions/${svc.slug}`,
    serviceType: svc.seoTargetPhrase,
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      telephone: company.phoneDisplay,
      address: addressNode(),
      areaServed: "AE",
    },
  };
}

function serviceBySlugOrNull(slug: string): Service | undefined {
  return getServiceBySlug(slug);
}

/* ── Route resolvers ─────────────────────────────────────────────────── */

function solutionSeo(path: string): PageSeo | undefined {
  const slug = path.replace("/solutions/", "").replace(/\/$/, "");
  const svc = serviceBySlugOrNull(slug);
  if (!svc) return undefined;
  return {
    path: canonical(path),
    title: svc.seo.title,
    description: svc.seo.description,
    jsonLd: [
      serviceJsonLd(svc),
      breadcrumbsJsonLd([
        { name: "Home", url: company.siteUrl },
        { name: "IT Solutions", url: `${company.siteUrl}/solutions` },
        { name: svc.name, url: `${company.siteUrl}/solutions/${svc.slug}` },
      ]),
      faqJsonLd(svc.faqs),
    ],
  };
}

function locationSeo(path: string): PageSeo | undefined {
  const parts = path.replace("/locations/", "").split("/").filter(Boolean);
  if (parts.length === 0) return undefined;
  const location = getLocationBySlug(parts[0]!);
  if (!location) return undefined;

  if (parts.length === 1) {
    return {
      path: canonical(path),
      title: location.seo.title,
      description: location.seo.description,
      jsonLd: [
        localBusinessJsonLd(),
        breadcrumbsJsonLd([
          { name: "Home", url: company.siteUrl },
          { name: "Service Locations", url: `${company.siteUrl}/locations` },
          { name: location.name, url: canonical(path) },
        ]),
        faqJsonLd(location.faqs),
      ],
    };
  }

  const combo = getLocationService(location.slug, parts[1] ?? "");
  if (!combo) return undefined;
  const svc = serviceBySlugOrNull(parts[1] ?? "");
  return {
    path: canonical(path),
    title: svc
      ? `${svc.name} in ${location.name} | ARTEK Computers LLC`
      : `IT Services in ${location.name} | ARTEK Computers`,
    description: combo.localPitch,
    jsonLd: [
      ...(svc ? [serviceJsonLd(svc)] : [localBusinessJsonLd()]),
      breadcrumbsJsonLd([
        { name: "Home", url: company.siteUrl },
        { name: "Service Locations", url: `${company.siteUrl}/locations` },
        { name: location.name, url: `${company.siteUrl}/locations/${location.slug}` },
        { name: svc?.name ?? "Services", url: canonical(path) },
      ]),
    ],
  };
}

function industrySeo(path: string): PageSeo | undefined {
  const slug = path.replace("/industries/", "").replace(/\/$/, "");
  const industry = getIndustryBySlug(slug);
  if (!industry) return undefined;
  const primary =
    industry.relatedServices
      .map((id) => coreServices.find((s) => s.id === id))
      .find(Boolean) ?? undefined;
  return {
    path: canonical(path),
    title: industry.seo.title,
    description: industry.seo.description,
    jsonLd: [
      breadcrumbsJsonLd([
        { name: "Home", url: company.siteUrl },
        { name: "Industries", url: `${company.siteUrl}/industries` },
        { name: industry.name, url: canonical(path) },
      ]),
      ...(primary ? [serviceJsonLd(primary)] : []),
    ],
  };
}

function blogPostJsonLd(post: NonNullable<ReturnType<typeof getPostBySlug>>): JsonLdObject {
  const author = getAuthor(post.authorId);
  const url = canonical(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.dek,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-AE",
    author: { "@type": "Organization", name: author?.name ?? company.legalName, url: company.siteUrl },
    publisher: {
      "@type": "Organization",
      name: company.legalName,
      url: company.siteUrl,
      logo: { "@type": "ImageObject", url: `${company.siteUrl}/favicon.svg` },
    },
  };
}

function blogPostSeo(path: string): PageSeo | undefined {
  const slug = path.replace("/blog/", "").replace(/\/$/, "");
  const post = getPostBySlug(slug);
  if (!post) return undefined;
  return {
    path: canonical(path),
    title: post.seo?.title ?? `${post.title} | ARTEK Insights`,
    description: post.seo?.description ?? post.dek,
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    jsonLd: [
      blogPostJsonLd(post),
      breadcrumbsJsonLd([
        { name: "Home", url: company.siteUrl },
        { name: "Insights", url: `${company.siteUrl}/blog` },
        { name: post.title, url: canonical(path) },
      ]),
      ...(post.faqs?.length ? [faqJsonLd(post.faqs)] : []),
    ],
  };
}

/** Resolve the SEO bundle for any route (pure — also used in Node SSR). */export function resolvePageSeo(path: string): PageSeo {
  if (STATIC_PAGE_META[path]) {
    const base = STATIC_PAGE_META[path]!;
    const jsonLd: JsonLdObject[] = [breadcrumbsJsonLd([{ name: "Home", url: company.siteUrl }])];
    if (path === "/") {
      jsonLd.push(organizationJsonLd(), localBusinessJsonLd(), faqJsonLd(homeFaqs));
    } else if (path === "/contact") {
      jsonLd.push(localBusinessJsonLd());
    }
    return { ...base, jsonLd };
  }
  if (path.startsWith("/solutions/")) {
    const found = solutionSeo(path);
    if (found) return found;
  }
  if (path.startsWith("/locations/")) {
    const found = locationSeo(path);
    if (found) return found;
  }
  if (path.startsWith("/industries/")) {
    const found = industrySeo(path);
    if (found) return found;
  }
  if (path.startsWith("/blog/")) {
    const found = blogPostSeo(path);
    if (found) return found;
  }
  return fallbackSeo(path);
}

function fallbackSeo(path: string): PageSeo {
  return {
    path: canonical(path),
    title: company.tagline,
    description: company.heroDescription,
  };
}

/* ── Every prerenderable/crawlable path ──────────────────────────────── */

const STATIC_PATHS = Object.keys(STATIC_PAGE_META);
const SOLUTION_PATHS = services.map((s) => `/solutions/${s.slug}`);
const LOCATION_PATHS = locations.flatMap((l) => {
  const combos = (l.combos ?? []).map((c) => `/locations/${l.slug}/${c.serviceSlug}`);
  return [`/locations/${l.slug}`, ...combos];
});
const INDUSTRY_PATHS = industries.map((i) => `/industries/${i.slug}`);
const BLOG_PATHS = publishedPosts.map((p) => `/blog/${p.slug}`);

/** All indexable paths — drives prerendering and sitemap generation. */
export const ALL_SEO_PATHS: readonly string[] = [
  ...STATIC_PATHS,
  ...SOLUTION_PATHS,
  ...LOCATION_PATHS,
  ...INDUSTRY_PATHS,
  ...BLOG_PATHS,
];
