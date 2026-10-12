import { buttonPrimary, buttonSecondary } from '../../components/ui/button';
import { ExternalLink } from '../../components/ui/ExternalLink';
import { site } from '../../content/site';
import { Avatar } from './Avatar';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-center gap-10 px-4 pt-24 pb-8 sm:px-6 md:flex-row md:justify-between md:pt-32"
    >
      <div className="text-center md:text-left">
        <p className="text-sm font-medium text-accent motion-safe:animate-fade-up">
          {site.role} · {site.location}
        </p>
        <h1
          id="hero-heading"
          className="mt-3 font-display text-5xl font-bold tracking-tight text-ink-strong motion-safe:animate-fade-up motion-safe:[animation-delay:80ms] sm:text-6xl"
        >
          {site.name}
        </h1>
        <p className="mt-5 text-lg text-ink motion-safe:animate-fade-up motion-safe:[animation-delay:160ms]">
          {site.tagline}
        </p>
        <p className="mt-2 text-sm text-ink-muted motion-safe:animate-fade-up motion-safe:[animation-delay:160ms]">
          {site.stack.join(' · ')}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:240ms] md:justify-start">
          <a href="#projects" className={buttonPrimary}>
            View projects
          </a>
          <a href={`mailto:${site.email}`} className={buttonSecondary}>
            Get in touch
          </a>
        </div>

        <ul
          aria-label="Social links"
          className="mt-6 flex justify-center gap-5 text-sm motion-safe:animate-fade-up motion-safe:[animation-delay:240ms] md:justify-start"
        >
          <li>
            <ExternalLink href={site.links.github}>GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.links.linkedin}>LinkedIn</ExternalLink>
          </li>
        </ul>
      </div>

      <Avatar />
    </section>
  );
}
