import type { CSSProperties } from "react";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { heroActions, heroTags, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <Reveal className="motion-section" delay={40}>
      <section className="hero-shell panel mt-4 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-glow hero-glow-primary" />
          <div className="hero-glow hero-glow-secondary" />
          <div className="hero-grid-field" />
          <div className="hero-ring" />
        </div>

        <div className="hero-content motion-stagger grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.75fr)] lg:items-end">
          <div className="grid-stack gap-6">
            <div
              className="motion-item grid-stack gap-3"
              style={{ "--stagger-index": 0 } as CSSProperties}
            >
              <p className="section-kicker">Assignment 1 Portfolio</p>
              <h1 className="section-title">{profile.title}</h1>
              <p className="section-copy">{profile.subtitle}</p>
            </div>

            <div
              className="motion-item flex flex-wrap gap-2"
              style={{ "--stagger-index": 1 } as CSSProperties}
            >
              {heroTags.map((tag) => (
                <Badge key={tag} tone="accent">
                  {tag}
                </Badge>
              ))}
            </div>

            <div
              className="motion-item flex flex-wrap gap-3"
              style={{ "--stagger-index": 2 } as CSSProperties}
            >
              {heroActions.map((action) => {
                if ("link" in action) {
                  return (
                    <Button
                      key={action.label}
                      label={action.label}
                      href={action.link.status === "ready" ? action.link.href : undefined}
                      placeholderText={
                        action.link.status === "placeholder"
                          ? action.link.placeholderText
                          : undefined
                      }
                      tone={action.kind}
                      disabled={action.link.status === "placeholder"}
                    />
                  );
                }

                return (
                  <Button
                    key={action.label}
                    label={action.label}
                    href={action.href}
                    tone={action.kind}
                    disabled={false}
                  />
                );
              })}
            </div>
          </div>

          <aside
            className="hero-direction-card motion-item relative overflow-hidden rounded-[24px] border border-[var(--color-panel-border)] bg-[linear-gradient(180deg,rgba(7,17,31,0.84),rgba(7,17,31,0.96))] p-5 shadow-[var(--shadow-glow)]"
            style={{ "--stagger-index": 3 } as CSSProperties}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(89,225,255,0.7),transparent)]" />
            <div className="grid gap-4">
              <Badge tone="muted">Current Direction</Badge>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {profile.direction}
              </p>
              <div className="grid gap-3 border-t border-white/8 pt-4 text-sm text-[var(--color-text-muted)]">
                <div className="flex items-center justify-between gap-3">
                  <span>Current proof</span>
                  <span className="font-medium text-[var(--color-text)]">Debt Pressure Lab</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Next focus</span>
                  <span className="font-medium text-[var(--color-text)]">RAG in progress</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Presentation stance</span>
                  <span className="font-medium text-[var(--color-text)]">Honest + technical</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Reveal>
  );
}