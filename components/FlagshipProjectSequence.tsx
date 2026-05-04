"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import type { FeaturedProject } from "@/data/portfolio";

type SequenceProject = FeaturedProject & {
  sequence: NonNullable<FeaturedProject["sequence"]>;
};

type FlagshipProjectSequenceProps = {
  project: SequenceProject;
};

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function getRangeProgress(value: number, start: number, end: number) {
  return clamp((value - start) / (end - start), 0, 1);
}

function getScenePosition(index: number, activeSceneIndex: number) {
  const offset = index - activeSceneIndex;

  if (offset === 0) {
    return "active";
  }

  if (offset === -1) {
    return "previous";
  }

  if (offset === 1) {
    return "next";
  }

  return offset < 0 ? "before" : "after";
}

function getSceneStyle(index: number, sceneCount: number, stageProgress: number) {
  const localProgress = stageProgress - index;
  const isFirstScene = index === 0;
  const isLastScene = index === sceneCount - 1;
  const enterStart = isFirstScene ? -1 : -0.14;
  const enterEnd = isFirstScene ? 0 : 0.08;
  const exitStart = isLastScene ? 0.92 : 0.72;
  const exitEnd = isLastScene ? 1.02 : 1;

  if (localProgress < enterStart || localProgress > exitEnd) {
    return {
      opacity: 0,
      transform:
        localProgress < enterStart
          ? "translate3d(0, 26%, 0) scale(0.98)"
          : "translate3d(0, -26%, 0) scale(0.98)",
      zIndex: 0,
    } as CSSProperties;
  }

  if (!isFirstScene && localProgress < enterEnd) {
    const enterProgress = getRangeProgress(localProgress, enterStart, enterEnd);

    return {
      opacity: enterProgress,
      transform: `translate3d(0, ${(1 - enterProgress) * 26}%, 0) scale(${
        0.98 + enterProgress * 0.02
      })`,
      zIndex: 2,
    } as CSSProperties;
  }

  if (localProgress > exitStart) {
    const exitProgress = getRangeProgress(localProgress, exitStart, exitEnd);

    return {
      opacity: 1 - exitProgress,
      transform: `translate3d(0, ${exitProgress * -24}%, 0) scale(${
        1 - exitProgress * 0.02
      })`,
      zIndex: 1,
    } as CSSProperties;
  }

  return {
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale(1)",
    zIndex: 3,
  } as CSSProperties;
}

