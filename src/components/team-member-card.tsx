"use client";

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import Image from "next/image";
import type { TeamMember } from "@/lib/team-data";
import { GlassButton } from "./glass-button";

export function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const { locale } = useLocale();

  return (
    <motion.article
      className="flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="relative w-full max-w-xs aspect-[4/5]">
        <Image
          src={member.image}
          alt={member.name[locale]}
          fill
          sizes="(min-width: 768px) 30vw, 80vw"
          className="object-cover object-top"
        />
      </div>

      <div className="mt-6 flex items-start justify-between gap-4 max-w-md">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-mono-label text-orange-500">
              {member.role[locale]}
            </span>
            <span className="text-mono-label text-foreground/40">
              / {member.location[locale]}
            </span>
          </div>
          <h3 className="text-display text-3xl md:text-4xl font-semibold tracking-tight leading-[0.95]">
            {member.name[locale]}
          </h3>
          <p
            className={`mt-3 text-sm md:text-base text-foreground/60 leading-relaxed ${
              locale === "ko" ? "font-serif" : "font-sans"
            }`}
          >
            {member.bio[locale]}
          </p>
        </div>

        <div className="flex gap-2 shrink-0">
          <GlassButton
            as="a"
            href={member.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name[locale]} GitHub`}
            className="w-10 h-10"
          >
            <Github className="w-4 h-4 opacity-70" />
          </GlassButton>
          <GlassButton
            as="a"
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name[locale]} LinkedIn`}
            className="w-10 h-10"
          >
            <Linkedin className="w-4 h-4 opacity-70" />
          </GlassButton>
        </div>
      </div>
    </motion.article>
  );
}
