import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/graduate';
import './index.css';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
