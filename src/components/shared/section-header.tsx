"use client";

import { motion } from "framer-motion";

export function SectionHeader({
  title,
  description,
  className = "",
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
