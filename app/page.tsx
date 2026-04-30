import { AboutSection } from "@/components/AboutSection";
import { AiWorkflowSection } from "@/components/AiWorkflowSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PortfolioStrategySection } from "@/components/PortfolioStrategySection";
import { ProofCards } from "@/components/ProofCards";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="page-grid">
        <Navbar />
        <main className="page-shell">
          <HeroSection />
          <ProofCards />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <AiWorkflowSection />
          <PortfolioStrategySection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}