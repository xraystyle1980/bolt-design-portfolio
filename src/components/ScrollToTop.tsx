import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-16 rounded-full w-12 h-8 md:w-14 md:h-10 bg-background text-foreground border-border hover:bg-primary hover:text-primary-foreground transition-[transform,colors,background-color,border-color] duration-200 ease-custom-spring hover:scale-[1.02]"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
    </Button>
  );
} 