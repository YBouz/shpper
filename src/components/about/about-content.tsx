"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import {
  Users,
  ShoppingBag,
  MapPin,
  Calendar,
  Globe,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function AboutContent() {
  const t = useTranslations("About");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Animated background */}
        <motion.div
          animate={{ x: [0, 20, -10, 0], y: [0, -30, 15, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -inset-e-32 -top-32 size-125 rounded-full bg-secondary/8 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -15, 10, 0], y: [0, 20, -10, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -bottom-32 -inset-s-32 size-100 rounded-full bg-blue-500/5 blur-[100px]"
        />

        <Container className="relative py-24 sm:py-32 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                <Globe className="size-3.5" />
                {t("title")}
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                {t("heroTitle")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/60">
                {t("heroDescription")}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                  <Calendar className="size-4 text-secondary" />
                  <span className="text-sm font-medium">{t("foundedYear")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                  <MapPin className="size-4 text-secondary" />
                  <span className="text-sm font-medium">{t("location")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-white/6"
              />
              <div className="relative aspect-square overflow-hidden rounded-full">
                <Image
                  src="/images/about/globe-phone.webp"
                  alt="Shpper global shopping platform"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 sm:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We Do
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                icon: Users,
                titleKey: "p2pTitle" as const,
                descKey: "p2pDescription" as const,
                color: "bg-primary text-primary-foreground",
                gradient: "from-primary/5 to-transparent",
              },
              {
                icon: ShoppingBag,
                titleKey: "shoppingTitle" as const,
                descKey: "shoppingDescription" as const,
                color: "bg-secondary text-secondary-foreground",
                gradient: "from-secondary/5 to-transparent",
              },
            ].map((card, index) => (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border p-8 transition-all duration-300 hover:shadow-xl"
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`mb-6 inline-flex size-14 items-center justify-center rounded-2xl ${card.color} shadow-lg`}
                  >
                    <card.icon className="size-7" />
                  </motion.div>

                  <h3 className="text-xl font-bold">{t(card.titleKey)}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {t(card.descKey)}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="size-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tagline */}
      <section className="relative overflow-hidden bg-secondary py-20">
        <motion.div
          animate={{ x: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -inset-e-20 top-0 size-60 rounded-full bg-white/10 blur-[80px]"
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <Heart className="size-8 text-secondary-foreground/60" />
            <p className="text-center text-3xl font-bold text-secondary-foreground sm:text-4xl">
              {t("tagline")}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Journey */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                <Sparkles className="size-3.5" />
                Since 2022
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {t("journeyTitle")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="group relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/about/hero.webp"
                  alt="The future of personalized shipping and shopping"
                  width={800}
                  height={450}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
              </div>
              <p className="mt-10 text-center text-lg leading-relaxed text-muted-foreground">
                {t("journeyDescription")}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
