# Sprint: Featured Project Scroll-Stage Sequence

## Metadata

- **ID:** SPRINT-09
- **Status:** Completed
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

Replace the current stacked-card flagship project presentation with a true one-scene-at-a-time scroll stage that keeps the sticky proof panel visible and releases the whole stage cleanly after the final scene.

## Governing Spec

`docs/specs/spec-010-featured-project-scroll-stage-sequence.md`

## Carry-Forward Context

Sprint 7 created the initial flagship-project scrollytelling slice. Sprint 8 reduced text density but still left the section visually card-stack based. Sprint 9 exists because the intended interaction is different: one active scene at a time, a persistent right-side proof panel, and a full stage exit after the last scene.

## Scope

In scope:

- replace the visible left-side card stack with a single active scene stage
- keep the right-side proof panel sticky through the sequence
- keep the repo link and core stack visible in that proof panel
- ensure scenes enter and exit in sequence rather than remaining visible as stacked shells
- release both the stage and the proof panel after the final scene
- preserve the planned Assignment 2 project as a normal short secondary card
- preserve mobile readability and reduced-motion safety

## Non-Goals

- do not convert the whole page into a global presentation shell
- do not redesign the hero, proof cards, skills, AI workflow, contact, or footer sections
- do not add more scenes or more Debt Pressure Lab claims
- do not hide the repo link or core stack behind toggles or drawers
- do not make the planned Assignment 2 project read as completed
- do not reopen final truth-closeout work from Sprint 3

