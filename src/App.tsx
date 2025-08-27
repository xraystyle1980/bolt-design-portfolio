import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { Navigation } from '@/components/Navigation';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ThreeJsPlayground } from './pages/ThreeJsPlayground';
import { DesignSystemDemo } from './pages/DesignSystemDemo';
import NotFound from './pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';
import { useCanonicalRedirect } from '@/hooks/useCanonicalRedirect';

export default function App() {
  useCanonicalRedirect();
  
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Navigation />
        <SmoothScroll>
          <div id="top"></div>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/case-study/:id" element={<CaseStudyPage />} />
                <Route path="/demo/threejs" element={<ThreeJsPlayground />} />
                <Route path="/demo/design-system" element={<DesignSystemDemo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SmoothScroll>
        <ScrollToTop />
      </ThemeProvider>
    </HelmetProvider>
  );
}