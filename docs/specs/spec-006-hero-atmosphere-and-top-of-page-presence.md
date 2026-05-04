# Spec: Hero Atmosphere and Top-of-Page Presence

## Metadata

- **ID:** SPEC-006
- **Status:** Ready
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 5 - Hero Atmosphere and Top-of-Page Presence

## Problem Statement

The portfolio hero currently communicates the right information, but it does not yet create the stronger first-screen presence seen in the best motion-driven portfolio references. The page needs more top-of-page identity, but that work should stay separate from the shared motion foundation and from cross-page interaction polish.

This slice should improve the hero's atmospheric layer and first impression without overwhelming the headline, calls to action, or truthful positioning.

## Goals

- Give the hero a stronger visual identity through subtle atmospheric motion.
- Improve the top-of-page first impression without rewriting the hero content.
- Keep the hero readable and grounded in the portfolio's honest, technical tone.
- Build on the motion foundation from `SPEC-005` instead of replacing it.

## Non-Goals

- Do not redesign the entire portfolio.
- Do not add heavy WebGL scenes, game-like hero interactions, or decorative effects that dominate the screen.
- Do not add cross-page hover and focus refinements that belong to `SPEC-007`.
- Do not change truth-safe placeholder behavior or final closeout logic.

## Current State

The hero already has the correct content structure, badge treatment, CTA area, and direction panel. What is still missing is a stronger atmospheric layer that makes the first screen feel more distinctive and intentional.

## Proposed Approach

1. Add a subtle decorative motion layer behind or around the hero content.
2. Tune the hero entrance behavior on top of the shared motion foundation from `SPEC-005`.
3. Refine top-of-page visual balance so the hero feels more memorable without becoming louder.

Prefer CSS-driven effects, gradients, layered shapes, and restrained motion over heavy 3D systems.

## Architecture / Data / Flow Notes

- The primary implementation surfaces are `components/HeroSection.tsx` and `app/globals.css`.
- `app/page.tsx` may need small structural hooks if the hero treatment requires them.
- `data/portfolio.ts` should not be changed unless a small, justified hero-visual configuration is needed.

## Invariants

- The hero headline, subtitle, CTA area, and direction panel must remain immediately readable.
- The hero treatment must remain secondary to the content.
- The design must stay professional, technical, and non-gimmicky.
- Reduced-motion users must receive a calm fallback.

## Risks

- Making the hero busier instead of clearer.
- Adding motion that competes with the headline and CTAs.
- Creating a top-heavy design that makes the rest of the page feel weaker.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Manual browser checks for hero readability, hero identity, and mobile behavior.
- Manual reduced-motion check for the hero area.

## Sprint Plan

1. Sprint 5 adds hero atmosphere and top-of-page presence on top of the shared motion foundation.

## Rollout / Sequencing Notes

This spec should follow `SPEC-005` so the hero builds on the shared reveal system rather than inventing parallel motion rules.

## Completion Criteria

- The hero has a more distinctive first impression.
- The motion remains restrained and readable.
- Top-of-page polish does not regress CTA clarity or truthful positioning.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-006
- **Spec ID:** SPEC-006
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-006-hero-atmosphere-and-top-of-page-presence.md`

### QA Scope

This QA pass reviewed:

- problem statement quality
- goal and non-goal clarity
- current-state accuracy
- proposed approach coherence
- risk and invariant coverage
- verification and sprint-plan completeness

### Checks Performed

- [x] Read the full spec
- [x] Compared claims against the live repository where applicable
- [x] Checked for ambiguity, contradictions, and missing requirements
- [x] Checked whether risks, invariants, and verification are concrete
- [x] Checked whether the sprint plan is bounded and sequenced sensibly

### Findings

None.

### Open Questions

- The exact atmospheric treatment remains open by design, but the spec constrains it to restrained hero-focused work rather than broader redesign.

### Final QA Summary

- **What was checked:** The hero-focused spec was checked against the current hero implementation, the newly split workflow boundary, and the requirement to keep top-of-page atmosphere separate from shared motion foundation and cross-page interaction polish.
- **What was fixed:** None.
- **Residual risks:** The hero can still become visually heavy during implementation if the sprint ignores the readability constraints.
- **Recommendation:** Ready for sprinting

### QA Addendum - 2026-05-04

- **Reviewer:** GitHub Copilot
- **Scope:** Added an owner profile photo to the hero direction card using the existing `public/20260331_184256.jpg` asset.
- **Checks Performed:** Confirmed the photo remains a compact identity signal, does not replace the hero headline or CTA structure, and preserves the professional top-of-page tone required by this spec.
- **Findings:** None.
- **Verdict:** PASS
