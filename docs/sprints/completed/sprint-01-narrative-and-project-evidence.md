# Sprint: Narrative and Project Evidence

## Metadata

- **ID:** SPRINT-01
- **Status:** Complete
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-29
- **Last Updated:** 2026-04-30

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Add the portfolio's narrative and evidence core by implementing the My Direction, Featured Projects, and Skills sections, while converting the hero's `View Projects` affordance into a real in-page destination and preserving the honesty constraints established in Sprint 0.

## Governing Spec

`docs/specs/spec-002-core-portfolio-experience.md`

## Carry-Forward Context

Sprint 0 established the application scaffold, shared visual foundation, honest placeholder treatment for unresolved profile links, and the top-of-page trust layer. Sprint 1 must build on that foundation without pulling in the later AI Workflow, Portfolio Strategy, Contact, Footer, or README closeout work.

## Scope

In scope:

- extend the typed content model with direction copy, featured project data, and grouped skill data
- add the My Direction section
- add the Featured Projects section with one real project and one planned project
- add the Skills, Tools, and Growing Focus section with grouped categories
- turn the hero's `View Projects` button into a real in-page anchor target
- refine section-level spacing and layout so the new middle-page narrative feels cohesive with the Sprint 0 foundation

## Non-Goals

- do not add the AI Workflow section yet
- do not add the Portfolio Strategy section yet
- do not add the Contact / Links section or Footer yet
- do not add deployment or publishing work
- do not invent live-demo links, screenshots, LinkedIn URLs, or resume links
- do not present the Assignment 2 project as completed, deployed, or production-ready

## Available Assets / Current State

List verified files, components, APIs, or data this sprint depends on. Confirm each against the live workspace before implementation:

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-002-core-portfolio-experience.md` | Governing requirements for sections 1 through 6 | Verified existing file |
| Completed Sprint 0 | `docs/sprints/completed/sprint-00-portfolio-foundation.md` | Foundation slice and carry-forward notes | Verified existing file |
| App shell | `app/layout.tsx`, `app/page.tsx`, `app/globals.css` | Existing portfolio structure and visual system | Verified existing files |
| Shared UI | `components/Navbar.tsx`, `components/HeroSection.tsx`, `components/ProofCards.tsx`, `components/Badge.tsx`, `components/Button.tsx`, `components/SectionHeader.tsx` | Existing primitives and sections | Verified existing files |
| Content model | `data/portfolio.ts` | Existing profile, hero, and proof-card data | Verified existing file |

## Files Expected To Change

- `app/page.tsx`
- `app/globals.css`
- `data/portfolio.ts`
- `components/HeroSection.tsx`
- `components/Button.tsx`
- `components/AboutSection.tsx`
- `components/ProjectsSection.tsx`
- `components/ProjectCard.tsx`
- `components/SkillsSection.tsx`
- `components/SkillGroupCard.tsx`

## Ordered Tasks

### Task 1. Extend the content model for narrative and evidence

- **Objective:** Expand the typed data layer so the new sections render from structured content rather than scattered literals.
- **Files:** `data/portfolio.ts`
- **Changes:** Add direction copy, featured project records, and grouped skills data.
- **Unchanged:** Do not add Sprint 2 content groups yet.
- **Verify After:** The new sections can render entirely from shared data.

### Task 2. Build the My Direction section

- **Objective:** Add the professional-direction narrative that connects software-development credibility to the AI application engineering trajectory.
- **Files:** `components/AboutSection.tsx`, `app/page.tsx`
- **Changes:** Render the two required paragraphs in a structured, readable layout.
- **Unchanged:** Do not introduce hype language or extra personal-story content not in the brief.
- **Verify After:** The section reads clearly and preserves the honest-growth framing.

### Task 3. Build the Featured Projects section

- **Objective:** Add the case-study evidence layer with Debt Pressure Lab as the main completed project and the Assignment 2 project as clearly planned.
- **Files:** `components/ProjectsSection.tsx`, `components/ProjectCard.tsx`, `app/page.tsx`, `data/portfolio.ts`, `components/HeroSection.tsx`, `components/Button.tsx`
- **Changes:** Render a projects section, attach the hero CTA to it, and handle the planned project state honestly.
- **Unchanged:** Do not add a fake demo link or overstate the Assignment 2 project.
- **Verify After:** The `View Projects` CTA scrolls or links to the projects section and the project cards visibly distinguish completed vs. planned work.

### Task 4. Build the grouped Skills section

- **Objective:** Add the grouped skills and tools section so the portfolio shows direction through categorized capability rather than a generic skills blob.
- **Files:** `components/SkillsSection.tsx`, `components/SkillGroupCard.tsx`, `app/page.tsx`, `data/portfolio.ts`
- **Changes:** Render grouped skill cards by purpose and interest area.
- **Unchanged:** Do not add the AI Workflow explanation or Strategy section yet.
- **Verify After:** Skills are grouped, scannable, and visually coherent on desktop and mobile.

### Task 5. Refine section-level composition

- **Objective:** Adjust layout rhythm and panel treatment so the new sections feel like one coherent portfolio system.
- **Files:** `app/globals.css`, new section components
- **Changes:** Add any needed section spacing, project-card layout, and grouped-card styling refinements.
- **Unchanged:** Do not rewrite the Sprint 0 foundation or shift to a new visual language.
- **Verify After:** The full page from hero through skills feels structured and balanced rather than bolted together.

## Product Rules

- Debt Pressure Lab must remain the primary real proof project.
- The Assignment 2 project must be visibly marked as planned / coming soon.
- No fake live demo, deployment, or senior-level AI claims may appear.
- The `View Projects` CTA must become a real in-page destination in this sprint.
- Skills must be grouped by purpose rather than displayed as one unstructured blob.
- Sprint 1 must stop before AI Workflow, Portfolio Strategy, Contact, Footer, and README work.

## Deliverables

- My Direction section
- Featured Projects section with real/planned distinction
- Grouped Skills section
- Updated data model supporting the new content
- Working `View Projects` anchor behavior

## Acceptance Criteria

- The page now includes My Direction, Featured Projects, and Skills sections.
- Debt Pressure Lab reads as the main completed project and the Assignment 2 project reads as planned.
- The `View Projects` action points to the actual projects section.
- The new sections preserve the portfolio's honest and technical tone.
- The layout remains responsive and coherent from hero through skills.

## Dependencies / Blockers

- Final personal profile links are still unresolved and must remain placeholders where applicable.
- Debt Pressure Lab live-demo and screenshot availability remain unresolved, so the project card must not invent those affordances.

## Risks / Watchouts

- Making the skills section too dense or generic
- Letting the planned Assignment 2 project visually compete with the real completed project
- Introducing decorative styling that weakens readability
- Accidentally widening into Sprint 2 copy and closeout sections

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it adds the portfolio's middle narrative and evidence layer without touching the later credibility/closeout sections.

## Verification

Final verification commands or checks:

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm the projects anchor works and the project cards clearly differentiate completed vs. planned work
- Manual verification 2: confirm the direction and skills sections remain readable and structured on mobile and desktop

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Carry-forward constraints respected
- [x] Acceptance criteria met
- [x] Verification passed
- [x] No known blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-001
- **Sprint ID:** SPRINT-01
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-29
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/completed/sprint-01-narrative-and-project-evidence.md`
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

