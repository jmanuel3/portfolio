export type ServiceSlug = 'discovery' | 'performance' | 'security' | 'launch';

export interface Service {
  slug: ServiceSlug;
  play: string;
  title: string;
  description: string;
}
