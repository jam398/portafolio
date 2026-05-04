# Sprint: AI Workflow Horizontal Stage

## Metadata

- **ID:** SPRINT-11
- **Status:** Completed
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-05-04
- **Last Updated:** 2026-05-04

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Refine the "How I Use AI Intentionally" section into a workflow stage where the AI workflow cards move horizontally from right to left on desktop scroll, while preserving readability, mobile fallback behavior, and the portfolio's professional tone.

## Governing Spec

`docs/specs/spec-011-portfolio-ui-design-refinement.md`

## Carry-Forward Context

Sprint 10 reduced visual clutter across the portfolio, but user review found the AI Workflow section still reads like an oversized text document. The user approved replacing the quiet list with a workflow-style card stage inspired by a horizontal work rail reference, with the constraint that this portfolio should stay calmer and more professional than the reference.

## Scope

In scope:

- replace the current AI Workflow quiet list with a desktop horizontal scroll-driven card stage
- make workflow cards move right to left as the user scrolls through the section
- keep the title and intro compact enough to avoid nav clipping
- provide a normal vertical card layout on mobile and reduced motion
- preserve the existing workflow content and truth-safe portfolio positioning

## Non-Goals

- do not copy the reference site's visual theme
- do not add images, project screenshots, or new AI claims
- do not change the section order
- do not reopen the flagship project scroll-stage behavior
- do not add a dependency for animation
- do not start Sprint 3 final closeout work

## Available Assets / Current State

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-011-portfolio-ui-design-refinement.md` | UI refinement constraints | Verified existing file |
| AI workflow component | `components/AiWorkflowSection.tsx` | Main implementation surface | Verified existing file |
| Portfolio data | `data/portfolio.ts` | Source of workflow card content | Verified existing file |
| Global styles | `app/globals.css` | Layout, sticky, scroll-stage, responsive, and reduced-motion styles | Verified existing file |
| Reference site | `https://red1-for-hek.vercel.app/` | Interaction inspiration only | Inspected as a horizontal card rail reference |

## Files Expected To Change

- `components/AiWorkflowSection.tsx`
- `app/globals.css`
- `docs/specs/spec-011-portfolio-ui-design-refinement.md`
- `docs/sprints/planned/sprint-03-truth-verification-and-final-submission.md`

## Ordered Tasks

### Task 1. Build the desktop workflow stage

- **Objective:** Convert the AI workflow section into a scroll-driven horizontal card stage on desktop.
- **Files:** `components/AiWorkflowSection.tsx`, `app/globals.css`
- **Changes:** Add section-local scroll progress tracking, a sticky frame, a horizontal track, and workflow cards that translate from right to left.
- **Unchanged:** Keep the existing workflow content model in `data/portfolio.ts`.
- **Verify After:** Desktop scroll moves the workflow cards horizontally without creating a page-level horizontal scrollbar.

### Task 2. Preserve fallback readability

- **Objective:** Keep the section readable on mobile, short viewports, and reduced-motion settings.
- **Files:** `components/AiWorkflowSection.tsx`, `app/globals.css`
- **Changes:** Provide a static vertical card layout for smaller widths and reduced motion, with stable card dimensions and no clipping.
- **Unchanged:** Do not trap scrolling or require horizontal gestures.
- **Verify After:** Mobile and reduced-motion views show all workflow cards in normal document flow.

### Task 3. Update workflow artifacts

- **Objective:** Record the new UI slice and carry-forward state.
- **Files:** `docs/specs/spec-011-portfolio-ui-design-refinement.md`, `docs/sprints/planned/sprint-03-truth-verification-and-final-submission.md`, this sprint artifact
- **Changes:** Add the Sprint 11 implementation note and keep Sprint 3 closeout aware that it should verify the post-Sprint-11 UI state.
- **Unchanged:** Do not mark Sprint 3 complete.
- **Verify After:** Workflow docs describe the current sprint state accurately.

## Product Rules

- The section must read as a practical workflow, not another project case study.
- Desktop animation must be subordinate to readability.
- The sticky stage must clear the navigation and avoid card clipping.
- Mobile and reduced-motion users must receive static readable cards.
- No new claims, links, demos, or projects may be introduced.

## Deliverables

- Desktop horizontal AI workflow stage
- Static mobile and reduced-motion card fallback
- Updated workflow documentation and implementation QA

## Acceptance Criteria

- AI workflow cards move from right to left during desktop scroll.
- The section title, intro, and cards are not clipped by the sticky navigation.
- No horizontal page overflow is introduced.
- Mobile and reduced-motion layouts show all workflow cards in readable order.
- `npm run lint` and `npm run build` pass.

## Dependencies / Blockers

- None. GitHub, LinkedIn, and Email are already confirmed, and this sprint does not depend on README or Debt Pressure Lab final closeout.

## Risks / Watchouts

