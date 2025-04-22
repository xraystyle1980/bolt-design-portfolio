import { Link } from "react-router-dom";
import { projects } from "@/data/case-studies";
import { useEffect, useRef } from "react";
import { ArrowRight } from "./icons/arrow-right";
import { Tags } from "./Tags";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "./case-study/HeroSection";
import { Button } from "./ui/button";

export function CaseStudies() {
  const caseStudyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (caseStudyRefs.current.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    caseStudyRefs.current.forEach((ref) => {
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
    switch (projectId) {
      case 'decent-app':
        return {
          layout: 'double' as const,
          leftImage: '/images/decent-app-hero-single-left.png',
          rightImage: '/images/decent-app-hero-single-right.png'
        };
      case 'blockset-docs':
        return {
          layout: 'single' as const,
          singleImage: '/images/blockset-docs-hero-single.png'
        };
      case 'decent-design-system':
        return {
          layout: 'single' as const,
          singleImage: '/images/decent-design-system-hero-single.png'
        };
      default:
        return {
          layout: 'single' as const,
          singleImage: '/images/decent-design-system-hero-single.png' // fallback
        };
    }
  };

  return (
    <div className="flex flex-grow flex-col gap-12 md:gap-16 lg:gap-24">
      <h4 className="text-display-lg mb-0 mt-4">
        Case Studies
      </h4>
      {projects.map((project, index) => (
        <div key={project.id} ref={el => caseStudyRefs.current[index] = el}>
          <div className="w-full pb-2 md:pb-20">
          
            <Link to={project.link} className="group">
              <HeroSection 
                id={project.id}
                {...getHeroConfig(project.id)}
                className="h-[280px] sm:h-[330px] md:h-[500px] lg:h-[600px]"
              />
            </Link>

          </div>
          
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
            
            <div className="flex flex-col gap-1 md:gap-2 max-w-2xl">
              <div className="flex items-center justify-between my-4">
                <h3 className="text-display-md md:text-display-xl mb-0 text-muted-foreground">
                  {project.title}
                </h3>
                <Link
                to={project.link}
                >
                  <Button 
                    variant="outline"
                    size="md"
                    className="px-3.5 py-1.5 md:px-8 rounded-full group-hover:bg-foreground group-hover:text-background shrink-0"
                  >
                    <ArrowRight className="h-5 w-5 md:h-8 md:w-8" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-6 max-w-xl">
                <p className="text-body-sm md:text-body-lg text-foreground/80">
                  {project.description}
                </p>
                <Tags tags={project.technologies} justify="start" mobileJustify="center" className="mt-2" />
              </div>
            </div>

            

          </div>
          
        </div>
      ))}
    </div>
  );
}