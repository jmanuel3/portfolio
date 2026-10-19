import mascotCelebrate from '../../assets/mascots/mascot-celebrate.webp';
import { buttonPrimaryOnPaper } from '../../components/ui/button';
import { DownloadLink } from '../../components/ui/DownloadLink';
import { ExternalLink } from '../../components/ui/ExternalLink';
import { Section } from '../../components/ui/Section';
import { site } from '../../content/site';
import { MascotPatch } from '../../components/ui/MascotPatch';

export function ContactSection() {
  return (
    <Section id="contact" title="Got a project in mind?">
      <div className="stitched grid items-center gap-8 rounded-2xl bg-paper p-8 text-paper-ink sm:p-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-paper-muted/40 px-3 py-1 text-xs font-medium text-paper-muted">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand motion-safe:animate-pulse"
            />
            Available for new projects
          </p>

          <p className="mt-6 max-w-2xl text-lg">
            From booking systems to full production platforms, I build web apps
            that real clients rely on. Freelance or full-time, in Copenhagen or
            remote, in English or Spanish.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={`mailto:${site.email}`} className={buttonPrimaryOnPaper}>
              Email me
            </a>
            <ExternalLink href={site.links.linkedin} tone="paper">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={site.links.github} tone="paper">
              GitHub
            </ExternalLink>
            <DownloadLink href={site.cv} tone="paper">
              Download CV
            </DownloadLink>
          </div>

          <p className="mt-4 text-sm text-paper-muted">I reply within a day.</p>
        </div>

        <MascotPatch
          src={mascotCelebrate}
          className="order-first mx-auto md:order-0 md:mx-0"
        />
      </div>
    </Section>
  );
}
