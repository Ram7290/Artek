import type { Service } from "@/types";

/**
 * All solution content lives here. Adding a service = adding an entry.
 * `context: "core"` entries appear on the homepage grid and main listings;
 * `context: "seo"` entries are additional SEO landing pages (e.g. CCTV
 * keyword pages) built from the same template.
 *
 * Images: the URLs below are the client-supplied originals. Before
 * production, optimize AVIF/WebP derivatives into /public/images/services/
 * and point `image` at the local optimized file.
 */

const IMG = "https://artekcomputer.com/wp-content/uploads/2026/01";

export const services: readonly Service[] = [
  {
    id: "microsoft",
    slug: "microsoft-solutions-uae",
    title: "Microsoft Solutions",
    name: "Microsoft Solutions",
    shortDescription:
      "Microsoft 365, Azure cloud, Teams deployment, and enterprise licensing for businesses across the UAE.",
    image: `${IMG}/Microsoft-Solutions.png.webp`,
    imageAlt: "IT consultant deploying Microsoft 365 and Azure solutions for a UAE business",
    icon: "cloud",
    context: "core",
    seoTargetPhrase: "Microsoft Solutions Provider UAE",
    seo: {
      title: "Microsoft Solutions Provider in UAE | Microsoft 365 & Azure | ARTEK",
      description:
        "ARTEK helps UAE businesses adopt Microsoft 365, Azure cloud, Teams and enterprise licensing — deployed, migrated and supported by one local team.",
      ogType: "website",
    },
    h1: "Microsoft Solutions for UAE Businesses",
    overview:
      "ARTEK plans, deploys and supports Microsoft technologies for businesses across the UAE — from Microsoft 365 tenancy setup and Teams rollout to Azure cloud workloads and enterprise licensing. We handle assessment, migration, configuration and ongoing management so your staff get a secure, modern working environment without disruption.",
    benefits: [
      "One partner for licensing, deployment and support — no fragmented vendors",
      "Migration from on-premise mail and file servers to Microsoft 365 without downtime",
      "Team collaboration with Microsoft Teams, SharePoint and OneDrive",
      "Licensing plans matched to how your business actually works",
    ],
    features: [
      {
        title: "Microsoft 365 Deployment",
        description:
          "Tenant setup, Exchange Online migration, mailbox configuration and user onboarding for companies of every size.",
      },
      {
        title: "Azure Cloud Services",
        description:
          "Cloud storage, virtual machines and identity management configured to complement your existing infrastructure.",
      },
      {
        title: "Microsoft Teams Rollout",
        description:
          "Teams deployment for chat, meetings and calling, including hardware selection and user training.",
      },
      {
        title: "Enterprise Licensing",
        description:
          "Microsoft licensing consultation and procurement so you pay for what you use at the right tier.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate our existing email to Microsoft 365?",
        answer:
          "Yes. We assess your current mail environment, plan the migration in stages and move mailboxes to Exchange Online with minimal disruption, then configure Teams, SharePoint and OneDrive on top.",
      },
      {
        question: "Do you supply Microsoft 365 licenses?",
        answer:
          "Yes. We advise on the right Microsoft 365 plan mix for your users and handle procurement, so licensing and support come from a single provider.",
      },
    ],
    related: ["computer-systems", "network", "cybersecurity"],
  },
  {
    id: "computer-systems",
    slug: "computer-systems-dubai",
    title: "Computer Systems",
    name: "Computer Systems & Hardware",
    shortDescription:
      "Desktops, laptops, servers, and enterprise hardware — supplied, configured, and supported by our team.",
    image: `${IMG}/computer-solutions.png.webp`,
    imageAlt: "Desktop computers, laptops and servers supplied by ARTEK Computers in Dubai",
    icon: "monitor",
    context: "core",
    seoTargetPhrase: "Computer Suppliers Dubai",
    seo: {
      title: "Computer Suppliers in Dubai | Desktops, Laptops & Servers | ARTEK",
      description:
        "A trusted computer supplier in Dubai for desktops, laptops, workstations and servers — supplied, configured and supported for residential, commercial and corporate customers.",
      ogType: "website",
    },
    h1: "Computer Suppliers in Dubai",
    overview:
      "As computer suppliers based in Dubai, ARTEK sources, builds and configures complete hardware environments: office desktops and laptops, workstations, and servers for business-critical workloads. Every system we supply can be imaged, configured and deployed by our own engineers, then backed by our support team.",
    benefits: [
      "Hardware recommendations based on your workload, not on showroom stock",
      "Systems delivered configured and ready for users",
      "Competitive Dubai pricing with transparent quotations",
      "Local warranty and repair support from the same team that supplied you",
    ],
    features: [
      {
        title: "Desktops & Laptops",
        description:
          "Business-grade computing for offices, retail counters and home offices, specified to your budget.",
      },
      {
        title: "Servers & Storage",
        description:
          "File, application and virtualization servers with suitable RAID and backup configuration.",
      },
      {
        title: "Workstations",
        description:
          "High-performance systems for design, engineering and media workloads.",
      },
      {
        title: "Repairs & Upgrades",
        description:
          "Diagnostics, component replacement, RAM and storage upgrades performed by our technicians.",
      },
    ],
    faqs: [
      {
        question: "Do you supply bulk computer orders for offices?",
        answer:
          "Yes. We supply and configure bulk desktop and laptop orders for offices across Dubai and the wider UAE, including staging, asset tagging and installation.",
      },
      {
        question: "Do you repair computers as well as supply them?",
        answer:
          "Yes. Our technicians handle diagnostics, component replacement and upgrades for the systems we supply and most major brands you may already own.",
      },
    ],
    related: ["it-services", "network", "server-relocation"],
  },
  {
    id: "network",
    slug: "network-solutions-dubai",
    title: "Network Solutions",
    name: "Network Solutions",
    shortDescription:
      "Structured cabling, Wi-Fi, switching, and firewall setup for offices, warehouses, and commercial buildings.",
    image: `${IMG}/Network-Solutions.png.webp`,
    imageAlt: "Network engineer installing structured cabling and networking equipment in Dubai",
    icon: "network",
    context: "core",
    seoTargetPhrase: "Network Solutions Dubai",
    seo: {
      title: "Network Solutions in Dubai | Structured Cabling, Wi-Fi & Firewalls | ARTEK",
      description:
        "Network solutions in Dubai: structured cabling, Wi-Fi, switching and firewall setup for offices, warehouses and commercial buildings — designed and installed by ARTEK.",
      ogType: "website",
    },
    h1: "Network Solutions in Dubai",
    overview:
      "ARTEK designs and installs business network infrastructure across Dubai: structured cabling, wireless coverage, switching and perimeter security. From small offices needing a clean cabling job to multi-floor buildings and warehouses requiring engineered Wi-Fi coverage, we plan the topology, install the hardware and document the result.",
    benefits: [
      "Structured cabling installed neatly, labelled and tested",
      "Wi-Fi designed from an actual coverage plan, not guesswork",
      "Network security firewalls configured and maintained",
      "Scalable design that grows with your office or facility",
    ],
    features: [
      {
        title: "Structured Cabling",
        description:
          "Cat6/Cat6A cabling, patch panels and racks installed to a tested, labelled standard.",
      },
      {
        title: "Business Wi-Fi",
        description:
          "Access point placement, mesh and controller-based systems for reliable whole-site coverage.",
      },
      {
        title: "Switching & Routing",
        description:
          "Managed switches, VLAN segmentation and routing for secure, organised traffic flow.",
      },
      {
        title: "Firewall Setup",
        description:
          "Perimeter firewall installation, policy configuration and ongoing rule management.",
      },
    ],
    faqs: [
      {
        question: "Do you install network cabling for existing offices?",
        answer:
          "Yes. We install and re-terminate structured cabling in occupied offices, working around your schedule to limit disruption to the business.",
      },
      {
        question: "Can you fix slow or patchy office Wi-Fi?",
        answer:
          "Yes. We survey your site, identify coverage and configuration problems, and install properly placed access points to resolve dead zones and congestion.",
      },
    ],
    related: ["cctv", "it-services", "voice-telephony"],
  },
  {
    id: "voice-telephony",
    slug: "voice-telephony-dubai",
    title: "Voice & Telephony Solutions",
    name: "Voice & Telephony Solutions",
    shortDescription:
      "Business communication systems, IP telephony, VoIP solutions, telephone systems, and communication infrastructure.",
    image: `${IMG}/Vpice-Telephony.png.webp`,
    imageAlt: "Business IP telephony and VoIP phone system installed for a Dubai office",
    icon: "phone",
    context: "core",
    seoTargetPhrase: "Business Telephone Systems Dubai",
    seo: {
      title: "Business Telephone Systems in Dubai | IP & VoIP | ARTEK Computers",
      description:
        "Business telephone systems in Dubai: IP telephony, VoIP solutions and communication infrastructure supplied, installed and supported by ARTEK Computers LLC.",
      ogType: "website",
    },
    h1: "Business Telephone Systems in Dubai",
    overview:
      "ARTEK supplies, installs and supports business communication systems in Dubai — IP telephony, VoIP solutions and the underlying cabling that keeps them running. From compact office phone systems to multi-department setups with reception consoles, we design telephony around how your team communicates.",
    benefits: [
      "Modern IP phone systems without aging PBX hardware",
      "Extensions across offices, warehouses and remote desks",
      "Voicemail, transfer, IVR and call-routing configured for you",
      "Telephony and data cabling handled by the same team",
    ],
    features: [
      {
        title: "IP/PBX Phone Systems",
        description:
          "Business phone system supply and installation with extensions, voicemail and call routing.",
      },
      {
        title: "VoIP Deployment",
        description:
          "Voice-over-IP configuration over your LAN, including quality-of-service settings.",
      },
      {
        title: "Reception & IVR",
        description:
          "Auto-attendant, departments and hunt groups so every call reaches the right person.",
      },
      {
        title: "Telephony Cabling",
        description:
          "Voice cabling and patching integrated with your structured data cabling.",
      },
    ],
    faqs: [
      {
        question: "Can you replace our old PBX with a VoIP system?",
        answer:
          "Yes. We assess your existing lines and cabling, propose a suitable IP telephony system and migrate extensions so your business doesn't miss calls during the changeover.",
      },
      {
        question: "Do you support multi-branch telephony?",
        answer:
          "Yes. IP telephony lets us link extensions across multiple locations, using configuration appropriate to each site's connectivity.",
      },
    ],
    related: ["network", "computer-systems", "it-services"],
  },
  {
    id: "cctv",
    slug: "cctv-security-dubai",
    title: "CCTV & Security Systems",
    name: "CCTV & Security Systems",
    shortDescription:
      "SIRA-approved CCTV installation, surveillance maintenance, and security system solutions for homes and businesses.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "Professional CCTV security camera installation in Dubai by ARTEK",
    icon: "cctv",
    context: "core",
    seoTargetPhrase: "SIRA CCTV Installation Dubai",
    seo: {
      title: "SIRA CCTV Installation in Dubai | Security Systems | ARTEK Computers",
      description:
        "CCTV installation in Dubai for homes and businesses — surveillance system design, SIRA-approved installation(*) and maintenance by ARTEK Computers LLC. (*)Confirm current SIRA approval before publishing.",
      ogType: "website",
    },
    h1: "CCTV Installation in Dubai",
    overview:
      "ARTEK designs, installs and maintains CCTV surveillance systems for homes, offices, retail, warehouses and industrial facilities across Dubai. From camera selection and viewfinder planning to recorder configuration and remote viewing on your phone, our engineers deliver complete security camera systems — and keep them running with planned maintenance.",
    benefits: [
      "Cameras positioned from a site survey, not a one-size-fits-all package",
      "Recording, storage and retention configured by the engineers who install it",
      "Remote viewing on mobile and desktop, set up and handed over properly",
      "Ongoing maintenance and AMC options for long-term operation",
    ],
    features: [
      {
        title: "CCTV System Design",
        description:
          "Camera planning from an on-site survey: coverage, blind spots, lighting conditions and field of view.",
      },
      {
        title: "Surveillance Cameras",
        description:
          "Supply and installation of suitable security cameras for indoor, outdoor and demanding environments.",
      },
      {
        title: "Recording & Storage",
        description:
          "NVR/DVR setup, storage sizing and retention configured to your requirements.",
      },
      {
        title: "Maintenance & Support",
        description:
          "Periodic servicing, firmware updates, storage checks and fault repair — optionally under an AMC.",
      },
    ],
    faqs: [
      {
        question: "What CCTV installation services does ARTEK provide?",
        answer:
          "Site survey and camera planning, supply of cameras and recorders, professional installation, cabling, configuration of recording and remote viewing, plus ongoing maintenance and AMC support.",
      },
      {
        question: "Do you install CCTV for homes as well as businesses?",
        answer:
          "Yes. We install surveillance systems for residential properties, offices, retail shops, warehouses and industrial facilities.",
      },
    ],
    related: ["network", "cybersecurity", "it-services"],
  },
  {
    id: "it-services",
    slug: "it-services-dubai",
    title: "IT Services",
    name: "IT Services & Managed Support",
    shortDescription:
      "Managed IT support, helpdesk, on-site maintenance, and annual maintenance contracts tailored to your business needs.",
    image: `${IMG}/IT-Servuces.png.webp`,
    imageAlt: "ARTEK technician providing managed IT support to a business in Dubai",
    icon: "wrench",
    context: "core",
    seoTargetPhrase: "IT Support Company Dubai",
    seo: {
      title: "IT Support Company in Dubai | Managed IT Services | ARTEK",
      description:
        "IT support company in Dubai offering managed IT services, helpdesk, on-site maintenance and annual maintenance contracts (AMC) for businesses.",
      ogType: "website",
    },
    h1: "IT Support Company in Dubai",
    overview:
      "ARTEK provides managed IT support for businesses across Dubai. Our engineers handle helpdesk support, on-site maintenance, network and server upkeep, and planned lifecycle management — arranged as an annual maintenance contract (AMC) or on-demand. We become your outsourced IT department so your staff stay productive.",
    benefits: [
      "A single point of contact for all IT issues",
      "On-site response for faults that can't be fixed remotely",
      "Annual maintenance contracts with predictable costs",
      "Proactive maintenance that prevents problems, not just reacts to them",
    ],
    features: [
      {
        title: "Helpdesk Support",
        description:
          "A reachable support channel for day-to-day user and system issues.",
      },
      {
        title: "On-Site Maintenance",
        description:
          "Scheduled visits and rapid response for faults requiring hands-on work.",
      },
      {
        title: "AMC Contracts",
        description:
          "Annual maintenance contracts tailored to the systems and coverage your business needs.",
      },
      {
        title: "Lifecycle Management",
        description:
          "Asset tracking, refresh planning and disposal coordination for your IT estate.",
      },
    ],
    faqs: [
      {
        question: "Does ARTEK offer annual maintenance contracts (AMC)?",
        answer:
          "Yes. We offer AMCs covering preventive maintenance visits, support response and repairs, scoped to your infrastructure — from a small office to multi-site environments.",
      },
      {
        question: "Do you provide IT support for small businesses?",
        answer:
          "Yes. Our support plans are designed for small and medium businesses that don't have in-house IT staff, as well as larger teams that need extra coverage.",
      },
    ],
    related: ["computer-systems", "network", "cctv"],
  },
  {
    id: "server-relocation",
    slug: "server-relocation-dubai",
    title: "Data Center & Server Relocation",
    name: "Data Center & Server Relocation",
    shortDescription:
      "Secure migration of servers, racks, and data center equipment with careful infrastructure planning across the UAE.",
    image: `${IMG}/Server-relocation.png.webp`,
    imageAlt: "Server rack being professionally relocated by ARTEK engineers in the UAE",
    icon: "server",
    context: "core",
    seoTargetPhrase: "Server Relocation Services Dubai",
    seo: {
      title: "Server Relocation Services in Dubai | Data Center Migration | ARTEK",
      description:
        "Server relocation and data center migration services in Dubai — careful decommissioning, transport and recommissioning of servers, racks and network equipment across the UAE.",
      ogType: "website",
    },
    h1: "Server Relocation Services in Dubai",
    overview:
      "Moving servers is unforgiving: downtime, cabling errors and transport damage all have real costs. ARTEK manages server relocation and data center moves across the UAE end-to-end — inventory and documentation, structured decommissioning, secure transport, and full recommissioning and testing at the destination so services come back online in a planned sequence.",
    benefits: [
      "A documented migration plan instead of an improvisation",
      "Painter's-tape-free cabling: clean rebuild with labelled runs",
      "Downtime window agreed in advance and worked to",
      "Post-move verification of every system before handover",
    ],
    features: [
      {
        title: "Migration Planning",
        description:
          "Inventory, dependency mapping and a scheduled downtime window agreed with your team.",
      },
      {
        title: "Decommissioning",
        description:
          "Systematic shutdown, labelling and removal of servers, storage and network hardware.",
      },
      {
        title: "Secure Transport",
        description:
          "Packed and moved with appropriate protection for sensitive IT equipment.",
      },
      {
        title: "Recommissioning",
        description:
          "Rack installation, cabling, power-up sequence, testing and service verification at the new site.",
      },
    ],
    faqs: [
      {
        question: "How long does a server relocation take?",
        answer:
          "It depends on the size of the environment. We plan the move around an agreed downtime window — many office relocations complete within a day, larger data center moves are phased.",
      },
      {
        question: "Can you relocate servers to another emirate?",
        answer:
          "Yes. We handle relocations across the UAE, including moves to and from hosted data centers.",
      },
    ],
    related: ["network", "it-services", "computer-systems"],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity-dubai",
    title: "Cybersecurity Solutions",
    name: "Cybersecurity Solutions",
    shortDescription:
      "Firewalls, SSL, endpoint protection, and threat monitoring to help keep your business data secure.",
    image: `${IMG}/cybersecurity.png.webp`,
    imageAlt: "Cybersecurity specialist monitoring threats for a UAE business",
    icon: "shield",
    context: "core",
    seoTargetPhrase: "Cybersecurity Solutions UAE",
    seo: {
      title: "Cybersecurity Solutions in UAE | Firewalls & Endpoint Security | ARTEK",
      description:
        "Cybersecurity solutions for UAE businesses — firewalls, SSL certificates, endpoint protection and threat monitoring, deployed and supported by ARTEK Computers LLC.",
      ogType: "website",
    },
    h1: "Cybersecurity Solutions in the UAE",
    overview:
      "ARTEK builds layered, practical security for UAE businesses: next-generation firewalls at the perimeter, managed SSL certificates, endpoint protection on every device and monitoring that watches for trouble between audits. We focus on controls small and medium businesses can actually operate and maintain.",
    benefits: [
      "Security sized to your business, not an enterprise sprawl of tools",
      "Firewall and endpoint setup handled by the engineers who know your network",
      "SSL/TLS certificates installed and renewed before they expire",
      "Practical hardening of the everyday systems your staff use",
    ],
    features: [
      {
        title: "Firewall Management",
        description:
          "Next-generation firewall selection, installation, policy configuration and rule upkeep.",
      },
      {
        title: "Endpoint Protection",
        description:
          "Managed antivirus and device protection across desktops, laptops and servers.",
      },
      {
        title: "SSL & Certificates",
        description:
          "Certificate sourcing, installation and renewals for websites, mail and internal services.",
      },
      {
        title: "Threat Monitoring",
        description:
          "Ongoing monitoring of security events so incidents are caught early.",
      },
    ],
    faqs: [
      {
        question: "Do you provide security for small businesses?",
        answer:
          "Yes. We size firewall, endpoint and monitoring solutions to the business — you get meaningful protection without enterprise tooling your team can't operate.",
      },
      {
        question: "Can you secure both our network and our CCTV?",
        answer:
          "Yes. We configure CCTV and network infrastructure side by side, so surveillance devices are segmented and hardened like any other part of your environment.",
      },
    ],
    related: ["network", "cctv", "microsoft"],
  },

  /* ── Additional CCTV SEO landing pages ─────────────────────────────── */
  {
    id: "cctv",
    slug: "cctv-installation-dubai",
    title: "CCTV Installation Dubai",
    name: "CCTV Installation in Dubai",
    shortDescription:
      "Complete CCTV installation in Dubai — camera planning, supply, mounting, cabling and configuration.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "CCTV camera being installed at a commercial property in Dubai",
    icon: "cctv",
    context: "seo",
    seoTargetPhrase: "CCTV Installation Dubai",
    seo: {
      title: "CCTV Installation in Dubai | Security Camera Installers | ARTEK",
      description:
        "CCTV installation in Dubai by ARTEK Computers — site survey, camera supply, professional mounting, cabling, recorder setup and remote viewing configuration.",
      ogType: "website",
    },
    h1: "CCTV Installation in Dubai",
    overview:
      "ARTEK installs CCTV systems across Dubai for homes, shops, offices and industrial sites. Every installation starts with a site survey so cameras are positioned for real coverage — entrances, blind spots and lighting accounted for — followed by clean cabling, recorder configuration and handover with remote viewing set up on your devices.",
    benefits: [
      "Camera placement planned on-site, not from a catalogue",
      "Tidy, concealed cabling by experienced installers",
      "Recording and retention configured to your needs",
      "Remote viewing on your phone demonstrated at handover",
    ],
    features: [
      {
        title: "Site Survey",
        description: "On-site assessment of coverage areas, blind spots and mounting points.",
      },
      {
        title: "Camera Supply & Mounting",
        description: "Suitable cameras fitted indoors and outdoors, in the right locations.",
      },
      {
        title: "Cabling & Recorder Setup",
        description: "Structured cabling to NVR/DVR with storage and retention configured.",
      },
      {
        title: "Handover & Training",
        description: "Remote viewing configured and a walkthrough for your team or family.",
      },
    ],
    faqs: [
      {
        question: "How long does a CCTV installation take?",
        answer:
          "Most residential and small commercial installations are completed within a day; larger sites with many cameras or challenging cabling routes take longer. We confirm the schedule after the survey.",
      },
      {
        question: "What is included in an ARTEK CCTV installation?",
        answer:
          "Site survey, camera supply and mounting, cabling, recorder installation and configuration, remote viewing setup and a handover walkthrough.",
      },
    ],
    related: ["cctv", "network"],
  },
  {
    id: "cctv",
    slug: "sira-approved-cctv-dubai",
    title: "SIRA Approved CCTV Dubai",
    name: "SIRA-Compliant CCTV in Dubai",
    shortDescription:
      "CCTV systems for premises subject to SIRA requirements in Dubai.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "SIRA-compliant CCTV surveillance system in a Dubai commercial building",
    icon: "badge-check",
    context: "seo",
    seoTargetPhrase: "SIRA Approved CCTV Dubai",
    seo: {
      title: "SIRA Approved CCTV in Dubai | ARTEK Computers LLC",
      description:
        "CCTV solutions for Dubai premises subject to SIRA requirements — system design, installation and documentation support by ARTEK Computers LLC.",
      ogType: "website",
    },
    h1: "SIRA-Compliant CCTV in Dubai",
    overview:
      "Some premises in Dubai must meet SIRA (Security Industry Regulatory Agency) requirements for their surveillance systems. ARTEK builds CCTV systems with these requirements in mind — covering camera placement, recording quality, retention and documentation — and supports business owners through the inspection process.",
    benefits: [
      "System design aware of SIRA surveillance requirements",
      "Recording quality and retention planned to specification",
      "Documentation support for inspections",
      "Engineers experienced with regulated Dubai installations",
    ],
    features: [
      {
        title: "Regulated System Design",
        description: "Camera coverage and recording specifications planned to SIRA requirements.",
      },
      {
        title: "Quality & Retention",
        description: "Storage sizing and retention configured to applicable standards.",
      },
      {
        title: "Inspection Support",
        description: "Help preparing documentation for authority inspections.",
      },
      {
        title: "Upgrades",
        description: "Existing CCTV upgraded where systems no longer meet requirements.",
      },
    ],
    faqs: [
      {
        question: "What is SIRA approval for CCTV?",
        answer:
          "SIRA is Dubai's Security Industry Regulatory Agency. Premises in certain categories must have surveillance systems meeting SIRA technical standards, and security installers and technicians involved in regulated installations hold relevant approvals.",
      },
      {
        question: "Can you upgrade an existing CCTV system to meet SIRA requirements?",
        answer:
          "Often, yes. We assess the existing cameras, cabling and recording hardware and either upgrade components or replace the system, depending on what it takes to meet the required standard.",
      },
    ],
    related: ["cctv", "network"],
  },
  {
    id: "cctv",
    slug: "cctv-maintenance-dubai",
    title: "CCTV Maintenance Dubai",
    name: "CCTV Maintenance in Dubai",
    shortDescription:
      "Scheduled CCTV servicing, fault-finding and repairs to keep surveillance running.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "Technician performing CCTV maintenance on a surveillance system in Dubai",
    icon: "wrench",
    context: "seo",
    seoTargetPhrase: "CCTV Maintenance Dubai",
    seo: {
      title: "CCTV Maintenance in Dubai | Surveillance Servicing | ARTEK",
      description:
        "CCTV maintenance in Dubai — scheduled servicing, camera cleaning, storage checks, firmware updates and fault repair by ARTEK Computers LLC.",
      ogType: "website",
    },
    h1: "CCTV Maintenance in Dubai",
    overview:
      "A CCTV system that isn't maintained fails quietly. ARTEK's CCTV maintenance covers scheduled servicing — lens and housing cleaning, storage health checks, recording verification, firmware updates and cable/connectivity inspection — plus responsive fault-finding when something stops working.",
    benefits: [
      "Recording failures found before you need the footage",
      "Image quality restored with proper cleaning and adjustment",
      "Firmware kept current for stability and security",
      "Priority response for maintenance contract customers",
    ],
    features: [
      {
        title: "Scheduled Servicing",
        description: "Periodic visits covering cameras, recorder, storage and power supplies.",
      },
      {
        title: "Recording Verification",
        description: "Confirming scheduled and motion recording work on every channel.",
      },
      {
        title: "Firmware & Updates",
        description: "Keeping devices updated for reliability and security.",
      },
      {
        title: "Fault Repair",
        description: "Diagnosis and repair of failed cameras, storage, PSUs or cabling.",
      },
    ],
    faqs: [
      {
        question: "How often should CCTV be serviced?",
        answer:
          "For most business premises we recommend servicing at least twice a year, with higher-usage or regulated sites on more frequent schedules.",
      },
      {
        question: "Do you offer CCTV maintenance contracts (AMC)?",
        answer:
          "Yes. Annual maintenance contracts bundle scheduled visits and support response into a predictable yearly agreement.",
      },
    ],
    related: ["cctv", "it-services"],
  },
  {
    id: "cctv",
    slug: "cctv-camera-repair-dubai",
    title: "CCTV Camera Repair Dubai",
    name: "CCTV Camera Repair in Dubai",
    shortDescription:
      "Fast diagnosis and repair of failed CCTV cameras, recorders and power supplies.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "CCTV camera being repaired by an ARTEK technician in Dubai",
    icon: "monitor",
    context: "seo",
    seoTargetPhrase: "CCTV Camera Repair Dubai",
    seo: {
      title: "CCTV Camera Repair in Dubai | ARTEK Computers",
      description:
        "CCTV camera repair in Dubai — diagnosis and repair of failed cameras, NVR/DVR units, power supplies and cabling by ARTEK's engineers.",
      ogType: "website",
    },
    h1: "CCTV Camera Repair in Dubai",
    overview:
      "When cameras drop off your recorder or footage stops saving, ARTEK finds the cause fast — failed camera, power supply, storage drive, cable or connector — and repairs or replaces the faulty component. We repair and support most common CCTV brands and setups.",
    benefits: [
      "Correct fault diagnosis instead of blind part replacement",
      "Repairs across camera, recorder, power and cabling layers",
      "Replacement cameras matched to your existing system",
      "Support for most common brands and configurations",
    ],
    features: [
      {
        title: "Fault Diagnosis",
        description: "Systematic testing from camera firmware through cabling to recorder.",
      },
      {
        title: "Camera Repair & Replacement",
        description: "Component-level repair or matched replacement where repair isn't viable.",
      },
      {
        title: "Recorder & Storage",
        description: "NVR/DVR troubleshooting and storage drive replacement or upgrade.",
      },
      {
        title: "PSU & Cabling Fixes",
        description: "Power supply repairs and re-termination of damaged cable runs.",
      },
    ],
    faqs: [
      {
        question: "My camera shows 'no signal' — can you fix it?",
        answer:
          "Usually, yes. 'No signal' is typically a cabling, connector or power problem rather than a dead camera. Our engineers trace the run and repair the actual fault.",
      },
      {
        question: "Do you repair all CCTV brands?",
        answer:
          "We repair and support most major CCTV brands commonly used in the UAE. For discontinued hardware we suggest a suitable replacement that works with your existing recordings.",
      },
    ],
    related: ["cctv", "it-services"],
  },
  {
    id: "cctv",
    slug: "commercial-cctv-installation-dubai",
    title: "Commercial CCTV Installation Dubai",
    name: "Commercial CCTV Installation in Dubai",
    shortDescription:
      "Multi-camera surveillance for offices, retail, warehouses and industrial sites.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "Commercial CCTV installation covering an office floor in Dubai",
    icon: "building",
    context: "seo",
    seoTargetPhrase: "Commercial CCTV Installation Dubai",
    seo: {
      title: "Commercial CCTV Installation in Dubai | ARTEK Computers",
      description:
        "Commercial CCTV installation in Dubai — multi-camera surveillance systems for offices, retail, warehouses and industrial facilities, designed and installed by ARTEK.",
      ogType: "website",
    },
    h1: "Commercial CCTV Installation in Dubai",
    overview:
      "Commercial CCTV is a different discipline from a home kit: more cameras, longer runs, mixed lighting, per-camera requirements and staff access management. ARTEK designs commercial surveillance for offices, retail, warehouses and industrial facilities across Dubai, using business-grade recorders, network separation and storage sized to retention needs.",
    benefits: [
      "Coverage engineered for entrances, aisles, loading areas and cash zones",
      "Business-grade recording with storage sized for retention",
      "Network segmentation keeping surveillance traffic separate",
      "Scales from a single shop to multi-room facilities",
    ],
    features: [
      {
        title: "Multi-Camera Design",
        description: "Camera plans covering entrances, work areas, stock and high-value zones.",
      },
      {
        title: "Business Recorders",
        description: "NVR/DVR selection with RAID and retention configured for compliance.",
      },
      {
        title: "Network Segmentation",
        description: "Isolated surveillance VLANs so CCTV doesn't expose the office LAN.",
      },
      {
        title: "Multi-Site Viewing",
        description: "Central monitoring of multiple locations where required.",
      },
    ],
    faqs: [
      {
        question: "How many cameras do we need for our shop/office?",
        answer:
          "It depends on layout, not a rule of thumb. Our survey maps your entrances, blind spots and high-value areas and recommends the minimum camera count that gives real coverage.",
      },
      {
        question: "Can our CCTV be viewed from head office?",
        answer:
          "Yes. We configure secure remote viewing so authorized staff can check single or multiple sites from anywhere.",
      },
    ],
    related: ["cctv", "network", "cybersecurity"],
  },
  {
    id: "cctv",
    slug: "residential-cctv-installation-dubai",
    title: "Residential CCTV Installation Dubai",
    name: "Residential CCTV Installation in Dubai",
    shortDescription:
      "Discreet home CCTV — entrance, boundary and garden coverage with mobile viewing.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "Residential CCTV camera installed at a villa in Dubai",
    icon: "home",
    context: "seo",
    seoTargetPhrase: "Residential CCTV Installation Dubai",
    seo: {
      title: "Residential CCTV Installation in Dubai | Home Security Cameras | ARTEK",
      description:
        "Home CCTV installation in Dubai — villa and apartment surveillance with entrance, boundary and garden coverage, plus easy mobile viewing. By ARTEK Computers.",
      ogType: "website",
    },
    h1: "Residential CCTV Installation in Dubai",
    overview:
      "ARTEK installs home CCTV in Dubai's villas and apartments: entrances, door access, gardens and parking areas covered by discreet cameras, with recording configured and mobile viewing set up so you can check your home from anywhere.",
    benefits: [
      "Coverage of entrances, boundaries and outdoor areas",
      "Discreet designs that suit the property",
      "Motion alerts on your phone",
      "Recordings kept locally, privately",
    ],
    features: [
      {
        title: "Entrance & Access Coverage",
        description: "Main door, gate and driveway cameras positioned for identification.",
      },
      {
        title: "Outdoor Cameras",
        description: "Weatherproof cameras for gardens, parking and boundary lines.",
      },
      {
        title: "Mobile Viewing",
        description: "Phone and tablet access configured and demonstrated at handover.",
      },
      {
        title: "Motion Alerts",
        description: "Alerting configured so you hear about activity that matters.",
      },
    ],
    faqs: [
      {
        question: "Will home CCTV work without internet?",
        answer:
          "Yes, recording and playback work locally without internet. Internet is only needed to view cameras remotely while you're away.",
      },
      {
        question: "How many cameras does a typical villa need?",
        answer:
          "Most villas we install in Dubai need between 4 and 8 cameras to cover entrance, gate, parking and rear areas — confirmed at survey rather than guessed.",
      },
    ],
    related: ["cctv", "network"],
  },
  {
    id: "cctv",
    slug: "ip-camera-installation-dubai",
    title: "IP Camera Installation Dubai",
    name: "IP Camera Installation in Dubai",
    shortDescription:
      "Network IP camera systems with PoE, high resolution and remote access.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "IP surveillance camera installed on a network by ARTEK in Dubai",
    icon: "wifi",
    context: "seo",
    seoTargetPhrase: "IP Camera Installation Dubai",
    seo: {
      title: "IP Camera Installation in Dubai | Network CCTV | ARTEK Computers",
      description:
        "IP camera installation in Dubai — PoE network CCTV with high resolution recording and secure remote access, designed and installed by ARTEK.",
      ogType: "website",
    },
    h1: "IP Camera Installation in Dubai",
    overview:
      "IP cameras give modern surveillance real advantages: higher resolutions, power over a single cable, per-camera firmware and better integration with your network. ARTEK designs IP camera systems in Dubai with proper PoE switching, VLAN separation of surveillance traffic and recorders that make full use of network capabilities.",
    benefits: [
      "Single-cable PoE installation: power and data in one run",
      "High-resolution identification-quality footage",
      "CCTV traffic kept on a separate VLAN for security",
      "Recording resolution matched to your retention needs",
    ],
    features: [
      {
        title: "PoE Infrastructure",
        description: "PoE switches and structured cabling sized for your camera count.",
      },
      {
        title: "High-Resolution Recording",
        description: "NVRs configured to record at each camera's full capability.",
      },
      {
        title: "Secure Remote Access",
        description: "Encrypted remote viewing without exposing the camera network.",
      },
      {
        title: "Integration",
        description: "Cameras and network managed by the same team for coherent operation.",
      },
    ],
    faqs: [
      {
        question: "Do IP cameras need a separate power supply?",
        answer:
          "Most don't — with Power over Ethernet (PoE) a single network cable provides both data and power. We install PoE switching as part of the system.",
      },
      {
        question: "Can IP cameras use existing network cabling?",
        answer:
          "Sometimes. We test the existing runs' condition and distance; where suitable they're used, and where not we install new structured cabling.",
      },
    ],
    related: ["cctv", "network"],
  },
  {
    id: "cctv",
    slug: "cctv-amc-dubai",
    title: "CCTV AMC Dubai",
    name: "CCTV Annual Maintenance Contracts in Dubai",
    shortDescription:
      "Structured Annual Maintenance Contracts for CCTV surveillance systems.",
    image: `${IMG}/CCTV-Camera.png.webp`,
    imageAlt: "ARTEK engineer performing scheduled CCTV AMC servicing in Dubai",
    icon: "clock",
    context: "seo",
    seoTargetPhrase: "CCTV AMC Dubai",
    seo: {
      title: "CCTV AMC in Dubai | Annual Maintenance Contracts | ARTEK",
      description:
        "CCTV Annual Maintenance Contracts (AMC) in Dubai from ARTEK — scheduled servicing, support response and repair coverage for business surveillance systems.",
      ogType: "website",
    },
    h1: "CCTV AMC in Dubai",
    overview:
      "An annual maintenance contract makes surveillance upkeep predictable: scheduled visits, defined response times and repair coverage for your CCTV system — arranged with ARTEK under a single agreement so your security coverage never quietly lapses.",
    benefits: [
      "Scheduled preventive maintenance visits included",
      "Defined support and response commitments",
      "Repair coverage terms agreed up front",
      "System health reports after each visit",
    ],
    features: [
      {
        title: "Scheduled Visits",
        description: "Planned servicing at agreed intervals covering all components.",
      },
      {
        title: "Response Commitments",
        description: "Agreed support response for faults reported between visits.",
      },
      {
        title: "Repair Coverage",
        description: "Transparent terms for parts and repairs under the contract.",
      },
      {
        title: "Health Reporting",
        description: "Written system status after each maintenance visit.",
      },
    ],
    faqs: [
      {
        question: "What does a CCTV AMC cover?",
        answer:
          "Typically: scheduled maintenance visits, health checks of cameras, recorders and storage, firmware updates, and repair or replacement support defined in the contract terms.",
      },
      {
        question: "Is an AMC worth it for a small CCTV system?",
        answer:
          "If continuous recording matters to you, yes — most surveillance failures are silent until footage is needed. An AMC makes inspections happen on a schedule instead of after a loss.",
      },
    ],
    related: ["cctv", "it-services"],
  },
];

/** Core services shown on homepage/listings */
export const coreServices = services.filter((s) => s.context === "core");

/** Lookup helpers */
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
