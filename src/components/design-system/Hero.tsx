import { cn } from '@/lib/utils';

export function DesignSystemHero() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="max-w-2xl">
        <h2 className="text-display-lg md:text-display-xl mb-6 text-foreground">
          Design System Demo
        </h2>
        <p className="text-body-lg md:text-body-xl text-muted-foreground mb-8">
          A simplified workflow for exporting design tokens from Figma to shadcn/ui and TailwindCSS
        </p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg">
            <h3 className="text-display-xs mb-2">Figma</h3>
            <p className="text-body-sm">Design tokens and variables</p>
          </div>
          <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
            <h3 className="text-display-xs mb-2">Development</h3>
            <p className="text-body-sm">shadcn/ui + TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
} 