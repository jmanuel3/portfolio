import { Section } from '../../components/ui/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from './projects.data';

// One full-width card per project: case studies open across the whole width
// and never push a neighbouring card around
export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-6">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <ProjectCard project={project} number={index + 1} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
