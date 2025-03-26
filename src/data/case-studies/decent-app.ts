import { Project, NarrativeSection, ProcessSection, OutcomeSection, GallerySection } from '../types';

export const decentApp: Project = {
  id: 'decent-app',
  title: 'Decent App',
  category: 'Product Design',
  year: '2023',
  link: '/case-study/decent-app',
  description: 'Leading product design and execution to redesign a failing legacy app – driving growth, aligning with brand, and reclaiming market share',
  imageUrl: '/images/decent-app-hero-collage.png',
  heroImage: '/images/decent-app-hero-collage.png?h=600&fit=cover',
  heroSubTitle: 'Leading product design and execution to redesign a failing legacy app – driving growth, aligning with brand, and reclaiming market share',
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
      type: 'narrative',
      title: 'Strategic Repositioning & Product Redesign',
      content: 'Fractal\'s transition to Decent wasn\'t just a redesign—it was a strategic shift to redefine its value in the market. The challenge? Balancing blockchain\'s technical constraints with user expectations while ensuring the product remained scalable and intuitive.',
      subsections: [
        {
          title: 'Bridging user insights with business needs',
          content: 'I conducted extensive user research & market analysis, identifying gaps in Fractal\'s offering that hindered adoption.',
          keyPoints: [
            'Extensive user research and market analysis',
            'Identification of adoption barriers',
            'Strategic alignment with business needs'
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
            'Core UX principles definition',
            'Scalability focus',
            'Modular architecture'
          ]
        }
      ]
    } as NarrativeSection,
    {
      type: 'process',
      title: 'Collaborative & Iterative Design Process',
      content: 'Working closely with the Head of Design, Product, and Engineering teams, I translated user research into clear, actionable design decisions, navigated complex UX challenges while preserving a familiar user experience, and ensured that designs were both scalable and technically feasible.',
      steps: [
        {
          title: 'Refining UX through engineering collaboration',
          content: 'I worked closely with engineers in a pair-programming-inspired design process, ensuring usability was considered at every stage.',
          keyPoints: [
            'Pair-programming approach',
            'Engineering collaboration',
            'Usability focus'
          ]
        },
        {
          title: 'Validating through rapid feedback loops',
          content: 'I conducted weekly user feedback sessions, testing prototypes to uncover pain points and refine key flows.',
          keyPoints: [
            'Weekly feedback sessions',
            'Prototype testing',
            'Iterative refinement'
          ]
        },
        {
          title: 'Ensuring accessibility & intuitive interactions',
          content: 'I led multiple rounds of prototyping & usability testing, iterating designs based on real-world friction.',
          keyPoints: [
            'Multiple prototype iterations',
            'Usability testing',
            'Accessibility focus'
          ]
        }
      ]
    } as ProcessSection,
    {
      type: 'narrative',
      title: 'Scalable Design System & Brand Evolution',
      content: 'Design systems thrive on continuous communication—early and often. Supporting the builders, tending to the system like a garden, and finding overlapping touchpoints between teams were key to ensuring a smooth collaboration.',
      subsections: [
        {
          title: 'Building a scalable foundation',
          content: 'I based the UI component library on classes and properties from Chakra UI, ensuring alignment and easier handoff to the engineering team.',
          keyPoints: [
            'Chakra UI integration',
            'Component library development',
            'Engineering handoff optimization'
          ]
        },
        {
          title: 'Collaborating with brand designers',
          content: 'I worked closely with Decent\'s brand and visual designers to translate their new identity into a functional UI, ensuring the design system aligned with their branding principles.',
          keyPoints: [
            'Brand alignment',
            'Visual design collaboration',
            'Identity translation'
          ]
        },
        {
          title: 'Maintaining design consistency',
          content: 'I contributed to comprehensive design guidelines and documentation, ensuring alignment across teams and providing org-wide direction. Specifically, my contribution was creating and maintaining a Notion database for components, documenting their usage and properties.',
          keyPoints: [
            'Design guidelines',
            'Documentation',
            'Component database'
          ]
        }
      ]
    } as NarrativeSection,
    {
      type: 'process',
      title: 'Quality Assurance & Continuous Improvement',
      content: 'I championed internal QA at every opportunity, advocating for thorough design reviews and detailed feedback to ensure a polished final product.',
      steps: [
        {
          title: 'Pixel-perfect execution',
          content: 'I provided detailed GitHub design feedback, working directly with engineers to ensure designs were accurately translated into code. This facilitated rapid iteration and created a strong feedback loop between design and development.',
          keyPoints: [
            'Detailed design feedback',
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
    } as ProcessSection,
    {
      type: 'gallery',
      title: 'Project Gallery',
      content: 'A collection of key moments and deliverables from the project.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
          alt: 'Project dashboard interface'
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
          alt: 'Team collaboration session'
        },
        {
          url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
          alt: 'User research workshop'
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