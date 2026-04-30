# Sprint: Portfolio Foundation

## Metadata

- **ID:** SPRINT-00
- **Status:** Complete
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-29
- **Last Updated:** 2026-04-29

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Create the portfolio application's foundation: scaffold the Next.js app, establish the typed content model and layout tokens, and implement the top-of-page trust layer through navigation, hero, and proof cards without widening into later narrative, closeout, or final-submission work.

## Governing Spec

`docs/specs/spec-002-core-portfolio-experience.md`

## Carry-Forward Context

None. This is the first implementation sprint for the portfolio site.

## Scope

In scope:

- initialize the portfolio application with Next.js, React, TypeScript, and Tailwind CSS
- create the root app shell and global style foundation
- create a typed content data module for profile links, hero copy, and proof cards
- build the navigation, hero, and proof-card sections
- establish the initial dark technical visual system, grid spacing, and responsive section layout
- implement honest placeholder handling for unresolved profile links

## Non-Goals

- do not build the full projects section yet
- do not build the skills, AI workflow, portfolio strategy, contact, or footer sections yet
- do not add deployment, hosting, analytics, or publishing work
- do not finalize personal identity values that are still unresolved beyond explicit placeholders
- do not add screenshots, demo CTAs, or project-detail surfaces not required for Sprint 0

## Available Assets / Current State

List verified files, components, APIs, or data this sprint depends on. Confirm each against the live workspace before implementation:

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Agent rules | `AGENTS.md` | Governing execution rules | Verified existing file |
| Workflow quickstart | `docs/references/WORKFLOW_QUICKSTART.md` | Path and artifact selection | Verified existing file |
| Workflow agreement | `docs/references/WORKFLOW_AGREEMENT_SPEC_SPRINT_QA.md` | Governing workflow contract | Verified existing file |
| Portfolio brief | `docs/references/portfolio_build_brief_for_ai_agent.md` | Source product brief and copy | Verified existing file |
| Core experience spec | `docs/specs/spec-002-core-portfolio-experience.md` | Governing implementation contract for sections 1 through 6 | Verified existing file |
| Repository app surface | Workspace root | No application scaffold existed at sprint start | Verified before implementation |

## Files Expected To Change

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.*`
- `postcss.config.*`
- `eslint.config.mjs`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/Navbar.tsx`
- `components/HeroSection.tsx`
- `components/ProofCards.tsx`
- `components/Badge.tsx`
- `components/Button.tsx`
- `components/SectionHeader.tsx`
- `data/portfolio.ts`

## Ordered Tasks

### Task 1. Scaffold the application foundation

- **Objective:** Establish the Next.js, React, TypeScript, and Tailwind application shell needed for the portfolio.
- **Files:** `package.json`, config files, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- **Changes:** Create the initial app structure, root layout, and baseline global styling.
- **Unchanged:** Do not add later-section content or unrelated routes.
- **Verify After:** App installs, lints, and builds successfully once the scaffold is present.

### Task 2. Define the typed content model

- **Objective:** Create a central data module for the profile identity, hero copy, proof cards, and unresolved link placeholders.
- **Files:** `data/portfolio.ts`
- **Changes:** Add typed content objects that separate editable copy from components.
- **Unchanged:** Do not hard-code the same content repeatedly across components.
- **Verify After:** Components consume the shared data structure without duplicated literals.

### Task 3. Build the top-of-page trust layer

- **Objective:** Implement navigation, hero, and proof cards so the portfolio communicates identity and proof immediately.
- **Files:** `components/Navbar.tsx`, `components/HeroSection.tsx`, `components/ProofCards.tsx`, `components/Badge.tsx`, `components/Button.tsx`, `app/page.tsx`
- **Changes:** Render the required identity, CTA structure, proof cards, and placeholder-safe links.
- **Unchanged:** Do not introduce project case-study detail or later sections in this sprint.
- **Verify After:** The top of the page is readable, responsive, and aligned with the spec's honesty and layout rules.

### Task 4. Establish the initial visual system

- **Objective:** Translate the Sage x Hero and Swiss Grid / AI Systems Dashboard direction into usable layout, spacing, panel, and motion foundations.
- **Files:** `app/globals.css`, shared components
- **Changes:** Add the dark technical palette, grid spacing rhythm, panel treatment, and subtle interaction styling.
- **Unchanged:** Do not overbuild decorative effects, animation systems, or theming variants.
- **Verify After:** The visual system feels structured and professional on both mobile and desktop.

## Product Rules

