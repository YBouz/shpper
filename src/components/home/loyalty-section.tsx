"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { TiltCard } from "@/components/shared/tilt-card";
import { Crown, Medal, Award, Gem } from "lucide-react";

const TIERS = [
  {
    key: "silver",
    icon: Medal,
    iconBg: "bg-gray-100 text-gray-500",
    gradient: "from-gray-200 to-gray-300",
    glow: "group-hover:shadow-gray-200/50",
  },
  {
    key: "gold",
    icon: Crown,
    iconBg: "bg-amber-50 text-amber-500",
    gradient: "from-amber-200 to-yellow-300",
    glow: "group-hover:shadow-amber-200/50",
  },
  {
    key: "platinum",
    icon: Award,
    iconBg: "bg-slate-100 text-slate-500",
    gradient: "from-slate-300 to-slate-400",
    glow: "group-hover:shadow-slate-300/50",
  },
  {
    key: "diamond",
    icon: Gem,
    iconBg: "bg-sky-50 text-sky-500",
    gradient: "from-sky-200 to-blue-300",
    glow: "group-hover:shadow-sky-200/50",
  },
] as const;

export function LoyaltySection() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden bg-muted/50 py-16 sm:py-32">
      {/* Decorative background shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute -inset-e-20 top-10 size-64 rounded-full border border-dashed border-secondary/10"
      />

      <Container className="relative">
        <SectionHeader
          title={t("loyaltyTitle")}
          description={t("loyaltyDescription")}
        />

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <TiltCard className={`group relative overflow-hidden rounded-2xl bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tier.glow}`}>
              {/* Shimmer gradient top bar */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${tier.gradient}`}
              />

              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`mb-4 inline-flex size-14 items-center justify-center rounded-2xl ${tier.iconBg}`}
              >
                <tier.icon className="size-7" />
              </motion.div>

              <h3 className="text-lg font-bold">{t(`${tier.key}Tier`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`${tier.key}Description`)}
              </p>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
