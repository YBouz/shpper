"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";

const HIGHLIGHTS = [
  { key: "globalMarketplace", image: "/images/highlights/global-market.webp" },
  { key: "mobileFirst", image: "/images/highlights/mobile-first.webp" },
  { key: "ecoFriendly", image: "/images/highlights/eco-friendly.webp" },
] as const;

export function HighlightsSection() {
  const t = useTranslations("Home");

  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={item.image}
                  alt={t(item.key)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{t(item.key)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`${item.key}Description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
