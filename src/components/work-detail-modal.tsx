"use client";

import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useLocale } from "@/lib/locale-context";
import type { Work } from "@/lib/works-data";
import { GlassButton } from "./glass-button";

const MORPH = { type: "spring", stiffness: 260, damping: 32 } as const;

export function WorkDetailModal({
  work,
  onClose,
}: {
  work: Work | null;
  onClose: () => void;
}) {
  const { t, locale } = useLocale();

  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [work, onClose]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          key={`modal-${work.id}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="absolute inset-0 bg-background/75 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
          />

          <div className="relative w-full max-w-5xl max-h-full overflow-y-auto">
            <div className="relative flex flex-col md:flex-row rounded-[24px] overflow-hidden bg-background border border-foreground/10 shadow-2xl">
              <motion.div
                layoutId={`work-cover-${work.id}`}
                className="relative w-full md:w-1/2 aspect-[3/5] md:aspect-auto md:min-h-[560px] overflow-hidden bg-white dark:bg-black shrink-0"
                style={{
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                transition={MORPH}
              >
                <Image
                  src={work.cover.light}
                  alt={work.name}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-contain block dark:hidden"
                  priority
                />
                <Image
                  src={work.cover.dark}
                  alt={work.name}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-contain hidden dark:block"
                  priority
                />
              </motion.div>

              <motion.div
                className="flex-1 flex flex-col justify-center gap-4 p-6 sm:p-10 md:p-12"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.12, delay: 0 },
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-[10px] sm:text-xs text-foreground/50 font-sans tracking-[0.22em] uppercase">
                  {work.kind[locale]} · {t.worksReleased} {work.releaseDate}
                </p>
                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-serif), serif" }}
                >
                  {work.name}
                </h3>
                <p
                  className={`text-lg sm:text-xl md:text-2xl text-foreground/80 font-light leading-snug ${
                    locale === "ko" ? "font-serif" : "font-sans"
                  }`}
                >
                  {work.tagline[locale]}
                </p>
                <p className="text-sm md:text-base text-foreground/60 font-sans leading-relaxed">
                  {work.description[locale]}
                </p>
                <div className="mt-2">
                  <GlassButton
                    as="a"
                    size="lg"
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-orange-50/50 dark:hover:bg-orange-950/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="tracking-wide">{t.worksVisit}</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </GlassButton>
                </div>
              </motion.div>

              <motion.button
                type="button"
                onClick={onClose}
                aria-label={t.worksClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-foreground/10 border border-foreground/10 backdrop-blur-md text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0 },
                }}
                transition={{ duration: 0.25, delay: 0.2 }}
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
