import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { aiWorkflowSection, workflowCards } from "@/data/portfolio";

export function AiWorkflowSection() {
  return (
    <Reveal>
      <section id="ai-workflow" className="panel px-6 py-8 sm:px-10 sm:py-12">
        <div className="grid gap-8">
          <SectionHeader
            kicker={aiWorkflowSection.kicker}
            title={aiWorkflowSection.title}
            copy={aiWorkflowSection.copy}
          />

          <div className="motion-stagger grid gap-4 lg:grid-cols-2">
            {workflowCards.map((card, index) => (
              <article
                key={card.title}
                className="motion-item rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[var(--shadow-glow)]"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                <div className="grid gap-3">
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{card.title}</h3>
                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}