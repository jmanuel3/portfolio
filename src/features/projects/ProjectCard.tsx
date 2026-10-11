import { ExternalLink } from '../../components/ui/ExternalLink';
import { Tag } from '../../components/ui/Tag';
import type { Project, ProjectKind } from './project.types';

const KIND_LABELS: Record<ProjectKind, string> = {
  client: 'Client project',
  personal: 'Personal project',
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, kind, summary, highlights, stack, liveUrl, repositories } =
    project;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
      <p className="text-xs font-semibold tracking-wide text-accent uppercase">
        {KIND_LABELS[kind]}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink-strong">
        {name}
      </h3>
      <p className="mt-3">{summary}</p>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
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
          <ExternalLink href={liveUrl}>
            Live site<span className="sr-only"> of {name}</span>
          </ExternalLink>
        )}
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <ExternalLink key={repo.url} href={repo.url}>
              {repo.label === 'Source' ? 'Source code' : `${repo.label} code`}
              <span className="sr-only"> of {name}</span>
            </ExternalLink>
          ))
        ) : (
          <span className="text-ink-muted">Private source code</span>
        )}
      </div>
    </article>
  );
}
