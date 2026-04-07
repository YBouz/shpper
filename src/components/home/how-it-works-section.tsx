"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
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
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          title={t("howItWorksTitle")}
          description={t("howItWorksDescription")}
        />

        {/* Desktop: interactive side-by-side */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left — step list */}
          <div className="flex flex-col gap-3">
            {STEPS.map((step, index) => {
              const isActive = active === index;
              return (
                <motion.button
                  key={step.key}
                  onClick={() => setActive(index)}
                  className={`group relative flex items-start gap-5 rounded-2xl border p-6 text-start transition-all duration-300 ${
                    isActive
                      ? "border-secondary/40 bg-secondary/5 shadow-lg shadow-secondary/5"
                      : "border-border bg-background hover:border-secondary/20 hover:shadow-sm"
                  }`}
                  layout
                >
                  {/* Step badge */}
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-secondary text-secondary-foreground shadow-md shadow-secondary/30"
                        : "bg-muted text-muted-foreground group-hover:bg-secondary/20 group-hover:text-secondary"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-base font-semibold transition-colors ${
                        isActive ? "text-foreground" : "text-foreground/70"
                      }`}
                    >
                      {t(`${step.key}Title`)}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 overflow-hidden text-sm leading-relaxed text-muted-foreground"
                        >
                          {t(`${step.key}Description`)}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStep"
                      className="absolute inset-y-2 inset-s-0 w-1 rounded-full bg-secondary"
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right — active image */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative h-96 w-64 overflow-hidden rounded-3xl bg-linear-to-b from-muted to-muted/30 shadow-2xl"
              >
                <Image
                  src={`${imageDir}/${STEPS[active].image}`}
                  alt={t(`${STEPS[active].key}Title`)}
                  fill
                  className="object-contain p-4"
                  sizes="256px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: card grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-6 text-center transition-all hover:border-secondary/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 inline-flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground shadow-md shadow-secondary/30">
                {index + 1}
              </div>
              <div className="relative mx-auto h-44 w-32 overflow-hidden rounded-2xl bg-linear-to-b from-muted to-muted/30">
                <Image
                  src={`${imageDir}/${step.image}`}
                  alt={t(`${step.key}Title`)}
                  fill
                  className="object-contain p-2"
                  sizes="128px"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold">
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
