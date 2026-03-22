"use client";

import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
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
