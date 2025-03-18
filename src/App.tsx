import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { Navigation } from '@/components/Navigation';
import { useLayoutEffect } from 'react';

// ScrollRestoration component
function ScrollRestoration() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  
  useLayoutEffect(() => {
    // Force scroll to top on all route changes
    console.log('ScrollRestoration: Route changed to', pathname);
    
    // Reset scroll position
    window.scrollTo(0, 0);
    
    // Try with location hash
    if (document.getElementById('top')) {
      document.getElementById('top')?.scrollIntoView();
    }
    
    // Use a sequence of attempts to ensure it works
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    });
  }, [pathname, navigationType]);
  
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Navigation variant="light" />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
      </main>
    </div>
  );
}