// Base types for common elements
export interface BaseSection {
  title: string;
  content: string;
  image?: string;
}

export interface KeyPointSection extends BaseSection {
  keyPoints?: string[];
}

export interface SubSection extends KeyPointSection {
  subsections?: SubSection[];
}

// Different section types for different layouts
export interface NarrativeSection extends BaseSection {
  type: 'narrative';
  subsections?: SubSection[];
}

export interface ProcessSection extends BaseSection {
  type: 'process';
  steps?: {
    title: string;
    content: string;
    keyPoints?: string[];
  }[];
}

export interface OutcomeSection extends BaseSection {
  type: 'outcome';
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface GallerySection extends BaseSection {
  type: 'gallery';
  images: {
    url: string;
    caption?: string;
  }[];
}

export interface ComparisonSection extends BaseSection {
  type: 'comparison';
  before: {
    title: string;
    content: string;
    image?: string;
  };
  after: {
    title: string;
    content: string;
    image?: string;
  };
}

// Union type for all possible section types
export type Section = 
  | NarrativeSection 
  | ProcessSection 
  | OutcomeSection 
  | GallerySection 
  | ComparisonSection;

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  heroImage: string;
  link: string;
  summary: string;
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
  outcomes?: {
    title: string;
    content: string;
    metrics?: {
      label: string;
      value: string;
    }[];
  }[];
  contributions?: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  layout?: 'narrative' | 'process' | 'gallery' | 'comparison' | 'mixed';
} 