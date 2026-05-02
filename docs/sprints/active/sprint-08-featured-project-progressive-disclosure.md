# Sprint: Featured Project Progressive Disclosure

## Metadata

- **ID:** SPRINT-08
- **Status:** Active
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-05-01
- **Last Updated:** 2026-05-01

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Refine the Featured Projects section so Debt Pressure Lab reveals one active story scene at a time while keeping the project proof and core technology stack visible and easy to scan.

## Governing Spec

`docs/specs/spec-009-featured-project-progressive-disclosure.md`

## Carry-Forward Context

Sprint 7 introduced a bounded flagship-project sequence around Debt Pressure Lab, but the section still showed too much explanatory text at once. Sprint 8 now refines that same surface by compressing the scene copy, collapsing inactive scenes, and stabilizing the proof panel so the section reads more like a portfolio proof slice and less like a long case-study block.

User review after implementation showed that this interaction model still did not satisfy the intended UX because the left side continued to read like a visible card stack. Sprint 9 now supersedes this interaction model with a true one-scene-at-a-time scroll stage while preserving Sprint 8 as the historical record of the progressive-disclosure attempt.

## Scope

In scope:

- reduce the amount of featured-project copy visible at one time
- keep Debt Pressure Lab as the only story-driven project surface
- make the active scene visually primary while inactive scenes collapse or quiet down
- keep the core technology stack visible in a stable proof panel
- preserve the planned Assignment 2 project as a short standard secondary card
- preserve mobile readability and reduced-motion safety

## Non-Goals

- do not convert the whole page into a presentation shell or slide deck
- do not redesign the hero, proof cards, skills, AI workflow, contact, or footer sections
- do not add more project copy, more scenes, or more project claims
- do not hide core proof behind drawers, tabs, or interaction-heavy UI
- do not make the planned Assignment 2 project read as completed
- do not reopen final truth-closeout work from Sprint 3

## Available Assets / Current State

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-009-featured-project-progressive-disclosure.md` | Governing requirements for the text-density refinement | Verified existing file |
| Active Sprint 7 | `docs/sprints/active/sprint-07-debt-pressure-lab-scrollytelling-sequence.md` | Current flagship-project sequence baseline | Verified existing file |
| Flagship sequence component | `components/FlagshipProjectSequence.tsx` | Local story-driven project surface refined in this sprint | Updated in this sprint |
| Project section shell | `components/ProjectsSection.tsx` | Owns the Featured Projects section entry point | Verified existing file |
| Content model | `data/portfolio.ts` | Source of truth for project content and scene data | Updated in this sprint |
| Global styles | `app/globals.css` | Shared styling and project-sequence layout rules | Updated in this sprint |

## Files Expected To Change

- `components/FlagshipProjectSequence.tsx`
- `data/portfolio.ts`
- `app/globals.css`

## Ordered Tasks

### Task 1. Compress the flagship scene content model

- **Objective:** Reduce the amount of copy each scene carries while preserving one clear idea per scene.
- **Files:** `data/portfolio.ts`
- **Changes:** Compressed the scene copy, added short previews, and modeled a stable core stack plus small scene-specific signals.
- **Unchanged:** No new Debt Pressure Lab features, stack items, or proof claims were introduced.
- **Verify After:** Each scene is now short enough to scan without relying on long explanatory paragraphs.

### Task 2. Implement progressive disclosure in the story rail

- **Objective:** Make one active scene carry the reading focus while inactive scenes collapse or quiet down.
- **Files:** `components/FlagshipProjectSequence.tsx`, `app/globals.css`
- **Changes:** Updated the story rail so each scene always exposes a short preview, while only the active scene expands to show the full body and supporting bullets.
- **Unchanged:** The section remains local to the Featured Projects area and does not become a theatrical full-scene swap.
- **Verify After:** Only one scene clearly holds reading priority at a time.

### Task 3. Stabilize the proof panel and preserve planned-project honesty

- **Objective:** Keep the core stack and project proof visible while the narrative scenes change, and preserve the normal secondary treatment for the planned project.
- **Files:** `components/FlagshipProjectSequence.tsx`, `app/globals.css`
- **Changes:** The proof panel now shows a stable core stack, compact current-focus copy, and scene-specific signal tags while the planned Assignment 2 project remains on the standard card path.
- **Unchanged:** The core stack is not hidden behind toggles, and the planned project does not inherit the flagship behavior.
- **Verify After:** The user can always see the core stack and project proof while moving through the flagship scenes.

## Product Rules

- Debt Pressure Lab remains the only project with progressive-disclosure behavior.
- One active scene must carry reading priority at a time.
- The core technology stack must remain visible across the sequence.
- The planned Assignment 2 project must remain clearly planned and visually secondary.
- Sprint 8 must remain local to the Featured Projects section.

## Deliverables

- Compressed featured-project scene copy
- Progressive-disclosure scene behavior for Debt Pressure Lab
- Stable proof panel with visible core stack
- Standard planned-project card preserved below the flagship project

## Acceptance Criteria

- The featured project no longer shows multiple full explanatory blocks at once.
- Only one scene clearly holds reading priority at a time.
- The core technology stack remains visible while the user moves through the story.
- The planned Assignment 2 project remains clearly planned and secondary.
- Mobile and reduced-motion behavior remain acceptable.

## Dependencies / Blockers

- Sprint 7 provides the current flagship-project sequence baseline.
- Sprint 3 final closeout should wait until Sprint 8 completes if this refinement is intended for the final shipped portfolio.
- True full-width desktop browser verification remains pending because the integrated browser available in-session is width-limited.

## Risks / Watchouts

- Over-collapsing scenes until the project loses too much explanatory value
- Repeating the same technical information in both the scene copy and the proof panel
- Making the scene transitions feel theatrical instead of professional
- Hiding too much technical proof in the name of brevity

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it changes only the information-density behavior of the flagship project section without reopening the rest of the portfolio or final submission closeout.

## Verification

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm only one scene carries strong reading priority at a time on the available browser viewport
- Manual verification 2: confirm the proof panel keeps the core stack visible and the planned Assignment 2 card remains clearly secondary
- Manual verification 3: confirm mobile and reduced-motion behavior remain readable and honest

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Carry-forward constraints respected
- [ ] Acceptance criteria met
- [ ] Verification passed
- [x] No known code blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-008
- **Sprint ID:** SPRINT-08
- **Reviewer:** GitHub Copilot
- **Date:** 2026-05-01
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/active/sprint-08-featured-project-progressive-disclosure.md`
- **Spec Path:** `docs/specs/spec-009-featured-project-progressive-disclosure.md`

