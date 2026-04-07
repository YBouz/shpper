"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Crown, Medal, Award, Gem } from "lucide-react";

const TIERS = [
  { key: "silver", icon: Medal, color: "bg-gray-200 text-gray-600" },
  { key: "gold", icon: Crown, color: "bg-amber-100 text-amber-600" },
  { key: "platinum", icon: Award, color: "bg-slate-200 text-slate-600" },
  { key: "diamond", icon: Gem, color: "bg-sky-100 text-sky-600" },
] as const;

export function LoyaltySection() {
  const t = useTranslations("Home");

  return (
    <section className="bg-muted py-24 sm:py-32">
      <Container>
        <SectionHeader
          title={t("loyaltyTitle")}
          description={t("loyaltyDescription")}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl ${tier.color}`}
              >
                <tier.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">{t(`${tier.key}Tier`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`${tier.key}Description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
