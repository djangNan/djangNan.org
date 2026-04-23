"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import type { Work } from "@/lib/works-data";

export function WorkCard({
  work,
  index,
  onClick,
}: {
  work: Work;
  index: number;
  onClick: () => void;
}) {
  const { locale } = useLocale();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative shrink-0 snap-center w-[78vw] max-w-[360px] md:w-[340px] lg:w-[380px] outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-label={`${work.name} — ${work.tagline[locale]}`}
    >
      <motion.div
        layoutId={`work-cover-${work.id}`}
        className="relative w-full aspect-[3/5] overflow-hidden bg-white dark:bg-black"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 30 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ filter: hovered ? "grayscale(0)" : "grayscale(1)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={work.cover.light}
            alt={work.name}
            fill
            sizes="(min-width: 768px) 380px, 78vw"
            className="object-contain block dark:hidden"
          />
          <Image
            src={work.cover.dark}
            alt={work.name}
            fill
            sizes="(min-width: 768px) 380px, 78vw"
            className="object-contain hidden dark:block"
          />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
