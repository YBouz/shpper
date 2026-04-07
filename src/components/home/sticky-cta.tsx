"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/container";
import { ArrowRight, X } from "lucide-react";

export function StickyCta() {
  const t = useTranslations("Home");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~1 viewport
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 inset-x-0 z-40"
        >
          <div className="border-t border-secondary/20 bg-primary/95 backdrop-blur-lg">
            <Container>
              <div className="flex h-16 items-center justify-between gap-4">
                <p className="hidden text-sm font-medium text-primary-foreground/80 sm:block">
                  {t("readyDescription")}
                </p>
                <p className="text-sm font-medium text-primary-foreground/80 sm:hidden">
                  {t("readyCta")}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.shpper.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-secondary px-5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/30 transition-all hover:bg-secondary/90 hover:shadow-xl"
                  >
                    {t("downloadApp")}
                    <ArrowRight className="size-4" />
                  </a>
                  <button
                    onClick={() => setDismissed(true)}
                    className="flex size-8 items-center justify-center rounded-full text-primary-foreground/40 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
