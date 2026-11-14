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
    <section className="relative band-lg" aria-labelledby="why-heading">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          <SectionHeading
            id="why-heading"
            align="left"
            eyebrow="Why Artek"
            title="A technology partner, not a supplier."
            description="Choosing the right partner matters more than choosing the right camera. We bring security expertise, IT infrastructure and support into one accountable team — so nobody has to coordinate three vendors to keep a building running."
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <ol className="border-t border-white/10">
            {FEATURES.map((f, i) => {
              const num = String(i + 1).padStart(2, "0");
              const Icon = f.icon;
              return (
                <RevealBox
                  as="li"
                  key={f.title}
                  delay={(i % 3) * 60}
                  className="group border-b border-white/10"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-5 py-7 sm:gap-7">
                    <div className="flex flex-col items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="font-display text-sm font-medium tabular-nums text-white/30 transition-colors duration-300 group-hover:text-paper"
                      >
                        {num}
                      </span>
                      <Icon
                        className="size-5 text-text-muted transition-colors duration-300 group-hover:text-text"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-text sm:text-xl">
                        {f.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-text-muted sm:text-[15px]">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </RevealBox>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
