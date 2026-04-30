# Spec: Core Portfolio Experience

## Metadata

- **ID:** SPEC-002
- **Status:** Complete
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 0 - Portfolio Foundation; Sprint 1 - Narrative and Project Evidence

## Problem Statement

The portfolio needs a credible top-to-middle experience that establishes identity, proof, technical direction, and project evidence quickly. Without a strong core experience, the rest of the site cannot recover credibility later.

This slice should own the implemented sections that create first trust: navigation, hero, proof cards, direction, featured projects, and grouped skills.

## Goals

- Establish a trustworthy one-page flow from the navigation through the skills section.
- Present Debt Pressure Lab as the primary real proof project.
- Show the Assignment 2 project as clearly planned.
- Keep content driven by typed portfolio data rather than duplicated literals.

## Non-Goals

- Do not govern the AI workflow, portfolio strategy, contact, or footer sections.
- Do not govern final README and truth-verification closeout.
- Do not add new projects beyond the existing real and planned project pair.

## Current State

This slice is implemented. The repository now contains the scaffold, global style system, shared UI primitives, data model, and the sections from Navigation through Skills.

Verified files in this slice include `app/page.tsx`, `app/globals.css`, `data/portfolio.ts`, `components/Navbar.tsx`, `components/HeroSection.tsx`, `components/ProofCards.tsx`, `components/AboutSection.tsx`, `components/ProjectsSection.tsx`, `components/ProjectCard.tsx`, `components/SkillsSection.tsx`, and `components/SkillGroupCard.tsx`.

## Proposed Approach

Keep the core experience as a bounded trust-and-evidence layer:

1. Navigation and hero establish identity and top-of-page access to profile links.
2. Proof cards establish immediate credibility.
3. My Direction explains the professional trajectory honestly.
4. Featured Projects make Debt Pressure Lab carry the proof burden and keep the Assignment 2 project clearly planned.
5. Skills group capabilities by purpose rather than using an unstructured skill cloud.

## Architecture / Data / Flow Notes

- The slice renders from `data/portfolio.ts`.
- Shared primitives should remain `Badge`, `Button`, and `SectionHeader`.
- The `View Projects` hero action targets `#projects`.
- Optional links remain honest placeholders when unresolved.

## Invariants

- The title and tone must remain technically credible and non-hyped.
- Debt Pressure Lab must remain the main completed project.
- The Assignment 2 project must remain visibly planned.
- The hero-through-skills flow must remain responsive and readable.

## Risks

- Regressing the honest planned-project treatment.
- Turning the skills section into generic filler.
- Weakening the trust narrative by reordering or bloating the top half.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Manual browser checks for hero CTA behavior, project distinction, and mobile readability through the skills section.

## Sprint Plan

1. Sprint 0 implements the foundation, app shell, hero, proof cards, and shared tokens.
2. Sprint 1 implements direction, featured projects, skills, and related layout refinement.

## Rollout / Sequencing Notes

This spec is complete. Future changes to sections 1 through 6 should update this spec if they materially change behavior or truth rules.

## Completion Criteria

- Sections 1 through 6 are present and validated.
- Debt Pressure Lab is the primary real proof artifact.
- The planned Assignment 2 project is clearly distinguished from completed work.
- The implemented slice passed repository checks and manual responsive review.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-002
- **Spec ID:** SPEC-002
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-002-core-portfolio-experience.md`

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

None.

### Open Questions

- Final GitHub, LinkedIn, Resume, and email values remain unresolved, but this does not block the completed core slice because honest placeholder handling is already part of the contract.

### Final QA Summary

- **What was checked:** The core-experience spec was checked against the completed Sprint 0 and Sprint 1 repository state and the global rules in `SPEC-001`.
- **What was fixed:** None.
- **Residual risks:** Future edits to the hero, projects, or skills surfaces must preserve the existing truth rules and responsive behavior.
- **Recommendation:** Complete and suitable as the governing spec for completed core-experience work