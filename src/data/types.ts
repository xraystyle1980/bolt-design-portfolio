// Base types for common elements
export type HtmlString = string;

export interface BaseSection {
  type: 'content' | 'gallery' | 'resources' | 'process' | 'narrative' | 'instruction' | 'flex-column' | 'grid-layout';
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
}

// New section types
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
}

// Existing section types (preserved for backward compatibility)
export interface ContentSection extends BaseSection {
  type: 'content';
  title: HtmlString;
  content: HtmlString;
  layout?: 'wide' | 'narrow';
  subsections?: Subsection[];
}

export interface ProcessSection extends BaseSection {
  type: 'process';
  title: HtmlString;
  content: HtmlString;
  steps?: Subsection[];
}

export interface NarrativeSection extends BaseSection {
  type: 'narrative';
  title: HtmlString;
  content: HtmlString;
  subsections?: Subsection[];
}

export interface InstructionSection extends BaseSection {
  type: 'instruction';
  title?: HtmlString;
  content: HtmlString;
  variant?: 'warning' | 'info' | 'default';
  image?: Image;
  link?: Link;
  subsections?: Subsection[];
}

export interface GallerySection extends BaseSection {
  type: 'gallery';
  title: HtmlString;
  content: HtmlString;
  layout?: 'wide' | 'narrow';
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

// Combined section type
export type Section = 
  | ContentSection 
  | GallerySection 
  | ResourceSection 
  | ProcessSection 
  | NarrativeSection 
  | InstructionSection
  | FlexColumnSection
  | GridLayoutSection;

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