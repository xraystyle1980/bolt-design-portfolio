import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './app/globals.css';

// Add scroll restoration behavior
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Handle any automatic scrolling
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

// Removed StrictMode to fix video loading issues with react-player
// See: https://github.com/cookpete/react-player/issues/1520
createRoot(document.getElementById('root')!).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </BrowserRouter>
);