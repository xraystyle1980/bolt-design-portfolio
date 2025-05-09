import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import { Container } from '@/components/ui/container';
import { LottieLogo } from './LottieLogo';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  // Handle scroll detection for nav appearance
  useEffect(() => {
    // Function to check scroll position
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check initial scroll position
    checkScroll();

    // Add scroll listener
    window.addEventListener('scroll', checkScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    theme === 'dark' ? 'text-white' : 'text-neutral-900',
    {
      'bg-background/40 backdrop-blur-md shadow-sm py-2': isScrolled,
      'py-6': !isScrolled
    },
    className
  );

  const containerClasses = cn(
    'nav-container mx-auto w-full max-w-screen-2xl flex items-center justify-between px-6'
  );

  const logoClasses = cn(
    'transform transition-all duration-300 ease-in-out origin-left'
  );

  return (
    <nav
      ref={navRef}
      className={navClasses}
    >
      <Container ref={containerRef} className={containerClasses}>
        <Link 
          to="/#top" 
          className="flex items-center"
          onClick={() => {
            // Force immediate scroll to top on logo click
            window.scrollTo(0, 0);
          }}
        >
          <div className={logoClasses}>
            <LottieLogo className="w-[160px] md:w-[200px]" />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Menu />
        </div>
      </Container>
    </nav>
  );
} 