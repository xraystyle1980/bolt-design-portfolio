// Base types for common elements
export type HtmlString = string;

export interface BaseSection {
  type: 'gallery' | 'resources' | 'flex-column' | 'grid-layout' | 'content' | 'process' | 'narrative' | 'instruction';
  layout?: 'wide' | 'narrow';
}

// Shared types
export interface Image {
  url: string;
  alt: string;
  caption?: string;
  videoUrl?: string;
  aspectRatio?: string;
}

export interface Link {
  text: string;
  url: string;
}

export interface Subsection {
  title?: string;
  content?: string;
  keyPoints?: string[];
  variant?: 'warning' | 'info' | 'default';
  image?: Image;
  images?: Image[];
  caption?: string;
  videoUrl?: string;
  aspectRatio?: string;
  resources?: Resource[];
  alignContent?: 'start' | 'center';
  link?: Link;
  subsections?: Subsection[];
}

// Section types
export interface FlexColumnSection extends BaseSection {
  type: 'flex-column';
  title: string;
  content: string;
  variant?: 'warning' | 'info' | 'default';
  items?: Subsection[];
  className?: string;
}

export interface GridLayoutSection extends BaseSection {
  type: 'grid-layout';
  title?: string;
  content: string;
  variant?: 'warning' | 'info' | 'default';
  image?: Image;
  link?: Link;
  className?: string;
  layout?: 'wide' | 'narrow';
}

export interface GallerySection extends BaseSection {
  type: 'gallery';
  title: HtmlString;
  content: HtmlString;
  smallTitle?: string;
  layout?: 'wide' | 'narrow';
  className?: string;
  images: Image[];
}

export interface Resource {
  type: 'github' | 'figma';
  title: string;
  description: string;
  url: string;
  lastUpdated?: string;
  image?: string;
}

export interface ResourceSection extends BaseSection {
  type: 'resources';
  title: HtmlString;
  content: HtmlString;
  resources: Resource[];
}

export interface ContentSection extends BaseSection {
  type: 'content';
  title: string;
  content: string;
  smallTitle?: string;
  items?: Subsection[];
  subsections?: Subsection[];
  layout?: 'wide' | 'narrow';
}

export interface ProcessSection extends BaseSection {
  type: 'process';
  title: string;
  content: string;
  items?: Subsection[];
  steps?: Subsection[];
  layout?: 'wide' | 'narrow';
}

export interface NarrativeSection extends BaseSection {
  type: 'narrative';
  title: string;
  content: string;
  items?: Subsection[];
  subsections?: Subsection[];
  layout?: 'wide' | 'narrow';
}

export interface InstructionSection extends BaseSection {
  type: 'instruction';
  title: string;
  content: string;
  items?: Subsection[];
  image?: Image;
  link?: Link;
  variant?: 'warning' | 'info' | 'default';
  layout?: 'wide' | 'narrow';
}

// Combined section type
export type Section = 
  | FlexColumnSection 
  | GridLayoutSection
  | GallerySection 
  | ResourceSection
  | ContentSection
  | ProcessSection
  | NarrativeSection
  | InstructionSection;

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  link: string;
  description: string;
  imageUrl: string;
  heroImage: string;
  leftImage?: string;
  rightImage?: string;
  singleImage?: string;
  videoUrl?: string;
  heroSubTitle: string;
  role: string;
  team: string;
  challenge: {
    title: string;
    content: string;
    subchallenges?: Array<{
      title: string;
      content: string;
    }>;
  };
  solution: {
    title: string;
    content: string;
    subsolutions?: Array<{
      title: string;
      content: string;
    }>;
  };
  sections: Section[];
  technologies: string[];
  outcomes: Array<{
    type: 'outcome';
    title: string;
    content: string;
    metrics: Array<{ label: string; value: string }>;
  }>;
  contributions: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  layout?: 'single' | 'split' | 'double';
}

export interface ProcessStep {
  title: string;
  content: string;
  image?: {
    url: string;
    alt: string;
    caption?: string;
  };
  items?: Array<{
    title: string;
    description: string;
    link?: string;
    image?: {
      url: string;
      alt: string;
      caption?: string;
    };
  }>;
} 