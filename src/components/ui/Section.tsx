import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    // Short top padding: a nav jump lands the heading just under the sticky
    // header; the bottom padding keeps the gap between sections
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto max-w-5xl px-4 pt-4 pb-20 sm:px-6 sm:pt-6 sm:pb-24"
    >
      <h2
        id={headingId}
        className="mb-8 font-display text-3xl font-normal tracking-tight text-ink-strong sm:mb-10 sm:text-4xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
