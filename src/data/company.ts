/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CENTRAL COMPANY CONFIGURATION
 *  This is the single source of truth for ARTEK's contact details, claims and
 *  brand settings. Fields set to `null` MUST be filled in by the company
 *  before production:
 *   - email            → do NOT invent
 *   - address          → do NOT invent
 *   - businessHours    → do NOT invent
 *   - socials          → do NOT invent
 *
 *  Claims marked "pending-verification" are shown as provided in the client
 *  brief but must be confirmed by ARTEK management before going live —
 *  especially SIRA / Dubai Police certification wording.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Credential chip for the hero credibility row. `primary` = SIRA (leader) */
export interface HeroCredential {
  label: string;
  icon: "shield-check" | "badge-check" | "users" | "map-pin";
  /** visually dominant chip (only SIRA should use this) */
  primary?: boolean;
}

export interface CompanyDetails {
  /** Trading name */
  name: string;
  /** Legal / registered name */
  legalName: string;
  tagline: string;
  positioning: string;
  heroDescription: string;
  /** Small accent label above the H1 (customer-supplied wording) */
  heroEyebrow: string;
  /** Hero credibility chips under the CTAs (customer-supplied claims) */
  heroCredentials: readonly HeroCredential[];
  phoneDisplay: string;
  phoneHref: string;
  /** Verified office address — null until confirmed by the company */
  address: string | null;
  /** Confirmed company email — null until confirmed by the company */
  email: string | null;
  businessHours: string | null;
  socials: { label: string; url: string }[];
  /** Production domain used for canonical URLs, sitemap and JSON-LD */
  siteUrl: string;
  emirateOfOperation: string;
}

export const company: CompanyDetails = {
  name: "Artek Computers LLC",
  legalName: "ARTEK COMPUTERS LLC",
  tagline: "IT Solutions, CCTV and Networking for Businesses in Dubai",
  positioning:
    "A Dubai-based IT integrated systems company — IT solutions, CCTV and networking for businesses in Dubai.",
  heroDescription:
    "Artek Computers LLC is an IT integrated systems company. We provide end-to-end solutions, from computers and networks to CCTV, cabling and cloud, for customers from residential to corporate.",
  heroEyebrow: "SIRA Approved CCTV & IT Services Company in Dubai",
  heroCredentials: [
    { label: "SIRA Certified", icon: "shield-check", primary: true },
    { label: "Dubai Police Approved", icon: "badge-check" },
    { label: "2500+ UAE Businesses", icon: "users" },
    { label: "Computer Street, Bur Dubai", icon: "map-pin" },
  ],
  phoneDisplay: "+971 4 379 7128",
  phoneHref: "tel:+97143797128",
  address: null, // ← populate with the verified office address
  email: null, // ← populate with the confirmed company email
  businessHours: null, // ← populate with confirmed operating hours
  socials: [], // ← populate with verified links only
  siteUrl: "https://artekcomputer.com",
  emirateOfOperation: "Dubai, United Arab Emirates",
};

export type TrustIndicatorId =
  | "sira"
  | "dubai-police"
  | "years"
  | "clients"
  | "support";

export interface TrustClaimEntry {
  id: TrustIndicatorId;
  label: string;
  detail: string;
  /** ── TODO(Artek): confirm each claim before production ── */
  status: "confirmed-provided-by-client" | "pending-verification";
}

/**
 * Trust indicators shown on the homepage (Section 2).
 * These wordings were supplied in the client brief; each one is flagged for
 * management review. "pending-verification" entries still render but are
 * marked in the data so they are trivial to find and confirm/remove.
 */
export const trustClaims: readonly TrustClaimEntry[] = [
  {
    id: "sira",
    label: "SIRA Certified",
    detail: "CCTV installations follow SIRA requirements.",
    status: "pending-verification",
  },
  {
    id: "dubai-police",
    label: "Dubai Police Approved",
    detail: "Working within Dubai Police security standards.",
    status: "pending-verification",
  },
  {
    id: "years",
    label: "15+ Years Experience",
    detail: "Serving the UAE technology market.",
    status: "pending-verification",
  },
  {
    id: "clients",
    label: "2500+ Clients Served",
    detail: "Residential, commercial and corporate.",
    status: "pending-verification",
  },
  {
    id: "support",
    label: "24/7 Support",
    detail: "Support options for business customers.",
    status: "pending-verification",
  },
];

/** Unused entries kept out of the homepage but still easy to switch in. */
export type TrustIconHref = string;
