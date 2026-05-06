import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";
import { SkillGroupCard } from "@/components/SkillGroupCard";
import { skillGroups, skillsSection } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Reveal>
      <section id="skills" className="skills-section section-band px-6 py-8 sm:px-10 sm:py-10">
        <div className="skills-section-header motion-stagger">
          <div className="grid-stack gap-3 motion-item" style={{ "--stagger-index": 0 } as CSSProperties}>
            <p className="section-kicker">{skillsSection.kicker}</p>
            <h2 className="skills-title">{skillsSection.title}</h2>
          </div>
          <p className="skills-copy motion-item" style={{ "--stagger-index": 1 } as CSSProperties}>
            {skillsSection.copy}
          </p>
        </div>

        <div className="skills-grid motion-stagger motion-together">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="motion-item"
              style={{ "--stagger-index": index } as CSSProperties}
            >
              <SkillGroupCard group={group} />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
