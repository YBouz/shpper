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

  return (
    <section className="border-y border-border bg-muted/30 py-16 sm:py-20">
      <Container>
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t("asSeenOn")}
        </p>

        <div className="grid grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid-cols-6 sm:gap-12">
          {PRESS_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={52}
                className="h-6 w-auto opacity-50 transition-opacity duration-300 hover:opacity-100 sm:h-8"
                sizes="160px"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
