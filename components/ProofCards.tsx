import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { proofCards } from "@/data/portfolio";

export function ProofCards() {
  return (
    <Reveal>
      <section id="proof" className="grid gap-6">
        <SectionHeader
          kicker="Immediate Proof"
          title="Why this portfolio should feel credible fast"
          copy="The first read should establish software-development credibility before the rest of the portfolio expands into projects, skills, and AI workflow."
        />

        <div className="motion-stagger grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofCards.map((card, index) => (
            <article
              key={card.title}
              className="motion-item panel min-h-52 px-5 py-5 sm:px-6 sm:py-6"
              style={{ "--stagger-index": index } as CSSProperties}
            >
              <div className="grid h-full gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  Proof
                </p>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                  {card.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}