import type { Industry, PartnerGroup, ProductCategory } from "@/types";

/** Industries page — swap `visual: "gradient"` for project photography when supplied. */
export const industries: readonly Industry[] = [
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    icon: "building-2",
    description:
      "Complete office IT environments — workstations, networking, telephony and server rooms, plus discreet CCTV coverage.",
    visual: "gradient",
    relatedServices: ["computer-systems", "network", "microsoft", "cctv"],
    points: [
      "Workstations, servers and peripherals provisioned per department",
      "Structured cabling and Wi-Fi for offices of any size",
      "Business telephony and Microsoft Teams deployment",
    ],
    seo: {
      title: "IT Solutions for Corporate Offices in Dubai | ARTEK",
      description:
        "IT infrastructure, networking, telephony and CCTV for corporate offices in Dubai — supplied, installed and supported by ARTEK Computers.",
      ogType: "website",
    },
  },
  {
    slug: "retail-shopping",
    name: "Retail & Shopping",
    icon: "store",
    description:
      "Surveillance and POS-ready IT for shops and shopping centres — protect stock, staff and transactions.",
    visual: "gradient",
    relatedServices: ["cctv", "computer-systems", "network"],
    points: [
      "CCTV at entrances, aisles and cash zones",
      "Reliable POS hardware and connectivity",
      "Multi-store viewing from a single dashboard",
    ],
    seo: {
      title: "Retail IT & CCTV Solutions in Dubai | ARTEK Computers",
      description:
        "POS hardware, networking and CCTV for retail businesses in Dubai — keep stock, staff and transactions protected with ARTEK.",
      ogType: "website",
    },
  },
  {
    slug: "residential-properties",
    name: "Residential Properties",
    icon: "home",
    description:
      "Home security cameras and smart network setups for villas and apartments across Dubai.",
    visual: "gradient",
    relatedServices: ["cctv", "network"],
    points: [
      "Entrance, boundary and garden camera coverage",
      "Whole-home Wi-Fi that reaches every room",
      "Viewing and alerts on your phone",
    ],
    seo: {
      title: "Home CCTV & Networking in Dubai | ARTEK Computers",
      description:
        "Home CCTV installation and networking for Dubai villas and apartments — entrance and boundary coverage with mobile viewing, by ARTEK.",
      ogType: "website",
    },
  },
  {
    slug: "warehouses-logistics",
    name: "Warehouses & Logistics",
    icon: "warehouse",
    description:
      "Camera coverage and resilient networking for warehouses — long aisles, loading bays and storage yards.",
    visual: "gradient",
    relatedServices: ["cctv", "network", "server-relocation"],
    points: [
      "Long-range and low-light cameras for aisles and yards",
      "Docking and inventory area coverage",
      "Industrial-grade Wi-Fi for scanners and tablets",
    ],
    seo: {
      title: "Warehouse CCTV & Networking in Dubai | ARTEK Computers",
      description:
        "CCTV and industrial networking for warehouses and logistics facilities in Dubai — aisle, dock and yard coverage by ARTEK.",
      ogType: "website",
    },
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "concierge-bell",
    description:
      "Guest-safe surveillance, back-office IT and reliable connectivity for hotels and restaurants.",
    visual: "gradient",
    relatedServices: ["cctv", "network", "microsoft"],
    points: [
      "Public-area and back-of-house surveillance",
      "Guest and staff network separation",
      "Back-office systems and POS connectivity",
    ],
    seo: {
      title: "Hospitality IT & CCTV Solutions in Dubai | ARTEK",
      description:
        "Hotel and restaurant CCTV, networking and IT systems in Dubai — guest-safe surveillance and back-office IT by ARTEK.",
      ogType: "website",
    },
  },
  {
    slug: "industrial-facilities",
    name: "Industrial Facilities",
    icon: "factory",
    description:
      "Rugged surveillance and network infrastructure for factories and heavy-duty environments.",
    visual: "gradient",
    relatedServices: ["cctv", "network", "cybersecurity"],
    points: [
      "Harsh-environment cameras for production floors",
      "Segmented industrial networks",
      "Perimeter surveillance and monitoring",
    ],
    seo: {
      title: "Industrial CCTV & Networking in Dubai | ARTEK Computers",
      description:
        "Surveillance and industrial networking for factories and facilities in Dubai — rugged CCTV and segmented networks from ARTEK.",
      ogType: "website",
    },
  },
];

export const getIndustryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);

/**
 * ── Partner brand groups (small-chip marquee) ──
 * Brand list supplied in the client brief; nothing here is confirmed — every
 * entry is a text wordmark placeholder pending real logo assets in
 * /public/logos AND verified partner status. Keep flags above the fold of
 * production review (see README "Claims to verify").
 */
export const partnerGroups: readonly PartnerGroup[] = [
  {
    label: "Cabling & Connectivity",
    brands: ["Belden", "Panduit", "ExTell", "Corning", "3M", "Opterna", "Norden", "Dconnect", "Molex", "Kuwes", "Techlogiks"],
  },
  {
    label: "Networking & IT Infrastructure",
    brands: ["Cisco", "Fortinet", "SonicWall", "Ubiquiti", "Aruba", "Ruckus", "D-Link", "Linksys", "TP-Link", "MikroTik", "Grandstream", "EnGenius"],
  },
  {
    label: "ELV & Security",
    brands: ["Hikvision", "Dahua", "Axis", "Toten"],
  },
  {
    label: "Power & Cooling",
    brands: ["APC", "Eaton", "Schneider"],
  },
  {
    label: "Computers, Storage & Peripherals",
    brands: ["Dell", "HP", "Lenovo", "Apple", "Acer", "ASUS", "Samsung", "Synology", "QNAP", "WD", "Seagate", "Epson", "Brother", "Logitech", "Microsoft", "Kaspersky", "Symantec"],
  },
];

/** PRODUCT URL categories — descriptions only, no invented specs or SKUs. */
export const productCategories: readonly ProductCategory[] = [
  {
    slug: "laptops-desktops",
    name: "Laptops & Desktops",
    icon: "monitor",
    description:
      "Business and consumer computing devices from leading brands, specified and configured to your needs.",
    items: ["Business laptops", "Desktop PCs", "All-in-one systems", "Workstations"],
  },
  {
    slug: "servers-storage",
    name: "Servers & Storage",
    icon: "server",
    description:
      "Rack and tower servers, storage systems and accessories for on-premise business workloads.",
    items: ["Rack servers", "Tower servers", "NAS & storage", "UPS & power protection"],
  },
  {
    slug: "cctv-security",
    name: "CCTV & Security",
    icon: "cctv",
    description:
      "Surveillance cameras, recorders and accessories for installations from single-camera to large multi-site systems.",
    items: ["IP cameras", "NVR / DVR recorders", "PTZ cameras", "Monitors"],
  },
  {
    slug: "networking",
    name: "Networking",
    icon: "network",
    description:
      "Switches, routers, access points and structured cabling materials for business network builds.",
    items: ["Managed switches", "Wireless access points", "Routers & firewalls", "Cabling & racks"],
  },
  {
    slug: "telephony",
    name: "Telephony",
    icon: "phone",
    description:
      "IP phones, headsets and telephony hardware for modern business communication systems.",
    items: ["IP desk phones", "Conference devices", "Headsets"],
  },
  {
    slug: "accessories",
    name: "Accessories & Peripherals",
    icon: "mouse",
    description:
      "Printers, monitors, docking, power and everyday peripherals to complete your setup.",
    items: ["Printers & scanners", "Monitors", "Docks & cables", "Keyboards & mice"],
  },
];
