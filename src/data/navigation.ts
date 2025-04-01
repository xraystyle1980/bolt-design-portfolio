import { playgroundProjects } from './playground-projects';
import { projects as caseStudies } from './case-studies';
import { Project } from './types';

interface NavigationItem {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  projectType: 'playground' | 'case-study';
}

// Combine all projects into a single navigation array
const allProjects: NavigationItem[] = [
  ...playgroundProjects.map(project => ({
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    link: project.link,
    projectType: 'playground' as const
  })),
  ...caseStudies.map((study: Project) => ({
    id: study.id,
    title: study.title,
    subtitle: study.heroSubTitle || study.description,
    link: `/case-study/${study.id}`,
    projectType: 'case-study' as const
  }))
];

export function getAdjacentProjects(currentId: string): { prev: NavigationItem; next: NavigationItem } {
  const currentIndex = allProjects.findIndex(p => p.id === currentId);
  
  // If project not found, return first and last as defaults
  if (currentIndex === -1) {
    return {
      prev: allProjects[allProjects.length - 1],
      next: allProjects[0]
    };
  }

  // Calculate previous index with circular wrap
  const prevIndex = currentIndex === 0 ? allProjects.length - 1 : currentIndex - 1;
  
  // Calculate next index with circular wrap
  const nextIndex = currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1;

  return {
    prev: allProjects[prevIndex],
    next: allProjects[nextIndex]
  };
} 