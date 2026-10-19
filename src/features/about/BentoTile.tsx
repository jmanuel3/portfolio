import type { ReactNode } from 'react';

interface BentoTileProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function BentoTile({ title, className = '', children }: BentoTileProps) {
  return (
    <article
      className={`stitched rounded-2xl bg-paper p-6 text-paper-ink ${className}`}
    >
      <h3 className="font-display text-xl font-normal">{title}</h3>
      <div className="mt-3 text-sm text-paper-muted">{children}</div>
    </article>
  );
}
