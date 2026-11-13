import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { homeFaqs } from "@/data/faqs";

/** Homepage — FAQ, the last quiet beat before the footer. */
export function FAQSection() {
  return (
    <section className="band" aria-labelledby="faq-heading">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          <SectionHeading
            id="faq-heading"
            align="left"
            eyebrow="Questions"
            title="The things people ask before the site visit."
            description="If your question isn't here, the quickest answer is a call — nobody is on commission."
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
