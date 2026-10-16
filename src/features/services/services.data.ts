import type { Service } from './service.types';

// Ordered like a play: catch the brief, run fast, block threats, launch
export const services: readonly Service[] = [
  {
    slug: 'discovery',
    play: 'The catch',
    title: 'I catch what you need',
    description:
      'We start with your business, not the tech. I listen, ask the right questions and pick the stack that fits: React, Astro, Node.js or whatever your project calls for.',
  },
  {
    slug: 'performance',
    play: 'The run',
    title: 'Built for speed',
    description:
      'Fast, mobile-first sites built to score high on Lighthouse. Faster pages mean better SEO and visitors who stay.',
  },
  {
    slug: 'security',
    play: 'The block',
    title: 'Secure by default',
    description:
      'Validated inputs, strict security headers and monitored dependencies, so your site and your users’ data stay protected.',
  },
  {
    slug: 'launch',
    play: 'The throw',
    title: 'Launch and beyond',
    description:
      'Deployment, custom domain, SEO setup and ongoing maintenance. I don’t disappear after launch day.',
  },
];
