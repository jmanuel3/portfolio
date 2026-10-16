import { Section } from '../../components/ui/Section';
import { ServiceCard } from './ServiceCard';
import { services } from './services.data';

export function ServicesSection() {
  return (
    <Section id="services" title="Services">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <li key={service.slug}>
            <ServiceCard service={service} number={index + 1} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
