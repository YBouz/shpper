"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Users, ShoppingBag, MapPin, Calendar } from "lucide-react";

export function AboutContent() {
  const t = useTranslations("About");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="absolute -end-32 -top-32 size-96 rounded-full bg-secondary/10 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {t("heroTitle")}
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                {t("heroDescription")}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="size-5 text-secondary" />
                  <span className="text-sm font-medium">{t("foundedYear")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-secondary" />
                  <span className="text-sm font-medium">{t("location")}</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto aspect-square w-full max-w-md"
            >
              <Image
                src="/images/about/globe-phone.webp"
                alt="Shpper global shopping platform"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Business Model */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border p-8"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Users className="size-6" />
              </div>
              <h3 className="text-xl font-bold">{t("p2pTitle")}</h3>
              <p className="mt-4 text-muted-foreground">{t("p2pDescription")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border p-8"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <ShoppingBag className="size-6" />
              </div>
              <h3 className="text-xl font-bold">{t("shoppingTitle")}</h3>
              <p className="mt-4 text-muted-foreground">
                {t("shoppingDescription")}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Tagline */}
      <section className="bg-secondary py-16">
        <Container>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-secondary-foreground sm:text-4xl"
          >
            {t("tagline")}
          </motion.p>
        </Container>
      </section>

      {/* Journey */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeader title={t("journeyTitle")} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/hero.webp"
                  alt="The future of personalized shipping and shopping"
                  width={800}
                  height={450}
                  className="w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <p className="mt-8 text-center text-lg text-muted-foreground">
                {t("journeyDescription")}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
