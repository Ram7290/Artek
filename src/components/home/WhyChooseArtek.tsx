import { BadgeCheck, Route, Zap, Scale, Users } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";

/**
 * Why Choose ARTEK (directly after the hero block).
 * Dark "premium" band: ambience, glass cards, numbered indices.
 * ⚠ Each block is a company claim; verify wording with ARTEK — in
 * particular the individual SIRA certification, no-subcontracting and
 * same-day response statements — before production.
 */
const FEATURES = [
  {
    icon: BadgeCheck,
    title: "SIRA-Certified Engineers",
    body:
      "Our technicians hold individual SIRA certifications — not just company approval. Every installation is done by someone who knows the regulations inside out.",
    claim: "verify individual engineer certification",
  },
  {
    icon: Route,
    title: "End-to-End Service",
    body:
      "We don't subcontract. From site survey to SIRA NOC to annual maintenance, one team handles everything. One call, full accountability.",
    claim: "verify no-subcontracting policy",
  },
  {
    icon: Zap,
    title: "Fast On-Site Response",
    body:
      "Based in Bur Dubai, we reach most locations within hours. AMC clients get same-day response for critical faults.",
    claim: "verify location + response promise",
  },
  {
    icon: Scale,
    title: "Top Brands, Honest Pricing",
    body:
      "We supply Hikvision, Dahua, and other suitable security brands. Our Computer Street presence helps us provide competitive pricing with transparent quotations.",
    claim: "verify Computer Street presence ",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    body:
      "We build long-term customer relationships through reliable service, ongoing support and a dedicated approach to each customer's IT infrastructure.",
  },
] as const;

export function WhyChooseArtek() {
  return (
    <section
      className="relative bg-slate-safe py-16 sm:py-24"
      aria-labelledby="why-heading"
    >
      <div className="container-page relative">
        <SectionHeading
          align="center"
          eyebrow="Why Choose Artek"
          title="A Technology Partner Built on Trust"
          description="Choosing the right technology partner matters. We bring together security expertise, IT infrastructure and a broad range of technology solutions to support businesses and properties across the UAE."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((f, i) => {
            const num = String(i + 1).padStart(2, "0");
            const Icon = f.icon;
            return (
              <RevealBox
                as="li"
                key={f.title}
                delay={(i % 3) * 90}
                className={
                  i === FEATURES.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : undefined
                }
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-600/50 hover:shadow-card-hover sm:p-7">
                  {/* Hairline sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-azure/10 ring-1 ring-inset ring-azure/25">
                      <Icon className="size-5 text-accent-600" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold tabular-nums text-slate-300 transition-colors duration-300 group-hover:text-accent-600/60">
                      {num}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
                </div>
              </RevealBox>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
