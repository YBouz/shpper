import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { LoyaltySection } from "@/components/home/loyalty-section";
import { TravelerSection } from "@/components/home/traveler-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { PressSection } from "@/components/home/press-section";
import { CtaSection } from "@/components/home/cta-section";
import { StickyCta } from "@/components/home/sticky-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <LoyaltySection />
      <TravelerSection />
      <TestimonialsSection />
      <HighlightsSection />
      <PressSection />
      <CtaSection />
      <StickyCta />
    </>
  );
}
