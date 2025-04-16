import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/Lightbox";

/**
 * @deprecated Use FlexColumnSection instead. This component will be removed in a future release.
 */
export interface TextSectionProps {
  title: string;
  content: string;
  items?: ItemProps[];
  className?: string;
}

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
    <section className="mb-4" id="hoody">
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
}

function SectionHeader({ title, content }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
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

export function TextSection({ title, content, items, className }: TextSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <SectionHeader title={title} content={content} />
      {items && <ItemsList items={items} />}
    </div>
  );
} 