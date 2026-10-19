// Yellow is unreadable on cream: links on paper cards use the brand red (AA on paper)
export const LINK_TONES = {
  dark: 'text-accent',
  paper: 'text-brand focus-visible:outline-paper-ink',
} as const;

export type LinkTone = keyof typeof LINK_TONES;