## Available Assets / Current State

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-010-featured-project-scroll-stage-sequence.md` | Governing requirements for the new interaction model | Verified existing file |
| Completed Sprint 7 | `docs/sprints/completed/sprint-07-debt-pressure-lab-scrollytelling-sequence.md` | Historical baseline flagship-project sequence slice | Verified existing file |
| Completed Sprint 8 | `docs/sprints/completed/sprint-08-featured-project-progressive-disclosure.md` | Historical stacked-card refinement superseded by this sprint | Verified existing file |
| Flagship sequence component | `components/FlagshipProjectSequence.tsx` | Current featured-project surface to be reworked | Verified existing file |
| Project section shell | `components/ProjectsSection.tsx` | Owns the Featured Projects entry point | Verified existing file |
| Content model | `data/portfolio.ts` | Source of truth for scene content and proof data | Verified existing file |
| Global styles | `app/globals.css` | Project-stage layout, motion, and responsive rules | Verified existing file |

## Files Expected To Change

- `components/FlagshipProjectSequence.tsx`
- `components/ProjectsSection.tsx`
- `data/portfolio.ts`
- `app/globals.css`
- `docs/sprints/completed/sprint-08-featured-project-progressive-disclosure.md`

## Ordered Tasks

### Task 1. Reframe the flagship project as a single-scene stage

- **Objective:** Replace the visible multi-card left column with one staged scene that is swapped through the scroll sequence.
- **Files:** `components/FlagshipProjectSequence.tsx`, `app/globals.css`
- **Changes:** Remove the visible left-side card stack and implement one active scene area that enters, holds, and exits as the scroll progresses.
- **Unchanged:** Do not turn the section into a site-wide presentation mode.
- **Verify After:** Only one scene is visibly active on the left side at a time.

### Task 2. Keep the proof panel stable and truth-safe

- **Objective:** Preserve a sticky right-side panel that keeps the core project proof visible throughout the sequence.
- **Files:** `components/FlagshipProjectSequence.tsx`, `data/portfolio.ts`, `app/globals.css`
- **Changes:** Ensure the proof panel persistently shows the project name, summary, repo link, and core stack while scene-specific details update minimally if needed.
- **Unchanged:** Do not hide the repo link or the core stack behind interaction-heavy UI.
- **Verify After:** The right panel remains informative and stable during the full scene sequence.

### Task 3. Release the whole stage after the final scene

- **Objective:** Make the entire flagship stage hand off cleanly to the next section after the final scene completes.
- **Files:** `components/FlagshipProjectSequence.tsx`, `app/globals.css`
- **Changes:** Implement the end-of-sequence exit so the scene stage and sticky proof panel both fade or release before the next portfolio section takes over.
- **Unchanged:** Do not trap scroll or leave floating remnants of the stage behind.
- **Verify After:** The user can move from the flagship sequence into the next section without visual leftovers.

### Task 4. Record Sprint 8 outcome honestly

- **Objective:** Preserve the workflow record by marking Sprint 8 as an unsatisfactory interaction model for the intended UX rather than silently overwriting it.
- **Files:** `docs/sprints/completed/sprint-08-featured-project-progressive-disclosure.md`
- **Changes:** Add a carry-forward note or QA note that Sprint 9 replaces the stacked-card interaction model.
- **Unchanged:** Do not erase Sprint 8 implementation history.
- **Verify After:** The durable artifacts reflect what happened and why Sprint 9 exists.

## Product Rules

- Debt Pressure Lab remains the only project with scroll-stage behavior.
- Only one left-side scene may be visibly active at a time.
- The right proof panel must keep the repo link and core stack visible.
- The planned Assignment 2 project must remain clearly planned and visually secondary.
- Sprint 9 must remain local to the Featured Projects section.

## Deliverables

- One-scene-at-a-time flagship project stage
- Stable sticky right-side proof panel with repo link and core stack
- Clean end-of-sequence release into the next page section
- Honest carry-forward note in Sprint 8

## Acceptance Criteria

- The left-side flagship project no longer appears as a stacked list of cards.
- Only one scene is visible at a time during the main sequence.
- The right sticky proof panel keeps the repo link and core stack visible.
- The whole stage releases cleanly after the last scene.
- The planned Assignment 2 project remains clearly planned and secondary.
- Mobile and reduced-motion behavior remain acceptable.

## Dependencies / Blockers

- Sprint 7 provides the initial flagship-project sequence baseline.
- Sprint 8 provides the most recent but unsatisfactory interaction model and must remain preserved as history.
- Sprint 3 final closeout should wait until Sprint 9 completes if this new interaction model is intended for the final shipped portfolio.

## Risks / Watchouts

- Implementing stage replacement in a way that feels too theatrical
- Breaking scroll continuity between the flagship stage and the next section
- Letting the right sticky proof panel feel detached from the scene sequence
- Failing to record Sprint 8's outcome honestly in the workflow artifacts

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it changes only the flagship project's interaction model and records the immediate predecessor sprint outcome without reopening the rest of the portfolio or final submission closeout.

## Verification

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm only one left-side scene is visible at a time on desktop
- Manual verification 2: confirm the sticky proof panel keeps the repo link and core stack visible through the full sequence
- Manual verification 3: confirm the full stage releases cleanly after the final scene and the next section takes over normally
- Manual verification 4: confirm mobile and reduced-motion fallbacks remain readable and honest

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Carry-forward constraints respected
- [x] Acceptance criteria met
- [x] Verification passed
- [x] No known code blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-009
- **Sprint ID:** SPRINT-09
- **Reviewer:** GitHub Copilot
- **Date:** 2026-05-01
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/completed/sprint-09-featured-project-scroll-stage-sequence.md`
- **Spec Path:** `docs/specs/spec-010-featured-project-scroll-stage-sequence.md`

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

None.

### Verification Results

- **Automated:** `npm run lint` PASS; `npm run build` PASS after installing Playwright and after the tall-section reveal / sticky-stage spacing fixes.
- **Manual:** Playwright verification against a fresh production server confirmed desktop scene progression from "Why it exists" through "What it proves", the proof / tech panel no longer has a large empty card area, the planned project remains below the viewport until the flagship sequence is nearly complete, and mobile renders the four-scene fallback with the planned project below it. A follow-up desktop geometry check confirmed the flagship stage now begins 43px below the intro divider instead of being pushed far down by the sticky frame. A later content pass checked the updated Debt Pressure Lab stack against the source repository and confirmed the expanded proof-panel badges fit without desktop or mobile overflow. A nav-offset pass confirmed the sticky frame now pins below the sticky header instead of letting the nav cover the card top during the active scene sequence. A short-height desktop pass at 1531x634 confirmed the active scene cards are no longer clipped. A final no-images pass confirmed the project section renders zero scene-background layers and zero project images.

