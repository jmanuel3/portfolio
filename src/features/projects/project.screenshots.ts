import ledelImg from '../../assets/projects/ledel.webp';
import liftrImg from '../../assets/projects/liftr.webp';
import ndlImg from '../../assets/projects/ndl-capital-group.webp';
import type { ProjectSlug, Screenshot } from './project.types';

// Kept apart from projects.data.ts so the E2E tests can import the data in Node
export const PROJECT_SCREENSHOTS: Record<ProjectSlug, Screenshot> = {
  'ndl-capital-group': { src: ndlImg, width: 880, height: 4604 },
  liftr: { src: liftrImg, width: 880, height: 1005 },
  ledel: { src: ledelImg, width: 880, height: 3312 },
};
