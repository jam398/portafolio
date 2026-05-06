"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  threshold = 0.42,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const revealedRef = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frameId = 0;

    const updateReveal = () => {
      const rect = element.getBoundingClientRect();
      const enterLine = window.innerHeight * (1 - threshold);
      const exitLine = window.innerHeight * 0.14;
      const shouldReveal = rect.top <= enterLine && rect.bottom >= exitLine;

      if (revealedRef.current !== shouldReveal) {
        revealedRef.current = shouldReveal;
        setRevealed(shouldReveal);
      }
    };

    const requestRevealUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateReveal);
    };

    updateReveal();

    window.addEventListener("scroll", requestRevealUpdate, { passive: true });
    window.addEventListener("resize", requestRevealUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestRevealUpdate);
      window.removeEventListener("resize", requestRevealUpdate);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className ? `motion-reveal ${className}` : "motion-reveal"}
      data-revealed={revealed}
      style={{ "--motion-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
