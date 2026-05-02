# Spec: Featured Project Scroll-Stage Sequence

## Metadata

- **ID:** SPEC-010
- **Status:** Implementing
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-05-01
- **Last Updated:** 2026-05-01
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 9 - Featured Project Scroll-Stage Sequence
- **Supersedes / Follows:** Follows SPEC-009 and introduces a new interaction model for the same flagship-project surface

## Problem Statement

The Featured Projects section still does not match the intended interaction model. The progressive-disclosure approach reduced visible text, but it still leaves a visible stack of scene cards in the reading column. That is not the behavior the project section is supposed to have.

The desired experience is a true single-scene scroll stage: one scene enters, holds focus, fades away, and is replaced by the next scene while the right-side proof panel stays visible. After the final scene, the entire project stage should release and the rest of the page should continue normally.

## Goals

- Show only one left-side scene at a time during the featured project sequence.
- Keep the right-side sticky proof panel visible through the sequence.
- Keep the repo link and core technology stack visible in that sticky panel.
- Replace stacked-card disclosure with scene replacement driven by scroll progress.
- Let the full project stage exit cleanly after the final scene so the next page section resumes normally.
- Preserve the planned Assignment 2 project as a normal secondary card outside the scroll stage.
- Preserve mobile readability and reduced-motion safety.

## Non-Goals

- Do not convert the full page into a site-wide scrollytelling shell.
- Do not keep a visible list of inactive scene cards in the left column.
- Do not add more project scenes, more paragraphs, or more project claims.
- Do not hide the repo link or core stack behind toggles, tabs, or drawers.
- Do not redesign the hero, proof cards, skills, AI workflow, contact, or footer sections in this slice.
- Do not weaken the truth rules for Debt Pressure Lab or the planned Assignment 2 project.

## Current State

Sprint 7 introduced the initial flagship-project sequence. Sprint 8 refined it to reduce text density, but the left side still behaves like a stack of cards with one expanded card instead of a single active stage.

The new interaction model should replace that stacked-card presentation with a stage-like sequence where one scene is visible at a time and the previous one fully leaves before the next one becomes the primary reading target.

## Proposed Approach

Implement the Featured Projects flagship experience as a scroll-stage sequence:

1. Keep the Featured Projects section in the same page position.
2. Keep Debt Pressure Lab as the only scroll-stage surface.
3. Use a two-part desktop composition:
   - **Left stage area:** one active scene enters, holds, and exits
   - **Right sticky proof panel:** stable project proof, repo link, and core stack
4. Scene behavior should work like this:
   - Scene 1 enters from below with a fade
   - Scene 1 holds focus while the user scrolls through its range
   - Scene 1 fades away upward as Scene 2 enters from below
   - The same replacement pattern repeats for Scenes 3 and 4
   - Inactive scenes should not remain visible as stacked cards or collapsed shells
5. The right sticky proof panel should stay visible during the entire scene sequence and should include:
   - project name
   - short summary
   - status
   - repo link
   - core technology stack
   - optional small scene indicator or scene signal tags
6. After the final scene finishes, both the left scene stage and the right sticky proof panel should release and fade out so the user continues naturally into the next section.
7. The Assignment 2 project should remain a normal short secondary card outside the flagship stage.
8. On mobile, the section may simplify to a sequential stacked flow, but it must still avoid showing a long multi-card wall of text.

## Architecture / Data / Flow Notes

- Main implementation surfaces are expected to remain `components/FlagshipProjectSequence.tsx`, `components/ProjectsSection.tsx`, `data/portfolio.ts`, and `app/globals.css`.
- The featured project data model may keep the existing 4-scene structure, but the rendering model should change from stacked scenes to a staged replacement flow.
- The scroll-stage behavior should remain section-local and must not introduce a site-wide presentation runtime.
- The sticky proof panel must remain the single persistent home for repo access and the core stack.

## Invariants

- Debt Pressure Lab remains the primary real completed project.
- The Assignment 2 RAG project remains clearly planned and secondary.
- Only one left-side scene should hold visible reading priority at a time.
- The repo link and core stack remain visible in the sticky proof panel throughout the sequence.
- The featured-project stage must release cleanly after the final scene.
- Sticky behavior must remain local to the section and must not trap document scrolling.
- Reduced-motion and mobile fallbacks must preserve clarity without theatrical motion.

## Risks

- Making the scene replacement too theatrical or too slow.
- Leaving ghost shells or stacked remnants of inactive scenes visible.
- Breaking the clean handoff from the final scene into the next portfolio section.
- Letting the sticky proof panel overtake the whole viewport or feel detached from the sequence.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Manual desktop browser check that only one left-side scene is visible at a time.
- Manual desktop browser check that the sticky proof panel keeps the repo link and core stack visible throughout the sequence.
- Manual desktop browser check that the full stage releases cleanly after the final scene.
- Manual mobile browser check that the fallback remains readable and does not become a long card wall.
- Manual reduced-motion check that the section remains understandable without the staged motion.

## Rollout / Sequencing Notes

This spec should be treated as a successor to the interaction model attempted in SPEC-009. It should land before final submission closeout only if the one-scene scroll-stage behavior is the desired final shipped experience.

## Completion Criteria

- The flagship project no longer appears as a visible left-side stack of cards.
- Only one scene holds the left-side stage at a time.
- The right sticky proof panel keeps the repo link and core stack visible throughout the sequence.
- The stage exits cleanly after the final scene and hands off to the next page section.
- The planned project still reads as planned and secondary.
- Mobile and reduced-motion behavior remain acceptable.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-010
- **Spec ID:** SPEC-010
- **Reviewer:** GitHub Copilot
- **Date:** 2026-05-01
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-010-featured-project-scroll-stage-sequence.md`

### QA Scope

This QA pass reviewed:

- problem statement quality
- distinction from SPEC-009
- scope and non-goal clarity
- fidelity to the intended one-scene-at-a-time interaction
- verification completeness for the new motion model

### Checks Performed

- [x] Read the full spec
- [x] Compared claims against the live repository where applicable
- [x] Checked for ambiguity, contradictions, and missing requirements
- [x] Checked that the new spec preserves the portfolio truth rules from SPEC-001
- [x] Checked that verification covers stage behavior, proof-panel persistence, and end-of-sequence release

### Findings

None.

### Open Questions

- The exact transition timings remain open, but the spec already constrains the critical behavior outcomes: one scene at a time, persistent right proof panel, and full stage release after the final scene.

### Final QA Summary

- **What was checked:** The spec was checked against the user's clarified interaction goal, the current Sprint 8 behavior that still leaves a visible card stack, and the workflow requirement to preserve prior artifacts rather than rewrite them.
- **What was fixed:** None.
- **Residual risks:** The main failure mode is implementing staged scene replacement in a way that feels theatrical rather than professional.
- **Recommendation:** Ready for sprint planning