export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  technologies: string[];
}

export const articles: Article[] = [
  {
    id: 'articles-onboarder',
    title: 'Why I built Onboarder.design',
    description: 'From concept to launch, I wanted to build something, and specifically an AI‑driven tool, that would tackle a problem often overlooked in product development: user onboarding.',
    url: 'https://medium.com/@matttrice/why-i-built-onboarder-design-077362fc4305',
    publishedDate: '2024-01-15',
    technologies: ['AI', 'Figma', 'Design Tooling', 'Onboarding']
  },
  {
    id: 'articles-vibe-coding',
    title: 'How I Vibe Coded My Latest Portfolio',
    description: 'Vibe coding is all about intuition, creativity, and a bit of trial and error. It\'s a way of coding that leverages AI to assist in the coding process, allowing developers to describe their desired functionality in natural language while AI tools generate the code.',
    url: 'https://medium.com/@matttrice/how-i-vibe-coded-my-latest-portfolio-0fea8283b49c',
    publishedDate: '2023-11-22',
    technologies: ['AI', 'React', 'Three.js', 'GSAP', 'Cursor']
  },
  {
    id: 'articles-design-system-demo',
    title: 'Bridging Design and Code: Why I Built My Own Design System Demo',
    description: 'I created this demo not just to showcase design-to-code alignment — but to better understand the friction teams face when trying to scale systems. This was part personal growth, part educational tool.',
    url: 'https://medium.com/@matttrice/bridging-design-and-code-why-i-built-my-own-design-system-demo-1b3398551b8e',
    publishedDate: '2023-09-08',
    technologies: ['Design Systems', 'React', 'Storybook', 'Figma']
  }
];



