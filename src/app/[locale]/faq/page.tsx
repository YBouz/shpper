import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FaqContent } from "@/components/faq/faq-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Faq");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function FaqPage() {
  return <FaqContent />;
}
