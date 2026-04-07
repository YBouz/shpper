import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FaqContent } from "@/components/faq/faq-content";
import { JsonLd } from "@/components/shared/json-ld";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Faq");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/faq" },
  };
}

export default async function FaqPage() {
  const t = await getTranslations("Faq");

  const buyerQuestions = Array.from({ length: 9 }, (_, i) => ({
    "@type": "Question" as const,
    name: t(`buyerQ${i + 1}`),
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: t(`buyerA${i + 1}`),
    },
  }));

  const travelerQuestions = Array.from({ length: 6 }, (_, i) => ({
    "@type": "Question" as const,
    name: t(`travelerQ${i + 1}`),
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: t(`travelerA${i + 1}`),
    },
  }));

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...buyerQuestions, ...travelerQuestions],
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <FaqContent />
    </>
  );
}
