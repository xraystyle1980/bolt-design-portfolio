import { Section } from '../types';

export const designSystemDemo = {
  id: 'design-system-demo',
  title: 'DS Demo: Figma → shadcn/ui + TailwindCSS',
  subtitle: 'A simplified workflow for exporting design tokens from Figma to shadcn/ui and TailwindCSS',
  description: 'This project showcases an efficient integration using Style Dictionary, highlighting a streamlined approach to managing design tokens across design and development.',
  role: 'Design Systems Engineer',
  team: 'Solo Project',
  technologies: ['Figma', 'shadcn/ui', 'TailwindCSS', 'Style Dictionary', 'React', 'TypeScript'],
  sections: [
    {
      type: 'content',
      title: 'Overview',
      content: 'This project showcases a simplified workflow for exporting design tokens from Figma to shadcn/ui and TailwindCSS, highlighting an efficient integration using Style Dictionary. Starting from an existing community-driven Figma library, I streamlined the token structure and optimized the workflow for ease of use, clarity, and seamless implementation.',
      subsections: [
        {
          title: 'Why I Made This',
          content: 'While exploring various token-to-code workflows, I found many solutions overly complex or cumbersome for practical applications. My goal was to create an approachable and straightforward demo highlighting a simplified but powerful workflow for managing design tokens across Figma and development, using shadcn/ui, TailwindCSS, and Style Dictionary.'
        }
      ]
    },
    {
      type: 'content',
      title: 'My workflow in Figma',
      content: 'Below you will find demo files, the Figma plugins I have used, and step-by-step instructions for implementing the design system workflow.',
      subsections: [
        {
          title: 'Demo Files',
          content: 'Below you will find demo files, the Figma plugins I have used, and step-by-step instructions for implementing the design system workflow.'
        }
      ]
    },
  
    {
      type: 'resources',
      title: 'Project Resources',
      content: 'Access the Figma libraries and GitHub repository for this project.',
      resources: [
        {
          type: 'github',
          title: 'ds-demo5',
          description: 'A React + TypeScript project built on shadcn/ui and TailwindCSS that streamlines Figma token exports through automatic Style Dictionary conversion.',
          url: 'https://github.com/xraystyle1980/ds-demo5',
          lastUpdated: '2024-04-02T22:24:58Z'
        },
        {
          type: 'figma',
          title: 'DS Demo Library',
          description: 'A comprehensive design system library built with Figma Variables, optimized for shadcn/ui and TailwindCSS integration.',
          url: 'https://www.figma.com/community/file/1490098810930924038/ds-demo-library-figma-shadcn-ui-tailwind',
          lastUpdated: '2024-04-02T22:24:58Z'
        }
      ]
    }
  ] as Section[]
}; 