import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from '@/data/case-studies';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  id: string;
  className?: string;
  layout?: 'single' | 'double' | 'triple';
  leftImage?: string;
  rightImage?: string;
  singleImage?: string;
  videoUrl?: string;
}

export function HeroSection({ 
  id, 
  className,
  layout: propLayout,
  leftImage: propLeftImage,
  rightImage: propRightImage,
  singleImage: propSingleImage,
  videoUrl: propVideoUrl
}: HeroSectionProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const singleImageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const project = projects.find(p => p.id === id);

  // Use props if provided, otherwise fallback to project data
  const { layout, leftImage, rightImage, singleImage, videoUrl } = (() => {
    if (propLayout) {
      return {
        layout: propLayout,
        leftImage: propLeftImage,
        rightImage: propRightImage,
        singleImage: propSingleImage,
        videoUrl: propVideoUrl
      };
    }

    if (!project) {
      return {
        layout: 'single' as const,
        singleImage: '',
        videoUrl: ''
      };
    }

    switch (project.id) {
      case 'decent-app':
        return {
          layout: 'double' as const,
          leftImage: project.leftImage,
          rightImage: project.rightImage,
          videoUrl: project.videoUrl
        };
      case 'blockset-docs':
        return {
          layout: 'single' as const,
          singleImage: project.singleImage,
          videoUrl: project.videoUrl
        };
      case 'decent-design-system':
        return {
          layout: 'single' as const,
          singleImage: project.singleImage,
          videoUrl: project.videoUrl
        };
      default:
        return {
          layout: 'single' as const,
          singleImage: project.singleImage,
          videoUrl: project.videoUrl
        };
    }
  })();

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

    if (videoUrl && videoRef.current) {
      timeline.fromTo(
        videoRef.current,
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
    } else if (layout === 'single' && singleImageRef.current) {
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
    } else if (layout === 'double' && leftImageRef.current && rightImageRef.current) {
      // Animate both images simultaneously
      timeline.fromTo(
        [leftImageRef.current, rightImageRef.current],
        {
          opacity: 0,
          x: (index) => index === 0 ? -100 : 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: (index) => index === 0 ? -30 : 30,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.2
        }
      );
    }

    return () => {
      timeline.kill();
    };
  }, [layout, videoUrl]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-[240px] sm:h-[240px] md:h-[550px] lg:h-[600px]", className)}
    >
      {/* Gradient background container */}
      <div className="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{
          background: 'radial-gradient(62.37% 58.17% at 48.63% 30.27%, #D2D4E0 0%, #A6B1BC 100%)'
        }} />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 flex justify-center items-center p-6 md:p-12">
        {videoUrl ? (
          <div 
            ref={videoContainerRef}
            className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[800px] group hover:cursor-pointer"
          >
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain rounded-lg [transition:transform_800ms_ease] group-hover:scale-105"
            />
          </div>
        ) : layout === 'single' ? (
          <div 
            ref={singleImageRef}
            className={cn(
              "relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[700px] group hover:cursor-pointer",
              !loadedImages['single'] && "image-loading"
            )}
          >
            <img
              src={singleImage}
              alt={`${id} Interface`}
              className="w-full h-auto object-contain [transition:transform_800ms_ease] group-hover:scale-105"
              onLoad={() => setLoadedImages(prev => ({ ...prev, 'single': true }))}
            />
          </div>
        ) : layout === 'double' ? (
          <div className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[900px] flex justify-center items-center group hover:cursor-pointer">
            {/* Left Image */}
            <div 
              ref={leftImageRef}
              className="relative w-[36%] -mr-[8%] sm:w-[28%] sm:-mr-[6%] md:w-[34%] md:-mr-[2%]"
            >
              <img
                src={leftImage}
                alt={`${id} Interface Left`}
                className="w-full h-auto object-contain [transition:transform_800ms_ease] group-hover:scale-105"
              />
            </div>

            {/* Right Image */}
            <div 
              ref={rightImageRef}
              className="relative w-[36%] -ml-[8%] sm:w-[28%] sm:-ml-[6%] md:w-[34%] md:-ml-[2%]"
            >
              <img
                src={rightImage}
                alt={`${id} Interface Right`}
                className="w-full h-auto object-contain [transition:transform_800ms_ease] group-hover:scale-105"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
} 