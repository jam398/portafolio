# Spec: Assignment 1 Portfolio Website Program

## Metadata

- **ID:** SPEC-001
- **Status:** Implementing
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-29
- **Last Updated:** 2026-05-04
- **Related Issue / Ticket:** None
- **Child Specs:** SPEC-002, SPEC-003, SPEC-004, SPEC-005, SPEC-006, SPEC-007, SPEC-008, SPEC-009, SPEC-010, SPEC-011
- **Related Sprints:** Sprint 0 - Portfolio Foundation; Sprint 1 - Narrative and Project Evidence; Sprint 2 - AI Workflow and Closeout Surfaces; Sprint 3 - Truth Verification and Final Submission; Sprint 4 - Motion Foundation and Section Pacing; Sprint 5 - Hero Atmosphere and Top-of-Page Presence; Sprint 6 - Interactive Surface Polish; Sprint 7 - Debt Pressure Lab Scrollytelling Sequence; Sprint 8 - Featured Project Progressive Disclosure; Sprint 9 - Featured Project Scroll-Stage Sequence; Sprint 10 - Portfolio UI Design Refinement

## Problem Statement

The repository needs a professional portfolio website for Assignment 1 that presents a credible software-development identity with a real direction toward AI-powered systems. The work must stay truthful, bounded, and easy to evaluate both as a class submission and as a portfolio artifact.

One oversized spec created avoidable friction because it mixed global portfolio rules, already-completed top-of-page work, pending lower-page work, and final truth-verification concerns into a single document. The program-level contract should stay short, while phase-specific detail lives in smaller specs aligned to the actual implementation slices.

## Goals

- Keep one governing portfolio program contract for global rules, sequencing, and completion criteria.
- Split phase-specific detail into smaller specs aligned to the real work slices.
- Preserve the portfolio's core truth rules, page order, and design direction across all child specs.
- Keep future planning readable without duplicating the same global rules in every phase doc.

## Non-Goals

- Do not redefine the portfolio product itself.
- Do not change completed implementation behavior just to fit a new document layout.
- Do not create overlapping specs that compete for the same decision surface.

## Current State

The repository now contains a working Next.js portfolio application and completed Sprint 0 and Sprint 1 artifacts. The live page currently renders the required Navigation, Hero, Proof cards, My Direction, Featured Projects, Skills, AI Workflow, Portfolio Strategy, Contact / Links, and Footer sections.

The live page now renders the full required section flow through the footer. Final truth verification still remains in Sprint 3, the presentation-refinement work is split into bounded slices, Sprint 7 introduced the initial flagship-project sequence, Sprint 8 explored a progressive-disclosure refinement that still left the section visually card-stack based, Sprint 9 implements the true one-scene-at-a-time scroll stage for the flagship project, and Sprint 10 completed the UI design refinement pass based on external portfolio research and live page review.

## Proposed Approach

Use this spec as the umbrella contract for the entire portfolio program and keep slice-specific detail in child specs:

1. **SPEC-002: Core Portfolio Experience**
   - Governs sections 1 through 6.
   - Covers the implemented trust, narrative, and project-evidence flow from Sprint 0 and Sprint 1.

2. **SPEC-003: AI Workflow and Closeout Surfaces**
   - Governs sections 7 through 10.
   - Covers the remaining visible page surfaces planned for Sprint 2.

3. **SPEC-004: Final Truth Verification and Submission**
   - Governs final link confirmation, Debt Pressure Lab claim verification, README, and submission closeout.
   - Covers Sprint 3.

4. **SPEC-005: Motion Foundation and Section Pacing**
   - Governs reusable reveal behavior, stagger timing, reduced-motion handling, and section pacing.
   - Covers Sprint 4.

5. **SPEC-006: Hero Atmosphere and Top-of-Page Presence**
   - Governs hero-specific motion and the top-of-page visual identity layer.
   - Covers Sprint 5.

6. **SPEC-007: Interactive Surface Polish**
   - Governs hover, focus, and interaction refinement across key portfolio surfaces.
   - Covers Sprint 6.

7. **SPEC-008: Flagship Project Scrollytelling Sequence**
   - Governs one bounded guided sequence around Debt Pressure Lab inside the Featured Projects area.
   - Covers Sprint 7.

