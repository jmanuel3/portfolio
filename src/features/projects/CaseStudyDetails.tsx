import type { CaseStudy } from './project.types';

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
  className?: string;
}

/*
 * Native <details>: keyboard and screen reader support with no JavaScript.
 * Closed by default so the card stays scannable; recruiters open it if curious.
 */
export function CaseStudyDetails({
  caseStudy,
  className = '',
}: CaseStudyDetailsProps) {
  const { outcome, challenge, decisions, lesson } = caseStudy;

  return (
    <details
      className={`group @container border-t border-paper-muted/30 pt-5 text-sm ${className}`}
    >
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-paper-muted/50 px-4 py-2 font-semibold transition-colors hover:border-brand focus-visible:outline-paper-ink [&::-webkit-details-marker]:hidden">
        How I built it
        {/* A plus whose vertical bar fades out: + when closed, − when open */}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="size-3 text-brand"
        >
          <path d="M3 8h10" />
          <path
            d="M8 3v10"
            className="group-open:opacity-0 motion-safe:transition-opacity"
          />
        </svg>
      </summary>

      <div className="mt-5 grid gap-6 text-paper-muted">
        {/* Outcome first: reviewers skim for results before process */}
        {/* Columns follow the card width, not the viewport: half-width cards stay stacked */}
        <div className="grid gap-6 @xl:grid-cols-2">
          <section>
            <h4 className="font-semibold text-paper-ink">Outcome</h4>
            <p className="mt-1">{outcome}</p>
          </section>
          <section>
            <h4 className="font-semibold text-paper-ink">The challenge</h4>
            <p className="mt-1">{challenge}</p>
          </section>
        </div>

        <section>
          <h4 className="font-semibold text-paper-ink">Key decisions</h4>
          <ul className="mt-3 grid gap-3 @3xl:grid-cols-3">
            {decisions.map(({ title, detail }) => (
              <li
                key={title}
                className="rounded-xl border border-paper-muted/30 p-4"
              >
                <p className="font-semibold text-paper-ink">{title}</p>
                <p className="mt-1">{detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <p>
          <span className="font-semibold text-paper-ink">
            What I&apos;d do differently:
          </span>{' '}
          {lesson}
        </p>
      </div>
    </details>
  );
}
