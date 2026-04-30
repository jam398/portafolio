# Spec: AI Workflow and Closeout Surfaces

## Metadata

- **ID:** SPEC-003
- **Status:** Ready
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 2 - AI Workflow and Closeout Surfaces

## Problem Statement

The portfolio is currently missing the lower-page sections that complete the narrative and closeout flow: How I Use AI Intentionally, Portfolio Strategy, Contact / Links, and Footer. Without these sections, the page stops after skills and feels incomplete against the required section contract.

This slice should own the remaining visible page surfaces without mixing in final truth-verification work that depends on external confirmations.

## Goals

- Complete sections 7 through 10 of the page.
- Explain intentional AI use in grounded, tool-aware language.
- Explain portfolio selection strategy without repeating earlier content.
- Add lower-page link and footer surfaces that remain honest when values are unresolved.

## Non-Goals

- Do not finalize GitHub, LinkedIn, Resume, or email values if they are still unresolved.
- Do not write the final README here.
- Do not perform final Debt Pressure Lab claim verification in this spec.

## Current State

The app currently renders through the Skills section only. The AI workflow, strategy, contact, and footer components do not exist yet.

Sprint 2 is planned specifically for this missing lower-page slice.

## Proposed Approach

Build four bounded presentation surfaces from shared data in `data/portfolio.ts`:

1. How I Use AI Intentionally
2. Portfolio Strategy
3. Contact / Links
4. Footer

These sections should finish the visible one-page flow, preserve the existing visual language, and continue the same truth-safe placeholder treatment used higher in the page.

## Architecture / Data / Flow Notes

- Extend `data/portfolio.ts` with structured copy for AI workflow, strategy, contact, and footer content.
- Add section components that reuse the existing shared primitives and global styles.
- Keep unresolved values visibly pending rather than rendering fake-final links or fake contact values.

## Invariants

- The AI workflow copy must remain practical and non-hyped.
- Lower-page links must remain honest placeholders when unresolved.
- No fake demo, social, or email destination may appear.
- The finished page order must remain consistent with `SPEC-001`.

## Risks

- AI copy drifting into vague branding language.
- Bottom-of-page sections repeating earlier sections instead of adding clarity.
- Placeholder-safe link handling regressing in the contact section.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Manual browser checks for section order, lower-page placeholder behavior, and mobile readability through the footer.

## Sprint Plan

1. Sprint 2 extends the content model and implements the remaining page surfaces.

## Rollout / Sequencing Notes

This spec must complete before the final submission closeout in `SPEC-004` begins.

## Completion Criteria

- Sections 7 through 10 exist and follow the required page order.
- Lower-page link handling is truthful.
- The completed page remains coherent on desktop and mobile.
- Final truth-verification work remains deferred to `SPEC-004`.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-003
- **Spec ID:** SPEC-003
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-003-ai-workflow-and-closeout-surfaces.md`

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

- Final profile links and email remain unresolved, but that does not block this spec because honest placeholder handling stays in scope.

### Final QA Summary

- **What was checked:** The lower-page experience spec was checked against the current repository state, the planned Sprint 2 slice, and the global portfolio rules in `SPEC-001`.
- **What was fixed:** None.
- **Residual risks:** Final truth verification still depends on `SPEC-004` and user-confirmed inputs.
- **Recommendation:** Ready for sprinting