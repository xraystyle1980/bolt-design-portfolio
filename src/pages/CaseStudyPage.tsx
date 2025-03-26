import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { projects } from '../data/projects';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Tags } from '@/components/Tags';
import { NarrativeSection } from '@/components/case-study/NarrativeSection';
import { ProcessSection } from '@/components/case-study/ProcessSection';
import { Section } from '@/data/types';
import { HeroSection } from '@/components/case-study/HeroSection';
import { Button, buttonVariants } from '@/components/ui/button';
import { Lightbox } from '@/components/Lightbox';

interface CaseStudyPageProps {}

export function CaseStudyPage({}: CaseStudyPageProps) {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  if (!project) {
    return <div>Project not found</div>;
  }

  // Determine hero layout based on project
  const heroConfig = (() => {
    switch (project.id) {
      case 'decent-app':
        return {
          layout: 'double' as const,
          leftImage: '/images/decent-app-hero-single-left.png',
          rightImage: '/images/decent-app-hero-single-right.png'
        };
      default:
        return {
          layout: 'single' as const,
          singleImage: project.heroImage
        };
    }
  })();

  return (
    <div id="top">
      <section className="mt-20">
        <Container className="text-foreground mb-16">
     
          {/* Back to Home */}
          <Link 
            to="/#top"
            className={cn(
              buttonVariants({ variant: "outline", size: "md" }),
              "rounded-full mt-20 w-fit group transition-all duration-300"
            )}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-display-2xl md:text-display-4xl lg:text-display-5xl my-4 md:my-6 text-foreground">
            {project.title}
          </h1>
          <div className="max-w-full md:max-w-[70%]">
            <h2 className="text-display-sm md:text-display-md mb-10 md:mb-12 text-foreground !font-normal">
              {project.heroSubTitle}
            </h2>
          </div>
          
          
          {/* Hero Section */}
          <div className="py-20">
            <HeroSection id={project.id} {...heroConfig} />
          </div>
        </Container>

        
      </section>

      {/* Project Details */}
      <Container className="relative max-w-4xl">
        <div className="flex justify-center mb-20">
          <Tags tags={project.technologies} justify="center" />
        </div>
        <div className="grid grid-cols-4 gap-8">
          {/* Left column - 25% */}
          <div className="col-span-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-display-xs text-foreground">Role</h3>
                <p className="text-body-md text-muted-foreground">{project.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-display-xs text-foreground">Team</h3>
                <p className="text-body-md text-muted-foreground">{project.team}</p>
              </div>
            </div>
          </div>
          
          {/* Right column - 75% */}
          <div className="col-span-3">
            <div className="flex flex-col gap-24 md:gap-32">
              {project.sections.map((section: Section) => {
                switch (section.type) {
                  case 'process':
                    return (
                      <ProcessSection
                        key={section.title}
                        title={section.title}
                        content={section.content}
                        steps={section.steps}
                      />
                    );
                  case 'narrative':
                    return (
                      <NarrativeSection
                        key={section.title}
                        title={section.title}
                        content={section.content}
                        subsections={section.subsections}
                      />
                    );
                  case 'gallery':
                    return (
                      <div key={section.title} className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-display-md text-foreground">{section.title}</h3>
                          <p className="text-body-lg text-foreground">{section.content}</p>
                        </div>
                        <Lightbox images={section.images} />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Testimonial */}
      {project.testimonial && (
        <Container className="relative max-w-4xl my-24 md:my-32">
          <blockquote className="flex flex-col items-center text-center gap-6 md:gap-8">
            <p className="text-display-md md:text-display-lg text-foreground">
              "{project.testimonial.quote}"
            </p>
            <div className="flex flex-col items-center gap-1">
              <cite className="text-body-lg text-foreground not-italic">
                {project.testimonial.author}
              </cite>
              <p className="text-body-md text-foreground">
                {project.testimonial.title}
              </p>
            </div>
          </blockquote>
        </Container>
      )}

      {/* Tags */}
      <Container className="relative max-w-4xl mb-24 md:mb-32">
        <div className="flex flex-col gap-4">
          <Tags tags={project.technologies} />
        </div>
      </Container>
      
      <Footer />
    </div>
  );
}