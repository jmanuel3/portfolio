import type { Project } from './project.types';

export const projects: readonly Project[] = [
  {
    slug: 'ndl-capital-group',
    name: 'NDL Capital Group',
    kind: 'client',
    summary:
      'Bilingual (ES/EN) platform for an international real estate investment advisory firm.',
    highlights: [
      'Built solo, from competitor research to launch',
      'Bilingual site with online booking on the Google Calendar API',
      'Node.js/Express 5 API with Prisma, Zod and PostgreSQL',
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
    caseStudy: {
      outcome:
        'Live in Spanish and English, replacing a placeholder page. The firm already receives enquiries through it.',
      challenge:
        'The firm advises international investors on real estate in emerging markets. Its only web presence was a quick placeholder page that neither reflected the firm nor let investors book a call.',
      decisions: [
        {
          title: 'The calendar is the single source of truth.',
          detail:
            "Available slots come straight from the firm's Google Calendar, so nobody keeps a second schedule and double bookings can't happen.",
        },
        {
          title: 'A booking never fails because of an email.',
          detail:
            "Each booking is saved and added to the calendar first; confirmations are sent after, so a mail outage can't lose a client.",
        },
        {
          title: 'Fixing a production email failure.',
          detail:
            'After launch, confirmations stopped arriving. I traced it to the hosting network blocking outbound email over IPv6, moved to an HTTP-based email service and set up SPF and DKIM so messages land in the inbox.',
        },
      ],
      lesson:
        "Research each tool's setup and the hosting constraints before building: most of the time I lost went into integrations that didn't work the first time.",
    },
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
