import { Project } from '../types';

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
  heroSubTitle: 'Leading product design and execution to redesign a failing legacy app – driving growth, aligning with brand, and reclaiming market share.',
  role: 'Lead Product Designer',
  team: '1 Product Designer (me), 1 Brand Designer, 1 Creative Director, 4 Engineers, 1 Product Manager',
  meta: {
    title: 'Decent App Redesign | Matt Trice Design',
    description: 'Leading product design and execution to redesign a failing legacy app – driving growth, aligning with brand, and reclaiming market share',
    ogImage: 'https://trice.design/meta/OG-decent-app.png',
    ogUrl: 'https://trice.design/case-study/decent-app',
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterSite: '@tricedesign',
    twitterCreator: '@tricedesign'
  },


  sections: [
    {
      type: 'gallery',
      smallTitle: 'The Challenge',
      title: 'A Need for Evolution',
      content: 'Fractal, the original product, was falling short of user expectations. The decentralized governance space had evolved, and Fractal\'s rigid smart contract structures limited adoption. Users found it complex, inflexible, and outdated.<br /><br />I led the product design aspect of the transition to Decent, working closely with product and engineering. My role was pivotal in shaping an intuitive, adaptable experience while ensuring that the experience met both user and business needs. My team leaned on me to bring structure to an ambiguous problem space, translating research into action and ensuring that our design decisions balanced usability with technical feasibility. A key challenge was bridging the usability gap between Web2 and Web3 by integrating familiar business features into the platform, making decentralized governance more accessible to traditional organizations.',
      layout: '1-col',
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
      type: 'content',
      smallTitle: 'Approach & Key Contributions',
      title: 'Strategic Repositioning & Product Redesign',
      content: 'Our approach focused on collaboration and iteration, ensuring that every design decision was validated through user feedback and technical feasibility.',
      subsections: [
        {
          title: 'Research & Discovery',
          content: 'Conducted user interviews and analyzed existing workflows to identify pain points and opportunities for improvement.'
        },
        {
          title: 'Design & Development',
          content: 'Worked closely with engineers in a pair-programming-inspired design process, ensuring usability was considered at every stage.'
        },
        {
          title: 'Testing & Refinement',
          content: 'Conducted weekly user feedback sessions, testing prototypes to uncover pain points and refine key flows.'
        },
        {
          title: 'Biggest Challenge',
          titleVariant: 'large',
          content: 'Rethinking traditional UX within the constraints of blockchain technology. I had to bridge the gap between user expectations and technical limitations, advocating for usability improvements while ensuring feasibility for engineers. This required a mix of strategic negotiation, creative problem-solving, and a deep understanding of decentralized systems. By integrating traditional business features into the platform, I helped make Web3 governance feel more familiar and intuitive for users transitioning from Web2 environments.'
        }
      ]
    },


    {
      type: 'gallery',
      layout: '2-col',
      images: [
        {
          url: '/images/decent-app/mobile-variants.png',
          alt: 'Mobile variants of possible home page designs',
          caption: 'Mobile variants of possible home page designs'
        },
        {
          url: '/images/decent-app/home-page-a.png',
          alt: 'Desktop variant designs exporing search bar placement',
          caption: 'Desktop variant designs exporing search bar placement'
        },
        {
          url: '/images/decent-app/home-page-b.png',
          alt: 'Exploring multiple ways to present the features',
          caption: 'Exploring multiple ways to present the features'
        },
        {
          url: '/images/decent-app/home-page-e.png',
          alt: 'Placing emphasis on search',
          caption: 'Placing emphasis on search'
        }
      ]
    },


    {
      type: 'content',
      smallTitle: 'Approach & Key Contributions',
      title: 'Collaborative & Iterative Design Process',
      content: 'Working closely with the Head of Design, Product, and Engineering teams, I translated user research into clear, actionable design decisions, navigated complex UX challenges while preserving a familiar user experience, and ensured that designs were both scalable and technically feasible.',
      subsections: [
        {
          title: 'Refining UX through engineering collaboration',
          content: 'I worked closely with engineers in a pair-programming-inspired design process, ensuring usability was considered at every stage.'
        },
        {
          title: 'Validating through rapid feedback loops',
          content: 'I conducted weekly user feedback sessions, testing prototypes to uncover pain points and refine key flows.'
        },
        {
          title: 'Ensuring accessibility & intuitive interactions',
          content: 'I led multiple rounds of prototyping & usability testing, iterating designs based on real-world friction.'
        },
        {
          title: 'What was the hardest part?',
          titleVariant: 'large',
          content: 'Designing for decentralized governance was complex and unpredictable—each DAO had unique needs. Balancing customization with simplicity took multiple iterations and deep collaboration with engineers.'
        }
      ]
    },


    {
      type: 'content',
      smallTitle: 'Approach & Key Contributions',
      title: 'Scalable Design System & Brand Evolution',
      content: 'Design systems thrive on continuous communication—early and often. Supporting the builders, tending to the system like a garden, and finding overlapping touchpoints between teams were key to ensuring a smooth collaboration. Documenting these workflows became just as important as the designs themselves, creating a shared language across teams.',
      subsections: [
        {
          title: 'Building a scalable foundation',
          content: 'I based the UI component library on classes and properties from Chakra UI, ensuring alignment and easier handoff to the engineering team.'
        },
        {
          title: 'Collaborating with brand designers',
          content: 'I worked closely with Decent\'s brand and visual designers to translate their new identity into a functional UI, ensuring the design system aligned with their branding principles.'
        },
        {
          title: 'Maintaining design consistency',
          content: 'I contributed to comprehensive design guidelines and documentation, ensuring alignment across teams and providing org-wide direction. Specifically, my contribution was creating and maintaining a Notion database for components, documenting their usage and properties.'
        },
        {
          title: 'What mistakes cost time & energy?',
          titleVariant: 'large',
          content: 'Early on, we underestimated the complexity of integrating business features into a blockchain based governance app. I had to rework key components after realizing that certain design decisions wouldn\'t scale effectively.'
        }
      ]
    },


    {
      type: 'gallery',
      layout: '1-col',
      images: [
        {
          url: '/images/decent-app/decent-withdraw-desktop-hb.mp4',
          alt: 'Prototyping the withdrawal flow',
          caption: 'Prototyping the withdrawal flow',
          videoUrl: '/images/decent-app/decent-withdraw-desktop-hb.mp4',
          aspectRatio: '16/10.41'
        }
      ]
    },


    {
      type: 'content',
      smallTitle: 'Approach & Key Contributions',
      title: 'Quality Assurance & Continuous Improvement',
      content: 'I championed internal QA at every opportunity, advocating for thorough design reviews and detailed feedback to ensure a polished final product. As the company formalized weekly QA sessions, I actively supported the process, reinforcing its value across teams.',
      subsections: [
        {
          title: 'Pixel-perfect execution',
          content: 'I provided detailed GitHub design feedback, working directly with engineers to ensure designs were accurately translated into code. This facilitated rapid iteration and created a strong feedback loop between design and development.'
        },
        {
          title: 'Post-launch iteration',
          content: 'I analyzed user behavior and usability tests to make continuous improvements, refining the experience based on real-world usage.'
        },
        {
          title: 'Was this a successful project?',
          titleVariant: 'large',
          content: 'Yes—while the transition was challenging, Decent successfully launched with a scalable and user-friendly design. My work helped bridge the gap between Web3 and Web2 users, making governance easier to adopt, more intuitive, and visually aligned with the brand.'
        }
      ]
    },


    {
      type: 'gallery',
      layout: '1-col',
      containerHidden: true,
      images: [
        {
          url: '/images/decent-app/decent-roles-mobile-hb.mp4',
          alt: 'Prototyping the withdrawal flow',
          caption: 'Prototyping the withdrawal flow',
          videoUrl: '/images/decent-app/decent-roles-mobile-hb.mp4',
          aspectRatio: '3/3'
        }
      ]
    },
   

    {
      type: 'content',
      smallTitle: 'Final Thoughts',
      title: 'A Strategic Transformation',
      content: 'The shift from Fractal to Decent was more than a redesign—it was a strategic transformation that redefined the product\'s value. Through user insights, iterative design, and seamless cross-functional collaboration, we built a scalable DAO toolkit that meets the evolving needs of decentralized governance. A major success was integrating traditional business features to make decentralized governance more accessible to Web2 users.',
    },


    {
      type: 'content',
      title: 'Key Outcomes',
      content:'This section highlights the measurable impact of my contributions, from streamlining collaboration with engineers to refining the user experience through iterative improvements. These outcomes reflect both the design execution and the systems thinking behind the work.',
      subsections: [
        {
          title: 'Increased adoption',
          content: 'I provided detailed GitHub design feedback, working directly with engineers to ensure designs were accurately translated into code. This facilitated rapid iteration and created a strong feedback loop between design and development.'
        },
        {
          title: 'Enhanced UX',
          content: 'I analyzed user behavior and usability tests to make continuous improvements, refining the experience based on real-world usage.'
        },
        {
          title: 'My Contributions',
          content: `<ul class="list-disc pl-4 space-y-2 text-body-lg">
                      <li>I defined the UX vision, translating research into actionable design improvements.</li>
                      <li>I led the development of a scalable UI system for long-term flexibility.</li>
                      <li>I aligned branding and UI to reflect Decent's new identity.</li>
                      <li>I streamlined governance workflows to reduce friction for DAOs.</li>
                      <li>I integrated QA workflows and iterated post-launch for continuous improvement.</li>
                    </ul>
                    <div class="mt-8 text-body-lg md:text-body-xl">Decent is now a more intuitive, flexible, and scalable product, empowering DAOs to govern effectively. This case study highlights my ability to navigate ambiguity, balance user needs with technical constraints, and drive strategic design impact.</div>`
        }
      ]
    },
  ],


  technologies: ['Chakra UI', 'Figma', 'Design Tokens', 'Github', 'Notion'],
  testimonial: {
    quote: 'Matt was instrumental in translating our vision into a clear, intuitive product. His design execution and close collaboration with engineering made a huge impact on the final experience.',
    author: 'Nicolaus Sherrill',
    role: 'Head of Design at Decent'
  }
}; 