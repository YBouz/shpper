"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";

const PRESS_LOGOS = [
  { name: "Street Insider", src: "/images/press/streetinsider.png" },
  { name: "AP News", src: "/images/press/ap-news.png" },
  { name: "The Globe and Mail", src: "/images/press/globe-and-mail.png" },
  { name: "Benzinga", src: "/images/press/benzinga.png" },
  { name: "Digital Journal", src: "/images/press/digital-journal.png" },
  { name: "Business Insider", src: "/images/press/business-insider.png" },
];

export function PressSection() {
  const t = useTranslations("Home");

  // Duplicate for seamless loop
  const logos = [...PRESS_LOGOS, ...PRESS_LOGOS];

  return (
    <section className="overflow-hidden border-y border-border bg-muted/30 py-14 sm:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t("asSeenOn")}
        </p>
      </Container>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex w-max items-center gap-16"
        >
          {logos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={48}
                className="h-8 w-auto"
                sizes="140px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
