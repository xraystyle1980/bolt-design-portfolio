import { cn } from "@/lib/utils";

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
}

function Item({ title, content, keyPoints }: ItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-display-sm text-foreground">{title}</h3>
      <p className="text-body-lg text-foreground">{content}</p>
      {keyPoints && <KeyPointsList points={keyPoints} />}
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
      <h2 className="text-display-md md:text-display-lg text-foreground">
        {title}
      </h2>
      <p className="text-body-lg text-foreground">
        {content}
      </p>
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
    <div className={cn("flex flex-col gap-10", className)}>
      <SectionHeader title={title} content={content} />
      {items && <ItemsList items={items} />}
    </div>
  );
} 