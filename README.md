# EOLAN DiGITAL Portfolio

Multi-page portfolio for Egbedayo Olanrewaju, branded EOLAN DiGITAL. The application now includes the Milestone 1 architecture, Milestone 2 shared brand system, and Milestone 3 main content pages with frontend-only contact validation.

## Technology

- React and TypeScript with Vite
- Redux Toolkit and React Redux
- React Router
- Plain mobile-first CSS with shared design tokens
- Reusable responsive layout, buttons, cards, and section headings
- ESLint
- Jest and React Testing Library

The future backend will use Node.js and Express with MySQL in production. Local database development will use the MariaDB service supplied by XAMPP. No backend or database connection is included in Milestone 1.

## Prerequisites

- Node.js 20.19 or newer
- npm 10 or newer
- XAMPP with MariaDB for the later backend milestone; it does not need to run for the frontend foundation

## Setup

From the repository root:

```bash
npm install
npm run dev
```

Vite prints the local development URL when it starts.

## Commands

```bash
npm run dev        # start the Vite development server
npm run lint       # lint the frontend source
npm run typecheck  # run TypeScript project checks
npm test           # run Jest and React Testing Library tests
npm run build      # type-check and create the production frontend build
```

## Environment

Copy `client/.env.example` to `client/.env.local` only when local overrides are needed. Variables beginning with `VITE_` are exposed to browser code and must never contain passwords, API keys, MariaDB credentials, or other secrets.

`VITE_API_BASE_URL` is reserved for the later API integration milestone and is not used by the current frontend-only contact form.

## Routes

| Route | Current page |
| --- | --- |
| `/` | Home content and service/stack previews |
| `/about` | Biography, approach, social links and CV status |
| `/skills` | Skill groups and primary portfolio stack disclosure |
| `/services` | Six approved service areas |
| `/experience` | Explicit holding state pending verified history |
| `/projects` | Placeholder until Milestone 4 |
| `/projects/:slug` | Placeholder until Milestone 4 |
| `/contact` | Direct links and locally validated enquiry form |
| Any unmatched path | 404 page |

## Contact form behavior

The contact form validates required name, email and project details fields in the browser. A valid submission displays: “Sending unavailable until backend is connected. Your message has not been sent.” It does not send, store or clear the enquiry. Backend delivery and local XAMPP MariaDB persistence belong to the later backend milestone.

## Professional portrait

The supplied portrait is approved for use, but the chat image preview was not exposed to the repository as an original file. The UI therefore keeps an accessible placeholder instead of generating or substituting a likeness. To wire the exact asset:

1. Save the original as `client/public/images/egbedayo-olanrewaju.jpg`.
2. Set `profilePhotoPath` in `client/src/data/portfolio.ts` to `/images/egbedayo-olanrewaju.jpg`.

## Project structure

```text
client/
  src/
    app/          Redux store, typed hooks and router
    components/   Shared layout and reusable UI
    data/         Typed navigation/content data
    features/     Feature state and logic
    pages/        Route-level components
    services/     Future API clients
    styles/       Global CSS and design tokens
    test/         Shared Jest setup
    types/        Shared TypeScript contracts
docs/             Approved PRD, milestones and milestone reports
```

The `services/` directory will be added when API integration begins; empty directories are not committed to Git.

## Current limitations and TBD items

- The official logo is preserved byte-for-byte from the approved PRD's embedded asset. A separate source SVG or transparent PNG has not been supplied.
- The approved professional photo still needs its original file copied into the repository as described above.
- Project statuses, screenshots, roles, demo URLs and repository URLs remain TBD.
- The contact form is frontend-only. Express API, email delivery and MariaDB schema are not implemented yet.
- Employment, education, qualifications and achievements remain unpublished until verified details are supplied.
- CV, domain and production hosting remain TBD.

See `AGENTS.md` for standing implementation rules and `docs/` for the approved PRD and milestone plan.
