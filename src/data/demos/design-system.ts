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
        },
        {
          title: "What's Different",
          content: 'Simplified Tokens: Removed unnecessary slate light/dark modes from primitive tokens. Renamed shadcn.com Light/Dark to simply "Light" and "Dark" for clarity.'
        }
      ]
    },
    {
      type: 'process',
      title: 'Recommended Figma Workflow',
      content: 'Essential plugins and step-by-step instructions for implementing the design system workflow.',
      steps: [
        {
          title: 'Essential Plugins',
          content: 'Variables Manager – Reorder and copy variables between files\nVariables to JSON – Export Figma variables as JSON files\nSwap Variables – Quickly swap variable references within Figma\n\nWhy these plugins? After exploring several options, this specific set of plugins provided exactly the functionality needed—simple JSON formatting, clear variable scope management, and ease of use. While alternatives like Tokens Studio are powerful, they often add unnecessary complexity for simple use-cases.'
        },
        {
          title: 'In Figma',
          content: '1. Duplicate the Primitives and Tokens variable sets from the original core library into your new Figma file.\n2. Update your primitive variables using HSL color values in either the "Light" or "Dark" mode.\n3. Run the Swap Variables plugin to ensure your new variables replace the originals. (Tip: sort variables by "created in this file").'
        },
        {
          title: 'In Your App',
          content: '1. Use the Variables to JSON plugin to export variables. Save the file exactly as labeled by the plugin—the conversion script expects this naming convention.\n2. Place the exported JSON file into your app directory and run the conversion script.\n3. CSS files will auto-generate, updating your design system in real time.'
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
      title: 'Project Resources',
      content: 'Access the Figma libraries and GitHub repository for this project.',
      before: {
        title: 'Figma Library',
        content: 'DS Demo Library (Figma → shadcn/ui + TailwindCSS)',
        image: '/images/design-system/before-workflow.png'
      },
      after: {
        title: 'Demo App',
        content: 'GitHub Repository',
        image: '/images/design-system/after-workflow.png'
      }
    }
  ] as Section[]
}; 