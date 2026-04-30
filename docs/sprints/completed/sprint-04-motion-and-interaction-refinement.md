# Sprint: Motion Foundation and Section Pacing

## Metadata

- **ID:** SPRINT-04
- **Status:** Completed
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Build the portfolio's reusable motion foundation so sections and grouped content feel paced and intentional without changing the portfolio's structure, truth-safe behavior, or overall visual tone.

## Governing Spec

`docs/specs/spec-005-motion-and-interaction-refinement.md`

## Carry-Forward Context

Sprint 2 completed the visible portfolio surface through the footer, and the current live page now has the full content flow in place. The design is readable and consistent, but the page still lacks a shared reveal system and grouped timing language. This sprint should establish that foundation before hero-specific and cross-page interaction polish work begins.

## Scope

In scope:

- add a reusable motion foundation for section reveals and staggered grouped content
- apply bounded reveal and stagger behavior across the existing page sections
- improve page pacing so sections feel introduced rather than dumped as equal-weight blocks
- preserve reduced-motion accessibility and mobile readability

## Non-Goals

- do not redesign the content model or rewrite the portfolio narrative again
- do not add hero-specific decorative systems or top-of-page atmosphere treatments
- do not add hover and focus refinements that belong to the interaction-polish slice
- do not replace placeholder-safe GitHub, LinkedIn, Resume, or Email behavior
- do not perform final README or truth-verification closeout work from Sprint 3
- do not add new sections, projects, or backend functionality

## Available Assets / Current State

List verified files, components, APIs, or data this sprint depends on. Confirm each against the live workspace before implementation:

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-005-motion-and-interaction-refinement.md` | Governing requirements for motion foundation and section pacing | Verified existing file |
| Completed Sprint 2 | `docs/sprints/completed/sprint-02-ai-workflow-and-closeout-surfaces.md` | Verified current page surface through footer | Verified existing file |
| Planned Sprint 3 | `docs/sprints/planned/sprint-03-truth-verification-and-final-submission.md` | Must remain separate from this refinement slice | Verified existing file |
| App shell | `app/page.tsx`, `app/globals.css` | Existing page sequencing and motion foundation surfaces | Verified existing files |
| Core sections | `components/HeroSection.tsx`, `components/ProofCards.tsx`, `components/AboutSection.tsx`, `components/ProjectsSection.tsx`, `components/SkillsSection.tsx`, `components/AiWorkflowSection.tsx`, `components/PortfolioStrategySection.tsx`, `components/ContactSection.tsx`, `components/Footer.tsx` | Primary reveal and pacing surfaces | Verified existing files |
| Shared primitives | `components/SectionHeader.tsx` | Existing section structure that may participate in reveal timing | Verified existing file |
| Content model | `data/portfolio.ts` | Portfolio content and placeholder state | Verified existing file |

## Files Expected To Change

- `app/page.tsx`
- `app/globals.css`
- `components/HeroSection.tsx`
- `components/ProofCards.tsx`
- `components/AboutSection.tsx`
- `components/ProjectsSection.tsx`
- `components/ProjectCard.tsx`
- `components/SkillsSection.tsx`
- `components/SkillGroupCard.tsx`
- `components/AiWorkflowSection.tsx`
- `components/PortfolioStrategySection.tsx`
- `components/ContactSection.tsx`
- `components/Footer.tsx`
- optional small motion helper component or hook if implementation needs one

## Ordered Tasks

### Task 1. Add a bounded motion foundation

- **Objective:** Create the reusable reveal and stagger behavior needed to animate sections and grouped content consistently.
- **Files:** `app/globals.css`, `app/page.tsx`, optional small motion helper component or hook
- **Changes:** Add only the primitives needed for section timing, staggered groups, and reduced-motion fallback.
- **Unchanged:** Do not introduce a heavy animation framework or a second presentation architecture unless implementation proves it is necessary.
- **Verify After:** Sections can opt into the same reveal language without duplicating animation code everywhere.

### Task 2. Apply section pacing across the page

- **Objective:** Apply the new reveal and stagger language across the existing sections so the page feels intentionally sequenced.
- **Files:** section components and `app/page.tsx`
- **Changes:** Add bounded reveal classes, grouped staggering, and any small structural hooks needed for section timing.
- **Unchanged:** Do not introduce hero-specific decorative systems or interaction polish that belongs to later slices.
- **Verify After:** The page feels paced and readable instead of flat and simultaneously loaded.

### Task 3. Validate reduced-motion and mobile behavior

- **Objective:** Confirm the refinement layer does not degrade accessibility or smaller-screen usability.
- **Files:** touched styling and section components
- **Changes:** Add only the fallbacks and responsive adjustments needed to keep motion safe and readable.
- **Unchanged:** Do not ship desktop-first animations that collapse on mobile.
- **Verify After:** Desktop and mobile both feel intentional, and reduced-motion behavior still reads cleanly.

## Product Rules

- Motion must support the content, not compete with it.
- Reveal timing must remain short enough that content still feels immediately available.
- Truth-safe placeholder behavior must remain unchanged.
- Sprint 4 must stop before hero atmosphere, interaction polish, final README, and truth-verification closeout.

## Deliverables

- Reusable motion foundation for reveals and grouped content
- Mobile-safe and reduced-motion-safe behavior for the refinement layer

## Acceptance Criteria

- The portfolio feels more intentional and polished through motion and interaction.
- The page has a reusable reveal and stagger language across sections.
- Section pacing is improved from hero through footer.
- The page remains professional, responsive, and non-gimmicky.

## Dependencies / Blockers

- Sprint 2's current section structure must remain the baseline.
- Sprint 5 and Sprint 6 should build on this foundation rather than re-creating their own motion systems.
- Sprint 3 truth-closeout work should wait until this refinement slice is complete if these changes are intended to ship in the final submission.

## Risks / Watchouts

- Overdesigning the page with too many concurrent effects
- Damaging mobile performance or readability
- Creating animation delays that make the portfolio feel slower instead of better paced
- Accidentally building one-off motion rules that later hero and interaction slices cannot reuse

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it builds the portfolio's motion foundation and section pacing without reopening hero-specific design work, interaction polish, truth-closeout, or page architecture.

## Verification

Final verification commands or checks:

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm section reveal timing and grouped pacing on desktop
- Manual verification 2: confirm mobile readability and reduced-motion-safe behavior remain acceptable through the footer

## Completion Checklist

- [x] All in-scope tasks implemented
- [x] Non-goals preserved
- [x] Carry-forward constraints respected
- [x] Acceptance criteria met
- [x] Verification passed
- [x] No known blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-004
- **Sprint ID:** SPRINT-04
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/planned/sprint-04-motion-and-interaction-refinement.md`
- **Spec Path:** `docs/specs/spec-005-motion-and-interaction-refinement.md`

