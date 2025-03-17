import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { Navigation } from '@/components/Navigation';
import { useEffect } from 'react';

export default function App() {
  console.log('App component rendering');
  const location = useLocation();
  
  // Reset scroll position on route changes
  useEffect(() => {
    console.log('Route changed, resetting scroll');
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Debug logging for app mounting
  useEffect(() => {
    console.log('App mounted');
    return () => console.log('App unmounted');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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