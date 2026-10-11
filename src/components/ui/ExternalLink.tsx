import type { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      // noopener: the new tab can't control this page; noreferrer: don't leak the URL
      rel="noopener noreferrer"
      className="font-medium text-accent underline-offset-4 hover:underline"
    >
      {children}
      {/* SVG instead of the ↗ character, which some systems render as an emoji */}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-1 inline size-3"
      >
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