- Making the section feel too similar to the flagship project stage
- Reintroducing card clipping or nav overlap
- Creating a horizontal scrollbar on the page
- Over-animating a section that should communicate process clearly

## Sprint Boundary Check

This sprint is one bounded UI refinement because it changes only the AI Workflow section's presentation model and supporting documentation.

## Verification

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: desktop browser check confirms horizontal card movement, nav clearance, and no horizontal overflow
- Manual verification 2: short-height desktop check confirms title and cards are not clipped
- Manual verification 3: mobile browser check confirms static readable cards and no horizontal overflow
- Manual verification 4: reduced-motion check confirms static readable behavior

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Carry-forward constraints respected
- [x] Acceptance criteria met
- [x] Verification passed
- [x] No known blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-011
- **Sprint ID:** SPRINT-11
- **Reviewer:** GitHub Copilot
- **Date:** 2026-05-04
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/completed/sprint-11-ai-workflow-horizontal-stage.md`
- **Spec Path:** `docs/specs/spec-011-portfolio-ui-design-refinement.md`

### QA Mode

- Sprint doc QA

### Checks Performed

- [x] Read the governing spec
- [x] Verified listed assets against the live repository
- [x] Checked scope and non-goals against the user's requested interaction
- [x] Checked verification coverage for desktop, short-height, mobile, reduced motion, and overflow risks

### Findings

None.

### Verification Results

- **Automated:** `npm run lint` PASS; `npm run build` PASS.
- **Manual:** Playwright QA against `http://localhost:3000` confirmed desktop right-to-left card movement, active-card progression from card 1 to card 4, sticky nav clearance, no horizontal overflow, short-height card/title visibility, mobile static card layout, and reduced-motion static card layout.

### Carry-Forward Updates

- Sprint 3 should run final closeout QA against the post-Sprint-11 portfolio state.

### Final QA Summary

- **What was checked:** Scope, target files, product rules, non-goals, verification coverage, implementation files, automated checks, and browser behavior.
- **What was fixed:** The inherited `overflow: hidden` from `section-band` prevented sticky behavior and caused the title/cards to scroll under the nav. The AI workflow section now allows sticky overflow while the internal card viewport remains clipped.
- **Residual risks:** None known for Sprint 11. Final submission QA still belongs to Sprint 3.
- **Recommendation:** Completed.

## QA Report

- **Verdict:** PASS
- **Reviewer:** GitHub Copilot
- **Issues Found:** 1 resolved implementation issue. The first CSS pass inherited `overflow: hidden` from `section-band`, which defeated sticky positioning and caused nav overlap during scroll. The section now overrides that overflow while the card window still clips the horizontal track.
- **Final Verification Results:** `npm run lint` PASS; `npm run build` PASS; Playwright desktop QA at `1440x920` confirmed 4 workflow cards, right-to-left card movement, active-card progression, nav clearance, no horizontal overflow, and active-card viewport fit. Short-height desktop QA at `1531x634` confirmed title/card visibility and no horizontal overflow. Mobile QA at `390x844` confirmed static grid cards and no horizontal overflow. Reduced-motion QA confirmed a static grid and no horizontal overflow. A follow-up spacing attempt made the rail too fast, so the final fix restores a controlled sticky stage and centers each active card during its scroll segment. Later tuning reduced the desktop stage height to `205vh` and added explicit hold zones for cards 2 and 3, while preserving the final card hold. The final interaction update changes desktop behavior to discrete wheel-step stops: each wheel step advances one card, the page scroll position is held while moving through cards 1 through 4, and normal page scroll releases after card 4. Fresh production QA on `http://localhost:3065` confirmed the sequence `0,1,2,3`, no scroll movement while stepping cards, release after card 4, smooth `460ms` transform transitions, active-card readability, mobile static cards, reduced-motion static cards, and no horizontal overflow. Follow-up QA on `http://localhost:3067` fixed bottom-up capture: when Portfolio Strategy is visible, upward wheel input now scrolls the page instead of rewinding the workflow cards; once Portfolio Strategy is no longer visible and the workflow frame is dominant again, upward wheel input can rewind from card 4 to card 3. The same pass confirmed no horizontal overflow, mobile static cards, and reduced-motion static cards. Copy follow-up on `http://localhost:3070` updated the four workflow cards to explicitly reference spec and sprint planning, implementation support, testing and QA, and documentation traceability. Playwright confirmed the updated card sequence, no desktop/mobile/reduced-motion clipping, and no horizontal overflow.
- **Deviations From Plan:** Used the already-running local dev server on `http://localhost:3000` for browser QA because attempting a second Next dev server on port `3061` was blocked by the existing repo dev server.
- **Carry-Forward Updates For Next Sprint:** Sprint 3 should verify the final submitted page after the completed Sprint 11 AI Workflow stage.
