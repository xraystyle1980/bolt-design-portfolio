import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface TagsProps {
  tags?: string[];
  className?: string;
  justify?: 'start' | 'center' | 'end';
  mobileJustify?: 'start' | 'center' | 'end';
}

export function Tags({ tags = [], className, justify = 'start', mobileJustify = 'center' }: TagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={cn(
      'flex flex-wrap gap-2 md:gap-3',
      `justify-${mobileJustify} md:justify-${justify}`,
      className
    )}>
      {tags.map((tag, index) => (
        <Badge
          key={index}
          variant="muted"
          className="px-2 md:px-3 py-1 md:py-2"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
} 