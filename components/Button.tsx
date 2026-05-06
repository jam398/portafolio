import { Badge } from "@/components/Badge";

type ButtonProps = {
  label: string;
  href?: string;
  placeholderText?: string;
  tone?: "primary" | "ghost";
  disabled?: boolean;
};

export function Button({
  label,
  href,
  placeholderText,
  tone = "primary",
  disabled = false,
}: ButtonProps) {
  const opensNewWindow = href?.startsWith("http://") || href?.startsWith("https://");
  const baseClassName =
    "button-surface inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase";

  const toneClassName =
    tone === "primary"
      ? "button-primary border-[var(--color-panel-border-strong)] bg-[linear-gradient(135deg,rgba(88,171,255,0.22),rgba(89,225,255,0.14))] text-[var(--color-text)] shadow-[var(--shadow-glow)]"
      : "button-ghost border-white/10 bg-white/[0.03] text-[var(--color-text)]";

  if (disabled || !href) {
    return (
      <div className="flex flex-col gap-2 sm:items-start">
        <span
          aria-disabled="true"
          className={`${baseClassName} button-disabled ${toneClassName} cursor-not-allowed opacity-70`}
        >
          {label}
        </span>
        {placeholderText ? <Badge tone="muted">{placeholderText}</Badge> : null}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={opensNewWindow ? "_blank" : undefined}
      rel={opensNewWindow ? "noopener noreferrer" : undefined}
      className={`${baseClassName} ${toneClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(6,12,22,0.92)]`}
    >
      {label}
    </a>
  );
}
