import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study/:id" element={<CaseStudyPage />} />
    </Routes>
  );
}