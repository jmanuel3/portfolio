import type { Service } from './service.types';
import { SERVICE_ILLUSTRATIONS } from './service.illustrations';

interface ServiceCardProps {
  service: Service;
  number: number;
}

export function ServiceCard({ service, number }: ServiceCardProps) {
  const { slug, play, title, description } = service;

  return (
    <article className="group stitched flex h-full flex-col rounded-2xl bg-paper p-6 text-paper-ink motion-safe:transition-transform motion-safe:hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-wide text-paper-muted uppercase">
          {play}
        </p>
        <span aria-hidden="true" className="font-display text-2xl text-brand">
          {String(number).padStart(2, '0')}
        </span>
      </div>

      {/* Decorative: the title already says what the card is about */}
      <img
        src={SERVICE_ILLUSTRATIONS[slug]}
        alt=""
        loading="lazy"
        decoding="async"
        className="my-4 h-36 w-full object-contain motion-safe:transition-transform motion-safe:group-hover:-rotate-3"
      />

      <h3 className="font-display text-xl font-normal">{title}</h3>
      <p className="mt-2 text-sm text-paper-muted">{description}</p>
    </article>
  );
}
