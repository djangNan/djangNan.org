"use client";

import { motion } from "motion/react";
import { Github } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import Image from "next/image";
import type { TeamMember } from "@/lib/team-data";

export function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const { locale } = useLocale();

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="relative w-56 h-72 md:w-64 md:h-80 mb-4 group cursor-pointer">
        {/* Background card */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-56 md:h-64 rounded-3xl transition-colors duration-300 bg-neutral-400 dark:bg-neutral-800 ${member.hoverColorClass}`}
        />
        {/* Person image overlapping above */}
        <div className="absolute inset-0 z-10 drop-shadow-xl origin-bottom transition-transform duration-300 group-hover:scale-[1.08] pointer-events-none">
          <Image
            src={member.image}
            alt={member.name[locale]}
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
        {member.name[locale]}
      </h3>

      <a
        href={member.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 hover:border-foreground/30 hover:bg-white/10 hover:scale-[1.15] transition-all duration-300 cursor-pointer"
      >
        <Github className="w-4 h-4 opacity-70" />
      </a>
    </motion.div>
  );
}
