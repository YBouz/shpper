"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
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
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t("description")}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-24 sm:py-32">
        <Container className="max-w-3xl">
          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-full bg-muted p-1">
              <button
                onClick={() => setTab("buyer")}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  tab === "buyer"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("buyerTab")}
              </button>
              <button
                onClick={() => setTab("traveler")}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  tab === "traveler"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("travelerTab")}
              </button>
            </div>
          </div>

          {/* Accordion */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Accordion className="space-y-3">
              {questions.map((num) => (
                <AccordionItem
                  key={`${prefix}-${num}`}
                  value={`${prefix}-${num}`}
                  className="rounded-xl border border-border bg-background px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-start text-base font-medium hover:no-underline">
                    {t(`${prefix}Q${num}`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t(`${prefix}A${num}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
