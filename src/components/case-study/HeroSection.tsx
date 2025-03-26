import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  id: string;
  layout?: 'single' | 'double' | 'triple';
  leftImage?: string;
  rightImage?: string;
  centerImage?: string;
  singleImage?: string;
  className?: string;
}

export function HeroSection({ id, layout = 'single', leftImage, rightImage, centerImage, singleImage, className }: HeroSectionProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const singleImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initial load animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });

    if (layout === 'single' && singleImageRef.current) {
      timeline.fromTo(
        singleImageRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
        }
      );
    } else if (layout === 'double') {
      // Animate both images simultaneously
      timeline.fromTo(
        [leftImageRef.current, rightImageRef.current],
        {
          opacity: 1,
          x: (index) => index === 0 ? -100 : 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );
    } else if (layout === 'triple') {
      timeline.fromTo(
        [leftImageRef.current, centerImageRef.current, rightImageRef.current],
        {
          opacity: 1,
          x: (index) => index === 1 ? 0 : index === 0 ? -100 : 100,
          y: (index) => index === 1 ? 30 : 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }

    return () => {
      timeline.kill();
    };
  }, [layout]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-[300px] md:h-[600px]", className)}
    >
      {/* Gradient background container */}
      <div className="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{
          background: 'radial-gradient(62.37% 58.17% at 48.63% 30.27%, #D2D4E0 0%, #A6B1BC 100%)'
        }} />
      </div>

      {/* Overlapping images container */}
      <div className="absolute inset-0 flex justify-center items-center p-12 md:p-24">
        {layout === 'single' ? (
          <div 
            ref={singleImageRef}
            className={cn(
              "relative w-full max-w-[800px]",
              !loadedImages['single'] && "image-loading"
            )}
          >
            <img
              src={singleImage}
              alt={`${id} Interface`}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onLoad={() => setLoadedImages(prev => ({ ...prev, 'single': true }))}
            />
          </div>
        ) : layout === 'double' ? (
          <div className="relative w-full max-w-[900px] flex justify-center items-center">
            {/* Left Image */}
            <div 
              ref={leftImageRef}
              className="relative w-[35%] -mr-[8%]"
            >
              <img
                src={leftImage}
                alt={`${id} Interface Left`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Right Image */}
            <div 
              ref={rightImageRef}
              className="relative w-[35%]"
            >
              <img
                src={rightImage}
                alt={`${id} Interface Right`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ) : (
          <div className="relative w-full max-w-[1200px] flex justify-center items-center">
            {/* Left Image */}
            <div 
              ref={leftImageRef}
              className="relative w-[35%] -mr-[5%]"
            >
              <img
                src={leftImage}
                alt={`${id} Interface Left`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Center Image */}
            <div 
              ref={centerImageRef}
              className="relative w-[35%] -mr-[5%]"
            >
              <img
                src={centerImage}
                alt={`${id} Interface Center`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Right Image */}
            <div 
              ref={rightImageRef}
              className="relative w-[35%]"
            >
              <img
                src={rightImage}
                alt={`${id} Interface Right`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 