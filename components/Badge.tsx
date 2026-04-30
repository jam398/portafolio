type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default:
      "border-[var(--color-panel-border)] bg-white/5 text-[var(--color-text)]",
    accent:
      "border-[var(--color-panel-border-strong)] bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]",
    muted:
      "border-white/10 bg-white/4 text-[var(--color-text-muted)]",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.16em] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}