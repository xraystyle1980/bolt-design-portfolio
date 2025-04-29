interface Project {
  id: string;
  title: string;
  subtitle: string;
  link: string;
}

export const playgroundProjects: Project[] = [
  {
    id: 'design-system-demo',
    title: 'Design System Demo',
    subtitle: 'Live demonstration of design tokens and component libraries',
    link: '/playground/design-system'
  },
  {
    id: 'threejs-experiments',
    title: 'Three.js Experiments',
    subtitle: 'Interactive 3D experiments and visual experiences',
    link: '/playground/threejs'
  }
];

export function getAdjacentProjects(currentId: string): { prev?: Project; next?: Project } {
  const currentIndex = playgroundProjects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? playgroundProjects[currentIndex - 1] : undefined,
    next: currentIndex < playgroundProjects.length - 1 ? playgroundProjects[currentIndex + 1] : undefined
  };
} 