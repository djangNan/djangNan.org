import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { WorksSection } from "@/components/sections/works-section";

export default function Home() {
  return (
    <>
      <nav
        aria-label="Site controls"
        className="fixed top-6 right-6 z-50 flex items-center gap-2"
      >
        <ThemeToggle />
        <LanguageToggle />
      </nav>

      <main>
        <HeroSection />
        <TeamSection />
        <WorksSection />
      </main>

      <footer className="py-6 text-center text-xs text-foreground/30 font-sans">
        djangNan.org
      </footer>
    </>
  );
}
