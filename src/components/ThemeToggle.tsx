import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-12 h-8 md:w-14 md:h-10 bg-background text-foreground border-border hover:bg-primary hover:text-primary-foreground transition-[transform,colors,background-color,border-color] duration-200 ease-custom-spring hover:scale-[1.02]"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 md:h-6 md:w-6" />
      ) : (
        <Sun className="h-5 w-5 md:h-6 md:w-6" />
      )}
    </Button>
  );
} 