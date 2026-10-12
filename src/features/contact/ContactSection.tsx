import { buttonPrimary } from '../../components/ui/button';
import { ExternalLink } from '../../components/ui/ExternalLink';
import { Section } from '../../components/ui/Section';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { site } from '../../content/site';

export function ContactSection() {
  return (
    <Section id="contact" title="Got a project in mind?">
      <SpotlightCard
        as="div"
        className="rounded-2xl border border-line bg-surface p-8 sm:p-12"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-muted">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-accent motion-safe:animate-pulse"
          />
          Available for new projects
        </p>

        <p className="mt-6 max-w-2xl text-lg">
          From booking systems to full production platforms, I build web apps
          that real clients rely on. Freelance or full-time, in Copenhagen or
          remote, in English or Spanish.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={`mailto:${site.email}`} className={buttonPrimary}>
            Email me
          </a>
          <ExternalLink href={site.links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={site.links.github}>GitHub</ExternalLink>
        </div>

        <p className="mt-4 text-sm text-ink-muted">I reply within a day.</p>
      </SpotlightCard>
    </Section>
  );
}
