"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { Sparkles } from "lucide-react";

export function CtaSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(253,190,18,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(253,190,18,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(253,190,18,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(253,190,18,0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute right-[15%] top-[20%] size-3 rounded-full bg-secondary/30"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute left-[20%] bottom-[25%] size-2 rounded-full bg-secondary/20"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-[10%] top-[40%] size-1.5 rounded-full bg-white/10"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-secondary/20"
          >
            <Sparkles className="size-8 text-secondary" />
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("readyCta")}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/60">
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
