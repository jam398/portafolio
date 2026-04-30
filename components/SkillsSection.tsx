import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillGroupCard } from "@/components/SkillGroupCard";
import { skillGroups, skillsSection } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Reveal>
      <section id="skills" className="grid gap-6">
        <SectionHeader
          kicker={skillsSection.kicker}
          title={skillsSection.title}
          copy={skillsSection.copy}
        />

        <div className="motion-stagger grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
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