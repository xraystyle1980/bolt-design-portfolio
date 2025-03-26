import { Project, NarrativeSection, ProcessSection } from '../types';

export const decentDesignSystem: Project = {
  id: 'decent-design-system',
  title: 'Decent Design System',
  category: 'Design Systems',
  year: '2023',
  link: '/case-study/decent-design-system',
  description: 'A comprehensive design system that unified design language, streamlined workflows, and improved team alignment across the organization.',
  imageUrl: '/images/decent-design-system-hero-collage.png',
  heroImage: '/images/decent-design-system-hero-collage.png?h=600&fit=cover',
  summary: 'Led the development of a unified design system that streamlined workflows, improved team alignment, and delivered consistent user experiences across the organization.',
  role: 'Design Systems Lead',
  team: 'Product Design (3), Engineering (2), Product (1)',
  challenge: {
    title: 'A Need for Consistency',
    content: 'Scaling a product across a diverse ecosystem required consistency, efficiency, and collaboration. The organization needed a unified design language that could streamline workflows and improve team alignment.',
    subchallenges: [
      {
        title: 'Adoption and Process Change',
        content: 'Defining where and how the design system fit within the organization was a major challenge. What processes needed to change? What would become new? And most importantly, how do we make people want to use it?'
      }
    ]
  },
  solution: {
    title: 'Comprehensive Design System',
    content: 'Through collaborative design and development, we created a comprehensive design system that included a style guide, component library, and design tokens, ensuring visual consistency and scalability.',
    subsolutions: [
      {
        title: 'Documentation Focus',
        content: 'Comprehensive documentation ensured that even as the organization expanded, the design system remained accessible and intuitive.'
      }
    ]
  },
  sections: [
    {
      type: 'narrative',
      title: 'Unified Design Language',
      content: 'The design system established a comprehensive style guide covering colors, typography, and grid systems, ensuring visual consistency across all products.',
      subsections: [
        {
          title: 'Component Library',
          content: 'Designed modular UI elements that streamlined design and development processes.',
          keyPoints: [
            'Modular UI components',
            'Streamlined workflows',
            'Development efficiency'
          ]
        },
        {
          title: 'Design Tokens',
          content: 'Integrated JSON tokens that allowed for design ownership over color palettes and typography.',
          keyPoints: [
            'JSON token system',
            'Design ownership',
            'Theme management'
          ]
        }
      ]
    } as NarrativeSection,
    {
      type: 'process',
      title: 'Collaborative Design & Development',
      content: 'I interviewed teammates across the org to uncover pain points during their product design and design handoff processes. Through testing and feedback sessions, we refined the system and our approach iteratively.',
      steps: [
        {
          title: 'Scalability First',
          content: 'The system was built with growth in mind. By implementing design tokens and modular components, the design system scaled seamlessly as new products and features were developed.',
          keyPoints: [
            'Growth-oriented architecture',
            'Modular components',
            'Scalable tokens'
          ]
        },
        {
          title: 'Documentation Focus',
          content: 'Comprehensive documentation ensured that even as the organization expanded, the design system remained accessible and intuitive.',
          keyPoints: [
            'Clear guidelines',
            'Accessible documentation',
            'Intuitive usage'
          ]
        }
      ]
    } as ProcessSection
  ],
  technologies: ['Figma', 'Storybook', 'TypeScript', 'React', 'Design Tokens'],
  outcomes: [
    {
      title: 'Improved Efficiency',
      content: 'Teams could easily understand and implement components, reducing development time and inconsistencies.',
      metrics: [
        {
          label: 'Development Time',
          value: 'Reduced'
        },
        {
          label: 'Design Consistency',
          value: 'Improved'
        }
      ]
    }
  ],
  contributions: [
    'Led the development of a comprehensive design system',
    'Created modular UI components and design tokens',
    'Established clear documentation and guidelines',
    'Facilitated cross-team collaboration and adoption',
    'Implemented scalable architecture for future growth'
  ],
  testimonial: {
    quote: 'The design system laid the foundation for future development and collaboration, establishing a unified visual language that streamlined workflows.',
    author: 'Design Team Lead',
    role: 'Decent'
  },
  layout: 'mixed'
}; 