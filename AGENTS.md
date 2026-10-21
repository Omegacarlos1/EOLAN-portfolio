# AGENTS.md — EOLAN DiGITAL Portfolio

## Project purpose

Build a premium, dark-themed, multi-page portfolio for **Egbedayo Olanrewaju**, branded **EOLAN DiGITAL**, to attract employers and freelance clients. Hero tagline: **Building Digital Experience**.

## Source of truth

- Follow the approved EOLAN DiGITAL portfolio PRD and milestone document when available in the repository.
- Do not invent employment history, testimonials, qualifications, project completion status, metrics, or live URLs.
- Mark unknown information `TBD` and ask before making irreversible decisions.
- Preserve the supplied EOLAN logo; do not redraw or replace it. Use its blue, purple, and teal palette with a dark navy background. Use accessible contrast.

## Required technology

- Frontend: React, TypeScript, Redux Toolkit, React Router; responsive CSS (Tailwind CSS if already configured).
- Backend: Node.js, Express, Socket.IO (only for approved real-time features).
- Database: MySQL in production; local MySQL managed with XAMPP.
- Tests: Jest and Mocha, selecting the appropriate runner per package. Do not create duplicate tests just to use both.
- Prefer small, maintainable dependencies; explain additions before installing major packages.

## Website routes

- `/` Home
- `/about` About
- `/projects` Project listing
- `/projects/:slug` Individual case study
- `/skills` Skills
- `/services` Services
- `/experience` Experience
- `/contact` Contact
- Add a usable 404 page and accessible navigation.

## Content and identity

- Name: Egbedayo Olanrewaju
- Brand: EOLAN DiGITAL
- Email: Egbedayoolanrewaju@gmail.com
- GitHub: https://github.com/Omegacarlos1
- LinkedIn: https://www.linkedin.com/in/egbedayo-olanrewaju-671730243/
- Projects (statuses unconfirmed): Ahoden Elite Clean, Playrush Gaming Platform, Figma BYC design.
- Services: full-stack development, frontend development, backend/API development, database design, e-commerce development, website maintenance.
- Professional photo: planned; use a placeholder until supplied.
- CV, domain, production hosting, project demos and screenshots: TBD.
- Admin dashboard: future phase, not MVP.

## Implementation rules

1. Read the relevant PRD section and current code before making changes.
2. Work on **one milestone at a time**; avoid unrelated refactoring.
3. Use typed React components, explicit props, and reusable UI elements. Keep Redux for shared state, not every local form field.
4. Keep data, UI components, API calls, and server code clearly separated.
5. Implement responsive mobile-first layouts, keyboard navigation, visible focus, semantic headings, image alt text, and reduced-motion support.
6. Use environment variables for secrets; commit only `.env.example`, never actual `.env` credentials.
7. Validate all API inputs on the server. Use parameterized SQL queries, rate limiting and anti-spam measures for contact forms.
8. The contact flow should store messages in MySQL and send email notifications after configuration. Never claim email works without verifying it.
9. Do not expose personal data or database credentials to the browser. Use HTTPS in production.
10. Do not add Socket.IO solely to satisfy the tech list; wire it when an approved real-time feature is implemented.

## Suggested repository layout

```text
client/
  src/
    app/            # Redux store and application configuration
    components/     # Shared UI components
    pages/          # Route pages
    features/       # Feature-specific logic
    data/           # Typed portfolio content
    services/       # API clients
    styles/         # Global styles and theme tokens
server/
  src/
    routes/
    controllers/
    middleware/
    services/
    db/
  tests/
  .env.example
  schema.sql
AGENTS.md
README.md
```

Adapt to an existing structure rather than duplicating folders.

## Testing and milestone verification

- After each milestone, run the project's actual lint, typecheck, test and build scripts where available.
- Add meaningful unit tests for utilities/components and integration tests for APIs; use Jest and/or Mocha according to package configuration.
- Manually verify route navigation, mobile layout, form errors, accessibility basics and broken links.
- Do not report tests as passing unless they were actually executed. Record blockers and untested areas.
- Avoid deleting failing tests or weakening assertions just to obtain a pass.

## Milestone completion report

At the end of each milestone, report:

1. Features implemented and changed files.
2. Commands run and their actual results.
3. Known limitations and outstanding `TBD` decisions.
4. Manual QA steps and any API/Postman examples when relevant.
5. Next recommended milestone.

## Milestone sequence

1. Setup, TypeScript, Redux, routing, tooling.
2. Brand theme, logo, navigation, responsive design system.
3. Main content pages and contact UI.
4. Project gallery and case-study pages.
5. Accessibility, SEO, animations, tests and performance.
6. API integration readiness.
7. Express contact API, MySQL schema, email delivery and deployment configuration.

## Working with Codex

- Before coding: summarize scope, files to change, assumptions and tests planned.
- Make focused, reviewable changes. Do not overwrite user assets or uncommitted work.
- If blocked by missing credentials, images or decisions, provide a safe stub and document what is needed.
- Update documentation when behavior or configuration changes. Preserve this AGENTS.md as the standing project instructions; revise only when requirements change.

## Git and GitHub Development Workflow

All backend development must follow a milestone-based Git workflow.

### Branch Management

- The `main` branch represents reviewed and accepted work.
- Each milestone must be developed on a separate feature branch.
- Branch naming convention: `feature/B01-backend-foundation`, `feature/B02-authentication`, etc.
- Never push unfinished milestone changes directly to `main`.

### Commit Standards

Use clear, descriptive conventional commits.

Examples:

- `chore: configure Express and TypeScript`
- `feat: implement database connection`
- `test: add health endpoint integration tests`
- `docs: update B01 milestone summary`
- `fix: resolve database migration error`

### GitHub Push Requirements

- Make small commits after completing meaningful tasks.
- Push the current feature branch to GitHub after successful local verification.
- Never commit `.env`, API keys, database passwords or other secrets.
- Never force-push or overwrite remote changes without explicit approval.
- Do not automatically merge a feature branch into `main`.

### Milestone Completion

At the end of each milestone:

1. Run lint, type checking and relevant automated tests.
2. Generate the milestone summary and actual test results.
3. Update the Postman collection and API documentation.
4. Update the milestone tracker and AGENTS.md.
5. Commit the completed milestone work.
6. Push the feature branch to GitHub.
7. Provide a pull request description with changes, tests, risks and remaining issues.
8. Wait for explicit milestone approval before merging or starting the next milestone.

### Safety Rules

Before performing Git operations, inspect the current branch, working tree and remote configuration. Preserve unrelated changes. Never automatically delete branches, discard uncommitted work or force-push.
