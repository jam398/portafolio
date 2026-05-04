"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import { aiWorkflowSection, workflowCards } from "@/data/portfolio";

const desktopQuery = "(min-width: 1024px)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const wheelLockMs = 560;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function AiWorkflowSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const desktopMedia = window.matchMedia(desktopQuery);
    const reducedMotionMedia = window.matchMedia(reducedMotionQuery);
    let wheelUnlockTimer: number | null = null;

    const centerCard = (index: number) => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>(".ai-workflow-card"));
      const card = cards[index];

      if (!card) {
        return 0;
      }

      return viewport.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2);
    };

    const setCardIndex = (nextIndex: number) => {
      const maxIndex = workflowCards.length - 1;
      const clampedIndex = clamp(nextIndex, 0, maxIndex);
      const nextProgress = clampedIndex / Math.max(maxIndex, 1);

      activeIndexRef.current = clampedIndex;
      setActiveIndex(clampedIndex);
      setProgress(nextProgress);
      setTranslateX(centerCard(clampedIndex));
    };

    const isStageActive = (direction: number) => {
      const frame = frameRef.current;

      if (!frame) {
        return false;
      }

      const sectionRect = section.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();
      const nav = document.querySelector("nav");
      const navBottom = nav?.getBoundingClientRect().bottom ?? 0;
      const nextSection = document.querySelector("#portfolio-strategy");
      const nextSectionTop =
        nextSection?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const frameVisibleHeight =
        Math.min(frameRect.bottom, window.innerHeight) - Math.max(frameRect.top, navBottom);
      const frameIsReadable =
        frameVisibleHeight >= Math.min(frameRect.height * 0.62, window.innerHeight * 0.5);
      const sectionIsPinned =
        sectionRect.top <= navBottom + 48 && sectionRect.bottom >= window.innerHeight * 0.72;
      const nextSectionIsVisible = nextSectionTop < window.innerHeight;

      if (direction < 0 && nextSectionIsVisible) {
        return false;
      }

      return frameIsReadable && sectionIsPinned;
    };

    const updateStage = () => {
      const desktop = desktopMedia.matches;
      const reducedMotion = reducedMotionMedia.matches;

      if (!desktop || reducedMotion) {
        activeIndexRef.current = 0;
        setTranslateX(0);
        setProgress(0);
        setActiveIndex(0);
        return;
      }

      setCardIndex(activeIndexRef.current);
    };

    const lockWheel = () => {
      wheelLockedRef.current = true;

      if (wheelUnlockTimer) {
        window.clearTimeout(wheelUnlockTimer);
      }

      wheelUnlockTimer = window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, wheelLockMs);
    };

    const handleWheel = (event: WheelEvent) => {
      const desktop = desktopMedia.matches;
      const reducedMotion = reducedMotionMedia.matches;

      if (!desktop || reducedMotion || Math.abs(event.deltaY) < 8) {
        return;
      }

      const direction = Math.sign(event.deltaY);

      if (!isStageActive(direction)) {
        return;
      }

      const currentIndex = activeIndexRef.current;
      const maxIndex = workflowCards.length - 1;
      const canAdvance = direction > 0 && currentIndex < maxIndex;
      const canRewind = direction < 0 && currentIndex > 0;

      if (!canAdvance && !canRewind) {
        return;
      }

      event.preventDefault();

      if (wheelLockedRef.current) {
        return;
      }

      setCardIndex(currentIndex + direction);
      lockWheel();
    };

    updateStage();
    window.addEventListener("scroll", updateStage, { passive: true });
    window.addEventListener("resize", updateStage);
    window.addEventListener("wheel", handleWheel, { passive: false });
    desktopMedia.addEventListener("change", updateStage);
    reducedMotionMedia.addEventListener("change", updateStage);

    return () => {
      if (wheelUnlockTimer) {
        window.clearTimeout(wheelUnlockTimer);
      }

      window.removeEventListener("scroll", updateStage);
      window.removeEventListener("resize", updateStage);
      window.removeEventListener("wheel", handleWheel);
      desktopMedia.removeEventListener("change", updateStage);
      reducedMotionMedia.removeEventListener("change", updateStage);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ai-workflow"
      className="ai-workflow-stage section-band"
      style={{ "--workflow-progress": progress } as CSSProperties}
    >
      <div ref={frameRef} className="ai-workflow-frame px-6 py-8 sm:px-10 sm:py-12">
        <div className="ai-workflow-layout">
          <div className="ai-workflow-copy">
            <p className="section-kicker">{aiWorkflowSection.kicker}</p>
            <h2 className="ai-workflow-title">{aiWorkflowSection.title}</h2>
            <p className="ai-workflow-intro">{aiWorkflowSection.copy}</p>
            <div className="ai-workflow-progress" aria-hidden="true">
              {workflowCards.map((card, index) => (
                <span
                  key={card.title}
                  className="ai-workflow-progress-dot"
                  data-active={index === activeIndex}
                />
              ))}
            </div>
          </div>

          <div ref={viewportRef} className="ai-workflow-window" aria-label="AI workflow steps">
            <div
              ref={trackRef}
              className="ai-workflow-track"
              style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
            >
              {workflowCards.map((card, index) => (
                <article
                  key={card.title}
                  className="ai-workflow-card"
                  data-active={index === activeIndex}
                >
                  <div className="ai-workflow-card-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="grid gap-4">
                    <p className="ai-workflow-card-label">Workflow step</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
