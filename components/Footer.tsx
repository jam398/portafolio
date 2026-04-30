import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";
import { profile, footerSection } from "@/data/portfolio";

export function Footer() {
  return (
    <Reveal>
      <footer className="panel px-6 py-6 sm:px-10 sm:py-8">
        <div className="motion-stagger grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="motion-item grid gap-3" style={{ "--stagger-index": 0 } as CSSProperties}>
            <p className="section-kicker">{footerSection.kicker}</p>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-[2.2rem]">
              {footerSection.title}
            </h2>
            <p className="max-w-[42rem] text-sm leading-7 text-[var(--color-text-muted)]">
              {footerSection.copy}
            </p>
          </div>

          <div
            className="motion-item grid gap-1 text-sm text-[var(--color-text-muted)] lg:text-right"
            style={{ "--stagger-index": 1 } as CSSProperties}
          >
            <p className="font-semibold text-[var(--color-text)]">{profile.name}</p>
            <p>I’m a software developer growing into AI-powered application work.</p>
            <p>I’ll keep the final links and contact details marked as pending until I verify them.</p>
            <p>{new Date().getFullYear()} Portfolio build.</p>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}