export function FlagshipProjectSequence({ project }: FlagshipProjectSequenceProps) {
  const stageTrackRef = useRef<HTMLDivElement | null>(null);
  const [stageProgress, setStageProgress] = useState(0);

  const scenes = project.sequence.scenes;
  const coreTags = project.sequence.coreTags;
  const scenePrefix = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const desktopStepCount = scenes.length;
  const activeSceneIndex = clamp(
    Math.floor(Math.min(stageProgress, scenes.length - 0.001)),
    0,
    scenes.length - 1,
  );
  const sequenceStyle = {
    "--flagship-scene-count": scenes.length,
    "--flagship-step-count": desktopStepCount,
  } as CSSProperties;

  const panelContent = (
    <>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <h3 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-[2rem]">
            {project.title}
          </h3>
          <p className="text-sm leading-7 text-[var(--color-text-muted)]">{project.sequence.panelSummary}</p>
        </div>

        <div className="flagship-proof-brief">
          {project.sequence.proofPoints.map((point) => (
            <div key={point.label} className="flagship-proof-row">
              <span>{point.label}</span>
              <p>{point.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            Core stack
          </p>
          <p className="flagship-stack-line">{coreTags.join(" / ")}</p>
        </div>

        <div className="grid gap-3 pt-1">
          <Button label="GitHub Repo" href={project.repo} disabled={false} />
        </div>

        <div className="flagship-verification-block grid gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            Verified signals
          </p>
          <ul className="flagship-verification-list">
            {project.sequence.verification.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    let frameId = 0;

    const updateStage = () => {
      if (!mediaQuery.matches) {
        setStageProgress(0);
        return;
      }

      const stageTrack = stageTrackRef.current;

      if (!stageTrack) {
        return;
      }

      const rect = stageTrack.getBoundingClientRect();
      const travelDistance = Math.max(stageTrack.offsetHeight - window.innerHeight, 1);
      const normalizedProgress = clamp((-rect.top) / travelDistance, 0, 1);
      const stagedProgress = normalizedProgress * desktopStepCount;

      setStageProgress((currentProgress) =>
        Math.abs(currentProgress - stagedProgress) < 0.005 ? currentProgress : stagedProgress,
      );
    };

    const requestStageUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateStage);
    };

    updateStage();

    window.addEventListener("scroll", requestStageUpdate, { passive: true });
    window.addEventListener("resize", requestStageUpdate);
    mediaQuery.addEventListener("change", requestStageUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestStageUpdate);
      window.removeEventListener("resize", requestStageUpdate);
      mediaQuery.removeEventListener("change", requestStageUpdate);
    };
  }, [desktopStepCount, scenes.length]);

  return (
    <article className="panel flagship-sequence px-5 py-6 sm:px-7 sm:py-8">
      <div className="grid gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.status}</Badge>
          <Badge tone="default">{project.label}</Badge>
        </div>
        <div className="grid gap-3">
          <p className="section-kicker">Flagship Case Study</p>
          <h3 className="text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.4rem]">
            Debt Pressure Lab is the page&apos;s main proof project
          </h3>
          <p className="max-w-[38rem] text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
            {project.sequence.intro}
          </p>
        </div>
      </div>

      <div ref={stageTrackRef} className="flagship-desktop-sequence" style={sequenceStyle}>
        <div className="flagship-desktop-frame" style={sequenceStyle}>
          <div className="flagship-sequence-grid flagship-sequence-grid-desktop">
            <div className="flagship-stage">
              <div className="flagship-stage-stack">
                {scenes.map((scene, index) => {
                  const isActive = index === activeSceneIndex;

                  return (
                    <article
                      key={scene.id}
                      className="flagship-stage-scene"
                      data-position={getScenePosition(index, activeSceneIndex)}
                      aria-hidden={isActive ? undefined : true}
                      style={getSceneStyle(index, scenes.length, stageProgress)}
                    >
                      <div className="flagship-stage-scene-content grid gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid gap-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                              {scene.eyebrow}
                            </p>
                            <h4 className="text-[1.6rem] font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-[2rem]">
                              {scene.title}
                            </h4>
                          </div>
                          <span className="flagship-stage-counter">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="text-base leading-8 text-[var(--color-text)]">{scene.preview}</p>
                        <p className="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                          {scene.body}
                        </p>

                        <ul className="grid gap-2 text-sm leading-7 text-[var(--color-text-muted)]">
                          {scene.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-strong)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {scene.signalTags.map((tag) => (
                            <Badge key={tag} tone="accent">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className="flagship-sequence-panel grid gap-4 rounded-[24px] border border-[var(--color-panel-border)] bg-[linear-gradient(180deg,rgba(7,17,31,0.92),rgba(7,17,31,0.98))] p-5 shadow-[var(--shadow-glow)] sm:p-6">
              {panelContent}
            </aside>
          </div>
        </div>
      </div>

      <div className="flagship-mobile-layout">
        <div className="flagship-mobile-sequence grid gap-3">
          {scenes.map((scene, index) => {
            const sceneId = `${scenePrefix}-${scene.id}`;

            return (
              <article
                key={scene.id}
                id={sceneId}
                className="flagship-scene rounded-[24px] border border-[var(--color-panel-border)] bg-[rgba(8,18,32,0.74)] px-5 py-5 scroll-mt-28 sm:px-6 sm:py-6"
              >
                <div className="flagship-stage-scene-content grid gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                        {scene.eyebrow}
                      </p>
                      <h4 className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.65rem]">
                        {scene.title}
                      </h4>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold tracking-[0.14em] text-[var(--color-text-muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">{scene.preview}</p>
                  <p className="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                    {scene.body}
                  </p>

                  <ul className="grid gap-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    {scene.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-strong)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {scene.signalTags.map((tag) => (
                      <Badge key={tag} tone="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="flagship-sequence-panel grid gap-4 rounded-[24px] border border-[var(--color-panel-border)] bg-[linear-gradient(180deg,rgba(7,17,31,0.92),rgba(7,17,31,0.98))] p-5 shadow-[var(--shadow-glow)] sm:p-6">
          {panelContent}
        </aside>
      </div>
    </article>
  );
}
