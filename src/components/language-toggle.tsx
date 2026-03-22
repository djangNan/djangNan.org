"use client";

import { Globe } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { GlassButton } from "./glass-button";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <GlassButton
      size="sm"
      onClick={toggleLocale}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <Globe className="w-4 h-4 opacity-60" />
      <span>{locale === "ko" ? "EN" : "한글"}</span>
    </GlassButton>
  );
}
