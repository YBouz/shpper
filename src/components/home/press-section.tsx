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
    <section className="border-y border-border py-16 sm:py-20">
      <Container>
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {t("asSeenOn")}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14"
        >
          {PRESS_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={48}
                className="h-7 w-auto sm:h-9"
                sizes="140px"
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
