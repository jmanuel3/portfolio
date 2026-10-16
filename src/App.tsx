import { Footer } from './components/layout/Footer';
import { Backdrop } from './components/ui/Backdrop';
import { ContactSection } from './features/contact/ContactSection';
import { Hero } from './features/hero/Hero';
import { ProjectsSection } from './features/projects/ProjectsSection';
import { ServicesSection } from './features/services/ServicesSection';
import { Header } from './components/layout/Header';

export function App() {
  return (
    <>
      <Backdrop />
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