None.

### Verification Results

- **Automated:** Markdown validation will be covered by repository checks.
- **Manual:** Reviewed sprint scope, tasks, and carry-forward alignment against the governing spec and the completed Sprint 0 state.

### Carry-Forward Updates

- Sprint 2 should pick up AI Workflow, Portfolio Strategy, Contact / Links, Footer, and README work exactly as excluded here.

### Final QA Summary

- **What was checked:** Sprint 1 scope, task sequencing, file list, and non-goals were reviewed against `SPEC-001` and the completed Sprint 0 artifact set.
- **What was fixed:** None.
- **Residual risks:** Live-demo and profile-link placeholders still need truthful handling during implementation.
- **Recommendation:** Ready to implement

## QA Report

- **Verdict:** PASS
- **Reviewer:** GitHub Copilot
- **Issues Found:** No functional implementation issues remained after QA. The initial multi-file edit attempt failed because the `app/globals.css` patch context was stale, but the Sprint 1 implementation was reapplied in smaller grounded edits and then revalidated.
- **Final Verification Results:** `npm run lint` passed; `npm run build` passed; manual production-browser checks passed for the `View Projects` anchor, real-versus-planned project distinction, and mobile rendering through the new skills section.
- **Deviations From Plan:** `components/Button.tsx` remained unchanged because the existing button behavior already supported the new anchor and planned-project placeholder behavior.
- **Carry-Forward Updates For Next Sprint:** Sprint 2 should build the AI Workflow, Portfolio Strategy, Contact / Links, and Footer sections on top of the now-complete hero-through-skills flow. The planned Assignment 2 project must remain visibly planned until real implementation artifacts exist, and unresolved GitHub, LinkedIn, and Resume destinations must remain honest placeholders until the user supplies final values.