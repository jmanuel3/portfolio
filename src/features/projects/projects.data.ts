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
      'Typed, validated REST API with Zod and Prisma',
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
      'Lighthouse 100 in Performance, Accessibility and Best Practices',
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
    summary:
      'Production website for a dermo-aesthetics clinic, with ongoing SEO work.',
    highlights: [
      'Live client site in continuous maintenance',
      'Ongoing technical SEO improvements',
    ],
    stack: ['Astro', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: 'https://ledeldermoestetica.com',
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/jmanuel3/Ledel---Frontend',
      },
      { label: 'Backend', url: 'https://github.com/jmanuel3/Ledel---Backend' },
    ],
  },
  {
    slug: 'furbitall',
    name: 'FurbitAll',
    kind: 'academic',
    summary:
      'MERN e-commerce with sports court bookings, built at RollingCode School.',
    highlights: [
      'REST API',
      'Admin panel with full CRUD',
      'Role-based authentication',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://furbitall.netlify.app',
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/jmanuel3/FurbitAll-FrontEnd',
      },
      {
        label: 'Backend',
        url: 'https://github.com/jmanuel3/FurbitAll-Backend',
      },
    ],
  },
];
