"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Github } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { GlassButton } from "../glass-button";

export function HeroSection() {
  const { t, locale } = useLocale();
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-orange-400/20 to-transparent dark:from-orange-600/10 dark:to-transparent rounded-full opacity-60"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-rose-400/10 to-transparent dark:from-rose-600/10 dark:to-transparent rounded-full opacity-50 translate-x-20 translate-y-20"
        />
      </div>

      <div className="z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-12">
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
            style={{ WebkitTextStroke: "0.5px rgba(120,120,120,0.3)", transformOrigin: "bottom center" }}
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

        <motion.p
          key={locale + "-tagline"}
          className={`text-xl md:text-2xl text-foreground/70 mb-8 font-light md:whitespace-nowrap tracking-wide ${
            locale === "ko" ? "font-serif" : "font-sans"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.tagline}
        </motion.p>

        <motion.p
          key={locale + "-about"}
          className="text-sm md:text-base text-foreground/50 mb-12 font-sans font-light max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.aboutText}
        </motion.p>

        <GlassButton
          as="a"
          size="lg"
          href="https://github.com/djangNan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/50 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Github className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="tracking-wide">{t.cta}</span>
          <ArrowRight className="w-5 h-5 ml-1 text-neutral-400 group-hover:translate-x-1 group-hover:text-orange-500 transition-all" />
        </GlassButton>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
