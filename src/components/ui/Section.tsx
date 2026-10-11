import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <h2
        id={headingId}
        className="mb-10 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
