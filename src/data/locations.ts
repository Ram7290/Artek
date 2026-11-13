import type { ServiceArea } from "@/types";

/**
 * Service-area landing pages. Only emirates where ARTEK provides (or is
 * config-dependent it doesn't provide) services should be listed —
 * remove any entry that isn't confirmed coverage.
 *
 * `combos` drives /locations/:emirate/:service pages. Each combo MUST carry
 * its own unique local pitch — never swap the city name in identical text.
 */
export const locations: readonly ServiceArea[] = [
  {
    slug: "dubai",
    name: "Dubai",
    seo: {
      title: "IT Solutions & CCTV in Dubai | ARTEK Computers LLC",
      description:
        "Artek Computers LLC serves Dubai businesses with IT infrastructure, networking, CCTV and technical support — from our base in the city.",
      ogType: "website",
    },
    h1: "IT & Security Solutions in Dubai",
    intro:
      "Artek Computers LLC is based in Dubai and delivers technology solutions across the city — from offices and retail locations to warehouses and residential properties. Being local matters: site surveys happen quickly, engineers arrive when promised, and support is never in another time zone.",
    coverage: [
      "CCTV installation and maintenance for Dubai homes and businesses",
      "Structured cabling and office networking across the city",
      "Computer supply, configuration and repair",
      "Managed IT support and annual maintenance contracts",
      "Microsoft, telephony and cybersecurity solutions",
    ],
    serviceNotes: [
      { service: "cctv-security-dubai", note: "Serving Dubai with CCTV installation, maintenance and support options." },
      { service: "network-solutions-dubai", note: "Structured cabling and networking for Dubai offices and commercial sites." },
      { service: "it-services-dubai", note: "Managed IT support and AMCs for Dubai-based businesses." },
    ],
    faqs: [
      {
        question: "Where in Dubai are you based?",
        answer:
          "ARTEK serves businesses across Dubai from our base in the city. Call +971 4 379 7128 to discuss your requirements and arrange a site survey.",
      },
      {
        question: "Do you provide on-site support within Dubai?",
        answer:
          "Yes. Our engineers visit sites across Dubai for surveys, installations and support calls.",
      },
    ],
    combos: [
      {
        serviceSlug: "cctv-installation-dubai",
        localPitch:
          "Everything you need for a compliant, high-quality CCTV installation in Dubai: a fast on-site survey, professional mounting and cabling, and support from a team based in the same city — so service calls don't wait a week.",
      },
      {
        serviceSlug: "network-solutions-dubai",
        localPitch:
          "For Dubai offices moving in, expanding or tired of an untidy patchwork network, ARTEK wire structured cabling, Wi-Fi and firewalls cleanly and label everything your future IT team will thank us for.",
      },
    ],
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    seo: {
      title: "IT Solutions & CCTV in Abu Dhabi | ARTEK Computers",
      description:
        "IT infrastructure, networking and CCTV solutions for Abu Dhabi businesses — project delivery and support coordinated from Dubai.",
      ogType: "website",
    },
    h1: "IT & Security Solutions in Abu Dhabi",
    intro:
      "ARTEK delivers IT and security projects for business customers in Abu Dhabi — planned from our Dubai base with defined delivery schedules and on-site coordination for installation and support visits.",
    coverage: [
      "CCTV installation for Abu Dhabi business premises",
      "Structured cabling and network projects",
      "IT hardware supply and deployment",
      "Maintenance visits scheduled per project scope",
    ],
    serviceNotes: [
      { service: "cctv-security-dubai", note: "CCTV systems for Abu Dhabi businesses, coordinated with your schedule." },
    ],
    faqs: [
      {
        question: "Do you carry out installations in Abu Dhabi?",
        answer:
          "Yes, for business projects. Installation and support visits are scheduled with you in advance from our Dubai base. Call +971 4 379 7128 to discuss your project.",
      },
    ],
  },
  {
    slug: "sharjah",
    name: "Sharjah",
    seo: {
      title: "IT Solutions & CCTV in Sharjah | ARTEK Computers",
      description:
        "Networking, CCTV and IT support solutions for Sharjah businesses — delivered and serviced by ARTEK Computers LLC.",
      ogType: "website",
    },
    h1: "IT & Security Solutions in Sharjah",
    intro:
      "ARTEK provides IT infrastructure, networking and CCTV solutions for businesses in Sharjah — proximity to Dubai keeps delivery and maintenance visits practical and responsive.",
    coverage: [
      "CCTV systems for Sharjah shops, offices and warehouses",
      "Office networking and structured cabling",
      "IT hardware and support",
    ],
    serviceNotes: [
      { service: "cctv-security-dubai", note: "Surveillance systems for Sharjah commercial properties." },
    ],
    faqs: [
      {
        question: "Do you serve customers in Sharjah?",
        answer:
          "Yes. We deliver and support projects for businesses in Sharjah. Call +971 4 379 7128 to arrange a survey or service visit.",
      },
    ],
  },
  {
    slug: "ajman",
    name: "Ajman",
    seo: {
      title: "IT Solutions & CCTV in Ajman | ARTEK Computers",
      description:
        "CCTV, networking and IT solutions for businesses in Ajman — provided by ARTEK Computers LLC.",
      ogType: "website",
    },
    h1: "IT & Security Solutions in Ajman",
    intro:
      "Businesses in Ajman get the same ARTEK standards: surveyed CCTV coverage, neat networking and reliable IT support — scheduled delivery from our Dubai base.",
    coverage: [
      "CCTV installations for commercial premises",
      "Networking and cabling",
      "IT supply and support",
    ],
    serviceNotes: [
      { service: "cctv-security-dubai", note: "Business surveillance systems with remote support." },
    ],
    faqs: [
      {
        question: "Do you work in Ajman?",
        answer:
          "Yes, for business customers. Contact us on +971 4 379 7128 to discuss scheduling a visit to Ajman.",
      },
    ],
  },
];

export const getLocationBySlug = (slug: string) =>
  locations.find((l) => l.slug === slug);

export const getLocationService = (locationSlug: string, serviceSlug: string) => {
  const location = getLocationBySlug(locationSlug);
  return location?.combos?.find((c) => c.serviceSlug === serviceSlug);
};
