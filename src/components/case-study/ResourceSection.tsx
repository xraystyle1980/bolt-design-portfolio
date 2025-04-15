import { Section } from '@/data/types';
import { Github, ExternalLink, Figma } from 'lucide-react';

interface ResourceSectionProps {
  section: Extract<Section, { type: 'resources' }>;
}

export function ResourceSection({ section }: ResourceSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-display-md mb-8">{section.title}</h2>
      <div className="flex flex-col gap-6 md:gap-8">
        {section.resources.map((resource) => (
          <div key={resource.url} className="rounded-xl border border-border bg-card">
            {/* Header with resource name and link */}
            <div className="flex items-center gap-3 p-6 border-b border-border">
              {resource.type === 'github' ? (
                <Github className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Figma className="h-5 w-5 text-muted-foreground" />
              )}
              <div className="flex items-center gap-2">
                <span className="text-body-lg text-muted-foreground">
                  {resource.type === 'github' ? 'GitHub Repository /' : 'Figma /'}
                </span>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-lg font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 underline decoration-[1px] underline-offset-4"
                >
                  {resource.title}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Description and stats */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <p className="text-body-md text-muted-foreground">
                  {resource.description}
                </p>
                
                {resource.type === 'figma' && resource.image && (
                  <div className="w-full md:w-48 flex-shrink-0 rounded-lg overflow-hidden border border-border">
                    <img
                      src={resource.image}
                      alt={`Preview of ${resource.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 