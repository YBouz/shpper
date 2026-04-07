import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { LoyaltySection } from "@/components/home/loyalty-section";
import { TravelerSection } from "@/components/home/traveler-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { PressSection } from "@/components/home/press-section";
import { CtaSection } from "@/components/home/cta-section";
import { StickyCta } from "@/components/home/sticky-cta";
import { JsonLd } from "@/components/shared/json-ld";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://shpper.com";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shpper",
  url: BASE_URL,
  logo: `${BASE_URL}/images/brand/logo-yellow.png`,
  description:
    "Peer-to-peer global shopping platform connecting buyers with travelers.",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.instagram.com/shpperapp/",
    "https://www.youtube.com/@shpperNET",
    "https://www.tiktok.com/@shppernet",
    "https://www.facebook.com/shpperNET/",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shpper",
  url: BASE_URL,
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Shpper",
  operatingSystem: "iOS, Android",
  applicationCategory: "ShoppingApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "500",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <JsonLd data={softwareLd} />
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
