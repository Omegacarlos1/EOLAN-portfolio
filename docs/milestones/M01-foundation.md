# Milestone 1 — Foundation

**Status:** Complete  
**Completed:** 21 October 2026  
**Branch:** `feature/F01-foundation`

## Delivered

- Vite React and TypeScript application in the `client/` workspace.
- Redux Toolkit store, typed hooks, and a small initialized application slice.
- React Router routes for `/`, `/about`, `/skills`, `/services`, `/experience`, `/projects`, `/projects/:slug`, `/contact`, and unmatched paths.
- Placeholder pages with route-appropriate headings and document titles.
- Shared header, primary navigation, footer, skip link, layout, page metadata, and placeholder page components.
- Mobile-first global CSS and reusable dark navy, blue, purple, and teal design tokens.
- ESLint flat configuration.
- Jest, React Testing Library, and user-event configuration and tests.
- Root npm workspace commands for development, linting, type checking, testing, and building.
- Public environment example and environment-safety guidance.
- Setup, route, structure, limitation, and XAMPP MariaDB documentation.

No backend, database connection, contact submission behavior, Socket.IO feature, project claims, CV link, or full page design was added.

## Acceptance results

| Criterion | Result | Evidence |
| --- | --- | --- |
| App boots locally | Pass | Vite 8.3.5 started at `http://127.0.0.1:5173/`. |
| Required routes render | Pass | All required paths and one unmatched path returned HTTP 200 from the SPA development server; route tests cover headings, a dynamic project slug, and the 404 UI. |
| Shared header/footer work | Pass | RTL confirms primary navigation, `main`, and `contentinfo` landmarks render. |
| Navigation works | Pass | RTL user-event test navigates from Home to About and verifies the page title update. |
| Redux Toolkit configured | Pass | Store unit test confirms the initial application state. |
| Lint passes | Pass | `npm run lint` exited 0. |
| Type checking passes | Pass | `npm run typecheck` exited 0. |
| Tests pass | Pass | 2 suites and 11 tests passed. |
| Production build passes | Pass | 49 modules transformed; Vite build completed successfully. |
| Production dependency audit | Pass | `npm audit --omit=dev` reported 0 vulnerabilities. |

## Commands and actual results

```text
node --version
v24.19.0

npm --version
11.17.0

npm run lint
PASS — exit 0

npm run typecheck
PASS — exit 0

npm test
PASS — 2 suites, 11 tests, 0 snapshots

npm run build
PASS — Vite 8.3.5, 49 modules transformed

npm audit --omit=dev
PASS — 0 vulnerabilities
```

The first Jest run exposed a missing `TextEncoder` in JSDOM; the shared setup now supplies Node's implementation. The following type-check exposed the missing Node type scope; `tsconfig.app.json` now declares the Vite, Node, and Jest types. Both commands passed after those fixes.

The full development dependency audit reports 19 moderate findings traced to Jest's coverage/instrumentation chain (`babel-jest` → `babel-plugin-istanbul` → old `js-yaml`/`sprintf-js`). npm's proposed automatic resolution is a major downgrade to Jest 25, so it was not applied. These packages are development-only, the installed packages are current at the time of this milestone, and the production-only audit is clean. Recheck when the Jest dependency chain publishes a compatible fix.

## Route smoke check

The running Vite server returned HTTP 200 and the expected React root element for:

```text
/
/about
/skills
/services
/experience
/projects
/projects/sample-project
/contact
/not-a-route
```

Automated tests cover in-app navigation and content rendering. A real-device/browser viewport review was not available in this environment; Milestone 2 should visually inspect mobile, tablet, and desktop layouts when the responsive branded shell is implemented.

## Files created or modified

- Root: `.gitignore`, `package.json`, `package-lock.json`, `README.md`, `AGENTS.md`.
- Client configuration: `client/package.json`, `.env.example`, `index.html`, Vite, TypeScript, ESLint, Babel, and Jest configuration.
- Application wiring: `client/src/main.tsx`, `App.tsx`, `app/router.tsx`, `app/store.ts`, and typed Redux hooks.
- Shared UI: layout header/footer/shell, page metadata, and placeholder component.
- Pages: Home, About, Skills, Services, Experience, Projects, Project Detail, Contact, and Not Found.
- Data/types/state: typed primary navigation and the application Redux slice.
- Styles: global rules and shared tokens.
- Tests: shared test setup, store test, and route/navigation tests.

## Known limitations and TBD decisions

- Official EOLAN logo asset and professional photo are not present in the repository.
- Exact logo-derived brand colors remain TBD; current token values use the approved approximate colors from the milestone prompt.
- Project statuses, screenshots, contributions, repositories, and demo URLs remain TBD.
- Experience/education details, CV, domain, hosting, privacy/retention policy, and email provider remain TBD.
- MariaDB through XAMPP is documented as the future local database; no database is needed or connected in this milestone.

## AGENTS.md update

Recorded the confirmed client workspace layout, plain CSS/token strategy, source-folder responsibilities, Jest/Babel setup, and future XAMPP MariaDB decision.

## Recommended next milestone

Proceed to Milestone 2 — Brand system and responsive shell after the approved EOLAN logo asset is added to the repository. Keep exact logo colors marked provisional until sampled or formally confirmed.
