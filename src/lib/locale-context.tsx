"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { type Locale, translations } from "./i18n";

type Translations = (typeof translations)[Locale];

type LocaleContextType = {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ko");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ko" ? "en" : "ko"));
  }, []);

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
