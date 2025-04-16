import { InstructionSection as InstructionSectionType } from '@/data/types';
import { ExternalLink } from 'lucide-react';
import { Banner } from '@/components/ui/banner';

/**
 * @deprecated Use GridLayoutSection instead. This component will be removed in a future release.
 */
export function InstructionSection({ 
  title, 
  content, 
  image, 
  link, 
  variant = 'default' 
}: InstructionSectionType) {
  if (variant === 'info') {
    return (
      <section className="flex flex-col gap-8">
        <Banner variant="info">
          {content}
        </Banner>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text content */}
        <div className="flex flex-col gap-4">
          {title && <h2 className="text-display-md text-foreground">{title}</h2>}
          {variant === 'warning' ? (
            <Banner>{content}</Banner>
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
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto rounded-lg border border-border"
            />
          </div>
        )}
      </div>
    </section>
  );
} 