// Ensure window.fetch has a setter in environments where it's read-only
if (typeof window !== 'undefined') {
  try {
    let currentFetch = window.fetch;
    const desc = {
      get() {
        return currentFetch;
      },
      set(fn: typeof window.fetch) {
        currentFetch = fn;
      },
      configurable: true,
      enumerable: true,
    };
    try {
      Object.defineProperty(window, 'fetch', desc);
    } catch {
      // Ignore
    }
    try {
      if (typeof Window !== 'undefined' && Window.prototype) {
        Object.defineProperty(Window.prototype, 'fetch', desc);
      }
    } catch {
      // Ignore
    }
  } catch {
    // Ignore
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
