"use client";

import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import type { Work } from "@/lib/works-data";
import { GlassButton } from "./glass-button";

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
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-background/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl my-8 md:my-16 mx-4 md:mx-6 bg-background rounded-3xl border border-foreground/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t.worksClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-background/70 hover:bg-foreground/5 border border-foreground/10 backdrop-blur-md transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 opacity-70" />
            </button>

            <div className="p-6 md:p-10">
              <p className="text-xs md:text-sm text-foreground/50 font-sans mb-2 tracking-wider uppercase">
                {t.worksReleased} · {work.releaseDate}
              </p>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {work.name}
              </h3>
              <p
                className={`text-lg md:text-2xl text-foreground/70 mb-6 font-light leading-snug ${
                  locale === "ko" ? "font-serif" : "font-sans"
                }`}
              >
                {work.tagline[locale]}
              </p>
              <p className="text-sm md:text-base text-foreground/60 font-sans leading-relaxed mb-8">
                {work.description[locale]}
              </p>

              <ScreenshotGallery
                screenshots={work.screenshots}
                name={work.name}
              />

              <div className="mt-8 flex justify-center">
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ScreenshotGallery({
  screenshots,
  name,
}: {
  screenshots: string[];
  name: string;
}) {
  if (screenshots.length === 0) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {screenshots.map((src, i) => (
        <ScreenshotImage key={src} src={src} alt={`${name} ${i + 1}`} />
      ))}
    </div>
  );
}

function ScreenshotImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden border border-foreground/5 bg-foreground/[0.03]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}
