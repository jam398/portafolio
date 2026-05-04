# Sprint: Portfolio UI Design Refinement

## Metadata

- **ID:** SPRINT-10
- **Status:** Completed
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-05-04
- **Last Updated:** 2026-05-04

## Goal

Refine the portfolio UI so the existing full-stack and AI direction reads with stronger visual hierarchy, less repeated badge/card weight, and a more polished flagship project case-study presentation.

## Governing Spec

`docs/specs/spec-011-portfolio-ui-design-refinement.md`

## Carry-Forward Context

The current branch has a verified baseline commit that includes the hero profile photo, Debt Pressure Lab stack updates, flagship-stage spacing fixes, and screenshot-background removal. A research pass sampled 20 live portfolios from `emmabostian/developer-portfolios` and found that the main improvement opportunity is UI priority, not topic changes.

## Scope

In scope:

- simplify hero and top navigation visual priority
- make pending links quieter but still honest
- reduce badge and repeated card density
- polish Debt Pressure Lab as a project brief / case-study surface
- improve rhythm between lower sections
- keep mobile and short-height desktop safety intact

Out of scope:

- new portfolio topics
- new projects
- invented final links or contact details
- live-demo claims that have not been verified
- heavy 3D, copied themes, or decorative animation systems
- final truth verification for submission

## Files Expected To Change

- `components/Navbar.tsx`
- `components/HeroSection.tsx`
- `components/ProjectsSection.tsx`
- `components/FlagshipProjectSequence.tsx`
- `components/SkillsSection.tsx`
- `components/ContactSection.tsx`
- `data/portfolio.ts`
- `app/globals.css`
- `docs/specs/spec-011-portfolio-ui-design-refinement.md`
- `docs/sprints/completed/sprint-10-portfolio-ui-design-refinement.md`

## Ordered Tasks

### Task 1. Simplify hero and top navigation

- **Objective:** Make the first viewport easier to understand and less unfinished-looking.
- **Files:** `components/Navbar.tsx`, `components/HeroSection.tsx`, `data/portfolio.ts`, `app/globals.css`
- **Changes:** Reduce hero tag count, clarify CTA priority, and quiet pending link treatment.
- **Unchanged:** Do not invent real URLs or hide that unresolved links are pending.
- **Verify After:** First viewport shows one clear headline, one primary project path, and pending destinations no longer dominate.

### Task 2. Reduce badge and surface repetition

- **Objective:** Lower visual noise while keeping technical proof visible.
- **Files:** `data/portfolio.ts`, `components/SkillsSection.tsx`, `components/FlagshipProjectSequence.tsx`, `app/globals.css`
- **Changes:** Cap or regroup badge-heavy areas and convert broad repeated skills into calmer grouped text surfaces where appropriate.
- **Unchanged:** Do not remove verified technical evidence that matters for the assignment.
- **Verify After:** The page has visibly fewer pill/badge elements and fewer surfaces competing at the same weight.

### Task 3. Polish Debt Pressure Lab as a case study

- **Objective:** Make the flagship project read like a mature project brief while preserving the scroll-stage interaction.
- **Files:** `components/FlagshipProjectSequence.tsx`, `data/portfolio.ts`, `app/globals.css`
- **Changes:** Reframe the stable proof panel around problem, build, role, verification, stack, and repo access.
- **Unchanged:** Do not add screenshot backgrounds or more unverified claims.
- **Verify After:** The section still shows one active scene at a time, avoids nav overlap, and communicates project proof faster.

### Task 4. Improve lower-section rhythm

- **Objective:** Make the page feel less like a repeated card report after the flagship project.
- **Files:** `components/SkillsSection.tsx`, `components/AiWorkflowSection.tsx`, `components/PortfolioStrategySection.tsx`, `components/ContactSection.tsx`, `app/globals.css`
- **Changes:** Vary section density, reduce nested card feeling, and make contact/footer calmer.
- **Unchanged:** Required section order stays the same.
- **Verify After:** Lower sections support the story without looking like another full set of equally loud panels.

### Task 5. Browser QA and artifact closeout

- **Objective:** Verify the visual pass against the prior spacing, clipping, and truth-safety risks.
- **Files:** `docs/specs/spec-011-portfolio-ui-design-refinement.md`, `docs/sprints/completed/sprint-10-portfolio-ui-design-refinement.md`
- **Changes:** Record automated checks, browser geometry checks, mobile checks, and any deviations.
- **Unchanged:** Do not mark complete without verification.
- **Verify After:** Sprint QA includes lint/build, desktop, short-height desktop, mobile, and truth-safe pending-link checks.

## Product Rules

- The portfolio topic remains practical AI-powered web systems built from a full-stack foundation.
- Debt Pressure Lab remains the primary proof project.
- Assignment 2 remains planned.
- Pending links stay honest.
- UI polish should reduce visual competition.

