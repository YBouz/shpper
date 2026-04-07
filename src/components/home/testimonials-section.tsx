"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    nameKey: "testimonial1Name",
    roleKey: "testimonial1Role",
    textKey: "testimonial1Text",
    rating: 5,
    avatar: "SA",
  },
  {
    nameKey: "testimonial2Name",
    roleKey: "testimonial2Role",
    textKey: "testimonial2Text",
    rating: 5,
    avatar: "MK",
  },
  {
    nameKey: "testimonial3Name",
    roleKey: "testimonial3Role",
    textKey: "testimonial3Text",
    rating: 5,
    avatar: "FH",
  },
  {
    nameKey: "testimonial4Name",
    roleKey: "testimonial4Role",
    textKey: "testimonial4Text",
    rating: 4,
    avatar: "RD",
  },
] as const;

export function TestimonialsSection() {
  const t = useTranslations("Home");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(
      (prev) =>
        (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="relative overflow-hidden py-16 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-s-0 top-1/4 size-80 rounded-full bg-secondary/5 blur-[100px]" />

      <Container className="relative">
        <SectionHeader
          title={t("testimonialsTitle")}
          description={t("testimonialsDescription")}
        />

        <div className="relative mx-auto mt-10 max-w-3xl sm:mt-16">
          {/* Quote icon */}
          <div className="absolute -top-6 inset-s-0 z-10">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30">
              <Quote className="size-5" />
            </div>
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-3xl border border-border bg-background p-5 pt-8 shadow-lg sm:p-12 sm:pt-14">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < testimonial.rating
                          ? "fill-secondary text-secondary"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-lg leading-relaxed text-foreground/80 sm:text-xl">
                  &ldquo;{t(testimonial.textKey)}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{t(testimonial.nameKey)}</p>
                    <p className="text-sm text-muted-foreground">
                      {t(testimonial.roleKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-secondary"
                        : "w-2 bg-border hover:bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
