import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactContent } from "@/components/contact/contact-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contact");
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