8. **SPEC-009: Featured Project Progressive Disclosure**
   - Governs the follow-on refinement that reduces simultaneous flagship-project copy while keeping the technical proof visible.
   - Covers Sprint 8.

9. **SPEC-010: Featured Project Scroll-Stage Sequence**
   - Governs the successor interaction model where one left-side scene is visible at a time while the right proof panel remains sticky.
   - Covers Sprint 9.

10. **SPEC-011: Portfolio UI Design Refinement**
   - Governs the follow-on UI polish pass that reduces repeated badge/card weight, simplifies the first viewport, and makes the flagship project read as a more polished case study.
   - Covers Sprint 10.

## Architecture / Flow Notes

Global portfolio architecture remains unchanged:

1. Application shell: Next.js App Router page, layout, and global styles.
2. Content model: typed portfolio data stored centrally in `data/portfolio.ts`.
3. Presentation components: section components and shared UI primitives.
4. Truth-control layer: placeholder handling, planned-project treatment, and conditional optional affordances.
5. Documentation layer: README and workflow artifacts.

Presentation refinement remains a presentation-layer concern. It may improve pacing, reveals, and interaction quality, but it must not create a second content system or weaken truth-safe placeholder behavior.

The required page order remains:

1. Navigation
2. Hero
3. Proof cards
4. My Direction
5. Featured Projects
6. Skills, Tools, and Growing Focus
7. How I Use AI Intentionally
8. Portfolio Strategy
9. Contact / Links
10. Footer

## Invariants

- The owner must be presented as a software developer with a real full-stack foundation who is growing toward AI application engineering.
- Debt Pressure Lab must remain the primary real completed project.
- The Assignment 2 RAG project must remain clearly planned until real implementation artifacts exist.
- Personal links and contact values must never be invented. GitHub is confirmed as `https://github.com/jam398`; LinkedIn is confirmed as `https://www.linkedin.com/in/jose-martinez-de-la-cruz-32baa022b`; email is confirmed as `jam398@njit.edu`; Resume is intentionally not required unless the user restores it.
- The design must remain structured, professional, readable, and non-gimmicky.
- Motion must support comprehension and pacing rather than turning the site into a demo reel.
- No child spec may override the truth rules established here.

## Risks

- Child specs drifting from the same global truth rules.
- Duplicate requirements appearing in multiple specs and later disagreeing.
- Final submission closeout starting before unresolved inputs are actually confirmed.
- Motion work drifting into heavy 3D or gimmick interactions that fight the content.

## Verification Strategy

- Each child spec must have its own QA artifact.
- Each sprint must point to the child spec that governs its slice.
- Global repository checks remain `npm run lint` and `npm run build`.
- Final submission still requires a production-style browser pass plus truth verification of links and project claims.

## Sprint Plan

1. Sprint 0 and Sprint 1 map to SPEC-002.
2. Sprint 2 maps to SPEC-003.
3. Sprint 4 maps to SPEC-005.
4. Sprint 5 maps to SPEC-006.
5. Sprint 6 maps to SPEC-007.
6. Sprint 7 maps to SPEC-008.
7. Sprint 8 maps to SPEC-009.
8. Sprint 9 maps to SPEC-010.
9. Sprint 10 maps to SPEC-011.
10. Sprint 3 maps to SPEC-004.

## Rollout / Sequencing Notes

Use the umbrella spec for global rules and the child specs for slice-specific implementation details. If a future change only affects one slice, update that child spec instead of expanding the umbrella spec again. The presentation-refinement slices, the flagship-project sequence, the approved UI design refinement pass, and any approved follow-on interaction refinements should land before final submission closeout so final QA reflects the actual shipped presentation.

### QA Addendum - 2026-05-01 (Scroll-Stage Successor)

- **Reviewer:** GitHub Copilot
- **Scope:** Added `SPEC-010` and Sprint 9 to represent the one-scene-at-a-time scroll-stage successor to the interaction model attempted in Sprint 8.
- **Checks Performed:** Read the updated umbrella spec; checked that the new child spec preserves the required page order and truth rules; checked that prior artifacts remain preserved instead of rewritten.
- **Findings:** None.
- **Verdict:** PASS

### QA Addendum - 2026-05-04 (UI Design Refinement)