### QA Mode

- Sprint doc QA

### Checks Performed

- [x] Read the full sprint doc
- [x] Read the governing spec when one exists
- [x] Verified listed assets against the live repository
- [x] Checked scope, non-goals, and task sequencing for drift risk
- [x] Checked verify-after steps and final verification for concreteness
- [ ] Read the changed files when performing implementation QA
- [ ] Compared implementation against original intent, not against assumptions

### Findings

None.

### Verification Results

- **Automated:** Markdown validation will be covered by repository checks.
- **Manual:** Reviewed Sprint 4 scope, file plan, motion-foundation boundaries, and separation from later hero, interaction, and truth-closeout slices against the current post-Sprint-2 repository state.

### Carry-Forward Updates

- Sprint 5 and Sprint 6 should build on the shared reveal language defined here instead of introducing parallel motion rules.

### Final QA Summary

- **What was checked:** Sprint 4 scope, ordered tasks, file plan, motion-foundation boundaries, and verification steps were reviewed against the governing spec and the currently implemented full-page portfolio surface.
- **What was fixed:** None.
- **Residual risks:** Animation work can still widen during implementation unless the sprint stays focused on reusable reveals and pacing.
- **Recommendation:** Ready to implement

## QA Report

- **Verdict:** PASS
- **Reviewer:** GitHub Copilot
- **Issues Found:** 1 resolved during implementation QA
- **Final Verification Results:** `npm run lint` PASS; `npm run build` PASS; browser QA on `http://127.0.0.1:3003` confirmed reveal wrappers render across the existing sections; reduced-motion emulation confirmed reveal content stays visible.
- **Deviations From Plan:** `app/layout.tsx` and new `components/Reveal.tsx` were added to support the progressive-enhancement motion foundation. `app/page.tsx`, `components/ProjectCard.tsx`, and `components/SkillGroupCard.tsx` did not require direct edits because the shared reveal system was applied at the section level.
- **Carry-Forward Updates For Next Sprint:** Sprint 5 should build on the shared `Reveal` foundation and existing motion variables in `app/globals.css` instead of introducing a parallel hero animation system.

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
*** Add File: c:\Users\jose-\Desktop\portafolio\docs\specs\spec-007-interactive-surface-polish.md
# Spec: Interactive Surface Polish

