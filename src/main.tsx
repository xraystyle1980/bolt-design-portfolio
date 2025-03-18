import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Add scroll restoration behavior
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Handle any automatic scrolling
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById('root')!).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </BrowserRouter>
);