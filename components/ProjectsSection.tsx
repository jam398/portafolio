import type { CSSProperties } from "react";

import { FlagshipProjectSequence } from "@/components/FlagshipProjectSequence";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredProjects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <Reveal threshold={0.02}>
      <section id="projects" className="grid gap-6 scroll-mt-24">
        <SectionHeader
          kicker="Featured Projects"
          title="Focused project evidence instead of random portfolio filler"
          copy="I'm keeping this focused on purpose: verified projects that show full-stack implementation, AI workflow design, testing, and documentation without inventing links or demos that are not ready."
        />

        <div className="motion-stagger grid gap-5">
          {featuredProjects.map((project, index) => {
            const projectWithSequence =
              project.sequence === undefined
                ? undefined
                : { ...project, sequence: project.sequence };

            return (
              <div
                key={project.title}
                className="motion-item"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                {projectWithSequence ? (
                  <FlagshipProjectSequence project={projectWithSequence} />
                ) : (
                  <ProjectCard project={project} featured={index === 0} />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
