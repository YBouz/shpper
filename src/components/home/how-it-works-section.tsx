"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";

const STEPS = [
  { key: "step1", image: "step-1.png" },
  { key: "step2", image: "step-2.png" },
  { key: "step3", image: "step-3.png" },
  { key: "step4", image: "step-4.png" },
] as const;

export function HowItWorksSection() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const imageDir = locale === "ar" ? "/images/how-it-works/ar" : "/images/how-it-works";

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          title={t("howItWorksTitle")}
          description={t("howItWorksDescription")}
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-6 size-48 overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={`${imageDir}/${step.image}`}
                  alt={t(`${step.key}Title`)}
                  fill
                  className="object-contain p-4 transition-transform group-hover:scale-105"
                  sizes="192px"
                />
              </div>
              <div className="mb-2 inline-flex size-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{t(`${step.key}Title`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`${step.key}Description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
