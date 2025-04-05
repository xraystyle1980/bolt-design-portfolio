import { Section } from '@/data/types';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ComparisonSectionProps {
  section: Extract<Section, { type: 'comparison' }>;
}

export function ComparisonSection({ section }: ComparisonSectionProps) {
  return (
    <section className="py-20 border-b border-border">
      <div className="container">
        <div className="max-w-[70%] mb-12">
          <h2 className="text-display-lg mb-6">{section.title}</h2>
          <p className="text-body-lg text-muted-foreground">{section.content}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-display-sm">{section.before.title}</h3>
            <p className="text-body-md text-muted-foreground">{section.before.content}</p>
            {section.before.image && (
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src={section.before.image}
                  alt={section.before.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            {section.before.title === 'Figma Library' && (
              <a 
                href="https://www.figma.com/community/file/1490098810930924038/ds-demo-library-figma-to-shadcn-ui-tailwind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                View Figma Library <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-display-sm">{section.after.title}</h3>
            <p className="text-body-md text-muted-foreground">{section.after.content}</p>
            {section.after.image && (
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src={section.after.image}
                  alt={section.after.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            {section.after.title === 'Demo App' && (
              <a 
                href="https://github.com/xraystyle1980/ds-demo5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                View GitHub Repository <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 