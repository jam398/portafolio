import { profile, profileLinks } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[rgba(4,8,15,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(calc(100%-2rem),var(--grid-max))] flex-wrap items-center justify-between gap-4 py-3">
        <div className="grid gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
            Jose Addiel Martinez De La Cruz
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">Software Developer / {profile.title}</p>
        </div>

        <nav aria-label="Profile links" className="flex flex-wrap items-center gap-2">
          {profileLinks.map((link) =>
            link.status === "ready" ? (
              <a key={link.label} href={link.href} className="nav-profile-link">
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="nav-profile-link nav-profile-link-muted">
                {link.label} pending
              </span>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
