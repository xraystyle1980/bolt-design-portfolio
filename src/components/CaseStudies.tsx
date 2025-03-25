import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "./icons/arrow-right";
import { Tags } from "./Tags";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "./case-study/HeroSection";

gsap.registerPlugin(ScrollTrigger);

export function CaseStudies() {
  const caseStudyRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    caseStudyRefs.current.forEach((ref, index) => {
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
    <div className="flex flex-grow flex-col gap-8 md:gap-16 lg:gap-24">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={project.link}
          className="group flex flex-col gap-4 md:gap-8"
          ref={el => caseStudyRefs.current[index] = el}
        >
          <div className="w-full py-20">
            <HeroSection 
              id={project.id}
              {...getHeroConfig(project.id)}
              className="h-[300px] md:h-[500px]"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-2 max-w-2xl">
              <h3 className="text-display-md text-accent">
                {project.title}
              </h3>
              <p className="text-body-lg max-w-xl">
                {project.description}
              </p>
              <Tags tags={project.technologies} className="mt-2" />
            </div>
            <div className="flex items-center justify-center rounded-[100px] border border-solid border-foreground px-6 py-3 md:px-7 md:py-[15px] transition-colors group-hover:bg-foreground group-hover:text-background shrink-0">
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}