- **Reviewer:** GitHub Copilot
- **Scope:** Added `SPEC-011` and planned Sprint 10 to govern the UI design refinement pass based on external portfolio research and live page review.
- **Checks Performed:** Read the updated umbrella spec; checked that the new child spec preserves the required page order, truth rules, and existing topic boundaries; checked that Sprint 10 remains presentation-focused rather than adding new portfolio claims.
- **Findings:** None.
- **Verdict:** PASS

## Completion Criteria

- The child spec set covers the full portfolio without overlap or ambiguity.
- Every sprint points to the right child spec.
- The portfolio remains governed by one short global contract plus bounded phase specs.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-001
- **Spec ID:** SPEC-001
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (4 issues resolved)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-001-portfolio-website.md`

### QA Scope

This QA pass reviewed:

- problem statement quality
- goal and non-goal clarity
- current-state accuracy
- proposed approach coherence
- risk, security, and contract coverage
- verification and sprint-plan completeness

### Checks Performed

- [x] Read the full spec
- [x] Compared claims against the live repository where applicable
- [x] Checked for ambiguity, contradictions, and missing requirements
- [x] Checked whether risks, invariants, and verification are concrete
- [x] Checked whether the sprint plan is bounded and sequenced sensibly

### Findings

#### 1. Required page structure was only implied

- **Severity:** High
- **Problem:** The first draft described the portfolio flow but did not explicitly lock the required section sequence as a contract.
- **Why it matters:** Sprint planning and implementation could omit required sections or reorder the page in a way that weakens the trust narrative.
- **Required fix:** Add an explicit required section list to the spec.
- **Resolved:** Yes

#### 2. Visual and placeholder rules were under-specified

- **Severity:** Medium
- **Problem:** The first draft named the design direction but did not translate it into clear implementation constraints for palette, motion, placeholder handling, and live-demo behavior.
- **Why it matters:** Without those constraints, the build could drift toward flashy visuals, fake-final placeholder treatment, or dishonest CTA behavior.
- **Required fix:** Add explicit visual-system and placeholder-control rules to the spec.
- **Resolved:** Yes

#### 3. Remaining work was not split into bounded final sprints

- **Severity:** Medium
- **Problem:** After Sprint 1 completed, the plan still grouped lower-page implementation and final truth verification too loosely.
- **Why it matters:** Ordinary section implementation and dependency-driven closeout have different blockers and should not share the same planning boundary.
- **Required fix:** Separate remaining work into one implementation sprint and one final truth-verification sprint.
- **Resolved:** Yes

#### 4. The program-level spec was carrying too much slice detail

- **Severity:** Medium
- **Problem:** The single portfolio spec mixed global portfolio rules with slice-specific details for the core experience, lower-page closeout surfaces, and final truth-verification work.
- **Why it matters:** That made the governing spec harder to scan and encouraged every new detail to accumulate in one place instead of living in the spec that actually owns the slice.
- **Required fix:** Convert `SPEC-001` into a short umbrella program spec and move slice detail into child specs aligned to the real sprint boundaries.
- **Resolved:** Yes

### Open Questions

- Final GitHub, LinkedIn, and Email values are confirmed. Resume is intentionally not required unless restored by the user.
- Debt Pressure Lab live-demo availability and final claim set still require verification before final submission closeout.

These do not block Sprint 2 because the child specs explicitly allow honest placeholders and defer final truth verification to Sprint 3.

### Final QA Summary

- **What was checked:** The umbrella portfolio spec was reviewed against the source brief, the completed Sprint 0 and Sprint 1 state, the live application structure, and the workflow contract for scope control and completeness.
- **What was fixed:** The spec now functions as a short umbrella program contract, while slice-specific detail lives in `SPEC-002`, `SPEC-003`, and `SPEC-004`.
- **Residual risks:** Final truth verification is still required for personal links, live-demo availability, and Debt Pressure Lab claim validation before the portfolio can be marked fully complete.
- **Recommendation:** Ready for continued sprinting

### QA Addendum - 2026-05-01

- **Reviewer:** GitHub Copilot
- **Scope:** Added `SPEC-009` as a new child spec for featured-project progressive disclosure and updated current-state / rollout wording to reflect the follow-on refinement path.
- **Checks Performed:** Read the updated umbrella spec; checked that the new child spec does not override the global truth rules or change the required page order; checked that the new slice remains local to the Featured Projects section.
- **Findings:** None.
- **Verdict:** PASS
