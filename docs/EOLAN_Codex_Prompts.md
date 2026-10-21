# EOLAN DiGITAL — Codex Frontend Milestone Prompts

Use these prompts **in order**, one milestone at a time, in VS Code Codex. Attach `EOLAN_DiGITAL_Branded_Portfolio_PRD.docx` or provide its text, and place the official EOLAN logo file in the project assets directory. Do not assume the PRD is accessible unless you attach it.

## Global instructions (paste before every milestone)
You are building the EOLAN DiGITAL portfolio for Egbedayo Olanrewaju. Follow the attached PRD and the repository's AGENTS.md. Frontend: React, TypeScript, Redux Toolkit, React Router. Visual design: premium dark navy with blue, purple and teal accents matching the supplied logo. Hero headline: “Building Digital Experience”. Bio and contact details must match the PRD. Target both employers and freelance clients. Never fabricate testimonials, years of experience, metrics, project completion, live URLs, or screenshots. Projects: Ahoden Elite Clean, Playrush Gaming Platform, Figma BYC Design; show status TBD until confirmed. Do not add backend, Socket.IO, admin dashboard or CV download until specifically requested. Keep components reusable, accessible and responsive. After implementation run available lint, tests and production build, report results accurately, summarize changed files and decisions, and update AGENTS.md with verified conventions.

## Milestone 1 — Foundation
Set up a Vite React + TypeScript application, Redux Toolkit store, React Router with routes `/`, `/about`, `/skills`, `/services`, `/experience`, `/projects`, `/projects/:slug`, `/contact`, and a 404 route. Establish a maintainable feature/component folder structure, global styles/design tokens, TypeScript types, ESLint, Jest with React Testing Library (or explain configuration conflicts), environment example, README, and AGENTS.md. Do not implement full page designs yet. Create placeholder pages with correct titles. Verify navigation, build, lint, tests. Finish with a milestone summary, acceptance results and changed files.

## Milestone 2 — Brand system and shared UI
Using the official logo asset, implement the dark navy design system with approximate brand colors blue `#2163EE`, purple `#8030EE`, teal `#0E958C` (replace with verified logo colors when available). Build accessible desktop/mobile header, active navigation, footer, responsive container, buttons, cards, section headings and focus styles. No fake metrics. Support mobile widths, reduced motion and keyboard navigation. Add tests for navigation and basic UI behavior. Run lint/tests/build and summarize.

## Milestone 3 — Main pages
Implement Home, About, Skills, Services, Experience and Contact pages. Use headline “Building Digital Experience”, professional title Full-Stack Web Developer, and the bio from the PRD. Skills include React, JavaScript, TypeScript, Redux, Node.js, Express, MongoDB and MySQL; distinguish skills from the primary project stack. Services: full-stack development, frontend, backend/API, database design, e-commerce and maintenance. Add contact email `Egbedayoolanrewaju@gmail.com`, GitHub `https://github.com/Omegacarlos1`, LinkedIn `https://www.linkedin.com/in/egbedayo-olanrewaju-671730243/`. Contact form must validate fields and display an explicit 'sending unavailable until backend is connected' state; do not falsely claim messages are sent. Photo is planned; use a placeholder until provided. CV remains 'coming later' with no dead download. Test key content, routes and form validation. Run lint/tests/build and summarize.

## Milestone 4 — Project showcase
Implement `/projects` and `/projects/:slug` with typed project data, category filters, project cards, and detailed case-study template (overview, role, problem, solution, stack, challenges, screenshots, GitHub/demo links). Add entries for Ahoden Elite Clean, Playrush Gaming Platform and Figma BYC Design. Mark unverified statuses and missing images/URLs as TBD. Do not invent deliverables. Ensure links render only if valid URLs exist. Add tests for filtering, route rendering and missing-data behavior. Run lint/tests/build and summarize.

## Milestone 5 — Polish and quality
Refine spacing, responsive layouts, loading/empty states, 404, metadata per page, accessible labels, keyboard navigation, contrast, optimized images and subtle animations with reduced-motion support. Review at mobile/tablet/desktop widths. Add tests for critical interactions; document any manual accessibility/performance checks and any unverified Lighthouse results (do not invent scores). Run lint/tests/build and summarize remaining issues.

## Milestone 6 — Backend-ready frontend
Define typed API contract for `POST /api/contact`: name, email, optional project type, message; expected success, validation and rate-limit errors. Implement an API client driven by `VITE_API_BASE_URL`, with loading, success and failure states. Add mock-based tests; do not connect to a nonexistent backend or show fake success. Document hosting/environment setup, including that frontend environment variables cannot contain secrets. Run lint/tests/build and provide deployment readiness checklist. Update AGENTS.md.

## Milestone 7 — Backend (only after approval)
Create Node.js + Express backend with MySQL (XAMPP MySQL locally, managed MySQL in production), validated `POST /api/contact`, safe parameterized SQL, rate limiting, CORS allowlist, structured errors and email notification through a configured provider. Use Mocha for API tests and Jest for frontend tests. Store credentials only in server environment variables. Socket.IO should be added only if a real-time requirement is approved. Provide sample HTTP requests, schema/migrations, environment examples and setup instructions. Run all available tests and report exact results. Never claim email delivery without testing it.

## Required Codex milestone report format
1. Milestone and status (complete / partial / blocked)
2. Files created or modified
3. Features delivered and acceptance criteria met
4. Commands run and actual results (lint, tests, build)
5. Bugs, missing assets, decisions and TODOs
6. AGENTS.md changes
7. Recommended next milestone
