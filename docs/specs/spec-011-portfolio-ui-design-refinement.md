# Spec: Portfolio UI Design Refinement

## Metadata

- **ID:** SPEC-011
- **Status:** Implemented
- **Owner:** Jose Addiel Martinez De La Cruz
- **Created:** 2026-05-04
- **Last Updated:** 2026-05-04
- **Parent Spec:** SPEC-001
- **Related Sprints:** Sprint 10 - Portfolio UI Design Refinement; Sprint 11 - AI Workflow Horizontal Stage

## Problem Statement

The portfolio has a credible technical story, a real flagship project, and truth-safe treatment of unfinished links and planned work. The next weakness is visual priority. The page currently uses many similarly weighted panels, badges, and high-contrast surfaces, so important claims compete with supporting details.

A research pass against 20 live portfolios from `emmabostian/developer-portfolios` showed that stronger portfolio UIs usually win through clearer first-screen hierarchy, calmer navigation, fewer repeated badges, stronger section rhythm, and project evidence that reads like a polished case study rather than a dense report.

The site should keep its current topics: full-stack development, practical AI-powered systems, Debt Pressure Lab as the real proof project, and Assignment 2 as planned work. This spec only governs UI design refinement around those existing topics.

## Goals

- Make the first viewport calmer, more intentional, and easier to understand.
- Reduce repeated badge and card weight so the most important evidence stands out.
- Keep Debt Pressure Lab as the strongest project proof while making the presentation feel more polished.
- Improve section rhythm so the page does not feel like one long stack of similar panels.
- Keep the current truthful positioning and do not inflate experience, links, or project status.

## Non-Goals

- Do not change the portfolio topic or owner positioning.
- Do not add new projects.
- Do not claim the planned Assignment 2 RAG project is complete.
- Do not invent email, resume, or live-demo destinations. GitHub is confirmed as `https://github.com/jam398`, LinkedIn is confirmed as `https://www.linkedin.com/in/jose-martinez-de-la-cruz-32baa022b`, and Email is confirmed as `jam398@njit.edu`.
- Do not replace the existing dark technical direction with a copied portfolio theme.
- Do not add decorative 3D, game-like interactions, or heavy animation systems.
- Do not remove the durable workflow artifacts or bypass final truth verification.

## Current State

The live page renders the full required section flow through the footer. Recent work added the owner photo to the hero and removed the Debt Pressure Lab screenshot background experiment.

A local Playwright inspection on 2026-05-04 found:

- first viewport has a strong dark technical mood and clear full-stack/AI headline
- hero profile photo is compact and does not trigger the Next Image `fill` warning
- before implementation, the page contained about 21 panel surfaces and about 158 badge-like rounded elements
- after implementation QA, the browser pass measured 9 `.panel` surfaces and 67 badge-like elements
- top navigation now uses calmer confirmed text links for GitHub and LinkedIn
- Debt Pressure Lab now uses a compact proof-panel brief with problem, build, role, core stack, and repo access
- Sprint 11 has since replaced the oversized AI Workflow text list with a scroll-driven horizontal workflow stage on desktop and static readable workflow cards on mobile/reduced motion.

## Research Inputs

The design research pass sampled 20 live portfolio links from `https://github.com/emmabostian/developer-portfolios`.

Useful patterns observed:

- minimal portfolios often make the first screen readable in seconds
- strong engineer portfolios use restrained navigation and clear CTA priority
- editorial portfolios create rhythm by changing layout density between sections
- case-study-heavy portfolios make project proof more persuasive by separating problem, build, role, stack, and verification
- many visually strong pages use fewer badges than technical portfolios tend to use
- playful layouts work only when they do not weaken readability or proof

## Proposed Approach

Implement this refinement as a focused UI design pass over existing sections:

1. **Hero and navigation simplification**
   - reduce first-screen competition between the large headline, profile card, CTAs, and pending links
   - make pending destinations quieter while preserving truth-safe status
   - keep the photo as an identity signal, not the visual center of the page

2. **Badge and surface reduction**
   - reduce hero tags to the strongest identity signals
   - cap proof-panel stack badges to core technologies
   - convert broad skill lists away from heavy pill repetition where possible
   - avoid making every subsection look like an equally important card

3. **Flagship project case-study polish**
   - keep the one-scene scroll-stage model
   - make the stable proof panel read more like a project brief
   - prioritize problem, build scope, owner role, verification, and repo access
   - preserve desktop nav clearance, short-height safety, and mobile fallback readability

4. **Section rhythm and contrast**
   - vary section density between hero, proof, about, project, skills, AI workflow, strategy, and contact
   - use whitespace and quieter surfaces instead of adding more decorative elements
   - introduce a restrained secondary accent only if it improves state meaning, such as planned versus verified

5. **Final contact/footer cleanup**
   - make the closeout area simpler and more final-feeling
   - keep unresolved destinations honest without making the page feel unfinished

## Architecture / Flow Notes

