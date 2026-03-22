"use client";

import { motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { teamMembers } from "@/lib/team-data";
import { TeamMemberCard } from "@/components/team-member-card";

export function TeamSection() {
  const { t, locale } = useLocale();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {t.teamTitle}
        </h2>
        <p
          className={`text-lg md:text-xl text-foreground/50 font-light ${
            locale === "ko" ? "font-serif" : "font-sans"
          }`}
        >
          {t.teamSubtitle}
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.name.en} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}
