import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredProjects } from "@/data/portfolio";

export function ProjectsSection() {
  const [featuredProject, plannedProject] = featuredProjects;

  return (
    <Reveal>
      <section id="projects" className="grid gap-6 scroll-mt-24">
        <SectionHeader
          kicker="Featured Projects"
          title="Focused project evidence instead of random portfolio filler"
          copy="I’m keeping this part focused on purpose: one real completed project that shows what I can build, and one clearly planned project that shows where I want to go next without pretending it already exists."
        />

        <div className="motion-stagger grid gap-5">
          <div className="motion-item" style={{ "--stagger-index": 0 } as CSSProperties}>
            <ProjectCard project={featuredProject} featured />
          </div>
          <div className="motion-item" style={{ "--stagger-index": 1 } as CSSProperties}>
            <ProjectCard project={plannedProject} />
          </div>
        </div>
      </section>
    </Reveal>
  );
}