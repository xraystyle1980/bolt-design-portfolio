import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ArrowRight } from "./icons/arrow-right";

export function CaseStudies() {
  // const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // // Preload background images
  // useEffect(() => {
  //   projects.forEach((project) => {
  //     const imageUrl = project.backgroundClass.match(/url\(['"]?([^'"]+)['"]?\)/)?.[1];
  //     if (imageUrl) {
  //       const img = new Image();
  //       img.src = imageUrl;
  //       img.onload = () => setLoadedImages(prev => ({ ...prev, [project.id]: true }));
  //     }
  //   });
  // }, []);

  return (
    <section className="py-12 md:py-24">
      <h2 className="text-display-lg font-normal text-muted-foreground mb-8 md:mb-10">
        Case Studies
      </h2>
      <div className="flex flex-grow flex-col gap-8 md:gap-16 lg:gap-24">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="group flex flex-col gap-4 md:gap-8"
          >
            <div className="flex flex-col items-center overflow-clip rounded-2xl md:rounded-3xl bg-muted">
              <div className="relative aspect-[16/9] w-full h-full">
                <div 
                  className={cn(
                    "absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105",
                    project.backgroundClass
                  )}
                  role="img"
                  aria-label={`${project.title} preview`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-display-lg font-normal text-muted-foreground">
                  {project.title}
                </h3>
                <p className="text-body-lg text-muted-foreground/80">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-center rounded-[100px] border border-solid border-foreground px-6 py-3 md:px-7 md:py-[15px] transition-colors group-hover:bg-foreground group-hover:text-background shrink-0">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}