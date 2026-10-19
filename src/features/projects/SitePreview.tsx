import type { CSSProperties } from 'react';
import type { Screenshot } from './project.types';

interface SitePreviewProps {
  screenshot: Screenshot;
  liveUrl?: string;
}

/*
 * The site's screenshot in a browser frame. On card hover or keyboard focus,
 * CSS scrolls it to the bottom of the page (see .site-preview in index.css).
 * Decorative: the card's heading and links already describe the project.
 */
export function SitePreview({ screenshot, liveUrl }: SitePreviewProps) {
  const { src, width, height } = screenshot;
  // Set through the DOM by React, not a style attribute, so the strict CSP allows it
  const pageRatio = { '--page-ratio': height / width } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-lg border border-paper-muted/30 shadow-lg shadow-paper-ink/15"
    >
      <div className="flex items-center gap-1.5 bg-paper-muted/15 px-3 py-2">
        <span className="size-2 rounded-full bg-paper-muted/40" />
        <span className="size-2 rounded-full bg-paper-muted/40" />
        <span className="size-2 rounded-full bg-paper-muted/40" />
        <span className="ml-2 h-5 min-w-0 flex-1 truncate rounded bg-paper px-2 text-xs/5 text-paper-muted">
          {liveUrl && new URL(liveUrl).hostname}
        </span>
      </div>
      <div className="site-preview">
        <img
          src={src}
          width={width}
          height={height}
          alt=""
          loading="lazy"
          decoding="async"
          style={pageRatio}
        />
      </div>
    </div>
  );
}
