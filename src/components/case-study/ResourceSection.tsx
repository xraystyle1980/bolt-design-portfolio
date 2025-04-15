import { Section } from '@/data/types';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, Figma } from 'lucide-react';

interface ResourceSectionProps {
  section: Extract<Section, { type: 'resources' }>;
}

export function ResourceSection({ section }: ResourceSectionProps) {
  return (
    <section className="py-20 border-b border-border">
      <div className="container">
        <div className="max-w-[70%] mb-12">
          <h2 className="text-display-lg mb-6">{section.title}</h2>
          <p className="text-body-lg text-muted-foreground">{section.content}</p>
        </div>

        <div className="flex flex-col gap-4">
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
                    {resource.type === 'github' ? 'GitHub Repository /' : 'Figma Library /'}
                  </span>
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-lg font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    {resource.title}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Description and stats */}
              <div className="p-6">
                <p className="text-body-md text-muted-foreground mb-6">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm text-muted-foreground hover:text-foreground"
                  >
                    {resource.type === 'github' ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <Figma className="h-4 w-4" />
                    )}
                    View on {resource.type === 'github' ? 'GitHub' : 'Figma'}
                  </a>
                  
                  {resource.lastUpdated && (
                    <span className="text-body-sm text-muted-foreground">
                      Updated 3 days ago
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 