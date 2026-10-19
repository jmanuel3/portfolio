import portrait from '../../assets/about/portrait.webp';
import { DownloadLink } from '../../components/ui/DownloadLink';
import { ExternalLink } from '../../components/ui/ExternalLink';
import { Section } from '../../components/ui/Section';
import { site } from '../../content/site';
import { BentoTile } from './BentoTile';

const QUICK_FACTS = [
  { value: '2', label: 'client projects shipped' },
  { value: '2025', label: 'freelancing since' },
  { value: 'EU', label: 'citizen, no sponsorship' },
  { value: 'C1', label: 'English · Spanish native' },
] as const;

const WORK_HABITS = [
  'Small pull requests and Conventional Commits',
  'End-to-end and accessibility tests in CI',
  'WCAG AA contrast and keyboard support by default',
  'Strict security headers and CSP',
] as const;

/*
 * Recruiters skim: the intro answers "what, with which stack, looking for
 * what" first. The portrait spans two rows beside it; the story that sets
 * Jose apart closes the grid across the full width.
 */
export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-4 md:grid-cols-3">
        <img
          src={portrait}
          alt="Portrait of Jose Manuel Carrasco by the sea at sunset"
          width={640}
          height={800}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full rounded-2xl border border-line object-cover md:row-span-2 md:aspect-auto md:h-full"
        />

        <BentoTile title="Hi, I'm Jose" className="md:col-span-2">
          <p className="text-base text-paper-ink">
            Full-stack developer in Copenhagen, building production web apps for
            real clients with React, TypeScript and Node.js. Before code I
            worked in law and mortgage operations, which is why I'm careful with
            requirements and documentation.
          </p>
          <p className="mt-3">
            Looking for a full-stack or frontend role: on-site, hybrid or
            remote.
          </p>
          <p className="mt-4">
            <DownloadLink href={site.cv} tone="paper">
              Download CV
            </DownloadLink>
          </p>
        </BentoTile>

        <BentoTile title="Quick facts">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
            {QUICK_FACTS.map(({ value, label }) => (
              // Term first in the markup for screen readers, value first on screen
              <div key={label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-xs">{label}</dt>
                <dd className="font-display text-2xl leading-none text-brand">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </BentoTile>

        <BentoTile title="How I work">
          <ul className="list-disc space-y-1 pl-5">
            {WORK_HABITS.map((habit) => (
              <li key={habit}>{habit}</li>
            ))}
          </ul>
          <p className="mt-3">
            <ExternalLink href={site.links.repo} tone="paper">
              See it in this site's source
            </ExternalLink>
          </p>
        </BentoTile>

        <BentoTile title="I find a way" className="md:col-span-3">
          <p>
            I trained as a full-stack developer while cooking full-time in
            kitchens across Australia, from Port Douglas to Margaret River, and
            took on remote QA work for a Swiss startup at the same time. Spain,
            Australia, Denmark: three countries in five years, finding work in
            each.
          </p>
          <p className="mt-3">
            Before code, ten years of American football from high school to the
            end of university: league and cup champions with Osos Rivas.
          </p>
        </BentoTile>
      </div>
    </Section>
  );
}
