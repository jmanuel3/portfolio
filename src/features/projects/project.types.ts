export type ProjectKind = 'client' | 'personal' | 'academic';

export interface Repository {
  label: 'Source' | 'Frontend' | 'Backend';
  url: string;
}

export interface Project {
  slug: string; // stable key for React lists and future anchors
  name: string;
  kind: ProjectKind;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
  liveUrl?: string;
  // An empty array means the source is private, so no separate boolean can drift out of sync
  repositories: readonly Repository[];
}
