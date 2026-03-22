"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { GlassButton } from "./glass-button";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  return (
    <GlassButton
      onClick={toggleTheme}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {mounted ? (
        theme === "light" ? (
          <Moon className="w-4 h-4 opacity-60" />
        ) : (
          <Sun className="w-4 h-4 opacity-60" />
        )
      ) : (
        <div className="w-4 h-4" />
      )}
    </GlassButton>
  );
}
