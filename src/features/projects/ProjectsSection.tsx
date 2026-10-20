import { Section } from '../../components/ui/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from './projects.data';

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      {/* Cards in a row match heights, except while one of them shows its case study */}
      <ul className="grid gap-6 md:grid-cols-2 md:has-[li:not(:first-child)_details[open]]:items-start">
        {projects.map((project, index) => {
          // The first project leads the section across the full row
          const featured = index === 0;
          return (
            <li
              key={project.slug}
              className={featured ? 'md:col-span-2' : undefined}
            >
              <ProjectCard
                project={project}
                number={index + 1}
                featured={featured}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
