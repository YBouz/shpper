import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutContent } from "@/components/about/about-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("About");
  return {
    title: t("title"),
    description: t("heroDescription"),
    alternates: { canonical: "/about" },
    openGraph: {
      images: [{ url: "/images/about/hero.webp", width: 1200, height: 630 }],
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
