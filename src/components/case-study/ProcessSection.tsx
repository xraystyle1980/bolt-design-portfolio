import { Section } from '@/data/types';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ProcessSectionProps {
  section: Extract<Section, { type: 'process' }>;
}

export function ProcessSection({ section }: ProcessSectionProps) {
  return (
    <section className="py-20 border-b border-border">
      <div className="container">
        <div className="max-w-[70%] mb-12">
          <h2 className="text-display-lg mb-6">{section.title}</h2>
          <p className="text-body-lg text-muted-foreground">{section.content}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {section.steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="text-display-sm">{step.title}</h3>
              </div>
              <p className="text-body-md text-muted-foreground whitespace-pre-line">{step.content}</p>
              
              {step.title === 'Essential Plugins' && (
                <div className="pt-4 space-y-2">
                  <a 
                    href="https://www.figma.com/community/plugin/1254026844894007809/variables-manager-reorder-and-copy-variables-between-files" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline"
                  >
                    Variables Manager <ExternalLink className="inline-block h-3 w-3 ml-1" />
                  </a>
                  <a 
                    href="https://www.figma.com/community/plugin/1468186413196022101/variables-to-json" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline"
                  >
                    Variables to JSON <ExternalLink className="inline-block h-3 w-3 ml-1" />
                  </a>
                  <a 
                    href="https://www.figma.com/community/plugin/1334258818515407420/swap-variables" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline"
                  >
                    Swap Variables <ExternalLink className="inline-block h-3 w-3 ml-1" />
                  </a>
                  <a 
                    href="https://www.figma.com/community/file/1490096029662140932/ds-demo-theme-figma-to-shadcn-ui-tailwind" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline mt-4"
                  >
                    Figma Theme File <ExternalLink className="inline-block h-3 w-3 ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 