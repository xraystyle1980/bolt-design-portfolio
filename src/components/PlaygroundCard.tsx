import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from './icons/arrow-right';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PlaygroundCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export function PlaygroundCard({ imageUrl, title, description, link }: PlaygroundCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="group aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted">
        <div className={cn(
          "relative h-full w-full",
          !imageLoaded && "image-loading"
        )}>
          <img 
            src={imageUrl} 
            alt={title}
            className={cn(
              "h-full w-full object-cover transition-transform duration-300",
              imageLoaded && "group-hover:scale-105"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className="flex items-start justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-display-sm text-accent">{title}</h3>
          <p className="text-body-lg max-w-xl">{description}</p>
        </div>
        <Link
          to={link}
          className="flex items-center justify-center rounded-[100px] border border-solid border-foreground px-7 py-[15px] transition-colors hover:bg-foreground hover:text-background"
        >
          <ArrowRight className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
} 