"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
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
  const [imageError, setImageError] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center cursor-pointer outline-none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-64 h-44 md:w-80 md:h-52 mb-5 overflow-hidden rounded-3xl border border-foreground/5 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
        <div
          className={`absolute inset-0 transition-colors duration-300 ${work.accentClass}`}
        />
        {!imageError ? (
          <Image
            src={work.thumbnail}
            alt={work.name}
            fill
            sizes="(min-width: 768px) 320px, 256px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground/30">
              {work.name}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
        {work.name}
      </h3>
    </motion.button>
  );
}
