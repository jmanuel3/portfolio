export type ProjectSlug = 'ndl-capital-group' | 'liftr' | 'ledel';
export type ProjectKind = 'client' | 'personal';

interface Repository {
  label: 'Source' | 'Frontend' | 'Backend';
  url: string;
}

// Full-page capture of the site; width and height must match the image file
export interface Screenshot {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  slug: ProjectSlug; // stable key for React lists, anchors and screenshots
  name: string;
  kind: ProjectKind;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
  liveUrl?: string;
  // An empty array means the source is private, so no separate boolean can drift out of sync
  repositories: readonly Repository[];
}
