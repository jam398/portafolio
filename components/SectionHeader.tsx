import type { CSSProperties } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  copy: string;
};

export function SectionHeader({ kicker, title, copy }: SectionHeaderProps) {
  return (
    <div className="content-section-header motion-stagger">
      <p className="section-kicker motion-item" style={{ "--stagger-index": 0 } as CSSProperties}>
        {kicker}
      </p>
      <h2 className="content-section-title motion-item" style={{ "--stagger-index": 1 } as CSSProperties}>
        {title}
      </h2>
      <p className="content-section-copy motion-item" style={{ "--stagger-index": 2 } as CSSProperties}>
        {copy}
      </p>
    </div>
  );
}
