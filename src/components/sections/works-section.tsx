"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { works, type Work } from "@/lib/works-data";
import { WorkCard } from "@/components/work-card";
import { WorkDetailModal } from "@/components/work-detail-modal";

export function WorksSection() {
  const { t, locale } = useLocale();
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 py-32">
      <motion.div
        className="max-w-7xl mx-auto w-full mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="text-mono-label text-foreground/60">
            {locale === "ko" ? "만든 것들" : "Selected Work"}
          </span>
        </div>
        <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-light">
          {t.worksTitle}
        </h2>
        <p
          className={`mt-4 text-base md:text-lg text-foreground/55 leading-snug max-w-md ${
            locale === "ko" ? "font-serif" : "font-sans"
          }`}
        >
          {t.worksSubtitle}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {works.map((work, index) => (
          <WorkCard
            key={work.id}
            work={work}
            index={index}
            onClick={() => setSelected(work)}
          />
        ))}
      </div>

      <WorkDetailModal work={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
