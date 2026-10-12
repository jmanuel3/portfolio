import { Footer } from './components/layout/Footer';
import { Aurora } from './components/ui/Aurora';
import { ContactSection } from './features/contact/ContactSection';
import { Hero } from './features/hero/Hero';
import { ProjectsSection } from './features/projects/ProjectsSection';

export function App() {
  return (
    <>
      <Aurora />
      <main>
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
