"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { HelpCircle, ShoppingBag, Plane } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BUYER_QUESTIONS = Array.from({ length: 9 }, (_, i) => i + 1);
const TRAVELER_QUESTIONS = Array.from({ length: 6 }, (_, i) => i + 1);

export function FaqContent() {
  const t = useTranslations("Faq");
  const [tab, setTab] = useState<"buyer" | "traveler">("buyer");

  const questions = tab === "buyer" ? BUYER_QUESTIONS : TRAVELER_QUESTIONS;
  const prefix = tab === "buyer" ? "buyer" : "traveler";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
        <motion.div
          animate={{ x: [0, 20, -10, 0], y: [0, -20, 10, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute -inset-e-32 -top-32 size-100 rounded-full bg-secondary/8 blur-[100px]"
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-secondary/20"
            >
              <HelpCircle className="size-8 text-secondary" />
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/60">
              {t("description")}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-24 sm:py-32">
        <Container className="max-w-3xl">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 flex justify-center"
          >
            <div className="inline-flex rounded-full bg-muted p-1.5 shadow-sm">
              <button
                onClick={() => setTab("buyer")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  tab === "buyer"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ShoppingBag className="size-4" />
                {t("buyerTab")}
              </button>
              <button
                onClick={() => setTab("traveler")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  tab === "traveler"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Plane className="size-4" />
                {t("travelerTab")}
              </button>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Accordion className="space-y-3">
              {questions.map((num, index) => (
                <motion.div
                  key={`${prefix}-${num}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`${prefix}-${num}`}
                    className="group rounded-xl border border-border bg-background px-6 transition-all hover:border-secondary/30 hover:shadow-sm"
                  >
                    <AccordionTrigger className="text-start text-base font-medium hover:no-underline">
                      <span className="me-3 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary">
                        {num}
                      </span>
                      {t(`${prefix}Q${num}`)}
                    </AccordionTrigger>
                    <AccordionContent className="ps-9 text-muted-foreground">
                      {t(`${prefix}A${num}`)}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