### QA Mode

- Sprint doc QA

### Checks Performed

- [x] Read the full sprint doc
- [x] Read the governing spec when one exists
- [x] Verified listed assets against the live repository
- [x] Checked scope, non-goals, and task sequencing for drift risk
- [x] Checked verify-after steps and final verification for concreteness
- [x] Read the changed files when performing implementation QA
- [x] Compared implementation against original intent, not against assumptions

### Findings

None in the sprint document.

### Verification Results

- **Automated:** `npm run lint` PASS; `npm run build` PASS.
- **Manual:** Browser QA on the available `680px` integrated browser width confirmed 4 scenes still render, only 1 scene expands at a time, the active scene changes from "Why it exists" to "What it proves" when the page is scrolled deeper into the sequence, the core stack remains visible in the proof panel, the planned Assignment 2 card remains visible as a normal secondary card, and reduced-motion plus mobile-sized checks remain readable. Direct full-width desktop verification remains pending because the current browser environment is width-limited.

### Carry-Forward Updates

- Sprint 9 now replaces Sprint 8 as the next flagship-project interaction slice.
- Sprint 3 should perform final truth verification on top of the post-Sprint-9 UI state after one true full-width desktop browser pass confirms the final flagship-project behavior.

### Final QA Summary

- **What was checked:** Sprint 8 scope, file plan, changed files, automated validation, scene-disclosure behavior, stable core-stack visibility, planned-project honesty, and reduced-motion/mobile readability were reviewed against SPEC-009.
- **What was fixed:** None after the final validation pass. A local lint warning caused by an invalid `aria-expanded` attribute on an `article` was removed during implementation.
- **Residual risks:** True full-width desktop verification is still outstanding because the integrated browser available in this session does not expose a wide enough viewport.
- **Recommendation:** Keep Sprint 8 active until one full-width desktop browser verification pass is recorded.

## QA Report

- **Verdict:** Implementation complete, final desktop-width verification pending
- **Reviewer:** GitHub Copilot
- **Issues Found:** 1 resolved implementation issue. A lint warning from an invalid `aria-expanded` attribute was removed during implementation.
- **Final Verification Results:** `npm run lint` PASS; `npm run build` PASS; browser QA on the available `680px` viewport confirmed progressive disclosure, visible core stack, planned-project honesty, and readable reduced-motion/mobile behavior. Full-width desktop verification is still pending.
- **Deviations From Plan:** User review in real browser usage showed that the progressive-disclosure interaction still did not match the intended one-scene-at-a-time experience, so Sprint 8 remains preserved in `active/` and is now superseded by Sprint 9 rather than moved to `completed/`.
- **Carry-Forward Updates For Next Sprint:** Sprint 9 should replace the visible stacked-card interaction with a true one-scene-at-a-time scroll stage and then Sprint 3 should close out the final shipped portfolio state after a true full-width desktop browser verification pass.