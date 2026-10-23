# EOLAN DiGITAL Portfolio

Multi-page portfolio for Egbedayo Olanrewaju, branded EOLAN DiGITAL. The application includes the shared brand system, main content pages, frontend-only contact validation, and a typed project gallery with truthful case-study placeholders.

Milestone 5 adds per-page metadata, responsive polish, stronger keyboard focus handling, resilient portrait loading/fallback behavior, subtle reduced-motion-aware animation, and an expanded 404 experience.

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
| `/projects` | Filterable typed project gallery |
| `/projects/:slug` | Reusable project case-study template |
| `/contact` | Direct links and locally validated enquiry form |
| Any unmatched path | 404 page |

## Contact form behavior

The contact form validates required name, email and project details fields in the browser. A valid submission displays: “Sending unavailable until backend is connected. Your message has not been sent.” It does not send, store or clear the enquiry. Backend delivery and local XAMPP MariaDB persistence belong to the later backend milestone.

## Professional portrait

The approved professional portrait is stored unchanged at `client/public/images/egbedayo-olanrewaju.jpeg` and appears on the Home and About pages. Its source dimensions are 831 × 1038 and its repository copy matches the supplied file byte-for-byte.

The portrait component exposes an accessible loading state, uses intrinsic dimensions, asynchronous decoding and appropriate eager/lazy loading hints, and falls back to an accessible placeholder if the image cannot load. The approved logo remains unchanged; its 61 KB source is preloaded for the header, loaded lazily in the footer, and rendered with intrinsic dimensions to reduce layout shift.

## Quality and accessibility

- Each route sets a specific document title, description and Open Graph title/description. Missing routes use `noindex, nofollow`.
- Route changes move focus to the main landmark; the skip link remains available for direct keyboard access.
- The mobile navigation supports disclosure semantics and Escape-to-close behavior.
- Invalid contact submissions focus the first invalid field and retain the message hint in the accessible description.
- External links that open a new tab announce that behavior to assistive technology.
- Motion is subtle and disabled through the existing `prefers-reduced-motion` override.
- The project gallery, experience page, missing project route, portrait and 404 retain explicit empty, loading or unavailable states.

See `docs/milestones/M05-polish-and-quality.md` for automated results, responsive review details, contrast checks and unverified areas. No Lighthouse score is claimed.

## Project data

Project content is centralized in `client/src/data/projects.ts`. The current PRD verifies only the names Ahoden Elite Clean, Playrush Gaming Platform and Figma BYC Design. Statuses, roles, problems, solutions, technology stacks, challenges, screenshots and project-specific URLs therefore render as TBD.

Categories are limited to what the supplied names support: Playrush uses “Gaming platform,” Figma BYC uses “Design,” and Ahoden Elite Clean remains “TBD.” External project links render only when their values are valid HTTP(S) URLs.

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
- Project statuses, overviews, roles, problems, solutions, stacks, challenges, screenshots, demo URLs and repository URLs remain TBD.
- The contact form is frontend-only. Express API, email delivery and MariaDB schema are not implemented yet.
- Employment, education, qualifications and achievements remain unpublished until verified details are supplied.
- CV, domain and production hosting remain TBD.

See `AGENTS.md` for standing implementation rules and `docs/` for the approved PRD and milestone plan.
