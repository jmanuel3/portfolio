import { Footer } from './components/layout/Footer';
import { Backdrop } from './components/ui/Backdrop';
import { ContactSection } from './features/contact/ContactSection';
import { Hero } from './features/hero/Hero';
import { ProjectsSection } from './features/projects/ProjectsSection';

export function App() {
  return (
    <>
      <Backdrop />
      <main>
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
