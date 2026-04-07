"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32 lg:py-40">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-light opacity-90" />
      <div className="absolute -end-32 -top-32 size-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-32 -start-32 size-96 rounded-full bg-secondary/5 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
              {t("discoverCta")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t("heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80"
          >
            {t("heroDescription")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <AppStoreButtons />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="size-5 text-primary-foreground/40" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
