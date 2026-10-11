import { Aurora } from './components/ui/Aurora';
import { ProjectsSection } from './features/projects/ProjectsSection';

export function App() {
  return (
    <>
      <Aurora />
      <main>
        {/* Temporary page heading until the Hero section lands */}
        <h1 className="sr-only">Jose Manuel Carrasco — Full-Stack Developer</h1>
        <ProjectsSection />
      </main>
    </>
  );
}
