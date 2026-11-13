import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { RevealBox } from "@/components/common/RevealBox";
import { coreServices } from "@/data/services";

/**
 * Homepage — core solutions (eight cards).
 * The one true card grid on the page, so it is framed as a raised band with
 * a hairline top edge; the cards themselves are defined in ServiceCard.
 */
export function SolutionsSection() {
  return (
    <section className="border-t border-white/[0.06] bg-surface-2 band-lg" aria-labelledby="solutions-heading">
      <div className="container-page">
        <SectionHeading
          id="solutions-heading"
          eyebrow="What we do"
          title="Everything your premises needs, from one team."
          description="Security, networking, servers and the people who run them — installed by the same engineers and supported under one contract."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {coreServices.map((service, i) => (
            <RevealBox key={service.slug} delay={(i % 4) * 60}>
              <ServiceCard service={service} index={i} />
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  );
}
