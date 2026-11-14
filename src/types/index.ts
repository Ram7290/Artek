/**
 * Central TypeScript types for ARTEK website content.
 * All page content and SEO metadata is driven by these structures.
 */

export interface SeoMeta {
  title: string;
  description: string;
  ogType?: "website" | "article";
  ogImage?: string;
}

export interface PageSeo extends SeoMeta {
  path: string;
  jsonLd?: readonly JsonLdObject[];
  /** article:published_time (blog posts) */
  publishedTime?: string;
  /** article:modified_time (blog posts) */
  modifiedTime?: string;
}

export type JsonLdObject = Record<string, unknown>;

export interface BreadcrumbItem {
  label: string;
  to: string;
}

/** Hero carousel slide (see src/data/heroSlides.ts) */
export interface HeroSlide {
  /** stable key */
  id: string;
  /** small uppercase overlay label, e.g. VIDEO SURVEILLANCE */
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** intrinsic dimensions of the image file — prevents layout shift */
  width: number;
  height: number;
}

export interface Faq {
  question: string;
  answer: string;
}

/** Client testimonial (see src/data/testimonials.ts) */
export interface Testimonial {
  /** stable key */
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /**
   * Square client portrait (path under /public, e.g.
   * "/images/testimonials/ahmed-al-farsi.jpg"). Optional — without it the
   * avatar renders as a round monogram, so nothing ever shows a broken image.
   */
  image?: string;
  /** 1–5. Not currently rendered — the section uses quotes, not star ratings. */
  rating: 1 | 2 | 3 | 4 | 5;
}

/** Verification status for company claims — see README "Claims to verify" */
export type ClaimStatus = "confirmed-provided-by-client" | "pending-verification";

export interface TrustIndicator {
  icon: "badge-check" | "shield" | "clock" | "users" | "headset";
  label: string;
  /** short supporting text shown under the label */
  detail?: string;
  status: ClaimStatus;
}

export type ServiceId =
  | "microsoft"
  | "computer-systems"
  | "network"
  | "voice-telephony"
  | "cctv"
  | "it-services"
  | "server-relocation"
  | "cybersecurity";

export interface Service {
  id: ServiceId;
  slug: string;
  /** short card title used on the homepage / listings */
  title: string;
  /** full service name used in headings */
  name: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  icon: string;
  /** "core" = shown in the homepage solutions grid & main listings; "seo" = extra SEO landing page */
  context: "core" | "seo";
  seoTargetPhrase: string;
  seo: SeoMeta;
  h1: string;
  /**
   * PRODUCT URL: canonical URL is built as `${siteUrl}${servicePath}`.
   */
  overview: string;
  benefits: readonly string[];
  features: readonly { title: string; description: string }[];
  faqs: readonly Faq[];
  related: readonly ServiceId[];
}

export interface LocationService {
  /** slug of a service in /solutions/:slug */
  serviceSlug: string;
  /** short unique local copy for the location × service combo page */
  localPitch: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  seo: SeoMeta;
  h1: string;
  intro: string;
  coverage: readonly string[];
  serviceNotes: readonly { service: string; note: string }[];
  faqs: readonly Faq[];
  combos?: readonly LocationService[];
}

export interface PartnerGroup {
  /** Category heading shown between brand chips (e.g. "ELV & Security") */
  label: string;
  /** Brand names — text wordmark placeholders pending logo assets */
  brands: readonly string[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  /** replace with a photo when ARTEK supplies project photography */
  visual: "gradient";
  relatedServices: readonly ServiceId[];
  points: readonly string[];
  seo: SeoMeta;
}

export interface ProductCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  items: readonly string[];
}

/** One step in the homepage "How we work" process (see src/data/process.ts) */
export interface ProcessStep {
  /** stable key */
  id: string;
  title: string;
  /** short timing label shown beside the title, e.g. "Before work starts" */
  when: string;
  description: string;
}

export type NavItem = {
  label: string;
  to: string;
  children?: readonly {
    label: string;
    to: string;
    description?: string;
  }[];
};

/* ── Insights / blog ──────────────────────────────────────────────────── */

/** Byline for articles (see src/data/authors.ts). */
export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** optional square portrait; falls back to a monogram */
  image?: string;
}

/**
 * One block of article body copy. Content is typed data rather than MDX so it
 * renders identically in the browser and in the prerenderer with no extra
 * build tooling. Inline `**bold**` and `[label](/path)` are supported.
 */
export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "ol"; items: readonly string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: readonly string[]; rows: readonly (readonly string[])[] }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

/** Blog article (see src/data/blog.ts). */
export interface BlogPost {
  /** stable key */
  id: string;
  slug: string;
  title: string;
  /** standfirst shown under the title and in listings */
  dek: string;
  category: string;
  tags: readonly string[];
  authorId: string;
  /** ISO date (YYYY-MM-DD) */
  publishedAt: string;
  updatedAt?: string;
  /** pinned to the top of /blog */
  featured?: boolean;
  /** large word on the typographic cover plate */
  coverWord: string;
  body: readonly PostBlock[];
  faqs?: readonly Faq[];
  relatedServices: readonly ServiceId[];
  seo?: Partial<SeoMeta>;
  /** drafts never render, prerender, list or enter the sitemap */
  status: "draft" | "needs-review" | "published";
}
