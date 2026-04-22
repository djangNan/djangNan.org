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
      className="group flex flex-col items-stretch text-left cursor-pointer outline-none w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="relative w-full aspect-[16/10] mb-5 overflow-hidden bg-foreground/[0.04]">
        <div className={`absolute inset-0 ${work.accentClass}`} />
        {!imageError ? (
          <Image
            src={work.thumbnail}
            alt={work.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-6xl font-bold tracking-tight text-foreground/30">
              {work.name}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-display text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors duration-300">
          {work.name}
        </h3>
        <span className="text-mono-label text-foreground/40 whitespace-nowrap">
          view →
        </span>
      </div>
    </motion.button>
  );
}
