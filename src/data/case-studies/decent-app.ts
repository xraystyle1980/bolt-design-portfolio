import { Project, NarrativeSection, ProcessSection, OutcomeSection, GallerySection, ContentSection } from '../types';

export const decentApp: Project = {
  id: 'decent-app',
  title: 'Decent App',
  category: 'Product Design',
  year: '2023',
  link: '/case-study/decent-app',
  // description: 'Leading product design and execution to redesign a failing legacy app driving growth, aligning with brand, and reclaiming market share',

  leftImage: '/images/decent-app-hero-single-left.png',
  rightImage: '/images/decent-app-hero-single-right.png',
  summary: 'Leading product design and execution to redesign a failing legacy app – driving growth, aligning with brand, and reclaiming market share',

  role: 'Lead Product Designer',
  team: '1 Product Designer (me), 1 Brand Designer, 1 Creative Director, 4 Engineers, 1 Product Manager',
  challenge: {
    title: 'A Need for Evolution',
    content: 'Fractal, the original product, was falling short of user expectations. The decentralized governance space had evolved, and Fractal\'s rigid smart contract structures limited adoption. Users found it complex, inflexible, and outdated.',
    subchallenges: [
      {
        title: 'Bridging Web2 and Web3',
        content: 'A key challenge was bridging the usability gap between Web2 and Web3 by integrating familiar business features into the platform, making decentralized governance more accessible to traditional organizations.'
      }
    ]
  },
  solution: {
    title: 'Strategic Transformation',
    content: 'Through user insights, iterative design, and seamless cross-functional collaboration, we built a scalable DAO toolkit that meets the evolving needs of decentralized governance.',
    subsolutions: [
      {
        title: 'Integration of Traditional Features',
        content: 'A major success was integrating traditional business features to make decentralized governance more accessible to Web2 users.'
      }
    ]
  },
  sections: [
    {
      type: 'content',
      title: 'Project Overview',
      content: 'Led the product design transition from Fractal to Decent, creating an intuitive and adaptable experience that bridges Web2 and Web3 usability.',
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
    } as ContentSection,
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
    } as GallerySection,
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
    } as ProcessSection,
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
    } as ContentSection,
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
    } as GallerySection,
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
    } as ContentSection,
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
    } as GallerySection
  ],
  technologies: ['React', 'TypeScript', 'Chakra UI', 'Figma', 'Notion'],
  outcomes: [
    {
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
  layout: 'mixed'
}; 