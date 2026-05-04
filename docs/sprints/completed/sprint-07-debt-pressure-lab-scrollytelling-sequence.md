# Sprint: Debt Pressure Lab Scrollytelling Sequence

## Metadata

- **ID:** SPRINT-07
- **Status:** Completed
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-05-04

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Turn Debt Pressure Lab into a short guided scrollytelling case-study sequence inside the Featured Projects area while keeping the rest of the portfolio in its current portfolio-first structure.

## Governing Spec

`docs/specs/spec-008-flagship-project-scrollytelling-sequence.md`

## Carry-Forward Context

Sprint 4, Sprint 5, and Sprint 6 completed the shared reveal baseline, hero atmosphere, and interaction polish. The current page already has a polished portfolio flow, and Sprint 7 now adds a bounded flagship-project sequence around Debt Pressure Lab without reopening the global page architecture or the final truth-closeout sprint.

## Scope

In scope:

- replace the static featured-card treatment for Debt Pressure Lab with a local scrollytelling sequence
- introduce 4 bounded project scenes that pace the flagship project story
- add a desktop sticky proof panel or equivalent anchored visual element for the sequence
- keep the planned Assignment 2 project in a standard card format beneath the sequence
- preserve mobile readability and reduced-motion safety for the new section

## Non-Goals

- do not convert the whole page into a slide deck or presentation shell
- do not redesign the hero, proof cards, skills, AI workflow, contact, or footer sections
- do not make the planned Assignment 2 project read as completed
- do not introduce invented project claims or fake polished assets
- do not reopen final truth-closeout work from Sprint 3

## Available Assets / Current State

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-008-flagship-project-scrollytelling-sequence.md` | Governing requirements for the bounded scrollytelling slice | Verified existing file |
| Completed Sprint 4 | `docs/sprints/completed/sprint-04-motion-and-interaction-refinement.md` | Shared reveal and pacing baseline | Verified existing file |
| Completed Sprint 5 | `docs/sprints/completed/sprint-05-hero-atmosphere-and-top-of-page-presence.md` | Hero baseline that should remain untouched | Verified existing file |
| Completed Sprint 6 | `docs/sprints/completed/sprint-06-interactive-surface-polish.md` | Current interaction baseline | Verified existing file |
| Project section shell | `components/ProjectsSection.tsx` | Current featured-project entry point | Updated in this sprint |
| Flagship sequence component | `components/FlagshipProjectSequence.tsx` | Section-local scrollytelling UI and progress logic | Added in this sprint |
| Content model | `data/portfolio.ts` | Source of truth for project content and scene data | Updated in this sprint |
| Global styles | `app/globals.css` | Shared styling and section-local sequence layout rules | Updated in this sprint |

## Files Expected To Change

- `components/ProjectsSection.tsx`
- `components/FlagshipProjectSequence.tsx`
- `data/portfolio.ts`
- `app/globals.css`

## Ordered Tasks

### Task 1. Define the flagship narrative structure

- **Objective:** Add the bounded scene structure needed to tell the Debt Pressure Lab story in sequence.
- **Files:** `data/portfolio.ts`, `components/FlagshipProjectSequence.tsx`
- **Changes:** Added 4 explicit project scenes to the featured project data and rendered them through a dedicated flagship-sequence component.
- **Unchanged:** The featured project remains the same real project, and no new invented product claims were introduced.
- **Verify After:** The project sequence now renders from explicit scene data instead of duplicated ad hoc copy.

### Task 2. Implement the local scrollytelling sequence

- **Objective:** Replace the static featured-card treatment with a bounded guided sequence on desktop and a readable linear fallback on mobile.
- **Files:** `components/ProjectsSection.tsx`, `components/FlagshipProjectSequence.tsx`, `app/globals.css`
- **Changes:** Wired the featured-project slot to a dedicated sequence component, added progress-state tracking, and added section-local layout and visual states for the guided narrative.
- **Unchanged:** No global slide progress, snap scrolling, or presentation-mode navigation was introduced.
- **Verify After:** Debt Pressure Lab now reads as a guided case study while the rest of the page remains a normal portfolio flow.

### Task 3. Preserve planned-project honesty and fallback behavior

- **Objective:** Keep the Assignment 2 project clearly planned and confirm the new sequence behaves correctly under mobile and reduced-motion constraints.
- **Files:** `components/ProjectsSection.tsx`, `components/FlagshipProjectSequence.tsx`, `app/globals.css`
- **Changes:** Kept the planned Assignment 2 project on the existing generic card path and confirmed the new flagship section remains readable on smaller widths and under reduced motion.
- **Unchanged:** The planned project does not inherit the flagship scrollytelling treatment.
- **Verify After:** The planned project remains clearly planned, and the new sequence stays readable on mobile and reduced motion.

## Product Rules

- Debt Pressure Lab remains the only scrollytelling project surface in this sprint.
- The project sequence must improve comprehension, not just spectacle.
- Sticky or anchored behavior must remain local to the section and must not trap scrolling.
- The planned project must remain clearly planned.
- Sprint 7 must stop before final truth-closeout work.

## Deliverables

- Local scrollytelling sequence for Debt Pressure Lab
- Desktop sticky proof panel or equivalent anchored project visual
- Mobile-safe and reduced-motion-safe fallback behavior
- Standard planned-project card preserved below the flagship sequence

## Acceptance Criteria

- Debt Pressure Lab is presented as a guided project sequence.
- The rest of the page remains portfolio-first rather than presentation-first.
- The planned Assignment 2 project remains clearly secondary and planned.
- Desktop, mobile, and reduced-motion behavior all remain acceptable.

## Dependencies / Blockers

- Sprint 4 through Sprint 6 provide the current motion and interaction baseline.
- Sprint 3 final closeout should wait until this slice ships if it is intended for the final submission.
- The user-confirmed real-browser view check on 2026-05-04 cleared the earlier full-width desktop sticky verification gap.

## Risks / Watchouts

- Making the flagship section too theatrical for a portfolio context
- Letting sticky behavior feel broken on short viewports
- Duplicating project facts across data and components
- Weakening the clarity of the planned-project boundary

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it changes only the flagship project presentation model without turning the full portfolio into a scrollytelling site or reopening final closeout work.

## Verification

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm desktop project-sequence pacing, sticky behavior, and local progress feel intentional
- Manual verification 2: confirm mobile readability, reduced-motion fallback, and planned-project honesty remain intact

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Carry-forward constraints respected
- [x] Acceptance criteria met
- [x] Verification passed
- [x] No known code blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-007
- **Sprint ID:** SPRINT-07
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/completed/sprint-07-debt-pressure-lab-scrollytelling-sequence.md`
- **Spec Path:** `docs/specs/spec-008-flagship-project-scrollytelling-sequence.md`

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
- **Manual:** Browser QA on the available `680px` integrated browser width confirmed 4 flagship scenes render, the active progress marker now changes from "Why it exists" to "What it proves" as the reader moves through the sequence, the planned Assignment 2 card remains visible as a normal secondary card, and reduced-motion emulation keeps the project section visible with no motion dependency. The user later confirmed a real-browser view check on 2026-05-04, clearing the earlier full-width desktop verification gap.