## Metadata

- **ID:** SPEC-007
- **Status:** Ready
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 6 - Interactive Surface Polish

## Problem Statement

The portfolio's key interactive surfaces still rely on basic hover transitions. Project cards, skill groups, contact cards, and button states all work, but they do not yet feel as responsive or polished as the better portfolio references that use restrained micro-interactions to reward scanning and exploration.

This slice should refine interactive surfaces without redefining content meaning, misrepresenting placeholder states, or reopening the hero and motion-foundation work.

## Goals

- Improve hover and focus polish on key portfolio surfaces.
- Make interactive elements feel more intentional and premium.
- Preserve honest affordance handling for pending links and placeholders.
- Build on `SPEC-005` and remain separate from hero-specific work in `SPEC-006`.

## Non-Goals

- Do not create fake activity on unresolved links or placeholder controls.
- Do not redesign the hero or add decorative atmosphere that belongs to `SPEC-006`.
- Do not replace the shared reveal system from `SPEC-005`.
- Do not change portfolio copy, section order, or final truth-closeout logic.

## Current State

The portfolio has baseline hover transitions on anchors, buttons, and panels. The interaction surfaces are functional, but they are not yet differentiated enough to create the more refined scan-and-explore feel seen in stronger portfolio examples.

## Proposed Approach

1. Refine hover and focus states for project cards, skill groups, contact cards, and buttons.
2. Improve depth, border, highlight, and motion response where it helps scanning.
3. Preserve or clarify disabled and placeholder states so pending actions never look falsely available.

## Architecture / Data / Flow Notes

- The main implementation surfaces are `components/ProjectCard.tsx`, `components/SkillGroupCard.tsx`, `components/ContactSection.tsx`, `components/Button.tsx`, and `app/globals.css`.
- Existing components should be refined in place rather than replaced.
- The placeholder logic in `data/portfolio.ts` must remain the source of truth for disabled states.

## Invariants

- Pending GitHub, LinkedIn, Resume, and Email states must still read as pending.
- Interactive polish must improve clarity, not just decoration.
- Focus states must remain keyboard-visible and accessible.
- The site must remain professional and non-gimmicky.

## Risks

- Making disabled or pending actions look active.
- Overdecorating cards that should remain easy to scan.
- Creating inconsistent interaction language across different surfaces.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Manual browser checks for hover/focus quality, placeholder honesty, and mobile behavior.
- Keyboard navigation check on the refined interactive surfaces.

## Sprint Plan

1. Sprint 6 refines the portfolio's key interactive surfaces after the motion foundation and hero slices are in place.

## Rollout / Sequencing Notes

This spec should follow `SPEC-005` and `SPEC-006` so the interaction layer can refine already-established motion and hero behavior rather than competing with them.

## Completion Criteria

- Key interactive surfaces feel more intentional and polished.
- Disabled and placeholder states remain honest.
- Focus behavior remains accessible and readable.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-007
- **Spec ID:** SPEC-007
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-007-interactive-surface-polish.md`

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

- The exact balance between stronger depth cues and truthful disabled states will need implementation judgment, but the spec keeps that decision surface bounded to interactive polish only.

### Final QA Summary

- **What was checked:** The interaction-polish spec was checked against the current component surfaces, the existing placeholder logic, and the workflow requirement to keep this work separate from shared motion foundation, hero atmosphere, and final closeout.
- **What was fixed:** None.
- **Residual risks:** Interaction polish can still become misleading during implementation if disabled and pending states are not handled carefully.
- **Recommendation:** Ready for sprinting
*** Add File: c:\Users\jose-\Desktop\portafolio\docs\sprints\planned\sprint-05-hero-atmosphere-and-top-of-page-presence.md
# Sprint: Hero Atmosphere and Top-of-Page Presence

## Metadata

- **ID:** SPRINT-05
- **Status:** Planned
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Strengthen the portfolio's first-screen identity by refining the hero atmosphere and top-of-page presence without compromising readability, CTA clarity, or truthful positioning.

## Governing Spec

`docs/specs/spec-006-hero-atmosphere-and-top-of-page-presence.md`

## Carry-Forward Context

Sprint 4 is expected to establish the shared reveal and pacing system for the page. This sprint should build on that foundation, not replace it, and should stay focused on the hero and top-of-page first impression.

## Scope

In scope:

- add a subtle atmospheric motion layer to the hero
- tune hero-specific entrance behavior on top of the shared motion foundation
- refine top-of-page visual balance so the first screen feels more distinctive
- preserve mobile readability and reduced-motion safety in the hero area

## Non-Goals

- do not redesign the entire page
- do not add heavy 3D or WebGL hero systems
- do not refine cross-page hover and focus behavior that belongs to Sprint 6
- do not change portfolio content meaning, placeholder truth rules, or final closeout logic

## Available Assets / Current State

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-006-hero-atmosphere-and-top-of-page-presence.md` | Governing requirements for hero-specific refinement | Verified existing file |
| Planned Sprint 4 | `docs/sprints/planned/sprint-04-motion-and-interaction-refinement.md` | Shared motion foundation predecessor | Verified existing file |
| Hero surface | `components/HeroSection.tsx` | Primary hero implementation surface | Verified existing file |
| Global styles | `app/globals.css` | Main styling surface for hero atmosphere | Verified existing file |
| App shell | `app/page.tsx` | May need small structural hooks | Verified existing file |

