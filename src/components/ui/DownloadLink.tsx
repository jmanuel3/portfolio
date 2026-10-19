import type { ReactNode } from 'react';
import { LINK_TONES, type LinkTone } from './linkTone';

interface DownloadLinkProps {
  href: string;
  children: ReactNode;
  tone?: LinkTone;
}

// Same look as ExternalLink, but saves a same-origin file instead of opening a tab
export function DownloadLink({
  href,
  children,
  tone = 'dark',
}: DownloadLinkProps) {
  return (
    <a
      href={href}
      download
      className={`font-medium underline-offset-4 hover:underline ${LINK_TONES[tone]}`}
    >
      {children}
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
        <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 14h10" />
      </svg>
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}
