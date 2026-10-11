import { Section } from '../../components/ui/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from './projects.data';

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="md:first:col-span-2">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
