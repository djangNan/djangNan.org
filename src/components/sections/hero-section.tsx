"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { GlassButton } from "../glass-button";

export function HeroSection() {
  const { t, locale } = useLocale();
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-14 md:pt-16 pb-16">
      {/* Top meta row — absolute so it doesn't affect vertical centering */}
      <motion.div
        className="absolute top-14 md:top-16 left-6 md:left-10 right-6 md:right-10 z-10 flex items-center justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <span className="text-mono-label text-foreground/60">
            EST. 2024 — SEOUL, KR <span className="text-orange-500">×</span> BAY AREA, US
          </span>
        </div>
      </motion.div>

      {/* Vertically centered stack, left-aligned */}
      <div className="relative z-10 flex flex-col items-start gap-8">
        <h1 className="font-serif font-bold tracking-tight text-[15vw] md:text-[10.5vw] leading-[0.82]">
          {/* d */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            d
          </motion.span>
          {/* j: white → orange */}
          <motion.span
            initial={{ opacity: 0, y: 20, color: "var(--foreground)" }}
            animate={{ opacity: 1, y: 0, color: "#f97316" }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              y: { duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
              color: { duration: 0.8, delay: 1.0, ease: "easeInOut" },
            }}
            className="inline-block"
          >
            j
          </motion.span>
          {/* a */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            a
          </motion.span>
          {/* n */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            n
          </motion.span>
          {/* g */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            g
          </motion.span>
          {/* N: tilt animation */}
          <motion.span
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: [-12, 8, -5, 3, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.7 },
              y: { duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
              rotate: { duration: 0.8, delay: 1.1, ease: "easeInOut" },
            }}
            className="inline-block italic text-neutral-800 dark:text-neutral-200"
            style={{
              WebkitTextStroke: "0.5px rgba(120,120,120,0.3)",
              transformOrigin: "bottom center",
            }}
          >
            N
          </motion.span>
          {/* a */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            a
          </motion.span>
          {/* n */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            n
          </motion.span>
        </h1>

        <motion.div
          key={locale + "-tagline"}
          className="min-w-0 mt-6 md:mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className={`text-xl md:text-2xl leading-tight font-medium tracking-tight md:whitespace-nowrap ${
              locale === "ko" ? "font-serif" : "font-[var(--font-display)]"
            }`}
          >
            {t.tagline}
          </p>
          <p className="mt-3 text-sm text-foreground/55 leading-relaxed font-sans md:whitespace-nowrap">
            {t.aboutText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassButton
            as="a"
            size="lg"
            href="https://github.com/djangNan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background/50 text-foreground/80 hover:text-foreground hover:bg-background/80 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5 opacity-70" />
            <span className="tracking-wide">{t.cta}</span>
            <ArrowUpRight className="w-5 h-5 text-foreground/50 group-hover:text-orange-500 group-hover:rotate-45 transition-all duration-300" />
          </GlassButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-mono-label text-foreground/40">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-foreground/30"
        />
      </motion.div>
    </section>
  );
}
