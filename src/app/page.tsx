import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { WorksSection } from "@/components/sections/works-section";
import { SquaresBackground } from "@/components/squares-background";

export default function Home() {
  return (
    <>
      <SquaresBackground />

      <nav
        aria-label="Site controls"
        className="fixed top-6 right-6 z-50 flex items-center gap-2"
      >
        <ThemeToggle />
        <LanguageToggle />
      </nav>

      <main id="top" className="relative z-10">
        <HeroSection />
        <TeamSection />
        <WorksSection />
      </main>

      <footer className="relative z-10 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-[0.65rem] tracking-[0.18em] uppercase font-[var(--font-mono)] text-foreground/40">
          © 2026 djangNan.org
        </div>
      </footer>
    </>
  );
}
