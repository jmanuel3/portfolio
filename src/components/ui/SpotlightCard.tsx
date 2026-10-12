import type { PointerEvent, ReactNode } from 'react';

interface SpotlightCardProps {
  className?: string;
  children: ReactNode;
}

// Writes the pointer position as CSS variables: no React state, no re-renders
function trackPointer(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
  card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
}

export function SpotlightCard({
  className = '',
  children,
}: SpotlightCardProps) {
  return (
    <article onPointerMove={trackPointer} className={`spotlight ${className}`}>
      {children}
    </article>
  );
}
