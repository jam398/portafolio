import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioStrategySection, strategyPoints } from "@/data/portfolio";

export function PortfolioStrategySection() {
  return (
    <Reveal>
      <section id="portfolio-strategy" className="panel px-6 py-8 sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <SectionHeader
            kicker={portfolioStrategySection.kicker}
            title={portfolioStrategySection.title}
            copy={portfolioStrategySection.copy}
          />

          <div className="motion-stagger grid gap-4">
            {strategyPoints.map((point, index) => (
              <article
                key={point.title}
                className="motion-item rounded-[24px] border border-white/10 bg-[rgba(8,16,29,0.82)] p-5"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                <div className="grid gap-3">
                  <h3 className="text-base font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-strong)]">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}