### Carry-Forward Updates

- Sprint 3 should perform final truth verification against the post-Sprint-9 state if this interaction model is the final shipped version.

### Final QA Summary

- **What was checked:** Sprint 9 scope, file plan, task order, dependency on prior flagship-project artifacts, verification strategy, and the live project-section reveal behavior were reviewed against SPEC-010 and the live project-section surfaces.
- **What was fixed:** The project section reveal threshold was lowered because the new scroll-stage made the section several viewport-heights tall, preventing the default reveal threshold from being reached and leaving the section visually empty. The flagship stage then removed its extra fifth release step, allowed sticky positioning to work by making the outer flagship panel overflow visible, switched scene replacement to continuous stage progress, and made the proof / tech panel content-height so it no longer creates a large empty card area.
- **Residual risks:** The desktop stage has now been checked with Playwright, but a final human browser pass is still useful for motion feel and pacing because automated DOM checks cannot judge whether the interaction feels too theatrical.
- **Recommendation:** Ready to implement

## QA Report

- **Verdict:** PASS
- **Reviewer:** GitHub Copilot
- **Issues Found:** 3 resolved implementation issues. First, the Featured Projects reveal wrapper used the default `0.18` intersection threshold, but the Sprint 9 scroll-stage made the section too tall for that threshold to be reached in a normal viewport, so the whole section could remain hidden at `opacity: 0`. `components/ProjectsSection.tsx` now uses a lower reveal threshold for this tall section. Second, the desktop sequence had an extra release step and inherited `overflow: hidden` from the outer panel, which created a large blank scroll/card area and could interfere with sticky stage behavior. `components/FlagshipProjectSequence.tsx` now uses only the four real scene steps and continuous stage progress, while `app/globals.css` lets the flagship panel overflow visibly for sticky positioning and removes the oversized proof-panel minimum height. Third, the sticky desktop frame vertically centered the scene/proof cards inside a full viewport, leaving a large empty area below the intro divider. `app/globals.css` now top-aligns the sticky frame and reduces the desktop sequence top spacing.
- **Final Verification Results:** `npm run lint` PASS; `npm run build` PASS. Playwright was installed in the portfolio repo and used against a fresh production server at desktop width. The desktop pass confirmed the project section reveals, the scene sequence advances through "Why it exists", "What I built", "How it works", and "What it proves", the proof / tech card height is compact rather than mostly empty, and the planned Assignment 2 card stays below the viewport until the flagship sequence is almost complete. A follow-up Playwright geometry check against the production server confirmed the flagship stage starts 43px after the intro divider with `align-items: start`, `27px` frame top padding, and `16px` desktop sequence margin. The source Debt Pressure Lab repository was checked for actual stack and feature evidence, including `npm test` reporting 111 passing tests; the portfolio content now reflects the verified Next.js App Router, React 19, Tailwind CSS 4, SQLite/libSQL, Drizzle ORM, Better Auth, OpenAI Responses API, SSE streaming, MCP SDK, Zod, and `node:test` usage. A final portfolio browser pass confirmed the expanded proof-panel stack has no badge overflow on desktop or mobile. A later nav-offset browser pass sampled the active desktop scroll range and confirmed the sticky frame/card tops remain below the sticky header before the final release. A 1531x634 browser pass confirmed all four desktop scene cards have matching `scrollHeight` and `clientHeight`, so the active scene content is not clipped at the shorter screenshot-like viewport height. The mobile pass confirmed the fallback renders 4 scenes and keeps the planned project below the sequence. Screenshot backgrounds and their copied/reference PNG files were removed before final presentation because the live site itself will be presented. A final no-images browser pass at 1531x634 confirmed the project section renders zero scene-background layers, zero project images, preserves nav clearance, and does not clip the active scene.
- **Deviations From Plan:** No functional deviation remains for the desktop-width verification blocker. Sprint 10 later refined the visual presentation on top of this completed scroll-stage baseline.
- **Carry-Forward Updates For Next Sprint:** Sprint 3 should close out the final shipped portfolio state after Sprint 10 and after final truth-sensitive project-claim verification.
