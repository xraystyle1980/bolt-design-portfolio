import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-8 h-8 md:w-10 md:h-10"
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