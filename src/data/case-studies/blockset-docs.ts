import { Project } from '../types';

export const blocksetDocs: Project = {
  id: 'blockset-docs',
  title: 'Blockset Docs by BRD',
  category: 'Documentation',
  year: '2023',
  link: '/case-study/blockset-docs',
  description: 'Redesigning a failing legacy app to drive growth and capture market share for a struggling startup.',
  imageUrl: '/images/blockset-docs-hero.png',
  heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
  summary: 'Creating a developer-first documentation platform that makes blockchain integration simple and intuitive.',
  challenge: 'Developers struggled with complex blockchain integration documentation that was fragmented and difficult to navigate.',
  solution: 'We created a unified documentation platform with interactive examples, clear navigation, and comprehensive API references.',
  sections: [
    {
      title: 'Developer Experience',
      content: 'Through user research with developers, we identified key pain points in the documentation process and created a more intuitive structure.',
      image: 'https://images.unsplash.com/photo-1551288049-a22ae9c54e50?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: 'Interactive Examples',
      content: 'We implemented live code examples and API playgrounds that allow developers to test endpoints directly in the documentation.',
      image: 'https://images.unsplash.com/photo-1551288049-48572a22b179?auto=format&fit=crop&q=80&w=2000'
    }
  ],
  technologies: ['Next.js', 'MDX', 'TypeScript', 'Tailwind CSS'],
  testimonial: {
    quote: 'The new documentation platform has significantly reduced our support tickets and improved developer onboarding time.',
    author: 'Michael Wong',
    role: 'Developer Relations, BRD'
  }
}; 