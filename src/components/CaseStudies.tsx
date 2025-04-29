import { Link } from "react-router-dom";
import { projects } from "@/data/case-studies";
import { useEffect, useRef } from "react";
import { Tags } from "./Tags";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "./case-study/HeroSection";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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
    <div className="flex flex-grow flex-col gap-12 md:gap-16">
      <h4 className="mb-0 mt-4">
        Case Studies
      </h4>
      {projects.map((project, index) => (
        <div key={project.id} ref={el => caseStudyRefs.current[index] = el}>
          <div className="w-full pb-2">
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
              <div className="flex items-center justify-between mt-4">
                <h3 className="mb-0 text-display-sm md:text-display-md">
                  {project.title}
                </h3>
                <Link to={project.link}>
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
            <Tags tags={project.technologies} />
          </div>
        </div>
      ))}
    </div>
  );
}