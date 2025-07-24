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
  team: 'Lead Product Designer (me), Front End Engineer',
  meta: {
    title: 'Decent Design System | Matt Trice Design',
    description: 'Building a scalable design system to support rapid product development and maintain consistency across multiple platforms.',
    ogImage: 'https://trice.design/meta/OG-dds.png',
    ogUrl: 'https://trice.design/case-study/decent-design-system'
  },
  
  
  sections: [
    {
      type: 'gallery',
      smallTitle: 'The Challenge',
      title: 'A Need for Consistency',
      content: 'Scaling a product across a diverse ecosystem requires consistency, efficiency, and collaboration. The Decent Design System was built to address this challenge by creating a unified design language that streamlined workflows, improved team alignment, and delivered consistent user experiences.<br /><br />I spearheaded the development of the design system, working closely across the organization to ensure it met the needs of both developers and designers. Through this collaborative effort, the design system became a key enabler of scalability and innovation across the organization.',
      layout: '1-col',
      images: [
        {
          url: '/images/decent-design-system/dds-spacing.png',
          alt: 'Comprehensive spacing guidelines ensure consistent component layouts across the platform',
          caption: 'Comprehensive spacing guidelines ensure consistent component layouts across the platform'
        },
        {
          url: '/images/decent-design-system/dds-brand-align.png',
          alt: 'Close collaboration with the brand team ensured the design system reflected Decent\'s visual identity',
          caption: 'Close collaboration with the brand team ensured the design system reflected Decent\'s visual identity'
        }
      ]
    },


    {
      type: 'content',
      smallTitle: 'Impact',
      title: 'Design Impact',
      content: 'This section highlights the tangible outcomes of the design system work—tools and structures that improved consistency, sped up implementation, and gave the design team greater control over the product experience.',
      subsections: [
        {
          title: 'Unified Design Language',
          content: 'I laid the groundwork for and contributed to a comprehensive style guide covering colors, typography, and grid systems, ensuring visual consistency.'
        },
        {
          title: 'Component Library',
          content: 'Working closely with our front end engineer, I designed modular UI elements that streamlined design and development processes.'
        },
        {
          title: 'Design Tokens',
          content: 'I integrated JSON tokens that allowed for design ownership over color palettes and typography.'
        },
        {
          title: 'What was the biggest challenge?',
          titleVariant: 'large',
          content: 'Defining where and how the design system fit within the organization. What processes needed to change? What would become new? And most importantly, how do we make people want to use it? Adoption was a major hurdle, with myself and a frontend engineer as the primary advocates. Despite these challenges, the design system left a lasting impact, and I\'m eager to see how it continues to evolve.'
        }
      ]
    },


    {
      type: 'gallery',
      layout: '2-col',
      title: 'Design System Gallery',
      content: 'Key screens from the Decent Design System showcasing the unified design language.',
      images: [
        {
          url: '/images/decent-design-system/dds-hub-notion.png',
          alt: 'Maintaining a hub for design system documentation in Notion',
          caption: 'Maintaining a hub for design system documentation in Notion'
        },
        {
          url: '/images/decent-design-system/dds-ui-color-tokens.png',
          alt: 'Color tokens in Figma get applied directly within the codebase',
          caption: 'Color tokens in Figma get applied directly within the codebase'
        },
        {
          url: '/images/decent-design-system/dds-documentation-component-matrix-notion.png',
          alt: 'Tracking component consistency in Notion',
          caption: 'Tracking component consistency in Notion'
        },
        {
          url: '/images/decent-design-system/dds-button-components.png',
          alt: 'Button components',
          caption: 'Button components'
        },
        {
          url: '/images/decent-design-system/dds-dm-sans.png',
          alt: 'Consistent typography across the platform',
          caption: 'Consistent typography across the platform'
        }
        
      ]
    },


    {
      type: 'content',
      smallTitle: 'Strategy & Execution',
      title: 'Collaborative Design & Development',
      content: 'I interviewed my teammates across the org to uncover pain points during their product design, design handoff processes. Through testing and feedback sessions, we refined the system and our approach iteratively to craft a design system that fits the needs of the organization.',
      subsections: [
        {
          title: 'Scalability First',
          content: 'The system was built with growth in mind. By implementing design tokens and modular components, the design system scaled seamlessly as new products and features were developed.'
        },
        {
          title: 'Documentation Focus',
          content: 'Comprehensive documentation ensured that even as the organization expanded, the design system remained accessible and intuitive.'
        },
        {
          title: 'What worked well?',
          titleVariant: 'large',
          content: 'Our focus on documentation and clear component guidelines encouraged high adoption rates. Teams could easily understand and implement components, reducing development time and inconsistencies.'
        }
      ]
    },


    {
      type: 'content',
      smallTitle: 'Final Thoughts',
      title: 'A Strategic Transformation',
      content: 'The Decent Design System laid the foundation for future development and collaboration. The Design System established a unified visual language, contributed to streamlined workflows, and helped to foster continued collaboration.'
    }


  ],
  technologies: ['Chakra UI', 'Figma', 'Design Tokens', 'GitHub', 'Notion'],
  testimonial: {
    quote: 'Matt brought clarity and cohesion to our product through the design system. His ability to bridge design and development helped us scale faster, with more consistency and fewer handoff gaps.',
    author: 'David C.',
    role: 'Lead Front End Engineer at Decent'
  },
  layout: 'double'
}; 