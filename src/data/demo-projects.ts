interface Project {
  id: string;
  title: string;
  subtitle: string;
  link: string;
}

export const demoProjects: Project[] = [
  {
    id: 'design-system-demo',
    title: 'Design System Demo',
    subtitle: 'Live demonstration of design tokens and component libraries.',
    link: '/demo/design-system'
  },
  {
    id: 'threejs-experiments',
    title: 'Three.js Experiments',
    subtitle: 'I’m experimenting with interactive 3D and visual experiences—more to come.',
    link: '/demo/threejs'
  }
];

export function getAdjacentProjects(currentId: string): { prev?: Project; next?: Project } {
  const currentIndex = demoProjects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? demoProjects[currentIndex - 1] : undefined,
    next: currentIndex < demoProjects.length - 1 ? demoProjects[currentIndex + 1] : undefined
  };
} 