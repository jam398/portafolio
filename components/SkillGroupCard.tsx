import type { SkillGroup } from "@/data/portfolio";

type SkillGroupCardProps = {
  group: SkillGroup;
};

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <article className="skill-group-surface interactive-surface px-5 py-5 sm:px-6 sm:py-6">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            Capability
          </p>
          <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
            {group.title}
          </h3>
        </div>

        <ul className="skill-text-list">
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
