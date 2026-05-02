# Spec: Featured Project Progressive Disclosure

## Metadata

- **ID:** SPEC-009
- **Status:** Implementing
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-05-01
- **Last Updated:** 2026-05-01
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 8 - Featured Project Progressive Disclosure
- **Supersedes / Follows:** Follow-on refinement after SPEC-008 / Sprint 7

## Problem Statement

The flagship project area now has a stronger narrative structure than the original static card, but too much project copy is still visible at once. The section reads more like a case-study block than a fast-scanning portfolio proof surface.

The portfolio's strongest current problem is text density, not missing project detail. The featured project should still tell a story, but it needs to reveal one idea at a time while keeping the technical proof visible and easy to scan.

## Goals

- Reduce the amount of flagship-project text visible at one time.
- Keep Debt Pressure Lab as the primary real proof project.
- Preserve a story-led project flow without turning the section into a theatrical presentation.
- Keep the project technology stack visible while the narrative scenes change.
- Keep the Assignment 2 project clearly planned and secondary.
- Preserve mobile readability and reduced-motion safety.

## Non-Goals

- Do not convert the entire portfolio into a presentation-style narrative site.
- Do not increase the amount of project copy or add more explanatory paragraphs just because scenes are changing.
- Do not hide the core project proof, repo access, or status information behind interaction-heavy UI.
- Do not redesign the hero, proof cards, skills, AI workflow, contact, or footer sections in this slice.
- Do not invent new Debt Pressure Lab features, stack items, or proof claims.
- Do not weaken the planned-project truth rules established in SPEC-001.

## Current State

Sprint 7 introduced a bounded project sequence around Debt Pressure Lab, but the section still exposes multiple full text blocks in the same viewport. That keeps too much reading burden on the user even though the sequence itself is more structured than the original card.

The next refinement should target information density directly. The featured project should work like progressive disclosure: one active scene carries the reading focus while older and future scenes visually quiet down.

## Proposed Approach

Implement a featured-project refinement that keeps the project evidence visible while reducing simultaneous copy load:

1. Keep the Featured Projects section in the same page position.
2. Keep Debt Pressure Lab as the only story-driven project surface.
3. Use a two-part desktop composition:
   - **Story rail:** a short sequence of 4 scenes on the reading side
   - **Sticky proof panel:** a persistent panel that keeps technical proof visible
4. The story rail should use progressive disclosure:
   - only the active scene shows full paragraph content
   - inactive scenes collapse to a title or very short preview
   - the user should not see four full explanations at once
5. The sticky proof panel should remain stable and always show:
   - project name
   - short summary
   - status
   - primary actions such as repo or demo
   - core technology stack
6. The sticky panel may include a small active-scene indicator or scene-specific signal box, but the core stack should remain visible across the whole sequence.
7. The Assignment 2 project should remain a normal short secondary card below the flagship project.
8. On mobile, the section should become a linear stacked layout without sticky behavior while still keeping only one scene visually emphasized at a time.

## Architecture / Data / Flow Notes

- Main implementation surfaces are expected to remain `components/FlagshipProjectSequence.tsx`, `components/ProjectsSection.tsx`, `data/portfolio.ts`, and `app/globals.css`.
- `data/portfolio.ts` may keep a 4-scene structure, but each scene should support compact copy rather than long explanatory text.
- The core stack should be modeled once and shown persistently instead of being repeated scene by scene.
- The section should remain local to the Featured Projects area and must not introduce a site-wide presentation runtime.

## Invariants

- Debt Pressure Lab remains the primary real completed project.
- The Assignment 2 RAG project remains clearly planned and secondary.
- The portfolio remains a portfolio first, not a slide deck.
- The featured project must be easier to scan after this refinement, not harder.
- The technology stack must remain visible without requiring the user to open hidden UI.
- Sticky behavior must remain local to the section and must never trap document scrolling.
- Reduced-motion and mobile fallbacks must preserve clarity.

## Risks

- Over-collapsing scenes until the project loses too much explanatory value.
- Keeping too many repeated details in both the story rail and the sticky panel.
- Making the transition behavior feel theatrical instead of professional.
- Hiding important technical proof too aggressively in the name of brevity.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Manual desktop browser check that only one scene carries reading priority at a time.
- Manual desktop browser check that the sticky proof panel keeps the core stack visible across the sequence.
- Manual mobile browser check that the section remains readable without sticky behavior.
- Manual reduced-motion check that the section still communicates clearly without scroll choreography.

## Rollout / Sequencing Notes

This spec is a follow-on refinement to the current Sprint 7 work. It should be implemented only if the current featured-project sequence is being kept and improved rather than fully reverted to the original static card. It should land before final submission closeout if this progressive-disclosure behavior is intended to ship.

## Completion Criteria

- The flagship project no longer shows multiple full explanatory blocks at once.
- Only one scene holds clear reading priority at a time.
- The core technology stack remains visible across the sequence.
- The planned project still reads as planned and secondary.
- Mobile and reduced-motion behavior remain acceptable.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-009
- **Spec ID:** SPEC-009
- **Reviewer:** GitHub Copilot
- **Date:** 2026-05-01
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-009-featured-project-progressive-disclosure.md`

### QA Scope

This QA pass reviewed:

- problem statement quality
- scope and non-goal clarity
- consistency with SPEC-001 truth rules
- consistency with the current Sprint 7 state
- verification completeness for a text-density refinement

### Checks Performed

- [x] Read the full spec
- [x] Compared claims against the live repository where applicable
- [x] Checked for ambiguity, contradictions, and missing requirements
- [x] Checked whether the spec keeps the work bounded to the featured project section
- [x] Checked whether the verification strategy covers desktop, mobile, and reduced-motion behavior

### Findings

None.

### Open Questions

- The exact inactive-scene treatment remains open between title-only collapse and title-plus-preview collapse, but that does not block sprint planning because the spec constrains the behavior outcome instead of over-prescribing one visual treatment.

### Final QA Summary

- **What was checked:** The new child spec was checked against the current text-density concern, the existing Sprint 7 implementation shape, and the portfolio program rules that keep the work local, truthful, and professional.
- **What was fixed:** None.
- **Residual risks:** The main failure mode is over-correcting into a visually sparse section that loses too much project explanation.
- **Recommendation:** Ready for sprint planning