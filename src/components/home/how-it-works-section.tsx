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

        <div className="relative mt-16">
          {/* Connecting line (desktop only) */}
          <div className="absolute top-35 right-[12.5%] left-[12.5%] hidden h-0.5 bg-linear-to-r from-secondary/0 via-secondary/30 to-secondary/0 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative text-center"
              >
                {/* Card */}
                <div className="relative rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5">
                  {/* Step number — floating on connecting line */}
                  <div className="relative z-10 mx-auto mb-4 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="inline-flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground shadow-md shadow-secondary/30"
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Phone image */}
                  <div className="relative mx-auto h-52 w-36 overflow-hidden rounded-2xl bg-linear-to-b from-muted to-muted/30">
                    <Image
                      src={`${imageDir}/${step.image}`}
                      alt={t(`${step.key}Title`)}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                      sizes="144px"
                    />
                  </div>

                  <h3 className="mt-5 text-base font-semibold">
                    {t(`${step.key}Title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`${step.key}Description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
