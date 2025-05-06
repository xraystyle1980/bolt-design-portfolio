import { Project } from '../types';

export const blocksetDocs: Project = {
  id: 'blockset-docs',
  title: 'Blockset Docs',
  category: 'Documentation',
  year: '2023',
  link: '/case-study/blockset-docs',
  description: 'How I transformed complex technical documentation into a beautiful, intuitive interface that dramatically improved developer experience.',
  imageUrl: '/images/blockset-docs-hero-single.png',
  heroImage: '/images/blockset-docs-hero-single.png?h=600&fit=cover',
  singleImage: '/images/blockset-docs-hero-single.png',
  heroSubTitle: 'How I transformed complex technical documentation into a beautiful, intuitive interface that dramatically improved developer experience.',
  role: 'Lead Designer',
  team: '1 Designer (me), 1 Technical Writer, 2 Engineers',
  meta: {
    title: 'Blockset Documentation | Matt Trice Design',
    description: 'Designing and building a comprehensive documentation site for Blockset\'s blockchain infrastructure platform.',
    ogImage: 'https://trice.design/meta/OG-blockset.png',
    ogUrl: 'https://trice.design/case-study/blockset-docs'
  },


  sections: [
    {
      type: 'gallery',
      smallTitle: 'The Challenge',
      title: 'Empowering Developer Success',
      content: 'Blockset, a blockchain data integration platform, enables engineering teams to build enterprise-grade blockchain applications. To enhance its adoption, the project required a robust documentation platform and a marketing website that could bridge the gap between technical nuance and user onboarding needs.<br /><br />As Lead Product Designer, I collaborated with BRD\'s internal design team, external stakeholders, and my team to create a unified documentation site and marketing page. These efforts helped improve developer confidence, streamline integration processes, and elevate Blockset\'s market presence.',
      layout: '1-col',
      containerHidden: false,
      images: [
        {
          url: '/images/blockset-docs/bset-docs-home.png',
          alt: 'The redesigned Blockset documentation homepage provides clear navigation and easy access to key resources',
          caption: 'The redesign provides clear navigation and easy access to key resources'
        }
      ]
    },
    

    {
      type: 'content',
      smallTitle: 'Approach & Key Contributions',
      title: 'Strategic Design Process',
      content: 'I collaborated with BRD\'s internal design team, external stakeholders, and my team to create a unified documentation site and marketing page that improved developer confidence and streamlined integration processes.',
      subsections: [
        {
          title: 'Information Architecture',
          content: 'Restructured existing documentation to improve accessibility and logical flow for developers.'
        },
        {
          title: 'Stakeholder Collaboration',
          content: 'Integrated feedback from BRD\'s internal teams and external stakeholders to refine the platform\'s UX.'
        },
        {
          title: 'Interactive Features',
          content: 'Designed engaging tools, such as a pricing slider and feature prototypes, to showcase Blockset\'s offerings.'
        },
        {
          title: 'What was the biggest challenge?',
          titleVariant: 'large',
          content: 'Balancing technical depth with accessibility was our main challenge. We needed to provide comprehensive API documentation while ensuring the content remained approachable for developers at different experience levels.'
        }
      ]
    },


    {
      type: 'gallery',
      layout: '2-col',
      images: [
        {
          url: '/images/blockset-docs/bset-page-products.png',
          alt: 'Product features page highlighting Blockset\'s core capabilities and integration options',
          caption: 'Product features page highlighting Blockset\'s core capabilities and integration options'
        },
        {
          url: '/images/blockset-docs/bset-page-pricing.png',
          alt: 'Interactive pricing page with customizable plans and feature comparison',
          caption: 'Interactive pricing page with customizable plans and feature comparison'
        }
      ]
    },


    {
      type: 'content',
      smallTitle: 'Strategy & Execution',
      title: 'Collaborative Design Process',
      content: 'I worked closely with BRD\'s internal design team, stakeholders, and my team to align on project goals. By conducting usability testing and gathering iterative feedback, we ensured that the design addressed user needs and business objectives.',
      subsections: [
        {
          title: 'Developer-First Approach',
          content: 'Created an interactive API sandbox that allowed developers to experiment with endpoints before committing to integration.'
        },
        {
          title: 'Marketing Integration',
          content: 'Designed an interactive and visually compelling website that communicated technical features in an accessible way.'
        },
        {
          title: 'What worked well?',
          titleVariant: 'large',
          content: 'The interactive API sandbox proved to be a game-changer, allowing developers to experiment with endpoints before committing to integration. This hands-on approach significantly reduced the time from discovery to implementation.'
        }
      ]
    },


    {
      type: 'gallery',
      layout: '2-col',
      images: [
        {
          url: '/images/blockset-docs/bset-sandbox.png',
          alt: 'Interactive API sandbox enables developers to test requests and explore endpoints in real-time',
          caption: 'Interactive API sandbox enables developers to test requests and explore endpoints in real-time'
        },
        {
          url: '/images/blockset-docs/bset-home-full.png',
          alt: 'The marketing homepage combines technical credibility with clear value propositions',
          caption: 'The marketing homepage combines technical credibility with clear value propositions'
        }
      ]
    },


    {
      type: 'content',
      smallTitle: 'Final Thoughts',
      title: 'A Strategic Transformation',
      content: 'The Blockset documentation and marketing project illustrates the power of design to align user needs with business goals. By delivering tools that empowered developers and presented Blockset\'s value clearly, we enhanced the user experience and drove toward measurable business goals.<br /><br />In a bittersweet twist, after Decent\'s contributions to the project, Coinbase later acquired BRD prior to Blockset\'s launch.'
    }


  ],
  technologies: ['Figma', 'Prototyping', 'Usability Testing', 'Stakeholder Collaboration']


  // testimonial: {
  //   quote: 'Matt took a dense, technical product and made it approachable. His ability to distill complexity into clean, usable documentation drastically improved the developer experience.',
  //   author: 'Product Lead',
  //   role: 'BRD'
  // }
}; 