- The hero must communicate the target identity immediately.
- GitHub, LinkedIn, and Resume affordances must be visible from the top of the page even when some values are placeholders.
- Placeholder handling must be visibly honest and must not masquerade as final links.
- The page must remain dark, structured, and technical without becoming noisy or theatrical.
- Sprint 0 must stop after navigation, hero, proof cards, and shared foundations.

## Deliverables

- Working Next.js portfolio scaffold
- Typed `data/portfolio.ts` content model for Sprint 0 content
- Implemented navigation, hero, and proof cards
- Dark technical visual foundation

## Acceptance Criteria

- The app scaffold exists and can be run locally.
- Navigation, hero, and proof cards render from shared content data.
- The design expresses the intended tone without hype or gimmickry.
- Placeholder links are visually honest.
- The build remains one-page and focused.

## Dependencies / Blockers

- Final personal links are still unresolved and must remain placeholders where applicable.
- The workspace started with no application scaffold, so Sprint 0 had to create it from scratch.

## Risks / Watchouts

- Scope drift into later sections such as projects, skills, and contact
- Over-designed hero visuals that undermine professionalism or readability
- Fake-final placeholder treatment for unresolved links
- Early component abstraction that is heavier than the site needs

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it establishes the application's reusable foundation and the top-of-page trust layer without widening into the rest of the narrative or final closeout surfaces.

## Verification

Final verification commands or checks:

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm navigation, hero, and proof cards render clearly on mobile and desktop
- Manual verification 2: confirm unresolved links are shown honestly and no fake demo or fake-final CTA behavior appears

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Carry-forward constraints respected
- [x] Acceptance criteria met
- [x] Verification passed
- [x] No known blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-000
- **Sprint ID:** SPRINT-00
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-29
- **Verdict:** PASS (1 issue resolved)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/completed/sprint-00-portfolio-foundation.md`
- **Spec Path:** `docs/specs/spec-002-core-portfolio-experience.md`

### QA Mode

- Sprint doc QA

### Checks Performed

- [x] Read the full sprint doc
- [x] Read the governing spec when one exists
- [x] Verified listed assets against the live repository
- [x] Checked scope, non-goals, and task sequencing for drift risk
- [x] Checked verify-after steps and final verification for concreteness
- [ ] Read the changed files when performing implementation QA
- [ ] Compared implementation against original intent, not against assumptions

### Findings

#### 1. README work was pulled into the wrong sprint

- **Severity:** Medium
- **Problem:** The first draft of Sprint 0 included README work even though the governing spec sequences README into the later credibility and closeout layer.
- **Why it matters:** Pulling README work into Sprint 0 widened the sprint beyond foundation scope and weakened the clean staged rollout defined by the spec.
- **Required fix:** Remove README from Sprint 0 files, tasks, deliverables, and acceptance criteria.
- **Resolved:** Yes

### Verification Results

- **Automated:** Markdown validation on the sprint doc reported no errors.
- **Manual:** Compared the sprint scope, files, tasks, and sequencing against `SPEC-001` and the live repository state.

### Carry-Forward Updates

- Sprint 1 or Sprint 2 should explicitly pick up README work and other later narrative/closeout surfaces rather than allowing them to drift into foundation work.

### Final QA Summary

- **What was checked:** Sprint 0 scope, assets, tasks, acceptance criteria, and sequencing were reviewed against the governing spec and the current empty application state.
- **What was fixed:** README work was removed so Sprint 0 stays bounded to scaffold, content model, top-of-page trust layer, and visual foundation work.
- **Residual risks:** Unresolved profile links still require honest placeholders during implementation. File expectations should stay tight during implementation to avoid creeping into later sections.
- **Recommendation:** Ready to implement

## QA Report

- **Verdict:** PASS (1 issue resolved during implementation closeout)
- **Reviewer:** GitHub Copilot
- **Issues Found:** `README.md` was initially added during implementation even though Sprint 0 had already been narrowed to exclude README work. The out-of-scope file was removed and the sprint artifact was corrected to reflect the actual bounded slice.
- **Final Verification Results:** `npm run lint` passed; `npm run build` passed; manual browser checks passed for desktop and mobile hero/proof rendering and honest placeholder treatment.
- **Deviations From Plan:** `package-lock.json` was added as a generated dependency artifact. No functional scope expansion remains after QA closeout.
- **Carry-Forward Updates For Next Sprint:** Sprint 1 should add the About, Projects, and Skills sections and convert the `View Projects` CTA from a development-state placeholder into a real in-page destination once the projects section exists.