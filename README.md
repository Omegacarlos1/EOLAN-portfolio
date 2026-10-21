# EOLAN DiGITAL Portfolio

Multi-page portfolio for Egbedayo Olanrewaju, branded EOLAN DiGITAL. The application currently contains the Milestone 1 architecture and Milestone 2 shared brand system. Route content remains intentionally placeholder-only until the page milestones.

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

`VITE_API_BASE_URL` is reserved for the later API integration milestone and is not used by the current placeholder application.

## Routes

| Route | Placeholder |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/skills` | Skills |
| `/services` | Services |
| `/experience` | Experience |
| `/projects` | Projects |
| `/projects/:slug` | Project case study |
| `/contact` | Contact |
| Any unmatched path | 404 page |

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
- The professional photo has not been supplied.
- Full page content belongs to later frontend milestones.
- Project statuses, screenshots, roles, demo URLs and repository URLs remain TBD.
- The contact form, Express API, email delivery and MariaDB schema are not part of this milestone.
- CV, domain and production hosting remain TBD.

See `AGENTS.md` for standing implementation rules and `docs/` for the approved PRD and milestone plan.
