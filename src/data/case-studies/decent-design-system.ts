import { Project } from '../types';

export const decentDesignSystem: Project = {
  id: 'decent-design-system',
  title: 'Decent Design System',
  category: 'Design Systems',
  year: '2023',
  link: '/case-study/decent-design-system',
  description: 'Redesigning a failing legacy app to drive growth and capture market share for a struggling startup.',
  imageUrl: '/images/decent-design-system-hero-collage.png',
  heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
  summary: 'Building a comprehensive design system that bridges the gap between design and development.',
  challenge: 'The team struggled with inconsistent UI implementations and slow development cycles due to lack of standardization.',
  solution: 'We developed a unified design system with automated token management, component library, and documentation.',
  sections: [
    {
      title: 'Token Management',
      content: 'Implemented automated design token synchronization between Figma and code, ensuring perfect consistency.',
      image: 'https://images.unsplash.com/photo-1551288049-a22ae9c54e50?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: 'Component Library',
      content: 'Built a comprehensive React component library with TypeScript, storybook documentation, and automated testing.',
      image: 'https://images.unsplash.com/photo-1551288049-48572a22b179?auto=format&fit=crop&q=80&w=2000'
    }
  ],
  technologies: ['React', 'TypeScript', 'Storybook', 'Figma API'],
  testimonial: {
    quote: 'The design system has transformed how our team works, making us significantly more efficient and consistent.',
    author: 'Emily Chen',
    role: 'Design Lead, Decent'
  }
}; 