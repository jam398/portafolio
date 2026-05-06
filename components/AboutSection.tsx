import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { directionSection } from "@/data/portfolio";

export function AboutSection() {
  return (
    <Reveal>
      <section id="about" className="grid gap-6">
        <SectionHeader
          kicker={directionSection.kicker}
          title={directionSection.title}
          copy="I want this page to feel believable first. I'm showing the direction I'm growing into without pretending I'm already in that role."
        />

        <div className="motion-stagger motion-together">
          <div className="motion-item panel px-5 py-6 sm:px-7 sm:py-8 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-start">
              <div className="grid gap-4">
                {directionSection.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-8 text-[var(--color-text-muted)] sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <aside className="rounded-[24px] border border-[var(--color-panel-border)] bg-white/[0.03] p-5 shadow-[var(--shadow-glow)]">
                <div className="grid gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                    Positioning Check
                  </p>
                  <ul className="grid gap-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    <li>I&apos;m presenting myself as a software developer first and an AI application engineer in progress second.</li>
                    <li>I want the proof to come from real full-stack work, not inflated AI claims.</li>
                    <li>I want the page to read as honest momentum, not fake authority.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
