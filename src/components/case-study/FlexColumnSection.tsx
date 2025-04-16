import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/Lightbox";
import { Banner } from "@/components/ui/banner";
import { FlexColumnSection as FlexColumnSectionType, Subsection } from '@/data/types';

interface KeyPointsListProps {
  points: string[];
}

function KeyPointsList({ points }: KeyPointsListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {points.map((point, index) => (
        <li key={index} className="text-body-lg text-foreground flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {point}
        </li>
      ))}
    </ul>
  );
}

interface ItemProps {
  title: string;
  content: string;
  keyPoints?: string[];
  variant?: 'warning' | 'info' | 'default';
  image?: {
    url: string;
    alt: string;
    caption?: string;
  };
  images?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  caption?: string;
}

function Item({ title, content, keyPoints, image, images, caption, variant = 'default' }: ItemProps) {
  return (
    <section className="mb-4">
      <div className="flex flex-col gap-2">
        {title && (
          <div 
            className="text-display-sm text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[1px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent [&>a]:inline-flex [&>a]:items-center [&>a]:gap-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {variant !== 'default' ? (
          <Banner variant={variant}>{content}</Banner>
        ) : (
          <div 
            className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent" 
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        {keyPoints && <KeyPointsList points={keyPoints} />}
        {image && (
          <div className="mt-4">
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
        {images && images.length > 0 && (
          <div className="mt-4">
            <Lightbox images={images} />
            {caption && (
              <p className="caption text-muted-foreground mt-4 text-center max-w-lg m-auto">{caption}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

interface ItemsListProps {
  items: ItemProps[];
}

function ItemsList({ items }: ItemsListProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map(item => (
        <Item key={item.title} {...item} />
      ))}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  content: string;
  variant?: 'warning' | 'info' | 'default';
}

function SectionHeader({ title, content, variant = 'default' }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div 
        className="text-display-md md:text-display-lg text-foreground"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {variant !== 'default' ? (
        <Banner variant={variant}>{content}</Banner>
      ) : (
        <div 
          className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[1px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}

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