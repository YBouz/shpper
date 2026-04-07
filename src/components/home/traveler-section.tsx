"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Map, LayoutDashboard, MessageSquare } from "lucide-react";

const FEATURES = [
  { key: "tripPlanner", icon: Map },
  { key: "cockpit", icon: LayoutDashboard },
  { key: "requests", icon: MessageSquare },
] as const;

export function TravelerSection() {
  const t = useTranslations("Home");

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("travelerTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("travelerDescription")}
            </p>
            <div className="mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.shpper.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
              >
                {t("joinCta")}
              </a>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="flex flex-col gap-4">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-secondary/50"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <feature.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{t(`${feature.key}`)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`${feature.key}Description`)}
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
