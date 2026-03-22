"use client";

import { motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";

export function WorksSection() {
  const { t, locale } = useLocale();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {t.worksTitle}
        </h2>
        <p
          className={`text-lg md:text-xl text-foreground/50 font-light ${
            locale === "ko" ? "font-serif" : "font-sans"
          }`}
        >
          {t.worksSubtitle}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl border border-dashed border-foreground/15 flex items-center justify-center">
          <p className="text-foreground/30 font-sans text-lg">
            {t.worksComingSoon}
          </p>
        </div>
      </motion.div>

    </section>
  );
}
