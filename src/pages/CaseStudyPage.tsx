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
    <div id="top" className="relative top-[200px]">
      <section className="">
        <Container className="text-foreground mb-16">
          <Link 
            to="/#top" 
            className="inline-flex items-center text-body-sm text-muted-foreground hover:text-foreground mb-6 md:mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="py-20">
            <HeroSection id={project.id} {...heroConfig} />
          </div>
        </Container>

        <Container className="relative max-w-4xl">
          <p className="text-body-xl mb-3 md:mb-4 text-accent">{project.category}</p>
          <h1 className="text-display-2xl md:text-display-4xl lg:text-display-5xl font-normal tracking-tight mb-4 md:mb-6 text-foreground">
            {project.title}
          </h1>
          <p className="text-body-lg md:text-body-xl mb-16 md:mb-24 text-muted-foreground">
            {project.summary}
          </p>
        </Container>
      </section>

      {/* Project Details */}
      <Container className="relative max-w-4xl">
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
              // Add other section types here as needed
              default:
                return null;
            }
          })}
        </div>
      </Container>

      {/* Testimonial */}
      {project.testimonial && (
        <Container className="relative max-w-4xl my-24 md:my-32">
          <blockquote className="flex flex-col gap-6 md:gap-8">
            <p className="text-display-md md:text-display-lg text-foreground">
              "{project.testimonial.quote}"
            </p>
            <footer className="flex flex-col gap-1">
              <cite className="text-body-lg font-normal text-foreground not-italic">
                {project.testimonial.author}
              </cite>
              <p className="text-body-md text-muted-foreground">
                {project.testimonial.title}
              </p>
            </footer>
          </blockquote>
        </Container>
      )}

      {/* Tags */}
      <Container className="relative max-w-4xl mb-24 md:mb-32">
        <div className="flex flex-col gap-4">
          <h2 className="text-body-lg text-foreground">Technologies Used</h2>
          <Tags tags={project.technologies} />
        </div>
      </Container>

      <Container>
        <Footer />
      </Container>
    </div>
  );
}