import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { projects } from '../data/projects';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Tags } from '@/components/Tags';
import { Project, Section, NarrativeSection, ProcessSection } from '@/data/types';

interface SubChallenge {
  title: string;
  content: string;
}

interface SubSolution {
  title: string;
  content: string;
}

export function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  
  // Use our custom hook to scroll to top
  useScrollToTop([id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-screen pt-24 md:pt-24">
        <div className="absolute inset-0">
          <div className={cn(
            "relative h-full w-full",
            !loadedImages['hero'] && "image-loading"
          )}>
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover"
              onLoad={() => setLoadedImages(prev => ({ ...prev, 'hero': true }))}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/40" />
        </div>
        
        <Container className="relative text-background">
          <Link 
            to="/#top" 
            className="inline-flex items-center text-body-sm hover:text-background/80 mb-6 md:mb-8"
            onClick={() => {
              // Force immediate scroll to top when clicking back to home
              window.scrollTo(0, 0);
            }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <p className="text-body-xl mb-3 md:mb-4 text-accent">{project.category}</p>
          <h1 className="text-display-2xl md:text-display-4xl lg:text-display-5xl font-normal tracking-tight mb-4 md:mb-6 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-body-lg md:text-body-xl max-w-2xl mb-16 md:mb-24 text-background/80">
            {project.summary}
          </p>
        </Container>
      </section>

      {/* Project Details */}
      <Container>
        <div className="py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 mb-16 md:mb-24">
            <div>
              <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4 text-accent">
                {project.challenge.title}
              </h2>
              <p className="text-body-md text-muted-foreground mb-6">
                {project.challenge.content}
              </p>
              {project.challenge.subchallenges && (
                <div className="space-y-4">
                  {project.challenge.subchallenges.map((subchallenge: SubChallenge, index: number) => (
                    <div key={index}>
                      <h3 className="text-display-sm font-normal mb-2 text-accent">
                        {subchallenge.title}
                      </h3>
                      <p className="text-body-md text-muted-foreground">
                        {subchallenge.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4 text-accent">
                {project.solution.title}
              </h2>
              <p className="text-body-md text-muted-foreground mb-6">
                {project.solution.content}
              </p>
              {project.solution.subsolutions && (
                <div className="space-y-4">
                  {project.solution.subsolutions.map((subsolution: SubSolution, index: number) => (
                    <div key={index}>
                      <h3 className="text-display-sm font-normal mb-2 text-accent">
                        {subsolution.title}
                      </h3>
                      <p className="text-body-md text-muted-foreground">
                        {subsolution.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Project Sections */}
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {project.sections.map((section: Section, index: number) => {
              switch (section.type) {
                case 'narrative': {
                  const narrativeSection = section as NarrativeSection;
                  return (
                    <div key={index} className="space-y-8">
                      <div>
                        <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4 text-accent">
                          {narrativeSection.title}
                        </h2>
                        <p className="text-body-md text-muted-foreground">
                          {narrativeSection.content}
                        </p>
                      </div>
                      {narrativeSection.subsections && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          {narrativeSection.subsections.map((subsection, subIndex: number) => (
                            <div key={subIndex} className="space-y-4">
                              <h3 className="text-display-sm font-normal text-accent">
                                {subsection.title}
                              </h3>
                              <p className="text-body-md text-muted-foreground">
                                {subsection.content}
                              </p>
                              {subsection.keyPoints && (
                                <ul className="space-y-2">
                                  {subsection.keyPoints.map((point: string, pointIndex: number) => (
                                    <li key={pointIndex} className="text-body-md text-muted-foreground flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                case 'process': {
                  const processSection = section as ProcessSection;
                  return (
                    <div key={index} className="space-y-8">
                      <div>
                        <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4 text-accent">
                          {processSection.title}
                        </h2>
                        <p className="text-body-md text-muted-foreground">
                          {processSection.content}
                        </p>
                      </div>
                      {processSection.steps && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          {processSection.steps.map((step, stepIndex: number) => (
                            <div key={stepIndex} className="space-y-4">
                              <h3 className="text-display-sm font-normal text-accent">
                                {step.title}
                              </h3>
                              <p className="text-body-md text-muted-foreground">
                                {step.content}
                              </p>
                              {step.keyPoints && (
                                <ul className="space-y-2">
                                  {step.keyPoints.map((point: string, pointIndex: number) => (
                                    <li key={pointIndex} className="text-body-md text-muted-foreground flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                default:
                  return null;
              }
            })}
          </div>

          {/* Testimonial */}
          <div className="my-16 md:my-24 lg:my-32 text-center max-w-3xl mx-auto">
            <blockquote className="text-display-lg md:text-display-xl font-normal mb-6 md:mb-8 text-accent">
              "{project.testimonial.quote}"
            </blockquote>
            <cite className="not-italic">
              <p className="text-body-lg font-normal text-foreground">{project.testimonial.author}</p>
              <p className="text-body-md text-muted-foreground">{project.testimonial.role}</p>
            </cite>
          </div>

          {/* Technologies */}
          <Tags tags={project.technologies} />
        </div>
      </Container>

      {/* Footer */}
      <footer className="border-t border-border">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}