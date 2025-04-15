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
          content: 'While exploring various token-to-code workflows, I found many solutions overly complex or cumbersome for practical applications. My goal was to create an approachable and straightforward demo highlighting a simplified but powerful workflow for managing design tokens across Figma and development, using <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">shadcn/ui</a>, <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">TailwindCSS</a>, and <a href="https://amzn.github.io/style-dictionary" target="_blank" rel="noopener noreferrer">Style Dictionary</a>.'
        }
      ]
    },

    
  


    {
      type: 'content',
      title: 'My workflow in Figma',
      content: 'Below you will find demo files, the Figma plugins I have used, and step-by-step instructions for implementing the design system workflow.'
      
    },
  

    {
      type: 'resources',
      title: 'Figma Files',
      resources: [
        // {
        //   type: 'github',
        //   title: 'ds-demo5',
        //   description: 'A React + TypeScript project built on shadcn/ui and TailwindCSS that streamlines Figma token exports through automatic Style Dictionary conversion.',
        //   url: 'https://github.com/xraystyle1980/ds-demo5',
        //   lastUpdated: '2024-04-02T22:24:58Z'
        // },
        {
          type: 'figma',
          title: 'DS Demo – Library',
          description: 'Component library based on shadcn/ui and TailwindCSS. Components and themes structured for JSON variable export, integrated via Style Dictionary.',
          url: 'https://www.figma.com/community/file/1490098810930924038/ds-demo-library-figma-shadcn-ui-tailwind',
          lastUpdated: '2024-04-02T22:24:58Z',
          image: '/images/design-system/library-cover.png'
        },
        {
          type: 'figma',
          title: 'DS Demo – Theme',
          description: 'Demo design system built with shadcn/ui and TailwindCSS. Components export design tokens as JSON variables, integrated via Style Dictionary.',
          url: 'https://www.figma.com/community/file/1490098810930924038/ds-demo-theme-figma-shadcn-ui-tailwind',
          lastUpdated: '2024-04-02T22:24:58Z',
          image: '/images/design-system/demo-cover.png'
        }
      ]
    },


    {
      type: 'content',
      title: 'Figma Plugins',
      content: 'These Figma plugins are what I used to the workflow. Note: Variables to JSON and Variables Manager require a one-time premium purchase. Variables to JSON looks to be built on Token Studio which offers a more robust token management experience.',
      subsections: [
        {
          title: '<a href="https://www.figma.com/community/plugin/1468186413196022101/variables-to-json" target="_blank" rel="noopener noreferrer" class="text-body-lg font-semibold inline-flex items-center gap-2 hover:text-accent transition-colors underline decoration-[1px] underline-offset-4">Variables to JSON <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>',
          content: 'Export your Figma variables directly to JSON. I like this plugin specifically for the way it captures variable scope and formats the JSON to be used with Style Dictionary.'
        },
        {
          title: '<a href="https://www.figma.com/community/plugin/1254026844894007809/variables-manager-reorder-and-copy-variables-between-files" target="_blank" rel="noopener noreferrer" class="text-body-lg font-semibold inline-flex items-center gap-2 hover:text-accent transition-colors underline decoration-[1px] underline-offset-4">Variables Manager<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>',
          content: 'Copy specific variable sets between files. Unfortunately, Figma does not have an easy way to manage variables across files. I used this plugin to copy only the variables that we extended into our custom theme. This step has already been done with the included Figma Demo files.'
        },
        {
          title: '<a href="https://www.figma.com/community/plugin/1334258818515407420/swap-variables" target="_blank" rel="noopener noreferrer" class="text-body-lg font-semibold inline-flex items-center gap-2 hover:text-accent transition-colors underline decoration-[1px] underline-offset-4">Swap Variables<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>',
          content: 'Swap variable references from remotely imported library components to new custom theme. There are a ton of plugins and workflows for copying variables between files. I found this specific workflow and plugin set does exactly what I need it to do.',
          images: [
            {
              url: '/images/design-system/plugin-variables-json.png',
              alt: 'Variables to JSON plugin interface',
              // caption: 'Variables to JSON plugin interface showing the export options'
            },
            {
              url: '/images/design-system/plugin-variables-manager.png',
              alt: 'Variables Manager plugin interface',
              // caption: 'Variables Manager plugin interface for managing and organizing design tokens'
            },
            {
              url: '/images/design-system/plugin-swap-variables.png',
              alt: 'Swap Variables plugin interface',
              // caption: 'Swap Variables plugin interface for replacing variables across styles'
            }
          ],
          caption: 'There are a ton of plugins and workflows for copying variables between files. I found this specific workflow and plugin set does exactly what I need it to do.'
        }
      ]
    },

    {
      type: 'content',
      title: 'Example Layouts',
      content: 'Below are examples of different image layouts supported in the design system.',
      subsections: [
        {
          title: 'Single Image Example',
          content: 'This example shows a single image with a caption. The image spans the full width of the container.',
          image: {
            url: '/images/design-system/plugin-variables-json.png',
            alt: 'Variables to JSON plugin interface',
            caption: 'The Variables to JSON plugin provides a simple interface for exporting Figma variables'
          }
        },
        {
          title: 'Side by Side Comparison',
          content: 'This example shows two images side by side, perfect for before/after comparisons or showing related content.',
          images: [
            {
              url: '/images/design-system/plugin-variables-manager.png',
              alt: 'Variables Manager interface',
              caption: 'Variables Manager: Organize and copy variables between files'
            },
            {
              url: '/images/design-system/plugin-swap-variables.png',
              alt: 'Swap Variables interface',
              caption: 'Swap Variables: Replace variable references across components'
            }
          ]
        }
      ]
    }


  ] as Section[]
}; 