## Files Expected To Change

- `components/HeroSection.tsx`
- `app/globals.css`
- `app/page.tsx`
- optional small decorative helper component if implementation needs one

## Ordered Tasks

### Task 1. Add the hero atmosphere layer

- **Objective:** Give the first screen a stronger identity through restrained motion.
- **Files:** `components/HeroSection.tsx`, `app/globals.css`
- **Changes:** Add only the decorative motion layer and styling needed for hero atmosphere.
- **Unchanged:** Do not add heavy scenes or effects that dominate the hero.
- **Verify After:** The hero feels more distinctive while remaining easy to read.

### Task 2. Tune the hero entrance behavior

- **Objective:** Make the top-of-page arrival feel more deliberate on top of the shared motion foundation.
- **Files:** `components/HeroSection.tsx`, `app/page.tsx`, `app/globals.css`
- **Changes:** Refine hero-specific timing and sequencing.
- **Unchanged:** Do not rewrite the hero content or CTA structure.
- **Verify After:** The hero enters cleanly and feels intentional.

### Task 3. Validate mobile and reduced-motion hero behavior

- **Objective:** Confirm the new hero treatment remains safe and readable on smaller screens and calmer motion settings.
- **Files:** touched hero files and styles
- **Changes:** Add only the fallbacks and responsive adjustments needed for the hero.
- **Unchanged:** Do not degrade the hero into visual clutter on mobile.
- **Verify After:** The hero stays readable and balanced across viewports.

## Product Rules

- Hero motion must remain secondary to the content.
- CTAs and truthful positioning must remain immediately understandable.
- Reduced-motion fallback must remain calm and readable.
- Sprint 5 must stop before cross-page interaction polish and final closeout.

## Deliverables

- Refined hero atmosphere
- Improved top-of-page presence
- Mobile-safe and reduced-motion-safe hero behavior

## Acceptance Criteria

- The hero has a stronger first impression.
- Readability and CTA clarity remain intact.
- The motion remains restrained and non-gimmicky.

## Dependencies / Blockers

- Sprint 4 should establish the shared reveal foundation first.
- Sprint 6 should wait and build on the final hero treatment rather than competing with it.

## Risks / Watchouts

- Making the hero too visually busy
- Letting decorative effects compete with the message
- Creating a hero that feels disconnected from the rest of the page

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it improves only the hero and top-of-page presence without reopening motion foundation, cross-page interaction polish, or final closeout work.

## Verification

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm hero readability, hero identity, and CTA clarity on desktop
- Manual verification 2: confirm mobile and reduced-motion-safe hero behavior

## Completion Checklist

