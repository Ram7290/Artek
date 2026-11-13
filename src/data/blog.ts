import type { BlogPost } from "@/types";

/**
 * Blog / Insights articles.
 *
 * Shape: one entry per article, plain typed blocks (no MDX build step). Every
 * post with `status: "published"` is automatically listed on /blog, routed at
 * /blog/<slug>, prerendered to static HTML and added to sitemap.xml — this
 * file is the single switchboard.
 *
 * Writing rules that keep the section credible:
 * - Name the author or team and put dates on everything (publishedAt; bump
 *   updatedAt when the advice changes).
 * - Link claims that depend on regulation (SIRA/Dubai Police) to official
 *   sources in the copy, and verify them before publishing.
 * - Cover art is a typographic plate (coverWord), never stock photography
 *   dressed up as ARTEK project work.
 *
 * ⚠ These articles are written as reference copy for the design review. Have
 * ARTEK's engineers read each one and set status to "published" before launch.
 */
export const posts: readonly BlogPost[] = [
  {
    id: "p1",
    slug: "sira-cctv-requirements-dubai",
    title: "What SIRA's CCTV requirements actually ask of your building",
    dek: "Supervision and NOC approval, camera placement, retention and access. A plain-language walk through what a Dubai building needs to get — and keep — a compliant system.",
    category: "Security",
    tags: ["CCTV", "SIRA", "Compliance"],
    authorId: "artek-team",
    publishedAt: "2026-09-18",
    featured: true,
    coverWord: "Compliance",
    relatedServices: ["cctv", "it-services"],
    status: "published",
    faqs: [
      {
        question: "Does every CCTV system in Dubai need SIRA approval?",
        answer:
          "Commercial and multi-unit premises are held to SIRA requirements and need Dubai Police NOC approval for the installation; many residential villa systems do not. The correct starting point is the authority's current guidance for your premises type, confirmed by a licensed installer before any design work.",
      },
      {
        question: "How long must footage be retained?",
        answer:
          "Retention is set by the requirement that applies to your system and by what an investigation may need to review. The practical driver is storage design: camera count × bitrate × recording windows is what determines your NVR capacity, so decide retention before buying hardware.",
      },
      {
        question: "Can ARTEK handle the paperwork?",
        answer:
          "We prepare and follow through the documentation that goes with our installations. Approval decisions rest with the authority, not the installer, and timelines depend on the application being complete.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Most CCTV problems we are called to fix are not camera problems. They are design problems: a camera facing a boundary it is not supposed to record, an NVR too small for the retention the building needs, or an installation that was never presented to the authority and now has to be rebuilt.",
      },
      {
        type: "p",
        text: "The regulatory backdrop, in outline: SIRA sets the technical and operational requirements for security systems in Dubai, and the Dubai Police approve installations intended to support investigations. The authority publishes the current requirements; what follows is how to plan around them, not a substitute for that guidance.",
      },
      { type: "h2", id: "start-before-hardware", text: "Plan the approval before the hardware" },
      {
        type: "p",
        text: "The cheapest time to discover a placement or documentation problem is during design. Before a single camera is quoted, we establish three things with the client:",
      },
      {
        type: "ul",
        items: [
          "**Who owns the premises** and what the system will be used for — building security, incident review, or both.",
          "**What must be covered** — entries, lifts, parking, the perimeter — and, equally, what must not be recorded.",
          "**Who reviews footage** and how, because access control to recordings is part of the requirement, not an afterthought.",
        ],
      },
      {
        type: "callout",
        title: "Retention is a storage decision",
        text: "Camera count × average bitrate × retained hours is the whole equation. Weeks of retention on a large camera count needs storage designed for it — cheap NVRs bought first, sized later, are where most overruns start.",
      },
      { type: "h2", id: "camera-placement", text: "Camera placement and coverage" },
      {
        type: "p",
        text: "Placement is where operational needs and requirements meet. Entrances should capture a clear, identifiable face at a consistent height; the perimeter should be covered at an angle that gives identifying detail, not just a gesture at coverage; and blind spots around service corridors and parking are the places incidents actually happen.",
      },
      {
        type: "p",
        text: "Resolution and lens choice decide whether footage is useful. A 4MP camera with a wide lens across a car park is not a downgrade of a better camera — it is a different tool for a different job, and pairing a scene-appropriate lens with the field of view is what makes review fast.",
      },
      { type: "h3", text: "Night performance" },
      {
        type: "p",
        text: "The majority of incidents happen after dark. Test an installer's night-time reference footage on the actual site, not a datasheet. IR range, sensor size and ambient light on the scene decide whether the camera is useful between 8pm and 6am.",
      },
      { type: "h2", id: "documentation", text: "Documentation and handover" },
      {
        type: "p",
        text: "A compliant system has an audit trail: as-built drawings, a camera schedule with location and model, credentials, network diagrams and the applied constraints. Buildings change hands and engineers change — the file is what lets the next person maintain the system without guessing.",
      },
      {
        type: "table",
        head: ["Handover item", "Why it matters"],
        rows: [
          ["As-built camera schedule", "Locates and describes every camera for maintenance and review"],
          ["NVR and network diagram", "Lets faults be isolated without pulling cabling"],
          ["Access and credential record", "Controlled handover of who can view and export footage"],
          ["Retention configuration", "Proves the system records for the planned window"],
        ],
      },
      { type: "h2", id: "what-to-budget", text: "What to budget for" },
      {
        type: "p",
        text: "A realistic budget covers cameras and lenses sized to each scene, the NVR and storage for the retention window, structured cabling and PoE switching, installation and configuration, the approval process, and an ongoing support or maintenance arrangement. Cutting the storage or the maintenance contract is the most common false economy — it shows up as lost footage or a dead camera nobody noticed.",
      },
      {
        type: "p",
        text: "If you are weighing a new system against upgrading an existing one, our [CCTV and security page](/solutions/cctv-security-dubai) covers the scope of both, and the [SIRA-approved installation page](/solutions/sira-approved-cctv-dubai) covers the approval process in more detail.",
      },
    ],
  },
  {
    id: "p2",
    slug: "office-network-cabling-checklist",
    title: "The office network checklist we run before quoting a fit-out",
    dek: "Switching, Wi-Fi, structured cabling and what to leave behind for the next tenant. A short checklist that prevents the three most expensive fit-out mistakes.",
    category: "Networking",
    tags: ["Networking", "Fit-out", "Cabling"],
    authorId: "artek-team",
    publishedAt: "2026-09-04",
    coverWord: "Network",
    relatedServices: ["network", "computer-systems"],
    status: "published",
    body: [
      {
        type: "p",
        text: "An office fit-out has a short window and a long tail. The network is usually the last thing scheduled and the first thing everyone notices when it is wrong. We run the same checklist on every survey, because each item maps to a mistake we have had to undo.",
      },
      { type: "h2", id: "three-mistakes", text: "The three expensive mistakes" },
      {
        type: "ol",
        items: [
          "**A single all-in-one router** for a floor that has more devices and simultaneous video calls than it can hold. Consumer kit is fine until forty people are on it.",
          "**Wi-Fi planned by hope** — access points placed where cabling was easy rather than where people sit, with no survey and no comparison against the building's walls.",
          "**Cabling that no one can label** six months later, when a fault on one run means testing every run.",
        ],
      },
      { type: "h2", id: "switching", text: "Switching and topology" },
      {
        type: "ul",
        items: [
          "Count ports by desk, device and access point — and add headroom for how the team will grow this year, not just today.",
          "Choose PoE for access points, cameras and phones when the switch is specified, not by adding injectors afterwards.",
          "Use VLANs to separate guest Wi-Fi, staff devices, cameras and back-office systems. It is the single biggest security win per unit of effort.",
        ],
      },
      { type: "h2", id: "wifi", text: "Wi-Fi" },
      {
        type: "p",
        text: "A Wi-Fi plan starts with a survey of the floor: walls, material, glass partitions and interference. From there, access point count and placement follow, and the plan should be validated after install with a walk test covering the worst seats, lifts and meeting rooms.",
      },
      {
        type: "callout",
        title: "Meetings are the test",
        text: "If a video call drops in the main meeting room, the network has failed at the worst possible place. Put a dedicated access point near high-density meeting areas and test from the actual chair.",
      },
      { type: "h2", id: "cabling", text: "Structured cabling" },
      {
        type: "p",
        text: "Certified cable, patch panels and every run labelled at both ends. Cabling is hidden, so it is where corners are cut, and every shortcut is expensive later: new runs through finished ceilings, or hours spent tracing a single failed link.",
      },
      {
        type: "table",
        head: ["Item", "Minimum", "Why"],
        rows: [
          ["Cable category", "Cat6 or better", "Headroom for port speeds and future devices"],
          ["Labelling", "Both ends, documented", "Fault isolation in minutes, not hours"],
          ["Patch panel", "In a lockable cabinet", "Protects against accidental disconnects"],
          ["Spare runs", "10–20%", "Adds drop points without re-opening ceilings"],
        ],
      },
      { type: "h2", id: "handover", text: "Leave the next tenant a favour" },
      {
        type: "p",
        text: "As-built drawings, the port map, switch credentials, Wi-Fi plan and the ISP details. A fit-out with that file is worth more to a landlord and survives a change of IT provider. See [network solutions](/solutions/network-solutions-dubai) for how we scope and deliver this.",
      },
    ],
  },
  {
    id: "p3",
    slug: "warehouse-wifi-coverage",
    title: "Why warehouse Wi-Fi fails — and how to plan coverage that survives",
    dek: "Racking, metal, cold rooms and hand-held scanners: the parts of a warehouse that stop Wi-Fi working, and the design choices that cope with them.",
    category: "Networking",
    tags: ["Wi-Fi", "Warehouse", "Cabling"],
    authorId: "artek-team",
    publishedAt: "2026-08-21",
    coverWord: "Coverage",
    relatedServices: ["network"],
    status: "published",
    body: [
      {
        type: "p",
        text: "Warehouse Wi-Fi is usually judged by one thing: whether the scanners in the aisles stay connected at shift change. When they don't, it is almost never the router — it is coverage planned for a floor plan rather than for the building.",
      },
      { type: "h2", id: "what-blocks-signal", text: "What blocks the signal" },
      {
        type: "ul",
        items: [
          "**Racking full of stock** absorbs signal at head height and changes when stock levels change.",
          "**Metal racking and mezzanines** reflect and shadow, creating dead zones behind them.",
          "**Cold rooms** are effectively Faraday cages — plan them as separate coverage.",
          "**Height** places access points closer to the roof than to hand-held devices, which are used at knee to chest height.",
        ],
      },
      { type: "h2", id: "planning", text: "Plan for devices, not people" },
      {
        type: "p",
        text: "Warehouse clients are largely devices: hand-held scanners, forklift terminals, printers and cameras. Count them per zone, check which band they use and how aggressively they hand over between access points, and size the design for roaming, not for maximum throughput on a single laptop.",
      },
      {
        type: "callout",
        title: "Walk the aisles",
        text: "Before proposing anything, walk the aisles with the client at shift change. The places where coverage fails in real life are the ones people stop at: the picking end of an aisle, the dispatch door, the cold room entrance.",
      },
      { type: "h2", id: "design", text: "Design choices that cope" },
      {
        type: "ol",
        items: [
          "Place access points over the aisles, not in the aisles, and alternate so any single failure leaves a covered neighbour.",
          "Use directional antennas where the aisle should be the coverage — narrower, stronger, less leakage.",
          "Give scanners their own SSID and VLAN so floor traffic does not compete with video calls in the office.",
          "Design the cold room separately, with its own access point where the wall allows.",
        ],
      },
      { type: "h2", id: "validate", text: "Validate after install" },
      {
        type: "p",
        text: "A post-install survey measures signal, but a walk test decides the result: pick, scan, walk the route with the actual devices. That is the evidence a warehouse manager trusts, and it is what the network should be accepted against. For the wider scope, see our [network solutions](/solutions/network-solutions-dubai) page.",
      },
    ],
  },
  {
    id: "p4",
    slug: "annual-maintenance-contract-what-it-covers",
    title: "What a CCTV and IT maintenance contract should actually cover",
    dek: "Response times, spares, firmware and what happens when a camera dies on a Thursday. How to read an annual maintenance contract before signing it.",
    category: "IT Support",
    tags: ["AMC", "Maintenance", "Contracts"],
    authorId: "artek-team",
    publishedAt: "2026-08-07",
    coverWord: "Support",
    relatedServices: ["it-services", "cctv"],
    status: "published",
    faqs: [
      {
        question: "Is an annual maintenance contract worth it for a small office?",
        answer:
          "If the CCTV or network is part of how the business runs, yes — the value is in response time and someone who knows the site, not just in repairs. For a single camera on a villa, a pay-per-call arrangement can be more economical.",
      },
      {
        question: "Do contracts include new equipment?",
        answer:
          "Maintenance covers maintaining what exists; replacing failed hardware is usually quoted separately or covered by the manufacturer's warranty. Read which parts are included and which are billable before comparing prices.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Every contract promises maintenance. The differences that matter are in the response promises, the scope, and who owns the spares and the knowledge — so read for those four things, in that order.",
      },
      { type: "h2", id: "response", text: "Response, not just repair" },
      {
        type: "ul",
        items: [
          "**Response time** — how long until someone is on site after a call, and during which hours.",
          "**Remote first** — can the provider diagnose and fix network and NVR issues remotely, and does the site allow it?",
          "**Critical vs routine** — a dead camera covering an entrance is not the same as a dusty lens.",
        ],
      },
      { type: "h2", id: "scope", text: "Scope" },
      {
        type: "p",
        text: "Scheduled visits, cleaning, firmware and configuration checks, and what is explicitly excluded. A contract that lists exclusions is a better contract than one that doesn't — it tells you where the bill will land.",
      },
      {
        type: "table",
        head: ["Question to ask", "Why"],
        rows: [
          ["How many scheduled visits a year?", "Preventive work is cheaper than reactive"],
          ["Who pays for failed hardware in warranty?", "Warranty claims need a process, not a promise"],
          ["Do spares sit on site?", "A spare NVR shortens downtime on the worst day"],
        ],
      },
      { type: "h2", id: "documentation", text: "The documentation clause" },
      {
        type: "p",
        text: "The provider should hand over and keep current the as-built drawings, credentials and configuration. Without that clause, leaving a provider leaves you dependent on them. See [IT services](/solutions/it-services-dubai) and [CCTV maintenance](/solutions/cctv-maintenance-dubai) for how we structure support.",
      },
    ],
  },
  {
    id: "p5",
    slug: "microsoft-365-vs-on-premises-files",
    title: "Microsoft 365 or on-premises file storage: a decision guide",
    dek: "Licensing, backup, access and the hidden cost of the server in the cupboard. A practical comparison for offices deciding where their files live.",
    category: "Microsoft",
    tags: ["Microsoft 365", "Cloud", "Files"],
    authorId: "artek-team",
    publishedAt: "2026-07-24",
    coverWord: "Cloud",
    relatedServices: ["microsoft", "computer-systems"],
    status: "published",
    body: [
      {
        type: "p",
        text: "For a growing office, the question is rarely whether to use Microsoft 365 — it is what else is still needed on premises, and what the move costs in licence terms and in habits.",
      },
      { type: "h2", id: "compare", text: "Compare like for like" },
      {
        type: "table",
        head: ["Factor", "On-prem server", "Microsoft 365"],
        rows: [
          ["Up-front cost", "Server, storage, licence, install", "Per-user subscription"],
          ["Running cost", "Power, backup, maintenance visits", "Included in subscription"],
          ["Access", "Inside the office network", "Anywhere, with controls"],
          ["Upgrades", "Every hardware cycle", "Continuous"],
        ],
      },
      { type: "h2", id: "backup", text: "Backup does not come free" },
      {
        type: "p",
        text: "Cloud storage is not the same as a backup. A separate, versioned backup of Microsoft 365 data — email, SharePoint, OneDrive — is still needed to recover from deletion, ransomware or a misled sync. Budget for it as a line item.",
      },
      {
        type: "callout",
        title: "Pilot before the whole floor",
        text: "Move one team first. You will discover the file-sharing habits that need retraining and the folders that should be archives — before the whole office is waiting on a migration.",
      },
      { type: "h2", id: "hybrid", text: "Most UAE offices end up hybrid" },
      {
        type: "p",
        text: "Cameras, access control and some line-of-business applications stay on the LAN; documents, email and collaboration move to the cloud. The design question is the link between them: bandwidth, backup, and who administers the accounts. See [Microsoft solutions](/solutions/microsoft-solutions-uae) for the scope of the rollout and licensing advice.",
      },
    ],
  },
  {
    id: "p6",
    slug: "choosing-business-laptops",
    title: "Buying business laptops: what actually matters on a three-year cycle",
    dek: "Warranty and service terms, batteries, ports, memory and the model that ages well — not the one with the best spec sheet.",
    category: "Hardware",
    tags: ["Laptops", "Procurement", "Hardware"],
    authorId: "artek-team",
    publishedAt: "2026-07-10",
    coverWord: "Hardware",
    relatedServices: ["computer-systems", "it-services"],
    status: "published",
    body: [
      {
        type: "p",
        text: "On a three-year cycle, the cost of a laptop is mostly the cost of it not working: the warranty claim, the replacement, the user without a machine. Pick the device that fails best, not the one that benchmarks highest.",
      },
      { type: "h2", id: "warranty", text: "Warranty and service terms" },
      {
        type: "ul",
        items: [
          "On-site versus carry-in service — on-site is worth paying for the laptop the operations lead uses.",
          "What the warranty covers: labour, parts, battery and accidental damage are usually separate questions.",
          "Spare units for the team, or a plan for a dead laptop on a deadline.",
        ],
      },
      { type: "h2", id: "specs", text: "The specs that age well" },
      {
        type: "p",
        text: "Enough RAM to carry the browser and the job, an SSD at minimum, and the ports the meeting rooms actually use. A business-model screen and keyboard are worth more day-to-day than a higher-speed processor the user will never notice.",
      },
      {
        type: "table",
        head: ["Spec", "Sensible baseline", "Why"],
        rows: [
          ["Memory", "16 GB", "Browsers and collaboration tools grow"],
          ["Storage", "512 GB SSD", "Local files and updates"],
          ["Battery", "Business models with replacement options", "Battery health defines year three"],
          ["Ports", "USB-C + adapters for meetings", "Docks fail less than adapters get lost"],
        ],
      },
      { type: "h2", id: "setup", text: "Standardise the build" },
      {
        type: "p",
        text: "Imaging and standard configuration — single sign-on, encryption, endpoint protection, updates — make every replacement a swap rather than a rebuild. See [computer systems](/solutions/computer-systems-dubai) for procurement and imaging support.",
      },
    ],
  },
];

const byDateDesc = (a: BlogPost, b: BlogPost) =>
  b.publishedAt.localeCompare(a.publishedAt);

/** Published posts only, newest first, featured first. */
export const publishedPosts: readonly BlogPost[] = posts
  .filter((p) => p.status === "published")
  .slice()
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || byDateDesc(a, b));

export const getPostBySlug = (slug: string) =>
  publishedPosts.find((p) => p.slug === slug);

export const featuredPost = publishedPosts.find((p) => p.featured);

export const categoriesOf = (list: readonly BlogPost[]): string[] =>
  Array.from(new Set(list.map((p) => p.category)));

/** ~200 words per minute, rounded up, minimum 1. */
export const readingMinutes = (post: BlogPost): number => {
  const words = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};
