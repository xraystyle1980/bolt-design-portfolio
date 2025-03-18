import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    // Wait for next tick to ensure DOM is fully rendered
    let smoother: any;
    
    const initSmoother = () => {
      // Clean up any existing ScrollTrigger instances to prevent conflicts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Create ScrollSmoother instance
      smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 1.5, // Higher value = smoother scrolling
        effects: true, // Enables special scroll effects with data attributes
        normalizeScroll: true, // Prevents jerky scrolling with mouse wheel
        ignoreMobileResize: true // Helps with mobile browser address bar issues
      });
      
      console.log('ScrollSmoother initialized');
    };
    
    // Initialize after a small delay to ensure DOM is fully rendered
    const timer = setTimeout(initSmoother, 100);

    // Clean up on unmount
    return () => {
      clearTimeout(timer);
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef}>
      <div id="smooth-content" ref={smoothContentRef}>
        {children}
      </div>
    </div>
  );
} 