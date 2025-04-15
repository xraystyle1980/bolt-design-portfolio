// Base types for common elements
export type HtmlString = string;

export interface BaseSection {
  type: string;
  title: HtmlString;
  content: HtmlString;
  layout?: 'wide' | 'narrow';
}

export interface Subsection {
  title: HtmlString;
  content: HtmlString;
  keyPoints?: string[];
  image?: {
    url: string;
    alt: string;
    caption?: string;
  };
  images?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
}

export interface Step {
  title: string;
  content: string;
  keyPoints?: string[];
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

export interface Image {
  url: string;
  alt?: string;
  caption?: string;
}

export interface ContentSection extends BaseSection {
  type: 'content';
  subsections?: {
    title: HtmlString;
    content: HtmlString;
    keyPoints?: string[];
    image?: {
      url: string;
      alt: string;
      caption?: string;
    };
  }[];
}

export interface GallerySection extends BaseSection {
  type: 'gallery';
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
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
  resources: Resource[];
}

export type Section = ContentSection | GallerySection | ResourceSection;

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
  layout?: 'single' | 'split';
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