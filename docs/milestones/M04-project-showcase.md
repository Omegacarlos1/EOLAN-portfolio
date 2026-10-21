# Milestone 4 — Project showcase

**Status:** Complete
**Branch:** `feature/M04-project-showcase`

## Delivered

- Replaced the project listing placeholder with a responsive, filterable project gallery.
- Added typed project, link, screenshot, status, category and filter contracts.
- Added entries for Ahoden Elite Clean, Playrush Gaming Platform and Figma BYC Design.
- Limited categories to facts supported by the supplied names: Ahoden remains TBD, Playrush is labelled Gaming platform, and Figma BYC is labelled Design.
- Marked every unverified status as TBD.
- Added reusable project cards with explicit screenshot and overview placeholders.
- Replaced the dynamic-route placeholder with a reusable case-study template covering overview, role, problem, solution, stack, challenges, screenshots, repository and demo.
- Added an HTTP(S)-only external URL validator; project links are not rendered when their URL is absent or invalid.
- Added a useful project-not-found state for unknown slugs.
- Added responsive gallery, filter, case-study, screenshot and link-state styling.

## Acceptance results

| Requirement | Result |
| --- | --- |
| `/projects` gallery | Pass |
| `/projects/:slug` case studies | Pass |
| Typed project data | Pass |
| Category filters | Pass |
| Three named project entries | Pass |
| Unverified data marked TBD | Pass |
| Missing images and URLs handled | Pass |
| Links restricted to valid HTTP(S) URLs | Pass |
| Filtering, route and missing-data tests | Pass |
| Lint, typecheck, tests and build | Pass |

No project deliverables, completion claims, technology stacks, responsibilities, outcomes, screenshots, repositories or demos were invented.

## Verification

Commands executed from the repository root:

```text
npm run lint       PASS
npm run typecheck  PASS
npm test           PASS — 5 suites, 31 tests
npm run build      PASS — Vite production bundle created
```

Local Vite HTTP smoke checks returned `200` with the application root for:

- `/projects`
- `/projects/ahoden-elite-clean`
- `/projects/playrush-gaming-platform`
- `/projects/figma-byc-design`
- `/projects/missing`

Automated coverage verifies:

- All three project cards and their TBD statuses.
- Category filtering and reset to All.
- All three typed case-study routes and required sections.
- Explicit missing overview, role, stack, screenshot and link states.
- Absence of dead repository/demo anchors.
- Acceptance of HTTP(S) URLs and rejection of unsafe, unsupported or missing URLs.
- Unknown-slug routing back to the gallery.

Browser screenshot controls were unavailable, so visual checks at mobile, tablet and desktop widths are not claimed. Responsive CSS, focus styles and native keyboard-operable filter buttons are implemented and should receive a browser pass during review.

## Changed files

- `client/src/app/router.test.tsx`
- `client/src/data/projects.ts`
- `client/src/features/projects/MissingProjectData.tsx`
- `client/src/features/projects/ProjectCard.tsx`
- `client/src/features/projects/projectLinks.ts`
- `client/src/features/projects/projectShowcase.test.tsx`
- `client/src/pages/ProjectDetailPage.tsx`
- `client/src/pages/ProjectsPage.tsx`
- `client/src/styles/global.css`
- `client/src/styles/projects.css`
- `client/src/types/project.ts`
- `AGENTS.md`
- `README.md`
- `docs/milestones/M04-project-showcase.md`

## Known limitations and TBD decisions

For every project, confirm before replacing the current placeholders:

- Completion or development status.
- Overview, goal and problem statement.
- Egbedayo’s role and responsibilities.
- Solution, features and deliverables.
- Technology stack.
- Challenges and verified outcomes.
- Screenshots with meaningful alt text and captions.
- Repository, demo or Figma URLs.

The professional portrait, experience history and CV remain outstanding from earlier milestones. No backend or database behavior was added. Postman collection and API documentation updates are not applicable because this milestone introduces no API.

## Manual review checklist

1. Run `npm run dev` and open the printed local URL.
2. Review the gallery at approximately 320 px, 768 px and desktop widths.
3. Use Tab and Enter to select All, TBD, Gaming platform and Design filters.
4. Open all three cards and verify every case-study section has an honest TBD state.
5. Confirm unavailable screenshots are clearly labelled and no broken image element appears.
6. Confirm no repository or demo anchor appears until a valid URL is added.
7. Open an unknown project slug and verify the return-to-projects link.

## Next recommended milestone

After explicit M04 approval, proceed to Milestone 5 — Polish and quality. Supply verified project details and assets whenever available so the truthful placeholders can be replaced without restructuring the gallery.
