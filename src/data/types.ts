// Base types for common elements
export interface BaseSection {
  title: string;
  content: string;
  layout?: 'default' | 'wide' | 'narrow';
}

export interface ContentSection extends BaseSection {
  type: 'content';
  subsections?: {
    title: string;
    content: string;
    keyPoints?: string[];
  }[];
}

export interface ProcessSection extends BaseSection {
  type: 'process';
  steps: {
    title: string;
    content: string;
    keyPoints?: string[];
  }[];
}

export interface GallerySection extends BaseSection {
  type: 'gallery';
  images: {
    url: string;
    alt?: string;
    caption?: string;
  }[];
}

export interface ComparisonSection extends BaseSection {
  type: 'comparison';
  before: {
    title: string;
    content: string;
    image: string;
  };
  after: {
    title: string;
    content: string;
    image: string;
  };
}

export interface NarrativeSection extends BaseSection {
  type: 'narrative';
  subsections?: {
    title: string;
    content: string;
    keyPoints?: string[];
  }[];
}

export type Section = ContentSection | ProcessSection | GallerySection | ComparisonSection | NarrativeSection;

export interface OutcomeSection {
  title: string;
  content: string;
  metrics: Array<{ label: string; value: string }>;
}

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
  heroSubTitle?: string;
  role: string;
  team: string;
  challenge: {
    title: string;
    content: string;
    subchallenges?: {
      title: string;
      content: string;
    }[];
  };
  solution: {
    title: string;
    content: string;
    subsolutions?: {
      title: string;
      content: string;
    }[];
  };
  sections: Section[];
  technologies: string[];
  outcomes: OutcomeSection[];
  contributions: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  layout: 'single' | 'double' | 'triple';
} 