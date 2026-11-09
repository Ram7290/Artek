import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { PartnersCarousel } from "@/components/home/PartnersCarousel";
import { WhyChooseArtek } from "@/components/home/WhyChooseArtek";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
// import { LocationsSection } from "@/components/home/LocationsSection";
import { FAQSection } from "@/components/home/FAQSection";
// import { FinalCTA } from "@/components/home/FinalCTA";

/** Homepage — exact section order as specified. */
export default function Home() {
  return (
    <article>
      <HeroSection />
      <TrustIndicators />
      <WhyChooseArtek />
      <SolutionsSection />
      <PartnersCarousel />
      <IndustriesSection />
      <TestimonialsSection />
      {/* <LocationsSection /> */}
      <FAQSection />
      {/* <FinalCTA /> */}
    </article>
  );
}
