import { Project } from '../types';

export const decentDesignSystem: Project = {
  id: 'decent-design-system',
  title: 'Decent Design System',
  category: 'Design System',
  year: '2023',
  link: '/case-study/decent-design-system',
  description: 'Building a scalable design system to unify product experiences and streamline development workflows.',
  imageUrl: '/images/decent-design-system-hero-collage.png',
  heroImage: '/images/decent-design-system-hero-collage.png?h=600&fit=cover',
  leftImage: '/images/decent-design-system-hero-single-left.png',
  rightImage: '/images/decent-design-system-hero-single-right.png',
  singleImage: '/images/decent-design-system-hero-single.png',
  heroSubTitle: 'Building a scalable design system to unify product experiences and streamline development workflows.',
  role: 'Design System Lead',
  team: '1 Design System Lead (me), 2 Product Designers, 1 Brand Designer, 3 Engineers, 1 Product Manager',
  challenge: {
    title: 'A Need for Consistency',
    content: 'The organization faced challenges with inconsistent design patterns and inefficient development processes. A unified design system was needed to streamline workflows and improve team alignment.',
    subchallenges: [
      {
        title: 'Scalability',
        content: 'The design system needed to be scalable to accommodate future growth and evolving product needs.'
      }
    ]
  },
  solution: {
    title: 'Unified Design System',
    content: 'We developed a comprehensive design system that included a style guide, component library, and design tokens, ensuring visual consistency and scalability.',
    subsolutions: [
      {
        title: 'Component Library',
        content: 'A comprehensive component library was created to streamline design and development processes.'
      }
    ]
  },
  sections: [
    {
      type: 'content',
      title: 'Project Overview',
      content: 'Led the development of a scalable design system that unified product experiences and streamlined development workflows.',
      layout: 'wide',
      subsections: [
        {
          title: 'The Challenge',
          content: 'Scaling a product across a diverse ecosystem required consistency, efficiency, and collaboration. The organization needed a unified design language that could streamline workflows and improve team alignment.',
          keyPoints: [
            'Complex ecosystem integration',
            'Need for unified design language',
            'Workflow optimization'
          ]
        },
        {
          title: 'The Solution',
          content: 'Through collaborative design and development, we created a comprehensive design system that included a style guide, component library, and design tokens, ensuring visual consistency and scalability.',
          keyPoints: [
            'Comprehensive design system',
            'Component library development',
            'Design token implementation'
          ]
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Key Deliverables',
      content: 'A collection of key moments and deliverables from the project.',
      layout: 'wide',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
          alt: 'Project dashboard interface',
          caption: 'The redesigned dashboard provides a clear overview of DAO activities and governance status.'
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
          alt: 'Team collaboration session',
          caption: 'Regular cross-functional workshops ensured alignment between design, engineering, and product teams.'
        }
      ]
    },
    {
      type: 'process',
      title: 'Design Process',
      content: 'Our approach focused on collaboration and iteration, ensuring that every design decision was validated through user feedback and technical feasibility.',
      steps: [
        {
          title: 'Research & Discovery',
          content: 'Conducted user interviews and analyzed existing workflows to identify pain points and opportunities for improvement.',
          keyPoints: [
            'User research',
            'Workflow analysis',
            'Pain point identification'
          ]
        },
        {
          title: 'Design & Development',
          content: 'Worked closely with engineers in a pair-programming-inspired design process, ensuring usability was considered at every stage.',
          keyPoints: [
            'Engineering collaboration',
            'Usability focus',
            'Iterative design'
          ]
        },
        {
          title: 'Testing & Refinement',
          content: 'Conducted weekly user feedback sessions, testing prototypes to uncover pain points and refine key flows.',
          keyPoints: [
            'Weekly feedback sessions',
            'Prototype testing',
            'Flow refinement'
          ]
        }
      ]
    },
    {
      type: 'content',
      title: 'Design System Implementation',
      content: 'The design system was built with growth in mind, implementing design tokens and modular components that scaled seamlessly as new products and features were developed.',
      layout: 'narrow',
      subsections: [
        {
          title: 'Component Library',
          content: 'Created a comprehensive component library that streamlined design and development processes.',
          keyPoints: [
            'Modular UI components',
            'Development efficiency',
            'Design consistency'
          ]
        },
        {
          title: 'Documentation',
          content: 'Established clear guidelines and documentation to ensure the system remained accessible and intuitive as the organization expanded.',
          keyPoints: [
            'Clear guidelines',
            'Accessible documentation',
            'Team adoption'
          ]
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Design System Components',
      content: 'Examples of the design system components and their implementation.',
      layout: 'narrow',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
          alt: 'Design system components',
          caption: 'The component library includes reusable UI elements that maintain consistency across the platform.'
        }
      ]
    },
    {
      type: 'content',
      title: 'Outcomes & Impact',
      content: 'The implementation of the design system and improved UX led to significant improvements in efficiency and user satisfaction.',
      layout: 'wide',
      subsections: [
        {
          title: 'Development Efficiency',
          content: 'Teams could easily understand and implement components, reducing development time and inconsistencies.',
          keyPoints: [
            'Reduced development time',
            'Improved consistency',
            'Streamlined workflows'
          ]
        },
        {
          title: 'User Experience',
          content: 'The new design system and improved UX led to better user satisfaction and reduced onboarding friction.',
          keyPoints: [
            'Improved user satisfaction',
            'Reduced onboarding friction',
            'Better retention'
          ]
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Project Evolution',
      content: 'A visual journey through the project\'s transformation from Fractal to Decent.',
      layout: 'wide',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
          alt: 'Initial user research phase',
          caption: 'Early user research sessions helped identify key pain points and opportunities for improvement.'
        },
        {
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
          alt: 'Design system implementation',
          caption: 'The new design system brought consistency and efficiency to the development process.'
        },
        {
          url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
          alt: 'Final product launch',
          caption: 'The redesigned platform successfully bridged the gap between Web2 and Web3 usability.'
        }
      ]
    }
  ],
  technologies: ['React', 'TypeScript', 'Chakra UI', 'Figma', 'Notion'],
  outcomes: [
    {
      type: 'outcome',
      title: 'Increased adoption',
      content: 'Active DAOs grew in the first few months post-launch, driving an increase in user base and total value locked (TVL) on the platform.',
      metrics: [
        {
          label: 'Active DAOs',
          value: 'Increased'
        },
        {
          label: 'User Base',
          value: 'Expanded'
        },
        {
          label: 'TVL',
          value: 'Increased'
        }
      ]
    },
    {
      type: 'outcome',
      title: 'Enhanced UX',
      content: 'Usability testing showed reduced onboarding friction, boosting retention.',
      metrics: [
        {
          label: 'Onboarding Friction',
          value: 'Reduced'
        },
        {
          label: 'User Retention',
          value: 'Improved'
        }
      ]
    }
  ],
  contributions: [
    'I defined the UX vision, translating research into actionable design improvements.',
    'I led the development of a scalable UI system for long-term flexibility.',
    'I aligned branding and UI to reflect Decent\'s new identity.',
    'I streamlined governance workflows to reduce friction for DAOs.',
    'I integrated QA workflows and iterated post-launch for continuous improvement.'
  ],
  testimonial: {
    quote: 'The shift from Fractal to Decent was more than a redesign—it was a strategic transformation that redefined the product\'s value.',
    author: 'Project Lead',
    role: 'Decent'
  },
  layout: 'double'
}; 