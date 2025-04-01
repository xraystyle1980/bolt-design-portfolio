import { useState } from 'react';
import { cn } from '@/lib/utils';

const colorSchemes = [
  {
    name: 'Default',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    muted: 'bg-muted',
    accent: 'bg-accent'
  },
  {
    name: 'Vibrant',
    primary: 'bg-[#FF3366]',
    secondary: 'bg-[#33FF99]',
    muted: 'bg-[#F0F0F0]',
    accent: 'bg-[#9933FF]'
  },
  {
    name: 'Earthy',
    primary: 'bg-[#8B4513]',
    secondary: 'bg-[#556B2F]',
    muted: 'bg-[#F5DEB3]',
    accent: 'bg-[#CD853F]'
  }
];

const spacingSizes = ['gap-2', 'gap-4', 'gap-8', 'gap-12'];
const borderRadii = ['rounded-none', 'rounded-md', 'rounded-xl', 'rounded-full'];

export function DesignSystemHero() {
  const [currentScheme, setCurrentScheme] = useState(0);
  const [currentSpacing, setCurrentSpacing] = useState(1);
  const [currentRadius, setCurrentRadius] = useState(1);

  const scheme = colorSchemes[currentScheme];

  return (
    <div className="flex flex-col gap-8 p-8 h-full">
      <div className="flex gap-4 justify-center">
        <button 
          onClick={() => setCurrentScheme((prev) => (prev + 1) % colorSchemes.length)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Change Colors
        </button>
        <button 
          onClick={() => setCurrentSpacing((prev) => (prev + 1) % spacingSizes.length)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Change Spacing
        </button>
        <button 
          onClick={() => setCurrentRadius((prev) => (prev + 1) % borderRadii.length)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Change Radius
        </button>
      </div>

      <div className={cn("grid grid-cols-2 w-full h-full", spacingSizes[currentSpacing])}>
        <div className={cn("flex flex-col", spacingSizes[currentSpacing])}>
          <div className={cn("w-full aspect-square", scheme.primary, borderRadii[currentRadius])} />
          <div className={cn("w-full aspect-square", scheme.secondary, borderRadii[currentRadius])} />
        </div>
        <div className={cn("flex flex-col", spacingSizes[currentSpacing])}>
          <div className={cn("w-full aspect-square", scheme.accent, borderRadii[currentRadius])} />
          <div className={cn("w-full aspect-square", scheme.muted, borderRadii[currentRadius])} />
        </div>
      </div>
    </div>
  );
} 