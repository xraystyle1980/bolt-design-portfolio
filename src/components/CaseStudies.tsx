import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './icons/arrow-right';
import { projects } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // Create SplitText instance for the title
    const splitTitle = new SplitText(titleRef.current, {
      type: "chars,words",
      charsClass: "char",
      wordsClass: "word"
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    // Animate the title
    tl.from(splitTitle.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    // Animate each project card
    projectRefs.current.forEach((projectRef, index) => {
      if (!projectRef) return;

      gsap.from(projectRef, {
        scrollTrigger: {
          trigger: projectRef,
          start: "top bottom",
          end: "center center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    return () => {
      splitTitle.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-6 sm:px-8 md:px-0 md:py-24">
      <h2 
        ref={titleRef}
        className="text-display-lg font-normal text-neutral-500 mb-8 md:mb-10"
      >
        Case Studies
      </h2>
      <div className="flex flex-grow flex-col gap-8 md:gap-16 lg:gap-24">
        {projects.map((project, index) => (
          <Link 
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            to={`/case-study/${project.id}`}
            className="group flex flex-col gap-4 md:gap-8"
          >
            <div className="flex flex-col items-center overflow-clip rounded-2xl md:rounded-3xl bg-neutral-200">
              <div 
                className={`aspect-[16/9] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${project.backgroundClass}`} 
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-display-lg font-normal text-neutral-500">
                  {project.title}
                </h3>
                <p className="text-body-lg text-neutral-600">{project.description}</p>
              </div>
              <div className="flex items-center justify-center rounded-[100px] border border-solid border-gray-950 px-6 py-3 md:px-7 md:py-[15px] transition-colors group-hover:bg-neutral-800 group-hover:text-white shrink-0">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}