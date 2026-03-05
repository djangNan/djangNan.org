"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Globe, Sun, Moon } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { useTheme } from "@/lib/theme-context";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 border border-foreground/10 hover:border-orange-500/40 bg-background/70 backdrop-blur-md rounded-full transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 opacity-60" />
      ) : (
        <Sun className="w-4 h-4 opacity-60" />
      )}
    </motion.button>
  );
}

function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <motion.button
      onClick={toggleLocale}
      className="flex items-center gap-2 text-sm font-sans font-medium border border-foreground/10 hover:border-orange-500/40 bg-background/70 backdrop-blur-md px-4 py-2 rounded-full transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="w-4 h-4 opacity-60" />
      <span>{locale === "ko" ? "EN" : "한글"}</span>
    </motion.button>
  );
}

function LandingContent() {
  const { t, locale } = useLocale();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Top Right Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Background Animated Gradient */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-orange-400/20 to-transparent dark:from-orange-600/10 dark:to-transparent rounded-full opacity-60 blur-3xl mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-rose-400/10 to-transparent dark:from-rose-600/10 dark:to-transparent rounded-full opacity-50 blur-3xl mix-blend-multiply dark:mix-blend-screen translate-x-20 translate-y-20"
        />
      </div>

      <main className="z-10 flex flex-col items-center text-center px-6">
        {/* Title */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold tracking-tight mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>d</span>
          <span className="text-orange-500">j</span>
          <span>ang</span>
          <span className="italic text-neutral-800 dark:text-neutral-200" style={{ WebkitTextStroke: "0.5px rgba(120,120,120,0.3)" }}>N</span>
          <span>an</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          key={locale + "-tagline"}
          className={`text-xl md:text-2xl text-foreground/70 mb-8 font-light whitespace-nowrap tracking-wide ${
            locale === "ko" ? "font-serif" : "font-sans"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.tagline}
        </motion.p>

        {/* About Section */}
        <motion.p
          key={locale + "-about"}
          className="text-sm md:text-base text-foreground/50 mb-12 font-sans font-light max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.aboutText}
        </motion.p>

        {/* GitHub Link */}
        <motion.a
          href="https://github.com/djangNan"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-sm md:text-base font-medium font-sans border border-foreground/10 hover:border-orange-500/40 bg-background/50 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 backdrop-blur-md px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Github className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="tracking-wide">{t.cta}</span>
          <ArrowRight className="w-5 h-5 ml-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-orange-500 transition-all" />
        </motion.a>
      </main>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-6 text-xs text-foreground/30 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        djangNan.org
      </motion.footer>
    </div>
  );
}

export default function Home() {
  return <LandingContent />;
}
