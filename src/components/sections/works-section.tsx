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
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
      <motion.div
        className="text-center mb-16 md:mb-20 px-6"
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

      <div className="relative w-full">
        <div
          className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 md:px-[max(3rem,calc((100vw-1152px)/2))] pb-8 works-scroller"
          role="list"
        >
          {works.map((work, index) => (
            <div key={work.id} role="listitem">
              <WorkCard
                work={work}
                index={index}
                onClick={() => setSelected(work)}
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-10 md:w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 md:w-16 bg-gradient-to-l from-background to-transparent" />
      </div>

      <WorkDetailModal work={selected} onClose={() => setSelected(null)} />

      <style jsx>{`
        .works-scroller::-webkit-scrollbar {
          height: 6px;
        }
        .works-scroller::-webkit-scrollbar-track {
          background: transparent;
        }
        .works-scroller::-webkit-scrollbar-thumb {
          background: rgba(120, 120, 120, 0.2);
          border-radius: 999px;
        }
        .works-scroller {
          scrollbar-width: thin;
          scrollbar-color: rgba(120, 120, 120, 0.2) transparent;
        }
      `}</style>
    </section>
  );
}
