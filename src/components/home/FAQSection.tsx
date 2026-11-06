import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { homeFaqs } from "@/data/faqs";

/** Homepage Section 8 — SEO-friendly accessible FAQ. */
export function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="faq-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers about ARTEK's CCTV, IT and networking services in Dubai."
        />
        <FAQAccordion faqs={homeFaqs} className="mt-10" />
      </div>
    </section>
  );
}
