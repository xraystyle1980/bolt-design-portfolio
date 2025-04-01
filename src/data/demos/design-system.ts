import { Section } from '../types';

export const designSystemDemo = {
  id: 'design-system-demo',
  title: 'Design System Demo',
  subtitle: 'A live demonstration of design tokens and component libraries working together',
  description: 'Experience how design tokens from Figma can be synchronized with a live codebase, enabling real-time updates and seamless design-to-development workflow.',
  role: 'Design Systems Engineer',
  team: 'Solo Project',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma Tokens', 'Style Dictionary'],
  sections: [
    {
      type: 'content',
      title: 'Overview',
      content: 'This demo showcases a modern design system workflow where design decisions in Figma are automatically reflected in the codebase. It demonstrates how design tokens can bridge the gap between design and development.',
      subsections: [
        {
          title: 'The Challenge',
          content: 'Design systems often suffer from synchronization issues between design tools and code implementation. Changes in design tools require manual updates in code, leading to inconsistencies and inefficient workflows.'
        },
        {
          title: 'The Solution',
          content: 'By implementing a token-based workflow, we create a single source of truth that automatically updates both design and code. This ensures perfect consistency and dramatically reduces maintenance overhead.'
        }
      ]
    },
    {
      type: 'process',
      title: 'How It Works',
      content: 'The demo illustrates a complete token synchronization workflow from Figma to code.',
      steps: [
        {
          title: 'Design Tokens in Figma',
          content: 'Using Figma Tokens plugin, we define our design tokens for colors, typography, spacing, and more.'
        },
        {
          title: 'Token Transformation',
          content: 'Tokens are exported and transformed using Style Dictionary into platform-specific formats.'
        },
        {
          title: 'Code Integration',
          content: 'The transformed tokens are automatically integrated into our React components via Tailwind CSS.'
        },
        {
          title: 'Live Updates',
          content: 'Changes to tokens in Figma trigger automatic updates in the codebase, maintaining perfect sync.'
        }
      ]
    },
    {
      type: 'gallery',
      layout: 'wide',
      title: 'Interactive Examples',
      content: 'Explore live examples of the design system in action. Try modifying tokens and see real-time updates across components.',
      images: [
        {
          url: '/images/design-system/tokens-demo.png',
          alt: 'Design tokens demonstration',
          caption: 'Live token manipulation interface'
        },
        {
          url: '/images/design-system/components-demo.png',
          alt: 'Component library showcase',
          caption: 'Interactive component playground'
        }
      ]
    },
    {
      type: 'comparison',
      title: 'Before & After',
      content: 'See the impact of implementing a token-based workflow.',
      before: {
        title: 'Traditional Workflow',
        content: 'Manual updates required for every design change, leading to inconsistencies and maintenance overhead.',
        image: '/images/design-system/before-workflow.png'
      },
      after: {
        title: 'Token-based Workflow',
        content: 'Automated synchronization ensures perfect consistency between design and code.',
        image: '/images/design-system/after-workflow.png'
      }
    }
  ] as Section[]
}; 