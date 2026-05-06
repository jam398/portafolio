import type { SkillGroup } from "@/data/portfolio";

type SkillGroupCardProps = {
  group: SkillGroup;
};

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <article className="skill-group-surface interactive-surface">
      <div className="grid gap-3">
        <div className="grid gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            Capability
          </p>
          <h3 className="skill-group-title">{group.title}</h3>
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
