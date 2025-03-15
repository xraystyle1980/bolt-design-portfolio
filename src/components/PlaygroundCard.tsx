import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from './icons/arrow-right';

interface PlaygroundCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export function PlaygroundCard({ imageUrl, title, description, link }: PlaygroundCardProps) {
  return (
    <Link to={link} className="group flex flex-col gap-6">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-200">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-display-sm text-neutral-500">{title}</h3>
          <p className="text-body-lg text-neutral-800 max-w-xl">{description}</p>
        </div>
        <div className="flex items-center justify-center rounded-[100px] border border-solid border-gray-950 px-7 py-[15px] transition-colors group-hover:bg-neutral-800 group-hover:text-white">
          <ArrowRight className="h-6 w-6" />
        </div>
      </div>
    </Link>
  );
} 