- [ ] All in-scope tasks implemented
- [ ] Non-goals preserved
- [ ] Carry-forward constraints respected
- [ ] Acceptance criteria met
- [ ] Verification passed
- [ ] No known blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-005
- **Sprint ID:** SPRINT-05
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/planned/sprint-05-hero-atmosphere-and-top-of-page-presence.md`
- **Spec Path:** `docs/specs/spec-006-hero-atmosphere-and-top-of-page-presence.md`

### QA Mode

- Sprint doc QA

### Checks Performed

- [x] Read the full sprint doc
- [x] Read the governing spec when one exists
- [x] Verified listed assets against the live repository
- [x] Checked scope, non-goals, and task sequencing for drift risk
- [x] Checked verify-after steps and final verification for concreteness
- [ ] Read the changed files when performing implementation QA
- [ ] Compared implementation against original intent, not against assumptions

### Findings

None.

### Verification Results

- **Automated:** Markdown validation will be covered by repository checks.
- **Manual:** Reviewed Sprint 5 scope, file plan, and hero-only boundary against the current portfolio structure and the newly split presentation workflow.

### Carry-Forward Updates

- Sprint 6 should preserve the final hero treatment and refine interactive surfaces around it instead of revisiting the top-of-page atmosphere.

### Final QA Summary

- **What was checked:** Sprint 5 scope, ordered tasks, file plan, and hero-specific boundaries were reviewed against the governing spec and the current page structure.
- **What was fixed:** None.
- **Residual risks:** Hero work can still widen into broader redesign during implementation if the sprint ignores its boundary.
- **Recommendation:** Ready to implement

## QA Report

- **Verdict:** Pending implementation QA
- **Reviewer:** [NAME]
- **Issues Found:** None yet
- **Final Verification Results:** Not run yet
- **Deviations From Plan:** None yet
- **Carry-Forward Updates For Next Sprint:** Sprint 6 should refine interaction quality around the settled hero and motion foundation, not reopen hero atmosphere.
*** Add File: c:\Users\jose-\Desktop\portafolio\docs\sprints\planned\sprint-06-interactive-surface-polish.md
# Sprint: Interactive Surface Polish

## Metadata

- **ID:** SPRINT-06
- **Status:** Planned
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-04-30
- **Last Updated:** 2026-04-30

> **Artifact location rule:** Project workflow artifacts live under `docs/`.
> - Specs: `docs/specs/spec-###-[slug].md`
> - Sprints: `docs/sprints/planned/`, `docs/sprints/active/`, `docs/sprints/completed/`
> - Change notes: `docs/change-notes/change-note-###-[slug].md`
>
> `docs/references/` is reserved for templates and process references only.
> When sprint status changes, update this field and move the sprint file to the matching status folder.

## Goal

Refine the portfolio's key interactive surfaces so hover, focus, and scanning behavior feel more deliberate and polished without misrepresenting pending actions or reopening hero and motion-foundation work.

## Governing Spec

`docs/specs/spec-007-interactive-surface-polish.md`

## Carry-Forward Context

Sprint 4 is expected to establish the shared reveal foundation, and Sprint 5 is expected to settle the hero atmosphere. This sprint should refine the remaining interactive surfaces around that baseline rather than introducing competing motion or hero systems.

## Scope

In scope:

- improve hover and focus states for project cards, skill groups, contact cards, and buttons
- strengthen depth and highlight feedback where it helps scanning
- preserve honest placeholder handling for pending destinations
- validate keyboard-visible focus behavior and mobile interaction quality

## Non-Goals

- do not change hero atmosphere or shared reveal architecture
- do not make pending or disabled actions look active
- do not rewrite portfolio copy or final closeout logic
- do not add new sections, projects, or backend behavior

## Available Assets / Current State

| Asset | Path | Role | Notes |
|-------|------|------|-------|
| Governing spec | `docs/specs/spec-007-interactive-surface-polish.md` | Governing requirements for cross-page interaction refinement | Verified existing file |
| Planned Sprint 4 | `docs/sprints/planned/sprint-04-motion-and-interaction-refinement.md` | Shared motion foundation predecessor | Verified existing file |
| Planned Sprint 5 | `docs/sprints/planned/sprint-05-hero-atmosphere-and-top-of-page-presence.md` | Hero treatment predecessor | Verified existing file |
| Interaction surfaces | `components/ProjectCard.tsx`, `components/SkillGroupCard.tsx`, `components/ContactSection.tsx`, `components/Button.tsx` | Primary interactive surfaces | Verified existing files |
| Global styles | `app/globals.css` | Main styling surface for interaction polish | Verified existing file |
| Content model | `data/portfolio.ts` | Source of truth for placeholder and disabled states | Verified existing file |

## Files Expected To Change

- `components/ProjectCard.tsx`
- `components/SkillGroupCard.tsx`
- `components/ContactSection.tsx`
- `components/Button.tsx`
- `app/globals.css`

## Ordered Tasks

### Task 1. Refine project and skill interactions

- **Objective:** Improve the surfaces where users pause most while scanning the portfolio.
- **Files:** `components/ProjectCard.tsx`, `components/SkillGroupCard.tsx`, `app/globals.css`
- **Changes:** Add only the hover, focus, and depth refinements needed for clearer interaction quality.
- **Unchanged:** Do not add effects that make the cards visually noisy.
- **Verify After:** Project and skill surfaces feel more deliberate and easier to scan.

