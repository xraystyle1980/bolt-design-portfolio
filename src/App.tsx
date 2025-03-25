import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { Navigation } from '@/components/Navigation';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThreeJsPlayground } from './pages/ThreeJsPlayground';
import { DesignSystemPlayground } from './pages/DesignSystemPlayground';

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <SmoothScroll>
        <div id="top"></div>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/case-study/:id" element={<CaseStudyPage />} />
              <Route path="/playground/threejs" element={<ThreeJsPlayground />} />
              <Route path="/playground/design-system" element={<DesignSystemPlayground />} />
            </Routes>
          </main>
        </div>
      </SmoothScroll>
      <ThemeToggle />
    </ThemeProvider>
  );
}