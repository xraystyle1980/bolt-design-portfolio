import { cn } from '@/lib/utils';
import { ContentSection as ContentSectionType, Subsection } from '@/data/types';

export function ContentSection({ title, content, subsections = [], layout = 'narrow' }: ContentSectionType) {
  return (
    <div className={cn(
      "flex flex-col gap-8",
      layout === 'wide' && "col-span-3",
      layout === 'narrow' && "col-span-2"
    )}>
      <div className="flex flex-col gap-2">
        <h3 className="text-display-md text-foreground">{title}</h3>
        <p className="text-body-lg text-foreground">{content}</p>
      </div>
      {subsections && subsections.length > 0 && (
        <div className="flex flex-col gap-8">
          {subsections.map((subsection: Subsection, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              {subsection.title && (
                <h4 className="text-display-sm text-foreground">{subsection.title}</h4>
              )}
              {subsection.content && (
                <p className="text-body-lg text-foreground">{subsection.content}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 