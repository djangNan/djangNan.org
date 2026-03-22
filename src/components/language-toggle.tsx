"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function LanguageToggle() {
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
