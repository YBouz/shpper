"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";

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
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader title={t("asSeenOn")} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {PRESS_LOGOS.map((logo) => (
            <div key={logo.name} className="grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto sm:h-10"
                sizes="120px"
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
