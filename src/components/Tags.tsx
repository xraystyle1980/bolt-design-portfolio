import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface TagsProps {
  tags: string[];
  className?: string;
  justify?: 'start' | 'center' | 'end';
}

export function Tags({ tags, className, justify = 'center' }: TagsProps) {
  return (
    <div className={cn(`flex flex-wrap gap-3 justify-${justify}`, className)}>
      {tags.map((tag, index) => (
        <Badge
          key={index}
          variant="muted"
          className="text-body-sm md:text-body-md px-3 py-1.5 md:px-4 md:py-2"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
} 