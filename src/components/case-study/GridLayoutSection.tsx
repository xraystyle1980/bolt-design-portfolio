import { ExternalLink } from 'lucide-react';
import { Banner } from '@/components/ui/banner';
import { Lightbox } from "@/components/Lightbox";
import { cn } from '@/lib/utils';
import { GridLayoutSection as GridLayoutSectionType, InstructionSection as InstructionSectionType, Subsection } from '@/data/types';

export interface GridLayoutSectionProps extends Omit<GridLayoutSectionType | InstructionSectionType, 'type'> {
  type?: 'grid-layout' | 'instruction';
  items?: Subsection[];
  className?: string;
}

export function GridLayoutSection({ 
  title, 
  content, 
  image, 
  link, 
  variant = 'default',
  className,
  items = []
}: GridLayoutSectionProps) {
  if (variant !== 'default' && !image) {
    return (
      <section className={cn("flex flex-col gap-8", className)}>
        <Banner variant={variant}>
          {content}
        </Banner>
      </section>
    );
  }

  return (
    <section className={cn("flex flex-col gap-8", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text content */}
        <div className="flex flex-col gap-4">
          {title && <h2 className="text-display-md text-foreground">{title}</h2>}
          {variant !== 'default' ? (
            <Banner variant={variant}>{content}</Banner>
          ) : (
            <div 
              className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {link && (
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-lg font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 underline decoration-[1px] underline-offset-4"
            >
              {link.text}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Image */}
        {image && (
          <div className="flex flex-col gap-4">
            <Lightbox 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-auto rounded-lg"
            />
            {image.caption && (
              <p className="text-body-sm text-muted-foreground mt-2 text-center">{image.caption}</p>
            )}
          </div>
        )}
      </div>

      {items && items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-2 p-6 rounded-2xl border ${
                variant === 'warning' ? 'bg-warning/10 border-warning' : 'bg-muted/10 border-border'
              }`}
            >
              {item.title && (
                <h4 className="text-display-sm text-foreground">{item.title}</h4>
              )}
              {item.content && (
                <p className="text-body-lg text-foreground">{item.content}</p>
              )}
              {item.image?.url && (
                <img 
                  src={item.image.url} 
                  alt={item.title || 'Section image'} 
                  className="w-full h-auto rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
} 