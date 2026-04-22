"use client";

import { motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { teamMembers } from "@/lib/team-data";
import { TeamMemberCard } from "@/components/team-member-card";

export function TeamSection() {
  const { t, locale } = useLocale();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 py-32">
      <motion.div
        className="max-w-7xl mx-auto w-full mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="text-mono-label text-foreground/60">
            {locale === "ko" ? "사람들" : "The People"}
          </span>
        </div>
        <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-light">
          {t.teamTitle}
        </h2>
        <p
          className={`mt-4 text-base md:text-lg text-foreground/55 leading-snug max-w-md ${
            locale === "ko" ? "font-serif" : "font-sans"
          }`}
        >
          {t.teamSubtitle}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.name.en} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}
