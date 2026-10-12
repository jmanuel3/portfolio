import { site } from '../../content/site';
import { ExternalLink } from '../ui/ExternalLink';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-ink-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {year} {site.name}
        </p>
        <p>
          Built with React, TypeScript and Tailwind CSS ·{' '}
          <ExternalLink href={site.links.repo}>View source</ExternalLink>
        </p>
      </div>
    </footer>
  );
}
