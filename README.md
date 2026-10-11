# Jose Manuel Carrasco — Portfolio

Personal portfolio and freelance site of a full-stack developer based in Copenhagen.

> 🚧 Work in progress — live site coming soon.

## Tech stack

- **React + TypeScript** — UI and type safety
- **Vite** — dev server and build
- **Tailwind CSS v4** — styling via the `@tailwindcss/vite` plugin
- **Playwright + axe** — end-to-end and accessibility tests on desktop and mobile
- **oxlint + Prettier** — linting and formatting
- **GitHub Actions** — CI on every push and pull request
- **Cloudflare Pages** — hosting, with security headers in `public/_headers`

## Getting started

Requires Node.js 24 (pinned in `.nvmrc`).

```bash
npm install
npm run dev
```

To run the E2E tests locally, install the browser once:

```bash
npx playwright install chromium
npm run test:e2e
```

## Scripts

| Command                 | Description                         |
| ----------------------- | ----------------------------------- |
| `npm run dev`           | Start the dev server                |
| `npm run build`         | Type-check and build for production |
| `npm run preview`       | Preview the production build        |
| `npm run lint`          | Lint with oxlint                    |
| `npm run format`        | Format with Prettier                |
| `npm run format:check`  | Check formatting (used in CI)       |
| `npm run typecheck:e2e` | Type-check the E2E tests            |
| `npm run test:e2e`      | Run Playwright E2E and a11y tests   |

## Security

- Strict Content Security Policy, HSTS and anti-clickjacking headers
- Dependabot for dependency updates
- No secrets in the repository

## Project structure

Feature-first: each section owns its components, types and data.

```
src/
├── components/ui/      # Shared, domain-agnostic UI (Section, Tag, ExternalLink, Aurora)
├── content/            # Typed personal data reused across sections
├── features/
│   ├── hero/           # Hero section and interactive avatar
│   └── projects/       # Components, types and typed content data
├── assets/             # Images processed and hashed by Vite
├── App.tsx             # Page composition
├── index.css           # Tailwind import, design tokens, animations
└── main.tsx            # Entry point
e2e/                    # Playwright E2E and accessibility tests
public/_headers         # Security headers for Cloudflare Pages
```

## Roadmap

- [x] Hero section with interactive avatar
- [x] Projects section
- [x] Playwright E2E and accessibility tests
- [x] CI with GitHub Actions
- [ ] Services, about and contact sections
- [ ] Deploy to Cloudflare Pages with a custom domain

## License

[MIT](LICENSE)
