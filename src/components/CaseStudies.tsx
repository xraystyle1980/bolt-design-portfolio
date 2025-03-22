import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowRight } from "./icons/arrow-right";

export function CaseStudies() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  return (
    <section className="py-12 md:py-24">
      <h2 className="text-display-lg font-normal text-foreground mb-8 md:mb-10">
        Case Studies
      </h2>
      <div className="flex flex-grow flex-col gap-8 md:gap-16 lg:gap-24">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-4 md:gap-8"
          >
            <div className="group flex flex-col items-center overflow-clip rounded-2xl md:rounded-3xl bg-muted">
              <div className="relative aspect-[16/9] w-full h-full">
                <div className={cn(
                  "relative h-full w-full",
                  !loadedImages[project.id] && "image-loading"
                )}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className={cn(
                      "h-full w-full object-cover transition-transform duration-500",
                      loadedImages[project.id] && "group-hover:scale-105"
                    )}
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [project.id]: true }))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-2 max-w-2xl">
              <h3 className="text-display-md text-accent">
                  {project.title}
                </h3>
                <p className="text-body-lg max-w-xl">
                  {project.description}
                </p>
              </div>
              <Link
                to={project.link}
                className="flex items-center justify-center rounded-[100px] border border-solid border-foreground px-6 py-3 md:px-7 md:py-[15px] transition-colors hover:bg-foreground hover:text-background shrink-0"
              >
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}