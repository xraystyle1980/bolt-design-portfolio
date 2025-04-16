import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/Lightbox";
import { Subsection } from '@/data/types';

interface FlexColumnSectionProps {
  title: string;
  content: string;
  items?: Subsection[];
}

export function FlexColumnSection({ title, content, items = [] }: FlexColumnSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-display-md text-foreground">{title}</h3>
        <p className="text-body-lg text-foreground">{content}</p>
      </div>
      
      {items && items.length > 0 && (
        <div className="flex flex-col gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {item.title && (
                <div 
                  className="text-display-sm text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[1px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent [&>a]:inline-flex [&>a]:items-center [&>a]:gap-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              )}
              {item.content && (
                <div 
                  className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              )}
              {item.images && item.images.length > 0 && (
                <div className="flex flex-col gap-4">
                  {item.images[0].caption ? (
                    <div className={cn(
                      "grid gap-4 md:gap-8",
                      item.images.length === 2 && "grid-cols-1 md:grid-cols-2"
                    )}>
                      {item.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="flex flex-col gap-2">
                          <Lightbox 
                            src={image.url} 
                            alt={image.alt} 
                            className="w-full h-auto rounded-2xl"
                          />
                          {image.caption && (
                            <p className="text-body-sm text-muted-foreground text-center">{image.caption}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className={cn(
                        "grid gap-4 md:gap-8",
                        item.images.length === 2 && "grid-cols-1 md:grid-cols-2",
                        item.images.length === 3 && "grid-cols-1 md:grid-cols-3"
                      )}>
                        {item.images.map((image, imageIndex) => (
                          <Lightbox 
                            key={imageIndex}
                            src={image.url} 
                            alt={image.alt} 
                            className="w-full h-auto rounded-2xl"
                          />
                        ))}
                      </div>
                      {item.caption && (
                        <p className="text-body-sm text-muted-foreground text-center">{item.caption}</p>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 