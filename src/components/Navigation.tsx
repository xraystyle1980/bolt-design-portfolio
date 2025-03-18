import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/components/icons/arrow-right';
import { MobileMenu } from './MobileMenu';
import { Container } from '@/components/ui/container';
import { LottieLogo } from './LottieLogo';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './ThemeProvider';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface NavigationProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Navigation({ variant = 'light', className }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
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

  // Handle nav animations
  useLayoutEffect(() => {
    if (!navRef.current) return;

    // Set initial padding based on scroll position
    gsap.set(navRef.current, {
      paddingTop: window.scrollY > 0 ? '0.75rem' : '1.5rem',
      paddingBottom: window.scrollY > 0 ? '0.75rem' : '1.5rem'
    });

    // Create padding animation
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top",
        end: "+=100",
        scrub: 0.5
      }
    });

    // Animate nav padding
    tl.to(navRef.current, {
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      ease: 'none'
    });

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    theme === 'dark' ? 'text-white' : 'text-neutral-900',
    {
      'bg-background/40 backdrop-blur-md shadow-sm': isScrolled
    },
    className
  );

  const containerClasses = cn(
    'nav-container mx-auto w-full max-w-screen-xl flex items-center justify-between px-6'
  );

  const logoClasses = cn(
    'transform transition-all duration-300 ease-in-out origin-left'
  );

  const buttonClasses = cn(
    'rounded-full hidden md:inline-flex group transition-all duration-300'
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
          {variant === 'light' ? (
            <div className={logoClasses}>
              <LottieLogo />
            </div>
          ) : (
            <span className={cn(logoClasses, 'text-display-sm font-normal tracking-tight')}>
              TRICE DESIGN
            </span>
          )}
        </Link>
        <div className="flex items-center gap-4">
          <Button 
            variant="default"
            size="lg"
            className={buttonClasses}
          >
            Let's Talk
            <ArrowRight size="sm" />
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </nav>
  );
} 