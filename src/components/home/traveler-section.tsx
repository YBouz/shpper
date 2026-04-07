"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { TiltCard } from "@/components/shared/tilt-card";
import { Map, LayoutDashboard, MessageSquare, ArrowRight } from "lucide-react";

const FEATURES = [
  { key: "tripPlanner", icon: Map, color: "bg-blue-500" },
  { key: "cockpit", icon: LayoutDashboard, color: "bg-primary" },
  { key: "requests", icon: MessageSquare, color: "bg-emerald-500" },
] as const;

export function TravelerSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background accent */}
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute -inset-e-40 top-20 size-80 rounded-full bg-secondary/5 blur-[80px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              For Travelers
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("travelerTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t("travelerDescription")}
            </p>
            <div className="mt-8">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.shpper.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-secondary px-8 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-colors hover:bg-secondary/90"
              >
                {t("joinCta")}
                <ArrowRight className="size-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="flex flex-col gap-4">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 6 }}
              >
              <TiltCard className="group flex items-start gap-5 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${feature.color} text-white shadow-lg`}
                >
                  <feature.icon className="size-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t(`${feature.key}`)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t(`${feature.key}Description`)}
                  </p>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground/30 transition-all group-hover:translate-x-1 group-hover:text-secondary" />
              </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