- Primary implementation surfaces are `components/HeroSection.tsx`, `components/Navbar.tsx`, `components/ProjectsSection.tsx`, `components/FlagshipProjectSequence.tsx`, `components/SkillsSection.tsx`, `components/ContactSection.tsx`, `data/portfolio.ts`, and `app/globals.css`.
- The content model should remain centralized in `data/portfolio.ts`.
- Any new visual state should be represented by existing component props or small data additions, not a second content system.
- Motion should stay subordinate to readability and preserve `prefers-reduced-motion`.

## Invariants

- Required section order from `SPEC-001` remains unchanged.
- Debt Pressure Lab remains the primary real completed project.
- Assignment 2 remains clearly planned until real implementation artifacts exist.
- Placeholder-safe link behavior must not regress.
- The design remains professional, readable, and credible.
- UI refinement must reduce competition, not create more visual noise.

## Risks

- Reducing badges too aggressively could hide useful technical evidence.
- Making pending links quieter could make final missing inputs easier to forget.
- Changing the flagship project layout could reintroduce card clipping, nav overlap, or scroll-stage spacing bugs.
- Adding a secondary accent could weaken the current visual system if overused.

## Verification Strategy

- `npm run lint`
- `npm run build`
- Desktop browser check at common and short viewport heights
- Mobile browser check around 390px width
- Check that badge count and panel repetition are meaningfully reduced
- Check that confirmed links render correctly and email renders as a confirmed contact method
- Check that Debt Pressure Lab still communicates the verified stack and project proof

## Sprint Plan

Sprint 10 should implement this as one bounded UI refinement pass. It should not start until the current committed state is accepted as the baseline.

Sprint 11 extends the same UI refinement direction only for the AI Workflow section by turning the quiet list into a workflow card stage. It remains bounded to section presentation and must not add new claims, projects, links, or dependencies.

## Rollout / Sequencing Notes

This spec should run before final truth-verification closeout if the improved UI is intended for the submitted portfolio. Sprint 3 should verify the final post-refinement state rather than the older visual baseline.

## Completion Criteria

- Hero first viewport feels calmer and more intentional.
- Pending links no longer dominate top navigation while remaining honest.
- Badge and panel repetition are visibly reduced.
- Debt Pressure Lab reads as a polished case study and remains technically specific.
- Lower sections support the story without feeling like repeated card grids.
- Automated checks and browser QA pass.

## Spec QA Record

### Metadata

- **QA ID:** SPEC-QA-011
- **Spec ID:** SPEC-011
- **Reviewer:** GitHub Copilot
- **Date:** 2026-05-04
- **Verdict:** PASS (0 issues)

### Governing Artifact

- **Spec Path:** `docs/specs/spec-011-portfolio-ui-design-refinement.md`

### QA Scope

This QA pass reviewed:

- whether the spec preserves the portfolio topic and truth rules
- whether the design improvements are bounded to UI presentation
- whether research inputs are treated as inspiration rather than copied design authority
- whether verification covers prior spacing, clipping, and pending-link risks

### Checks Performed

- [x] Compared the plan against `SPEC-001` required section order and invariants
- [x] Compared the plan against live component surfaces
- [x] Checked that no new project claims, links, or completion claims are introduced
- [x] Checked that the spec remains implementation-ready without prescribing a copied theme

### Findings

None.

### Open Questions

- Final email is confirmed as `jam398@njit.edu`. Resume is intentionally not required unless the user restores it.
- The exact amount of badge reduction should be decided during implementation by comparing readability against technical proof.

### Final QA Summary

- **What was checked:** The UI refinement spec was checked against the current portfolio state, external design research inputs, and the existing portfolio truth rules.
- **What was fixed:** None.
- **Residual risks:** Human visual judgment is still required after implementation because automated checks cannot fully evaluate whether the page feels polished.
- **Recommendation:** Ready for sprint planning

### Implementation QA Addendum - 2026-05-04

- **Reviewer:** GitHub Copilot
- **Scope:** Verified Sprint 10 implementation against this spec after hero/nav simplification, badge and panel reduction, Debt Pressure Lab proof-panel polish, lower-section rhythm changes, and confirmed GitHub/LinkedIn links.
- **Checks Performed:** `npm run lint`; `git diff --check`; `npm run build` outside the sandbox after sandboxed build hit Windows `spawn EPERM`; Playwright desktop, mobile, and short-height desktop QA outside the sandbox after Chromium launch hit Windows `spawn EPERM` in the sandbox.
- **Findings:** None remaining. Two implementation issues were fixed during QA: JSX apostrophe escaping and short-height proof-panel fit.
- **Verdict:** PASS

### Implementation QA Addendum - 2026-05-04 - Sprint 11

- **Reviewer:** GitHub Copilot
- **Scope:** Verified the AI Workflow horizontal stage implementation against this spec after replacing the quiet list with scroll-driven desktop cards and static mobile/reduced-motion cards.
- **Checks Performed:** `npm run lint`; `npm run build`; Playwright desktop, short-height desktop, mobile, and reduced-motion checks against the existing local dev server on `http://localhost:3000`.
- **Findings:** One implementation issue was found and fixed during QA: the inherited `overflow: hidden` on `section-band` prevented sticky behavior and caused the workflow title/cards to scroll under the nav. The AI workflow section now allows sticky overflow while the internal card viewport remains clipped.
- **Verdict:** PASS
