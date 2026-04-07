import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/shared/container";
import { LEGAL_PAGES } from "@/lib/legal-content";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];
  if (!page) return {};

  const t = await getTranslations("Legal");
  return { title: t(page.titleKey) };
}

export default async function LegalPage({ params }: Props) {
  const { slug, locale } = await params;
  const page = LEGAL_PAGES[slug];

  if (!page) notFound();

  const t = await getTranslations("Legal");
  const content = page.content[locale as "en" | "ar"] ?? page.content.en;

  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t(page.titleKey)}
            </h1>
            <div className="mt-4 flex justify-center gap-6 text-sm text-primary-foreground/60">
              <span>
                {t("effectiveDate")}: {page.effectiveDate}
              </span>
              <span>
                {t("lastModified")}: {page.lastModified}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div
            className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </section>
    </>
  );
}
