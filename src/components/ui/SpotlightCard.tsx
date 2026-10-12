import type { PointerEvent, ReactNode } from 'react';

interface SpotlightCardProps {
  as?: 'article' | 'div';
  className?: string;
  children: ReactNode;
}

function trackPointer(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
  card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
}

export function SpotlightCard({
  as: Element = 'article',
  className = '',
  children,
}: SpotlightCardProps) {
  return (
    <Element onPointerMove={trackPointer} className={`spotlight ${className}`}>
      {children}
    </Element>
  );
}
