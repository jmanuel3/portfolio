import { site } from '../../content/site';
import { ExternalLink } from '../ui/ExternalLink';

// Computed once at load, outside render, so the component stays pure
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-ink-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {CURRENT_YEAR} {site.name}
        </p>
        <p>
          Built with React, TypeScript and Tailwind CSS ·{' '}
          <ExternalLink href={site.links.repo}>View source</ExternalLink>
        </p>
      </div>
    </footer>
  );
}
