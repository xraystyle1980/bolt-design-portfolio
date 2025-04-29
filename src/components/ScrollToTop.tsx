import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm",
        "md:bottom-12 md:right-12 md:w-12 md:h-12",
        "shadow-lg",
        "z-50",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
    </Button>
  );
} 