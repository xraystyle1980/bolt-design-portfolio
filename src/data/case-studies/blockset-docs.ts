import { Project, Section } from '../types';

export const blocksetDocs: Project = {
  id: 'blockset-docs',
  title: 'Blockset Docs',
  category: 'Documentation',
  year: '2023',
  link: '/case-study/blockset-docs',
  // description: 'A comprehensive documentation platform that improved developer experience and streamlined API integration.',
  // imageUrl: '/images/blockset-docs-hero-1.png',
  // heroImage: '/images/blockset-docs-hero-single.png',
  singleImage: '/images/blockset-docs-hero-single.png',
  summary: 'Designed and built a unified documentation platform that improved developer experience and streamlined API integration.',
  role: 'Lead Product Designer',
  team: 'Product Design (1), Engineering (3), Technical Writing (2)',
  challenge: {
    title: 'Technical Accessibility',
    content: 'Balancing technical depth with accessibility was our main challenge. We needed to provide comprehensive API documentation while ensuring the content remained approachable for developers at different experience levels.',
    subchallenges: [
      {
        title: 'Developer Onboarding',
        content: 'The platform needed to bridge the gap between technical nuance and user onboarding needs, making complex blockchain integration more accessible.'
      }
    ]
  },
  solution: {
    title: 'Interactive Documentation',
    content: 'We created an engaging documentation platform with interactive features like a pricing slider and feature prototypes, combined with a developer-first approach that prioritized tools like a sandbox environment.',
    subsolutions: [
      {
        title: 'Marketing Integration',
        content: 'Designed an interactive and visually compelling website that communicated technical features in an accessible way, elevating Blockset\'s market presence.'
      }
    ]
  },
  sections: [
    {
      type: 'narrative',
      title: 'Strategic Design Process',
      content: 'I collaborated with BRD\'s internal design team, external stakeholders, and my team to create a unified documentation site and marketing page that improved developer confidence and streamlined integration processes.',
      subsections: [
        {
          title: 'Information Architecture',
          content: 'Restructured existing documentation to improve accessibility and logical flow for developers.',
          keyPoints: [
            'Improved navigation',
            'Logical content flow',
            'Enhanced accessibility'
          ]
        },
        {
          title: 'Stakeholder Collaboration',
          content: 'Integrated feedback from BRD\'s internal teams and external stakeholders to refine the platform\'s UX.',
          keyPoints: [
            'Cross-team feedback',
            'Stakeholder alignment',
            'UX refinement'
          ]
        }
      ]
    },
    {
      type: 'process',
      title: 'Developer-First Approach',
      content: 'The project prioritized developer tools and interactive features to reduce onboarding friction and improve engagement.',
      steps: [
        {
          title: 'Interactive API Sandbox',
          content: 'Created an interactive API sandbox that allowed developers to experiment with endpoints before committing to integration, significantly reducing the time from discovery to implementation.',
          keyPoints: [
            'Interactive testing',
            'Rapid prototyping',
            'Reduced integration time'
          ]
        },
        {
          title: 'Marketing Integration',
          content: 'Designed an interactive and visually compelling website that communicated technical features in an accessible way.',
          keyPoints: [
            'Visual communication',
            'Technical accessibility',
            'Market presence'
          ]
        }
      ]
    }
  ],
  technologies: ['React', 'TypeScript', 'MDX', 'Figma', 'Storybook'],
  outcomes: [
    {
      title: 'Improved Developer Experience',
      content: 'The interactive API sandbox proved to be a game-changer, allowing developers to experiment with endpoints before committing to integration.',
      metrics: [
        {
          label: 'Integration Time',
          value: 'Reduced'
        },
        {
          label: 'Developer Confidence',
          value: 'Increased'
        }
      ]
    }
  ],
  contributions: [
    'Led the design of a unified documentation platform',
    'Created interactive developer tools and sandbox environment',
    'Designed an engaging marketing website',
    'Facilitated cross-team collaboration',
    'Improved developer onboarding experience'
  ],
  testimonial: {
    quote: 'The Blockset documentation and marketing project illustrates the power of design to align user needs with business goals.',
    author: 'Product Lead',
    role: 'BRD'
  },
  layout: 'mixed'
}; 