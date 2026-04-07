"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/container";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const PRODUCTS = [
  "/images/products/product-1.jpeg",
  "/images/products/product-2.jpeg",
  "/images/products/product-3.jpeg",
  "/images/products/product-4.jpeg",
  "/images/products/product-5.jpeg",
];

export function HeroSection() {
  const t = useTranslations("Home");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PRODUCTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const mainImage = PRODUCTS[current];
  const sideImage1 = PRODUCTS[(current + 1) % PRODUCTS.length];
  const sideImage2 = PRODUCTS[(current + 2) % PRODUCTS.length];

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-[#0f1f2e] via-primary to-[#1a3550]" />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -inset-e-32 -top-32 size-125 rounded-full bg-secondary/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0], scale: [1, 0.8, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -bottom-32 -inset-s-32 size-100 rounded-full bg-blue-500/8 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 40, -10, 0], y: [0, -20, 40, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute left-1/3 top-1/4 size-75 rounded-full bg-secondary/5 blur-[80px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                <Sparkles className="size-3.5" />
                {t("discoverCta")}
              </span>
            </motion.div>

            {/* Animated gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]"
            >
              <span className="inline-block bg-linear-to-r from-white via-secondary to-white bg-size-[200%_auto] bg-clip-text text-transparent animate-[shimmer_6s_ease-in-out_infinite]">
                {t("heroTitle")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-primary-foreground/60"
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <AppStoreButtons />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex gap-8 border-t border-white/10 pt-8"
            >
              {[
                { value: 50, suffix: "+", label: "Countries" },
                { value: 10, suffix: "K+", label: "Users" },
                { value: 4.8, suffix: "", label: "App Rating", isDecimal: true },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-secondary">
                    {"isDecimal" in stat && stat.isDecimal ? (
                      "4.8"
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                    )}
                  </p>
                  <p className="text-xs font-medium text-primary-foreground/40">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Product carousel collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-130 w-full max-w-lg">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="absolute left-1/2 top-1/2 z-0 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/6"
              />

              {/* Main center — auto-rotating */}
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -8, 0] }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: -15 }}
                    transition={{
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                      rotateY: { duration: 0.4 },
                      y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    }}
                    className="overflow-hidden rounded-3xl border-2 border-white/15 shadow-2xl shadow-black/40"
                  >
                    <Image
                      src={mainImage}
                      alt="Shopping product"
                      width={240}
                      height={320}
                      className="h-80 w-60 object-cover"
                      sizes="240px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel dots */}
                <div className="mt-4 flex justify-center gap-1.5">
                  {PRODUCTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "w-6 bg-secondary" : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Top right card */}
              <motion.div
                animate={{ y: [0, -14, 0], rotate: [3, 5, 3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute inset-e-4 top-4 z-20"
              >
                <div className="overflow-hidden rounded-2xl border-2 border-white/10 shadow-xl shadow-black/30">
                  <Image
                    src={sideImage1}
                    alt="Shopping product"
                    width={170}
                    height={220}
                    className="h-48 w-36 object-cover"
                    sizes="170px"
                  />
                </div>
              </motion.div>

              {/* Bottom left card */}
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [-3, -5, -3] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 inset-s-4 z-20"
              >
                <div className="overflow-hidden rounded-2xl border-2 border-white/10 shadow-xl shadow-black/30">
                  <Image
                    src={sideImage2}
                    alt="Shopping product"
                    width={170}
                    height={220}
                    className="h-48 w-36 object-cover"
                    sizes="170px"
                  />
                </div>
              </motion.div>

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 z-0 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15 blur-[80px]" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
