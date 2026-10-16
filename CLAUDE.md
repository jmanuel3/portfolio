# CLAUDE.md

Context for AI-assisted development sessions.

## Project

Personal portfolio of Jose Manuel Carrasco (full-stack developer, Copenhagen).
Goals: win freelance clients and showcase React + TypeScript skills to recruiters.
All site content, code, comments and commits are in English.

## Stack

- Vite + React + TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config.js`; design tokens go in `@theme` inside `src/index.css`
- oxlint (lint) + Prettier with `prettier-plugin-tailwindcss` (format, class sorting)
- Deployed on Cloudflare Pages

## Conventions

- Feature-first structure under `src/features/<feature>/`; shared UI in `src/components/`
- Content data lives in typed `*.data.ts` files, separate from components
- Conventional Commits, small and atomic
- Mobile-first, accessible (semantic HTML, visible focus, AA contrast)
- Dark theme only: use semantic tokens from `src/index.css` (`canvas`, `surface`, `line`, `ink`, `accent`, `brand`, `paper`), never raw palette colors or `dark:` variants
- `brand` (red) fails AA contrast for small text on `canvas`: use it only for large display text and decoration; links and buttons use `accent`
- Display font (`font-display`) for headings only; body text uses the system stack

## Security baseline

- `public/_headers` defines CSP and other headers. **Any new external resource
  (fonts, analytics, images from a CDN) requires updating the CSP**, or it will be blocked in production
- Avoid inline scripts and `dangerouslySetInnerHTML` (both break or bypass the CSP)
- No secrets in the repo; use `.env` + `.env.example` if ever needed

## Gotchas

- Developed on Windows: `.gitattributes` enforces LF line endings
- `_headers` only applies on Cloudflare, not in `npm run dev`
- The site URL is hardcoded in `index.html`, `public/robots.txt` and `public/sitemap.xml` (static files can't import `site.ts`): update all three when the domain changes
