import type { PointerEvent, ReactNode } from 'react';

interface SpotlightCardProps {
  className: string;
  children: ReactNode;
}

function trackPointer(event: PointerEvent<HTMLDivElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
  card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
}

export function SpotlightCard({ className, children }: SpotlightCardProps) {
  return (
    <div onPointerMove={trackPointer} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
