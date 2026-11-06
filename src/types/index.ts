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
}

export type JsonLdObject = Record<string, unknown>;

export interface BreadcrumbItem {
  label: string;
  to: string;
}

export interface Faq {
  question: string;
  answer: string;
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

export interface Partner {
  name: string;
  /** true when an official logo asset exists in /public/logos; false = text wordmark placeholder */
  hasAsset: boolean;
  status: ClaimStatus;
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

export type NavItem = {
  label: string;
  to: string;
  children?: readonly {
    label: string;
    to: string;
    description?: string;
  }[];
};
