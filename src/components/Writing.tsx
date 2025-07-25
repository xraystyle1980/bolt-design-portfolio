import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { Tags } from "./Tags";

export function Writing() {
  const writingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (writingRefs.current.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    writingRefs.current.forEach((ref) => {
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
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-grow flex-col gap-12 md:gap-16 mb-12 md:mb-24">
      <h4 className="text-display-md md:text-display-lg lg:text-display-xl mb-0 mt-4">
        Writing
      </h4>
      {articles.map((article, index) => (
        <div key={article.id} id={article.id} ref={el => writingRefs.current[index] = el}>
          <div className="w-full pb-2">
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border border-border rounded-2xl md:rounded-3xl p-8 md:p-12 hover:border-primary transition-colors duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <time className="text-body-sm text-muted-foreground">
                      {new Date(article.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="text-display-sm md:text-display-md mb-3 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-body-lg text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    <Tags tags={article.technologies} justify="start" mobileJustify="start" size="sm" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}