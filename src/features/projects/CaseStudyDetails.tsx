import type { CaseStudy } from './project.types';

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
}

/*
 * Native <details>: keyboard and screen reader support with no JavaScript.
 * Closed by default so the card stays scannable; recruiters open it if curious.
 */
export function CaseStudyDetails({ caseStudy }: CaseStudyDetailsProps) {
  const { outcome, challenge, decisions, lesson } = caseStudy;

  return (
    <details className="group mt-6 border-t border-paper-muted/30 pt-4 text-sm">
      <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-brand focus-visible:outline-paper-ink [&::-webkit-details-marker]:hidden">
        How I built it
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3 group-open:rotate-180 motion-safe:transition-transform"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </summary>

      <div className="mt-4 space-y-4 text-paper-muted">
        {/* Outcome first: reviewers skim for results before process */}
        <section>
          <h4 className="font-semibold text-paper-ink">Outcome</h4>
          <p className="mt-1">{outcome}</p>
        </section>

        <section>
          <h4 className="font-semibold text-paper-ink">The challenge</h4>
          <p className="mt-1">{challenge}</p>
        </section>

        <section>
          <h4 className="font-semibold text-paper-ink">Key decisions</h4>
          <ul className="mt-1 space-y-2">
            {decisions.map(({ title, detail }) => (
              <li key={title}>
                <strong className="font-semibold text-paper-ink">
                  {title}
                </strong>{' '}
                {detail}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-paper-ink">
            What I&apos;d do differently
          </h4>
          <p className="mt-1">{lesson}</p>
        </section>
      </div>
    </details>
  );
}
