import { Aurora } from './components/ui/Aurora';
import { Hero } from './features/hero/Hero';
import { ProjectsSection } from './features/projects/ProjectsSection';

export function App() {
  return (
    <>
      <Aurora />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
    </>
  );
}
