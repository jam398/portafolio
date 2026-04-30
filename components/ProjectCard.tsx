import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import type { FeaturedProject } from "@/data/portfolio";

type ProjectCardProps = {
  project: FeaturedProject;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`panel interactive-surface interactive-surface-strong group grid gap-6 px-5 py-6 sm:px-7 sm:py-8 ${
        featured ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]" : ""
      }`}
    >
      <div className="grid gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={project.planned ? "muted" : "accent"}>{project.status}</Badge>
          <Badge tone="default">{project.label}</Badge>
        </div>

        <div className="grid gap-3">
          <h3 className="text-[1.8rem] font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.1rem]">
            {project.title}
          </h3>
          <p className="text-[15px] leading-8 text-[var(--color-text-muted)] sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="supporting-surface rounded-[24px] border border-[var(--color-panel-border)] bg-white/[0.03] p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            {project.planned ? "Why it belongs" : "What it proves"}
          </p>
          <p className="text-sm leading-7 text-[var(--color-text-muted)]">{project.proof}</p>
        </div>

        {project.whyNext ? (
          <p className="text-sm leading-7 text-[var(--color-text-muted)]">{project.whyNext}</p>
        ) : null}
      </div>

      <div className="grid gap-5 lg:content-start">
        <div className="supporting-surface grid gap-3 rounded-[24px] border border-[var(--color-panel-border)] bg-[rgba(5,12,21,0.58)] p-5 shadow-[var(--shadow-glow)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            Stack + Signals
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} tone={project.planned ? "muted" : "default"}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <Button
            label="GitHub Repo"
            href={project.repo || undefined}
            placeholderText={project.planned ? "Repo will arrive with Assignment 2" : undefined}
            disabled={!project.repo}
          />
          {project.demo ? <Button label="Live Demo" href={project.demo} tone="ghost" /> : null}
        </div>
      </div>
    </article>
  );
}