## Deliverables

- Cleaner first viewport
- Quieter pending-link treatment
- Reduced badge/card repetition
- More polished Debt Pressure Lab case-study surface
- Calmer lower-page rhythm
- Recorded verification

## Acceptance Criteria

- Hero headline and primary CTA are easier to scan.
- Pending links no longer look like dominant product buttons.
- Badge count and repeated pill density are reduced.
- Debt Pressure Lab still communicates verified technologies and test proof.
- The scroll-stage does not regress on nav overlap, clipped cards, or mobile fallback.
- Lower sections remain readable and truthful.
- `npm run lint` and `npm run build` pass.

## Dependencies / Blockers

- The committed baseline `9c14431` should be treated as the starting point.
- GitHub and LinkedIn were confirmed during this sprint. Email was unresolved at the time of Sprint 10 implementation and has since been confirmed for Sprint 3 closeout as `jam398@njit.edu`.

## Risks / Watchouts

- Over-minimizing could weaken assignment evidence.
- Hero simplification could accidentally hide the AI/full-stack direction.
- Case-study polish could disturb the recently fixed scroll-stage spacing.
- Contact cleanup could hide unresolved final-submission work.

## Sprint Boundary Check

This sprint is bounded to UI design refinement across existing sections. It does not reopen portfolio content truth, add new project scope, or perform final submission closeout.

## Verification

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: desktop first viewport at 1440x920
- Manual verification 2: short-height desktop around 1531x634
- Manual verification 3: mobile around 390x844
- Manual verification 4: pending links remain visible and honest
- Manual verification 5: Debt Pressure Lab proof still includes verified stack and test evidence

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Acceptance criteria met
- [x] Verification passed
- [x] Governing artifacts updated

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-010
- **Sprint ID:** SPRINT-10
- **Reviewer:** GitHub Copilot
- **Date:** 2026-05-04
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/completed/sprint-10-portfolio-ui-design-refinement.md`
- **Spec Path:** `docs/specs/spec-011-portfolio-ui-design-refinement.md`

### QA Mode

Sprint doc QA

### Checks Performed

- [x] Read the full sprint doc
- [x] Checked alignment with the governing spec
- [x] Verified the sprint is UI-only and does not add new project/content claims
- [x] Checked task order for likely implementation safety
- [x] Checked verification covers desktop, short-height desktop, mobile, and truth-safe pending links

### Findings

None.

### Open Questions

- Whether to introduce a secondary accent should be decided only after first reducing current visual noise.

### Final QA Summary

- **What was checked:** Sprint 10 was checked for scope control, workflow fit, task sequencing, and verification coverage.
- **What was fixed:** None.
- **Residual risks:** The final polish level will need human visual review after implementation.
- **Recommendation:** Ready to activate when implementation begins

## QA Report

- **Verdict:** PASS
- **Reviewer:** GitHub Copilot
- **Issues Found:** 2 resolved implementation issues. First, JSX apostrophes introduced during ASCII text cleanup triggered `react/no-unescaped-entities`; those were changed to `&apos;`. Second, the first short-height project QA showed the right proof panel extending below the viewport after the case-study proof brief was added. The proof panel was tightened by replacing stack badges with a compact stack line, hiding the verification block on short desktop heights, and reducing short-height panel padding.
- **Final Verification Results:** `npm run lint` PASS; `git diff --check` PASS. `npm run build` PASS when run outside the sandbox; the sandboxed build failed with Windows `spawn EPERM` during the Next.js TypeScript phase. Playwright browser QA also required elevated execution because Chromium launch failed in the sandbox with `spawn EPERM`. Browser QA against a production server confirmed desktop first viewport at 1440x920 has ready GitHub and LinkedIn links, no Resume link, no LinkedIn pending text, 67 badge-like elements instead of the prior 158, 9 `.panel` surfaces instead of the prior 21, and no horizontal overflow. Mobile QA at 390x844 confirmed the same link truth state and no horizontal overflow. Short-height desktop QA at 1531x634 confirmed the flagship stage remains below the nav, the active scene is not clipped (`clientHeight` equals `scrollHeight`), the proof panel fits within the viewport, core stack is visible, and the GitHub Repo button is visible.
- **Deviations From Plan:** Verified links changed during the sprint because the user supplied the public LinkedIn URL after the plan was drafted. The sprint preserved the truth rules by using the confirmed public profile URL and keeping email unresolved.
- **Carry-Forward Updates For Next Sprint:** Sprint 3 should now treat README and final Debt Pressure Lab claim/demo verification as the remaining final closeout blockers. GitHub, LinkedIn, and Email are confirmed, and Resume is intentionally not required.
