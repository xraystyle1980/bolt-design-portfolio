// Base types for common elements
export type HtmlString = string;

export interface BaseSection {
  type: 'gallery' | 'resources' | 'flex-column' | 'grid-layout' | 'content' | 'process' | 'narrative' | 'instruction';
  layout?: '1-col' | '2-col' | '3-col';
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
  variant?: 'warning' | 'info' | 'default';
  titleVariant?: 'large' | 'default';
  image?: Image;
  images?: Image[];
  caption?: string;
  videoUrl?: string;
  aspectRatio?: string;
  resources?: Resource[];
  alignContent?: 'start' | 'center';
  link?: Link;
  subsections?: Subsection[];
  keyPoints?: string[];
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
}

export interface GallerySection extends BaseSection {
  type: 'gallery';
  title?: HtmlString;
  content?: HtmlString;
  smallTitle?: string;
  className?: string;
  containerHidden?: boolean;
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
}

export interface ProcessSection extends BaseSection {
  type: 'process';
  title: string;
  content: string;
  items?: Subsection[];
  steps?: Subsection[];
}

export interface NarrativeSection extends BaseSection {
  type: 'narrative';
  title: string;
  content: string;
  items?: Subsection[];
  subsections?: Subsection[];
}

export interface InstructionSection extends BaseSection {
  type: 'instruction';
  title: string;
  content: string;
  items?: Subsection[];
  image?: Image;
  link?: Link;
  variant?: 'warning' | 'info' | 'default';
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
  sections: Section[];
  technologies: string[];
  contributions?: string[];
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