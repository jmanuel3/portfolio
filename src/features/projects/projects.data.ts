import type { Project } from './project.types';

export const projects: readonly Project[] = [
  {
    slug: 'ndl-capital-group',
    name: 'NDL Capital Group',
    kind: 'client',
    summary:
      'Bilingual (ES/EN) platform for an international real estate investment advisory firm.',
    highlights: [
      'Booking system integrated with Google Calendar API via OAuth2',
      'Fixed a production email failure by migrating from SMTP to Resend',
      'Node.js/Express 5 backend with Prisma, Zod validation and PostgreSQL',
    ],
    stack: [
      'Astro',
      'TypeScript',
      'Node.js',
      'Express 5',
      'Prisma',
      'Zod',
      'PostgreSQL',
      'Cloudflare Pages',
      'Render',
    ],
    liveUrl: 'https://ndlcapitalgroup.com',
    repositories: [],
  },
  {
    slug: 'liftr',
    name: 'LIFTR',
    kind: 'personal',
    summary:
      'Offline-first PWA for strength training, built local-first with zero frameworks.',
    highlights: [
      'Lighthouse 100 in Accessibility, Best Practices and SEO',
      'Playwright E2E tests across 4 viewports running in CI',
      'Fully functional offline',
    ],
    stack: ['Vanilla JS', 'PWA', 'Playwright', 'GitHub Actions'],
    liveUrl: 'https://liftr-7u9.pages.dev',
    repositories: [
      { label: 'Source', url: 'https://github.com/jmanuel3/liftr' },
    ],
  },
  {
    slug: 'ledel',
    name: 'Ledel',
    kind: 'client',
    summary: 'Production website for a dermo-aesthetics clinic.',
    highlights: ['Astro frontend and Node.js + MongoDB backend'],
    stack: ['Astro', 'TypeScript', 'Node.js', 'MongoDB'],
    repositories: [],
  },
];
