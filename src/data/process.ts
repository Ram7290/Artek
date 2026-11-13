import type { ProcessStep } from "@/types";

/**
 * "How we work" — the four-step process on the homepage.
 *
 * Wording follows the process description already published on /about
 * (Survey → Proposal → Delivery → Support), expanded so each step answers a
 * buyer's question rather than listing a department.
 *
 * ⚠ Claims to confirm with ARTEK before production (see README "Claims to
 * verify"): "our own engineers" / no subcontracting, working around client
 * operating hours, and SIRA approval documentation support. Do not add
 * turnaround times, response SLAs or pass rates here until they are confirmed.
 */
export const processSteps: readonly ProcessStep[] = [
  {
    id: "survey",
    title: "Site survey",
    when: "Before you commit",
    description:
      "We walk the premises with you, check what is already installed, where cabling can run and what the building will allow. The scope comes out of that visit — not out of a template quotation.",
  },
  {
    id: "design",
    title: "Design & itemised quotation",
    when: "Before work starts",
    description:
      "A system design and a fixed, itemised quote: equipment, quantities, cabling and scope of work. Where the premises fall under SIRA requirements, the approval documentation is planned in from this stage instead of added at the end.",
  },
  {
    id: "installation",
    title: "Installation",
    when: "On site",
    description:
      "Our own engineers install, configure and test the system, working around your operating hours where the site needs it. Nothing is handed over until the cameras record, the network passes and remote access works.",
  },
  {
    id: "support",
    title: "Handover & support",
    when: "After go-live",
    description:
      "You get the documentation, a walkthrough of what was installed and a clear route to support — with an optional AMC if you want us to keep it maintained. The team that installed the system is the team you call.",
  },
];
