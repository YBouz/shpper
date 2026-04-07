import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactContent } from "@/components/contact/contact-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Contact");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", ar: "/ar/contact" },
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
