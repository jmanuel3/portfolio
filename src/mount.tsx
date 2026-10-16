import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/graduate';
import './index.css';

export function mount(app: ReactNode) {
  const root = document.getElementById('root');
  if (!root) throw new Error('Missing #root element');
  createRoot(root).render(<StrictMode>{app}</StrictMode>);
}
