import { cn } from '@/lib/utils';
import { ContentSection as ContentSectionType } from '@/data/types';
import { Subsection } from './Subsection';

export function ContentSection({ title, content, subsections, layout = 'narrow' }: ContentSectionType) {
  return (
    <section className="flex flex-col gap-8">
      <div className={cn('flex flex-col gap-4', layout === 'wide' ? 'max-w-none' : 'max-w-2xl')}>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {subsections && (
        <div className="flex flex-col gap-8">
          {subsections.map((subsection, index) => (
            <Subsection key={index} {...subsection} />
          ))}
        </div>
      )}
    </section>
  );
} 