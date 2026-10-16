# Jose Manuel Carrasco — Portfolio

Personal portfolio and freelance site of a full-stack developer based in Copenhagen.

**Live:** [jmanuel.pages.dev](https://jmanuel.pages.dev)

## Tech stack

- **React + TypeScript** — UI and type safety
- **Vite** — dev server and multi-page build (home + 404)
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

## SEO

- Social preview metadata (Open Graph), `robots.txt` and `sitemap.xml`
- Custom 404 page: Cloudflare Pages serves it with a real 404 status for
  unknown routes (instead of a soft 404 with the home page), and it is
  marked `noindex`

## Project structure

Feature-first: each section owns its components, types and data.

```
src/
├── components/
│   ├── layout/         # Page-level structure (Header, Footer)
│   └── ui/             # Shared, domain-agnostic UI and button styles
├── content/            # Typed personal data reused across sections
├── features/
│   ├── contact/        # Contact call to action
│   ├── hero/           # Hero with the mascot and painted yard markings
│   ├── not-found/      # Custom 404 page
│   ├── projects/       # Components, types and typed content data
│   └── services/       # Services cards with mascot illustrations
├── assets/             # Images processed and hashed by Vite
├── App.tsx             # Home page composition
├── index.css           # Tailwind import, design tokens, animations
├── main.tsx            # Entry point (home)
├── mount.tsx           # Shared bootstrap for every HTML entry
└── not-found.tsx       # Entry point (404 page)
404.html                # 404 entry, built alongside index.html
e2e/                    # Playwright E2E and accessibility tests
public/_headers         # Security headers for Cloudflare Pages
```

## Roadmap

- [x] Hero section with interactive avatar
- [x] Projects section
- [x] Services section
- [x] Playwright E2E and accessibility tests
- [x] CI with GitHub Actions
- [x] Contact section and footer
- [x] Deploy to Cloudflare Pages
- [x] SEO and social preview metadata
- [x] Custom 404 page with real 404 status
- [x] Sticky header with logo and section nav
- [x] Football field background with the mascot in the hero
- [ ] Custom domain

## License

[MIT](LICENSE)
