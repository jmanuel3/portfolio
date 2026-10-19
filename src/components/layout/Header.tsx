import wordmark from '../../assets/brand/logo-wordmark.webp';
import { site } from '../../content/site';

const NAV_ITEMS = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-canvas/80 backdrop-blur">
      {/* Wraps the nav under the logo only on the narrowest phones (320 px) */}
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 py-2 sm:px-6">
        <a href="#top" aria-label={`${site.name}, back to top`}>
          {/* Fixed size reserves the space before the image loads: no layout shift */}
          <img
            src={wordmark}
            alt=""
            width={120}
            height={51}
            className="w-20 min-[375px]:w-24 sm:w-30"
          />
        </a>

        <nav aria-label="Main">
          <ul className="flex gap-3 text-[0.8125rem] font-medium sm:gap-6 sm:text-sm">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-ink-muted transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
