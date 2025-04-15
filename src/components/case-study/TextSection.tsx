import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/Lightbox";

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

function Item({ title, content, keyPoints, image, images, caption }: ItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div 
        className="text-display-sm text-foreground"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div 
        className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent" 
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {keyPoints && <KeyPointsList points={keyPoints} />}
      {image && (
        <div className="mt-4">
          <img 
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
          <div className={cn(
            "grid gap-4",
            images.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
          )}>
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden content-center">
                <Lightbox 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                />
                {img.caption && (
                  <p className="text-body-sm text-muted-foreground mt-2 text-center">{img.caption}</p>
                )}
              </div>
            ))}
          </div>
          {caption && (
            <p className="caption text-muted-foreground mt-4 text-center max-w-lg m-auto">{caption}</p>
          )}
        </div>
      )}
    </div>
  );
}

interface ItemsListProps {
  items: ItemProps[];
}

function ItemsList({ items }: ItemsListProps) {
  return (
    <div className="flex flex-col gap-10">
      {items.map(item => (
        <Item key={item.title} {...item} />
      ))}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  content: string;
}

function SectionHeader({ title, content }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div 
        className="text-display-md md:text-display-lg text-foreground"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div 
        className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[1px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export interface TextSectionProps {
  title: string;
  content: string;
  items?: ItemProps[];
  className?: string;
}

export function TextSection({ title, content, items, className }: TextSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <SectionHeader title={title} content={content} />
      {items && <ItemsList items={items} />}
    </div>
  );
} 