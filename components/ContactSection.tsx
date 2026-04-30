import type { CSSProperties } from "react";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { contactMethods, contactSection } from "@/data/portfolio";

export function ContactSection() {
  return (
    <Reveal>
      <section id="contact" className="panel px-6 py-8 sm:px-10 sm:py-12">
        <div className="grid gap-8">
          <SectionHeader
            kicker={contactSection.kicker}
            title={contactSection.title}
            copy={contactSection.copy}
          />

          <div className="motion-stagger grid gap-4 lg:grid-cols-2">
            {contactMethods.map((method, index) => (
              <article
                key={method.label}
                className="motion-item interactive-surface rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                style={{ "--stagger-index": index } as CSSProperties}
              >
                <div className="grid gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">{method.label}</h3>
                    <Badge tone={method.status === "ready" ? "accent" : "muted"}>
                      {method.status === "ready" ? "Ready" : "Pending"}
                    </Badge>
                  </div>

                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">{method.description}</p>

                  <Button
                    label={method.status === "ready" ? `Open ${method.label}` : method.label}
                    href={method.href}
                    placeholderText={method.placeholderText}
                    tone="primary"
                    disabled={method.status !== "ready"}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}