### Task 2. Refine contact and button behavior

- **Objective:** Improve interactive clarity while preserving truthful disabled and pending states.
- **Files:** `components/ContactSection.tsx`, `components/Button.tsx`, `app/globals.css`
- **Changes:** Strengthen active and inactive state contrast without making pending actions look real.
- **Unchanged:** Do not weaken placeholder-safe behavior.
- **Verify After:** Contact and button states feel clearer without misrepresenting availability.

### Task 3. Validate keyboard and mobile interaction quality

- **Objective:** Confirm the polished interaction layer remains accessible and readable.
- **Files:** touched interaction files and styles
- **Changes:** Add only the focus and responsive adjustments needed for interaction polish.
- **Unchanged:** Do not ship refinements that only work for mouse users.
- **Verify After:** Hover, focus, and mobile behavior remain consistent and honest.

## Product Rules

- Pending actions must still read as pending.
- Focus states must remain visible and accessible.
- Interaction polish must improve clarity, not just decoration.
- Sprint 6 must stop before final closeout.

## Deliverables

- Refined project, skill, contact, and button interactions
- Clearer focus and placeholder states
- Mobile-safe and keyboard-safe interaction polish

## Acceptance Criteria

- Key interactive surfaces feel more polished.
- Pending states remain honest.
- Focus behavior remains visible and accessible.

## Dependencies / Blockers

- Sprint 4 and Sprint 5 should establish the motion and hero baseline first.
- Sprint 3 should close out the portfolio only after this interaction layer is finalized if it is part of the shipped submission.

## Risks / Watchouts

- Making pending actions look available
- Overdecorating the cards and controls
- Creating inconsistent polish across different surface types

## Sprint Boundary Check

This sprint is one bounded, verifiable unit because it refines only cross-page interactive surfaces without reopening shared motion foundation, hero atmosphere, or final closeout work.

## Verification

- Automated verification 1: `npm run lint`
- Automated verification 2: `npm run build`
- Manual verification 1: confirm hover and focus quality on desktop
- Manual verification 2: confirm keyboard visibility, placeholder honesty, and mobile behavior

## Completion Checklist

- [ ] All in-scope tasks implemented
- [ ] Non-goals preserved
- [ ] Carry-forward constraints respected
- [ ] Acceptance criteria met
- [ ] Verification passed
- [ ] No known blocking gaps remain

## Sprint Doc QA

### Metadata

- **QA ID:** SPRINT-QA-006
- **Sprint ID:** SPRINT-06
- **Reviewer:** GitHub Copilot
- **Date:** 2026-04-30
- **Verdict:** PASS (0 issues)

### Governing Artifacts

- **Sprint Path:** `docs/sprints/planned/sprint-06-interactive-surface-polish.md`
- **Spec Path:** `docs/specs/spec-007-interactive-surface-polish.md`

### QA Mode

- Sprint doc QA

### Checks Performed

- [x] Read the full sprint doc
- [x] Read the governing spec when one exists
- [x] Verified listed assets against the live repository
- [x] Checked scope, non-goals, and task sequencing for drift risk
- [x] Checked verify-after steps and final verification for concreteness
- [ ] Read the changed files when performing implementation QA
- [ ] Compared implementation against original intent, not against assumptions

### Findings

None.

### Verification Results

- **Automated:** Markdown validation will be covered by repository checks.
- **Manual:** Reviewed Sprint 6 scope, file plan, and placeholder-safety boundary against the current component surfaces and the split presentation workflow.

### Carry-Forward Updates

- Sprint 3 should perform final truth verification on top of the final interaction state if these refinements are implemented first.

### Final QA Summary

- **What was checked:** Sprint 6 scope, ordered tasks, file plan, and interaction-polish boundaries were reviewed against the governing spec and the current component surfaces.
- **What was fixed:** None.
- **Residual risks:** Interaction polish can still become misleading during implementation if disabled and pending states are not handled carefully.
- **Recommendation:** Ready to implement

## QA Report

- **Verdict:** Pending implementation QA
- **Reviewer:** [NAME]
- **Issues Found:** None yet
- **Final Verification Results:** Not run yet
- **Deviations From Plan:** None yet
- **Carry-Forward Updates For Next Sprint:** Sprint 3 should close out the final shipped portfolio state after interaction polish if these refinements land before submission QA.