import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { EnquiryBand } from "@/components/home/EnquiryBand";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PartnersCarousel } from "@/components/home/PartnersCarousel";
import { WhyChooseArtek } from "@/components/home/WhyChooseArtek";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsightsSection } from "@/components/home/InsightsSection";
// import { LocationsSection } from "@/components/home/LocationsSection";
import { FAQSection } from "@/components/home/FAQSection";
// import { FinalCTA } from "@/components/home/FinalCTA";

/** Homepage — narrative order: hook → proof → difference → process → offering → enquiry → partners → sectors → stories → insights → questions. */
export default function Home() {
  return (
    <article>
      <HeroSection />
      <TrustIndicators />
      <WhyChooseArtek />
      <ProcessSection />
      <SolutionsSection />
      <EnquiryBand />
      <PartnersCarousel />
      <IndustriesSection />
      <TestimonialsSection />
      <InsightsSection />
      {/* <LocationsSection /> */}
      <FAQSection />
      {/* <FinalCTA /> */}
    </article>
  );
}
