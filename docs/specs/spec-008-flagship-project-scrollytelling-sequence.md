# Spec: Flagship Project Scrollytelling Sequence

## Metadata

- **ID:** SPEC-008
- **Status:** Ready
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 7 - Debt Pressure Lab Scrollytelling Sequence

## Problem Statement

The portfolio now has stronger motion, hero atmosphere, and interaction polish, but the featured-project area still reads as a conventional portfolio card stack. Debt Pressure Lab is the strongest proof artifact on the page, and it carries more of the portfolio's credibility than any other single section.

The current project section communicates the facts, but it does not yet pace the story the way stronger narrative web presentations do. The portfolio needs one bounded scrollytelling slice that slows the reader down around the flagship project without turning the whole site into a slide deck.

## Goals

- Turn Debt Pressure Lab into a short guided project narrative instead of only a static featured card.
- Keep the portfolio as a portfolio first while borrowing pacing cues from stronger scrollytelling experiences.
- Focus the narrative on what the project solves, what was built, how the system works, and what it proves.
- Preserve the existing page order and the planned-project honesty rules.
- Keep the experience readable on mobile and calm under reduced-motion settings.

## Non-Goals

- Do not convert the entire portfolio into a full presentation-style slide site.
- Do not add site-wide slide progress, scene snapping, or a keynote-like navigation model.
- Do not make the hero, skills, AI workflow, contact, or footer sections scrollytelling surfaces.
- Do not invent new Debt Pressure Lab features or overstate system maturity.
- Do not weaken placeholder-safe GitHub, LinkedIn, Resume, or Email behavior.
- Do not replace final truth-closeout work in `SPEC-004`.

## Current State

The site currently presents Debt Pressure Lab inside the Featured Projects section as a strong static card followed by the clearly planned Assignment 2 project. This preserves clarity and honesty, but the flagship project still competes for attention inside a conventional scan pattern.

The strongest reusable lesson from the reviewed `bseai_degree` reference is not its full-site presentation structure. It is the use of scene-based pacing around one argument. That lesson fits this portfolio only if it is constrained to the flagship project slice.

## Proposed Approach

Implement a single guided project sequence inside the existing Featured Projects section:

1. Keep the section header and the overall page order unchanged.
2. Replace the static Debt Pressure Lab featured-card treatment with a short scrollytelling sequence.
3. Use 4 bounded scenes for the flagship narrative:
   - **Scene 1: Why it exists** — the problem, audience, and stakes.
   - **Scene 2: What I built** — the key user-facing surfaces and workflow pieces.
   - **Scene 3: How it works** — the full-stack system layer: backend, auth, data, AI tool use, and validation.
   - **Scene 4: What it proves** — the portfolio-relevant capabilities this project demonstrates.
4. On desktop, pair the narrative steps with a sticky proof panel or project system card that stays visible while the text advances.
5. On mobile, collapse the sequence into a readable linear stack without sticky behavior.
6. Keep the planned Assignment 2 project as a normal card below the scrollytelling sequence so the forward direction remains visible but clearly secondary.

## Architecture / Data / Flow Notes

- The main implementation surfaces are `components/ProjectsSection.tsx`, `components/ProjectCard.tsx`, `app/globals.css`, and `data/portfolio.ts`.
- A new small section-level component may be introduced if the project sequence should stay separate from the generic project card abstraction.
- `data/portfolio.ts` may gain a structured scene array for Debt Pressure Lab, but it must remain a content source rather than becoming a second presentation-state system.
- The scrollytelling behavior should be section-local. It should not require a global presentation runtime.

## Invariants

- Debt Pressure Lab remains the primary real completed project.
- The Assignment 2 RAG project remains clearly planned and secondary.
- The portfolio remains a fast-scanning portfolio outside this one guided slice.
- Sticky behavior must never trap the user or break normal document scrolling.
- Reduced-motion and mobile fallbacks must preserve the content without relying on scroll choreography.
- The narrative must stay truthful to the live project evidence already in the portfolio.

## Risks

- Over-expanding the scrollytelling treatment until it starts dominating the whole site.
- Making the project section slower to scan without adding meaningful clarity.
- Treating decorative motion as the goal instead of project comprehension.
- Creating a sticky layout that feels awkward on small laptops, tablets, or mobile.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Manual browser check for desktop project-sequence pacing and local progress behavior.
- Manual browser check for mobile readability and the non-sticky fallback.
- Manual reduced-motion check to confirm the content remains clear without scroll theatrics.

## Sprint Plan

1. Sprint 7 adds the Debt Pressure Lab scrollytelling sequence while keeping the overall portfolio architecture intact.

## Rollout / Sequencing Notes

This spec should land before final submission closeout if the guided project sequence is intended to ship. It should follow the motion, hero, and interaction slices so it can build on the refined presentation baseline without reopening those earlier concerns.

## Completion Criteria

- Debt Pressure Lab is presented as a short guided sequence rather than only a static featured card.
- The portfolio remains portfolio-first outside the flagship project slice.
- The planned project still reads as planned.
- Desktop, mobile, and reduced-motion behavior remain acceptable.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-008
- **Spec ID:** SPEC-008
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-008-flagship-project-scrollytelling-sequence.md`

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

- The exact desktop composition remains open between a sticky proof card, sticky system map, or hybrid proof panel, but that does not block sprinting because the spec keeps the implementation local to the flagship project section.

### Final QA Summary

- **What was checked:** The spec was checked against the current portfolio structure, the completed motion/hero/interaction slices, and the user goal of borrowing `bseai_degree`-style pacing only for one bounded area rather than the entire site.
- **What was fixed:** None.
- **Residual risks:** The main failure mode is scope drift from a local project sequence into a whole-site presentation rewrite.
- **Recommendation:** Ready for sprinting