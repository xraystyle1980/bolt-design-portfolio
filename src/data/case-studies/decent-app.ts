import { Project, GallerySection, ContentSection } from '../types';

export const decentApp: Project = {
  id: 'decent-app',
  title: 'Decent App',
  category: 'Product Design',
  year: '2023',
  link: '/case-study/decent-app',
  description: 'Leading product design and execution to redesign a failing legacy app – driving growth, aligning with brand, and reclaiming market share',
  imageUrl: '/images/decent-app-hero-collage.png',
  heroImage: '/images/decent-app-hero-collage.png?h=600&fit=cover',
  leftImage: '/images/decent-app-hero-single-left.png',
  rightImage: '/images/decent-app-hero-single-right.png',
  heroSubTitle: 'Leading product design and execution to redesign a failing legacy app – driving growth, aligning with brand, and reclaiming market share',
  role: 'Lead Product Designer',
  team: '1 Product Designer (me), 1 Brand Designer, 1 Creative Director, 4 Engineers, 1 Product Manager',
  challenge: {
    title: '',
    content: ''
  },
  solution: {
    title: '',
    content: ''
  },
  sections: [
    {
      type: 'gallery',
      smallTitle: 'The Challenge',
      title: 'A Need for Evolution',
      content: 'Fractal, the original product, was falling short of user expectations. The decentralized governance space had evolved, and Fractal\'s rigid smart contract structures limited adoption. Users found it complex, inflexible, and outdated.<br /><br />I led the product design aspect of the transition to Decent, working closely with product and engineering. My role was pivotal in shaping an intuitive, adaptable experience while ensuring that the experience met both user and business needs. My team leaned on me to bring structure to an ambiguous problem space, translating research into action and ensuring that our design decisions balanced usability with technical feasibility. A key challenge was bridging the usability gap between Web2 and Web3 by integrating familiar business features into the platform, making decentralized governance more accessible to traditional organizations.',
      layout: 'wide',
      className: 'grid-cols-1',
      images: [
        {
          url: '/images/decent-app/fractal-before.png',
          alt: 'The original Fractal interface',
          caption: 'The original Fractal interface'
        },
        {
          url: '/images/decent-app/decent-app-after.png',
          alt: 'The redesigned Decent App',
          caption: 'The redesigned Decent App'
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
      type: 'content',
      title: 'Design Process',
      content: 'Our approach focused on collaboration and iteration, ensuring that every design decision was validated through user feedback and technical feasibility.',
      subsections: [
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
    },
    {
      type: 'content',
      title: 'Strategic Repositioning & Product Redesign',
      content: 'Fractal\'s transition to Decent wasn\'t just a redesign—it was a strategic shift to redefine its value in the market. The challenge? Balancing blockchain\'s technical constraints with user expectations while ensuring the product remained scalable and intuitive.',
      layout: 'wide',
      subsections: [
        {
          title: 'Bridging user insights with business needs',
          content: 'I conducted extensive user research & market analysis, identifying gaps in Fractal\'s offering that hindered adoption.',
          keyPoints: [
            'User research',
            'Market analysis',
            'Gap identification'
          ]
        },
        {
          title: 'Aligning stakeholders',
          content: 'I facilitated cross-functional workshops, ensuring alignment across product, engineering, and leadership.',
          keyPoints: [
            'Cross-functional workshops',
            'Stakeholder alignment',
            'Team collaboration'
          ]
        },
        {
          title: 'Creating a design foundation',
          content: 'I defined core UX principles, focusing on scalability, usability, and modularity to ensure the product could evolve efficiently.',
          keyPoints: [
            'UX principles',
            'Scalability focus',
            'Modular design'
          ]
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Design Exploration',
      content: 'Exploring multiple design directions and features',
      layout: 'wide',
      images: [
        {
          url: '/images/placeholder-mobile-variants.png',
          alt: 'Mobile variants of possible home page designs',
          caption: 'Mobile variants of possible home page designs'
        },
        {
          url: '/images/placeholder-desktop-variants.png',
          alt: 'Desktop variant designs exploring search bar placement',
          caption: 'Desktop variant designs exploring search bar placement'
        },
        {
          url: '/images/placeholder-exploring-features.png',
          alt: 'Exploring multiple ways to present the features',
          caption: 'Exploring multiple ways to present the features'
        },
        {
          url: '/images/placeholder-emphasis-search.png',
          alt: 'Placing emphasis on search',
          caption: 'Placing emphasis on search'
        }
      ]
    },
    {
      type: 'content',
      title: 'Collaborative & Iterative Design Process',
      content: 'Working closely with the Head of Design, Product, and Engineering teams, I translated user research into clear, actionable design decisions, navigated complex UX challenges while preserving a familiar user experience, and ensured that designs were both scalable and technically feasible.',
      layout: 'wide',
      subsections: [
        {
          title: 'Refining UX through engineering collaboration',
          content: 'I worked closely with engineers in a pair-programming-inspired design process, ensuring usability was considered at every stage.',
          keyPoints: [
            'Engineering collaboration',
            'Usability focus',
            'Technical feasibility'
          ]
        },
        {
          title: 'Validating through rapid feedback loops',
          content: 'I conducted weekly user feedback sessions, testing prototypes to uncover pain points and refine key flows.',
          keyPoints: [
            'Weekly feedback sessions',
            'Prototype testing',
            'Flow refinement'
          ]
        },
        {
          title: 'Ensuring accessibility & intuitive interactions',
          content: 'I led multiple rounds of prototyping & usability testing, iterating designs based on real-world friction.',
          keyPoints: [
            'Accessibility focus',
            'Usability testing',
            'Iterative design'
          ]
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Brand Evolution',
      content: 'The evolution of Decent\'s brand and design system',
      layout: 'wide',
      images: [
        {
          url: '/images/placeholder-new-brand-direction.png',
          alt: 'Decent\'s Creative Director and Visual Branding Designer established a new brand direction',
          caption: 'Decent\'s Creative Director and Visual Branding Designer established a new brand direction'
        },
        {
          url: '/images/placeholder-foundational-spacing.png',
          alt: 'New brand direction establishes foundational spacing',
          caption: 'New brand direction establishes foundational spacing'
        },
        {
          url: '/images/placeholder-custom-illustrations.png',
          alt: 'Custom illustrations give the app a unique personality',
          caption: 'Custom illustrations give the app a unique personality'
        },
        {
          url: '/images/placeholder-error-handling.png',
          alt: 'Proper error handling informs the user',
          caption: 'Proper error handling informs the user'
        },
        {
          url: '/images/placeholder-collect-feedback.png',
          alt: 'The ability to collect feedback allows user to add context',
          caption: 'The ability to collect feedback allows user to add context'
        }
      ]
    },
    {
      type: 'content',
      title: 'Scalable Design System & Brand Evolution',
      content: 'Design systems thrive on continuous communication—early and often. Supporting the builders, tending to the system like a garden, and finding overlapping touchpoints between teams were key to ensuring a smooth collaboration. Documenting these workflows became just as important as the designs themselves, creating a shared language across teams.',
      layout: 'wide',
      subsections: [
        {
          title: 'Building a scalable foundation',
          content: 'I based the UI component library on classes and properties from Chakra UI, ensuring alignment and easier handoff to the engineering team.',
          keyPoints: [
            'Component library',
            'Chakra UI integration',
            'Engineering handoff'
          ]
        },
        {
          title: 'Collaborating with brand designers',
          content: 'I worked closely with Decent\'s brand and visual designers to translate their new identity into a functional UI, ensuring the design system aligned with their branding principles.',
          keyPoints: [
            'Brand alignment',
            'Visual design collaboration',
            'UI consistency'
          ]
        },
        {
          title: 'Maintaining design consistency',
          content: 'I contributed to comprehensive design guidelines and documentation, ensuring alignment across teams and providing org-wide direction. Specifically, my contribution was creating and maintaining a Notion database for components, documenting their usage and properties.',
          keyPoints: [
            'Design guidelines',
            'Documentation',
            'Team alignment'
          ]
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Prototyping',
      content: 'Prototyping the withdrawal flow',
      layout: 'wide',
      images: [
        {
          url: '/images/placeholder-withdrawal-flow.png',
          alt: 'Prototyping the withdrawal flow',
          caption: 'Prototyping the withdrawal flow'
        }
      ]
    },
    {
      type: 'content',
      title: 'Quality Assurance & Continuous Improvement',
      content: 'I championed internal QA at every opportunity, advocating for thorough design reviews and detailed feedback to ensure a polished final product. As the company formalized weekly QA sessions, I actively supported the process, reinforcing its value across teams.',
      layout: 'wide',
      subsections: [
        {
          title: 'Pixel-perfect execution',
          content: 'I provided detailed GitHub design feedback, working directly with engineers to ensure designs were accurately translated into code. This facilitated rapid iteration and created a strong feedback loop between design and development.',
          keyPoints: [
            'Design feedback',
            'Engineering collaboration',
            'Rapid iteration'
          ]
        },
        {
          title: 'Post-launch iteration',
          content: 'I analyzed user behavior and usability tests to make continuous improvements, refining the experience based on real-world usage.',
          keyPoints: [
            'User behavior analysis',
            'Usability testing',
            'Continuous improvement'
          ]
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Mobile Prototype',
      content: 'Mobile prototype of user adding a payment to a role',
      layout: 'wide',
      images: [
        {
          url: '/images/placeholder-mobile-payment.png',
          alt: 'Mobile prototype of user adding a payment to a role',
          caption: 'Mobile prototype of user adding a payment to a role'
        }
      ]
    }
  ],
  technologies: ['Chakra UI', 'Figma', 'Notion'],
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
    author: 'Decent Team',
    role: 'Product Team'
  },
  layout: 'double'
}; 