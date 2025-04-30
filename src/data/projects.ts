export type { Project } from './types';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 'threejs-experiments',
    title: 'Three.js Experiments',
    subtitle: 'Interactive 3D experiments and visual experiences',
    link: '/demo/threejs'
  },
  {
    id: 'design-system-demo',
    title: 'Design System Demo',
    subtitle: 'Live demonstration of design tokens and component libraries',
    link: '/demo/design-system'
  }
];

export function getAdjacentProjects(currentId: string): { prev?: Project; next?: Project } {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : undefined,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined
  };
}