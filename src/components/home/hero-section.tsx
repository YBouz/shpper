"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-[#162536] via-primary to-[#1a3550]" />
        <div className="absolute -inset-e-48 -top-48 size-125 rounded-full bg-secondary/8 blur-[100px]" />
        <div className="absolute -bottom-24 -inset-s-24 size-100 rounded-full bg-secondary/5 blur-[80px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                <span className="size-1.5 rounded-full bg-secondary" />
                {t("discoverCta")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.5rem]"
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-primary-foreground/70"
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <AppStoreButtons />
            </motion.div>
          </div>

          {/* Product images collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-120 w-full max-w-md">
              {/* Main center image */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border-2 border-white/10 shadow-2xl">
                <Image
                  src="/images/products/product-1.jpeg"
                  alt="Shopping product"
                  width={220}
                  height={300}
                  className="h-75 w-55 object-cover"
                  sizes="220px"
                  priority
                />
              </div>

              {/* Top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-e-0 top-2 z-10 overflow-hidden rounded-2xl border-2 border-white/10 shadow-xl"
              >
                <Image
                  src="/images/products/product-2.jpeg"
                  alt="Shopping product"
                  width={160}
                  height={200}
                  className="h-50 w-40 object-cover"
                  sizes="160px"
                />
              </motion.div>

              {/* Bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 inset-s-0 z-10 overflow-hidden rounded-2xl border-2 border-white/10 shadow-xl"
              >
                <Image
                  src="/images/products/product-3.jpeg"
                  alt="Shopping product"
                  width={160}
                  height={200}
                  className="h-50 w-40 object-cover"
                  sizes="160px"
                />
              </motion.div>

              {/* Decorative glow behind images */}
              <div className="absolute left-1/2 top-1/2 z-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[60px]" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
