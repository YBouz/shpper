import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutContent } from "@/components/about/about-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("About");
  return {
    title: t("title"),
    description: t("heroDescription"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", ar: "/ar/about" },
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
