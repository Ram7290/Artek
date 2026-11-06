import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { RevealBox } from "@/components/common/RevealBox";
import { coreServices } from "@/data/services";

/** Homepage Section 3 — the eight core solution cards (data-driven). */
export function SolutionsSection() {
  return (
    <section className=" py-16 sm:py-24" aria-labelledby="solutions-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Our IT & Security Solutions in Dubai"
          description="From SIRA-approved CCTV to enterprise networking — complete technology solutions for UAE businesses."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, i) => (
            <RevealBox key={service.slug} delay={(i % 4) * 70}>
              <ServiceCard service={service} priority={i < 2} />
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  );
}
