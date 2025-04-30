import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Create ScrollSmoother instance
    smootherRef.current = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.5,
      effects: true,
      normalizeScroll: true, // This helps with cross-browser consistency
      ignoreMobileResize: true, // Better mobile handling
    });

    // Refresh ScrollTrigger after smoother is created
    ScrollTrigger.refresh();

    // Clean up on unmount
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    // Reset scroll position on route change
    if (smootherRef.current) {
      smootherRef.current.scrollTop(0);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef}>
      <div id="smooth-content" ref={smoothContentRef}>
        {children}
      </div>
    </div>
  );
} 