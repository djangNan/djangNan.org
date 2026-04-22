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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        className="text-center mb-16 md:mb-20"
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

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
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
