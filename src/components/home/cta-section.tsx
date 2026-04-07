"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function CtaSection() {
  const t = useTranslations("Home");

  return (
    <section className="bg-primary py-24 text-primary-foreground sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("readyCta")}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {t("readyDescription")}
          </p>
          <div className="mt-10 flex justify-center">
            <AppStoreButtons />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
