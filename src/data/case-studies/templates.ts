import { Project, NarrativeSection, ProcessSection, OutcomeSection, GallerySection, ComparisonSection } from '../types';

// Template for a narrative-focused case study
export const narrativeTemplate: Partial<Project> = {
  layout: 'narrative',
  sections: [
    {
      type: 'narrative',
      title: 'Section Title',
      content: 'Main content here...',
      subsections: [
        {
          title: 'Subsection Title',
          content: 'Subsection content...',
          keyPoints: [
            'Key point 1',
            'Key point 2',
            'Key point 3'
          ]
        }
      ]
    } as NarrativeSection
  ]
};

// Template for a process-focused case study
export const processTemplate: Partial<Project> = {
  layout: 'process',
  sections: [
    {
      type: 'process',
      title: 'Process Title',
      content: 'Process overview...',
      steps: [
        {
          title: 'Step Title',
          content: 'Step content...',
          keyPoints: [
            'Key point 1',
            'Key point 2',
            'Key point 3'
          ]
        }
      ]
    } as ProcessSection
  ]
};

// Template for a before/after comparison case study
export const comparisonTemplate: Partial<Project> = {
  layout: 'comparison',
  sections: [
    {
      type: 'comparison',
      title: 'Comparison Title',
      content: 'Comparison overview...',
      before: {
        title: 'Before',
        content: 'Before state...',
        image: 'before-image-url'
      },
      after: {
        title: 'After',
        content: 'After state...',
        image: 'after-image-url'
      }
    } as ComparisonSection
  ]
};

// Template for a gallery-focused case study
export const galleryTemplate: Partial<Project> = {
  layout: 'gallery',
  sections: [
    {
      type: 'gallery',
      title: 'Gallery Title',
      content: 'Gallery overview...',
      images: [
        {
          url: 'image-url-1',
          caption: 'Image caption 1'
        },
        {
          url: 'image-url-2',
          caption: 'Image caption 2'
        }
      ]
    } as GallerySection
  ]
};

// Template for a mixed layout case study
export const mixedTemplate: Partial<Project> = {
  layout: 'mixed',
  sections: [
    {
      type: 'narrative',
      title: 'Narrative Section',
      content: 'Narrative content...',
      subsections: [
        {
          title: 'Subsection',
          content: 'Subsection content...',
          keyPoints: ['Key point 1', 'Key point 2']
        }
      ]
    } as NarrativeSection,
    {
      type: 'process',
      title: 'Process Section',
      content: 'Process content...',
      steps: [
        {
          title: 'Step',
          content: 'Step content...',
          keyPoints: ['Key point 1', 'Key point 2']
        }
      ]
    } as ProcessSection,
    {
      type: 'outcome',
      title: 'Outcome Section',
      content: 'Outcome content...',
      metrics: [
        {
          label: 'Metric 1',
          value: 'Value 1'
        }
      ]
    } as OutcomeSection
  ]
}; 