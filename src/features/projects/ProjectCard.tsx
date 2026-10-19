import { ExternalLink } from '../../components/ui/ExternalLink';
import { Tag } from '../../components/ui/Tag';
import { PROJECT_SCREENSHOTS } from './project.screenshots';
import { SitePreview } from './SitePreview';
import type { Project, ProjectKind } from './project.types';

const KIND_LABELS: Record<ProjectKind, string> = {
  client: 'Client project',
  personal: 'Personal project',
};

interface ProjectCardProps {
  project: Project;
  // Position in the list, shown as a jersey number (#01, #02…)
  number: number;
  // Spans the full row: preview and details side by side on wide screens
  featured: boolean;
}

export function ProjectCard({ project, number, featured }: ProjectCardProps) {
  const {
    slug,
    name,
    kind,
    summary,
    highlights,
    stack,
    liveUrl,
    repositories,
  } = project;

  const layout = featured
    ? 'md:grid-cols-2 md:items-start md:gap-8'
    : 'grid-rows-[auto_1fr]';

  return (
    <article
      className={`project-card stitched grid h-full gap-6 rounded-2xl bg-paper p-6 text-paper-ink motion-safe:transition-transform motion-safe:hover:-translate-y-1 sm:p-7 ${layout}`}
    >
      <SitePreview screenshot={PROJECT_SCREENSHOTS[slug]} liveUrl={liveUrl} />

      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold tracking-wide text-paper-muted uppercase">
            {KIND_LABELS[kind]}
          </p>
          {/* Decorative: list order already conveys the sequence */}
          <span
            aria-hidden="true"
            className="font-display text-4xl leading-none text-brand"
          >
            #{String(number).padStart(2, '0')}
          </span>
        </div>

        <h3 className="mt-2 font-display text-2xl font-normal">{name}</h3>
        <p className="mt-3">{summary}</p>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-paper-muted">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        {/* mt-auto pins the links to the bottom so cards in a row align */}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
          {liveUrl && (
            <ExternalLink href={liveUrl} tone="paper">
              Live site<span className="sr-only"> of {name}</span>
            </ExternalLink>
          )}
          {repositories.length > 0 ? (
            repositories.map((repo) => (
              <ExternalLink key={repo.url} href={repo.url} tone="paper">
                {repo.label === 'Source' ? 'Source code' : `${repo.label} code`}
                <span className="sr-only"> of {name}</span>
              </ExternalLink>
            ))
          ) : (
            <span className="text-paper-muted">Private source code</span>
          )}
        </div>
      </div>
    </article>
  );
}
