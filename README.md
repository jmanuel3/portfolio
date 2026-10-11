# Jose Manuel Carrasco — Portfolio

Personal portfolio and freelance site of a full-stack developer based in Copenhagen.

> 🚧 Work in progress — live site coming soon.

## Tech stack

- **React + TypeScript** — UI and type safety
- **Vite** — dev server and build
- **Tailwind CSS v4** — styling via the `@tailwindcss/vite` plugin
- **oxlint + Prettier** — linting and formatting
- **Cloudflare Pages** — hosting, with security headers in `public/_headers`

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

## Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start the dev server                |
| `npm run build`        | Type-check and build for production |
| `npm run preview`      | Preview the production build        |
| `npm run lint`         | Lint with oxlint                    |
| `npm run format`       | Format with Prettier                |
| `npm run format:check` | Check formatting (used in CI)       |

## Security

- Strict Content Security Policy, HSTS and anti-clickjacking headers
- Dependabot for dependency updates
- No secrets in the repository

## Roadmap

- [ ] Projects, services, about and contact sections
- [ ] Playwright E2E tests
- [ ] CI with GitHub Actions
- [ ] Deploy to Cloudflare Pages with a custom domain

## License

[MIT](LICENSE)
