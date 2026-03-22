"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { WorksSection } from "@/components/sections/works-section";

export default function Home() {
  return (
    <>
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      <HeroSection />
      <TeamSection />
      <WorksSection />
    </>
  );
}
