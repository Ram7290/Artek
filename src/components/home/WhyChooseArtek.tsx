import { BadgeCheck, Route, Zap, Scale, Users } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";

/**
 * Why Choose ARTEK (homepage Section 5).
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
    <section className="bg-slate-safe py-16 sm:py-24" aria-labelledby="why-heading">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Why choose us"
          title="Why Dubai Businesses Choose Artek Computers"
          description="We've been serving businesses on Computer Street and across the UAE for over 15 years. Here's what makes us different from the dozens of IT companies competing for your attention."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((f, i) => (
            <RevealBox
              as="li"
              key={f.title}
              delay={(i % 3) * 80}
              className={
                i === FEATURES.length - 1
                  ? "sm:col-span-2 lg:col-span-1"
                  : undefined
              }
            >
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-accent-600/50">
                <f.icon className="size-7 text-accent-600" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            </RevealBox>
          ))}
        </ul>
      </div>
    </section>
  );
}
