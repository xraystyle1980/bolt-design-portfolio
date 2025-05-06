import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Tags } from "./Tags";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "./case-study/HeroSection";
import { TokenHero } from "./TokenHero";
import { threeJsDemo } from "@/data/demos/threejs";
import { designSystemDemo } from "@/data/demos/design-system";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const insights = [
  {
    id: 'design-system-demo',
    title: 'Design System Demo',
    description: 'Live demonstration of design tokens and component libraries',
    imageUrl: '/images/playground-3dtoken.png',
    link: '/demo/design-system',
    singleImage: '/images/decent-design-system-hero-single.png',
    videoUrl: '/browser-console-side-by-side.mp4'
  },
  {
    id: 'threejs-experiments',
    title: 'Three.js Experiments',
    description: 'I\'m experimenting with interactive 3D and visual experiences—more to come.',
    imageUrl: '/images/playground-3dtoken.png',
    link: '/demo/threejs',
    singleImage: '/images/playground-3dtoken.png',
    videoUrl: '/token.mp4'
  }
];

export function Playground() {
  const playgroundRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (playgroundRefs.current.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    playgroundRefs.current.forEach((ref) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Determine hero layout and images based on project
  const getHeroConfig = (projectId: string) => {
    const project = insights.find(p => p.id === projectId);
    if (!project) return {
      layout: 'single' as const,
      singleImage: ''
    };

    return {
      layout: 'single' as const,
      singleImage: project.singleImage,
      videoUrl: project.videoUrl
    };
  };

  return (
    <div className="flex flex-grow flex-col gap-12 md:gap-16 mb-12 md:mb-24">
      <h4 className="text-display-xl mb-0 mt-4">
        Demos
      </h4>
      {insights.map((project, index) => (
        <div key={project.id} ref={el => playgroundRefs.current[index] = el}>
          <div className="w-full pb-2">
            <Link to={project.link} className="group">
              {project.id === 'threejs-experiments' ? (
                <div className="w-full h-[280px] sm:h-[330px] md:h-[500px] lg:h-[600px] bg-muted rounded-2xl md:rounded-3xl overflow-hidden">
                  <TokenHero />
                </div>
              ) : project.id === 'design-system-demo' ? (
                <div className="w-full h-[280px] sm:h-[330px] md:h-[500px] lg:h-[600px] bg-muted rounded-2xl md:rounded-3xl overflow-hidden border-primary border-2">
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <HeroSection 
                  id={project.id}
                  {...getHeroConfig(project.id)}
                  className="h-[280px] sm:h-[330px] md:h-[500px] lg:h-[600px]"
                />
              )}
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-1 md:gap-2 max-w-2xl">
              <div className="flex items-center justify-between mt-4">
                <h3 className="mb-0 text-display-sm md:text-display-md">
                  {project.title}
                </h3>
                <Link to={project.link} className="ml-4 shrink-0">
                  <Button 
                    variant="outline"
                    size="md"
                    icon={ArrowRight}
                    iconPlacement="right"
                  />
                </Link>
              </div>
              <div className="space-y-6 max-w-xl">
                <p className="md:text-body-lg text-foreground/80">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-2">
            <Tags tags={project.id === 'threejs-experiments' ? threeJsDemo.technologies : designSystemDemo.technologies} />
          </div>
        </div>
      ))}
    </div>
  );
}