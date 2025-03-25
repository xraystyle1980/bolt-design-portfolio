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
      className={cn("relative flex flex-col items-center", className)}
    >
      {/* Gradient background container */}
      <div className="relative w-full h-[500px] rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(62.37% 58.17% at 48.63% 30.27%, #D2D4E0 0%, #A6B1BC 100%)'
        }} />
      </div>

      {/* Overlapping images container */}
      <div className="absolute inset-0 flex justify-center items-center">
        {layout === 'single' ? (
          <div 
            ref={singleImageRef}
            className={cn(
              "relative w-[60%]",
              !loadedImages['single'] && "image-loading"
            )}
          >
            <img
              src={singleImage}
              alt={`${id} Interface`}
              className="w-full h-auto object-contain"
              onLoad={() => setLoadedImages(prev => ({ ...prev, 'single': true }))}
            />
          </div>
        ) : layout === 'double' ? (
          <>
            {/* Left Image */}
            <div 
              ref={leftImageRef}
              className="relative w-[24%] -ml-12"
            >
              <img
                src={leftImage}
                alt={`${id} Interface Left`}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Image */}
            <div 
              ref={rightImageRef}
              className="relative w-[24%] -mr-12"
            >
              <img
                src={rightImage}
                alt={`${id} Interface Right`}
                className="w-full h-auto object-contain"
              />
            </div>
          </>
        ) : (
          <>
            {/* Left Image */}
            <div 
              ref={leftImageRef}
              className="relative w-[20%] -ml-16"
            >
              <img
                src={leftImage}
                alt={`${id} Interface Left`}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Center Image */}
            <div 
              ref={centerImageRef}
              className="relative w-[20%]"
            >
              <img
                src={centerImage}
                alt={`${id} Interface Center`}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Image */}
            <div 
              ref={rightImageRef}
              className="relative w-[20%] -mr-16"
            >
              <img
                src={rightImage}
                alt={`${id} Interface Right`}
                className="w-full h-auto object-contain"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
} 