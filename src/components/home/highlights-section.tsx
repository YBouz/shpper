"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Globe, Smartphone, Leaf } from "lucide-react";

const HIGHLIGHTS = [
  {
    key: "globalMarketplace",
    image: "/images/highlights/global-market.webp",
    icon: Globe,
    speed: 0.15,
  },
  {
    key: "mobileFirst",
    image: "/images/highlights/mobile-first.webp",
    icon: Smartphone,
    speed: 0.25,
  },
  {
    key: "ecoFriendly",
    image: "/images/highlights/eco-friendly.webp",
    icon: Leaf,
    speed: 0.1,
  },
] as const;

function ParallaxCard({
  item,
  index,
  title,
  description,
}: {
  item: (typeof HIGHLIGHTS)[number];
  index: number;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40 * item.speed, -40 * item.speed]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden sm:h-64">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={item.image}
            alt={title}
            fill
            className="scale-110 object-cover transition-transform duration-700 group-hover:scale-[1.15]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

        {/* Icon badge */}
        <div className="absolute bottom-4 inset-s-4 z-10">
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white/90 text-primary shadow-lg backdrop-blur-sm">
            <item.icon className="size-5" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function HighlightsSection() {
  const t = useTranslations("Home");

  return (
    <section className="bg-muted/50 py-16 sm:py-32">
      <Container>
        <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <ParallaxCard
              key={item.key}
              item={item}
              index={index}
              title={t(item.key)}
              description={t(`${item.key}Description`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