### Carry-Forward Updates

- Sprint 7 is now a completed historical flagship-project interaction slice. Sprint 3 should perform final truth verification against the current shipped flagship model from the later completed sprints.

### Final QA Summary

- **What was checked:** Sprint 7 scope, file plan, task order, changed files, automated validation, scene-progression behavior, mobile-sized readability, planned-project honesty, and reduced-motion visibility were reviewed against the governing spec.
- **What was fixed:** The first implementation used intersection ratios for active-scene tracking, which kept the progress state pinned to the wrong scene when multiple scenes were visible. The component now selects the scene nearest to the reading anchor in the viewport.
- **Residual risks:** None for Sprint 7 closeout. The final shipped flagship interaction is governed by later completed Sprint 9 and Sprint 10 artifacts.
- **Recommendation:** Completed. Keep as historical context for the flagship-project interaction evolution.

## QA Report

- **Verdict:** PASS
- **Reviewer:** GitHub Copilot
- **Issues Found:** 1 resolved implementation issue. The active progress indicator initially stayed on the wrong scene when multiple scenes were visible. The sequence now tracks the scene nearest to the viewport reading anchor instead.
- **Final Verification Results:** `npm run lint` PASS; `npm run build` PASS; browser QA on the available `680px` viewport confirmed 4-scene rendering, active progress updates, planned-project honesty, and reduced-motion visibility. User-confirmed real-browser view check on 2026-05-04 clears the earlier desktop-width verification gap.
- **Deviations From Plan:** None for closeout. Sprint 7 is completed as a historical scrollytelling baseline and is superseded by the later completed flagship interaction refinements.
- **Carry-Forward Updates For Next Sprint:** Sprint 3 should close out the final shipped portfolio state against the current completed Sprint 9 and Sprint 10 baseline.
