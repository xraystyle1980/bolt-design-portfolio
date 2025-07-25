export interface Demo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  singleImage: string;
  videoUrl: string;
}

export const demos: Demo[] = [
  {
    id: 'design-system-demo',
    title: 'Design System Demo',
    description: 'Live demonstration of design tokens and component libraries',
    imageUrl: '/images/playground-3dtoken.png',
    link: '/demo/design-system',
    singleImage: '/images/decent-design-system-hero-single.png',
    videoUrl: '/browser-console-side-by-side.mp4'
  },
  {
    id: 'threejs-experiments',
    title: 'Three.js Experiments',
    description: 'I\'m experimenting with interactive 3D and visual experiences—more to come.',
    imageUrl: '/images/playground-3dtoken.png',
    link: '/demo/threejs',
    singleImage: '/images/playground-3dtoken.png',
    videoUrl: '/token.mp4'
  }
];