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
  const imageDir =
    locale === "ar" ? "/images/how-it-works/ar" : "/images/how-it-works";

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          title={t("howItWorksTitle")}
          description={t("howItWorksDescription")}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border bg-background p-6 text-center transition-all hover:border-secondary/40 hover:shadow-lg"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 inset-s-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                <div className="inline-flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground shadow-sm">
                  {index + 1}
                </div>
              </div>

              {/* Phone-style image frame */}
              <div className="relative mx-auto mt-2 h-56 w-40 overflow-hidden rounded-2xl bg-linear-to-b from-muted to-muted/50">
                <Image
                  src={`${imageDir}/${step.image}`}
                  alt={t(`${step.key}Title`)}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  sizes="160px"
                />
              </div>

              <h3 className="mt-5 text-base font-semibold">
                {t(`${step.key}Title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`${step.key}Description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
