import { useLayoutEffect } from 'react';

/**
 * Hook to scroll to the top of the page on component mount
 * @param dependencies - Optional array of dependencies to trigger scroll
 */
export function useScrollToTop(dependencies: unknown[] = []) {
  // Use layoutEffect to ensure this runs before browser paint
  useLayoutEffect(() => {
    console.log('useScrollToTop - forcing scroll to top');
    
    // Ensure scroll restoration is set to manual
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Immediately set scroll position to top
    window.scrollTo(0, 0);
    
    // Temporarily disable scrolling to prevent any automatic scroll restoration
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    // Use a sequence of attempts to scroll to top
    const scrollSequence = () => {
      // First attempt
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Try again on next frame
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        
        // Try again after a small delay
        setTimeout(() => {
          window.scrollTo(0, 0);
          
          // Re-enable scrolling
          document.body.style.overflow = originalOverflow;
          
          // Final attempt after scrolling is re-enabled
          setTimeout(() => {
            window.scrollTo(0, 0);
            
            // Try with element if it exists
            if (document.getElementById('top')) {
              document.getElementById('top')?.scrollIntoView({ behavior: 'auto' });
            }
          }, 50);
        }, 50);
      });
    };
    
    // Start the sequence
    scrollSequence();
    
  }, [dependencies]);
} 