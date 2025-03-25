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
        
      <section className="relative top-[200px]">
        <Container className="text-foreground mb-16">
          <div className="relative flex flex-col items-center">
            {/* Gradient background container */}
            <div className="relative w-full h-[500px] rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(62.37% 58.17% at 48.63% 30.27%, #D2D4E0 0%, #A6B1BC 100%)'
              }} />
            </div>

            {/* Overlapping images container */}
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Left Image */}
              <div className={cn(
                "relative w-[24%] -ml-12",
                !loadedImages['left'] && "image-loading"
              )}>
                <img
                  src="/images/decent-app-hero-single-left.png"
                  alt="Decent App Interface Left"
                  className="w-full h-auto object-contain"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, 'left': true }))}
                />
              </div>

              {/* Right Image */}
              <div className={cn(
                "relative w-[24%] -mr-12",
                !loadedImages['right'] && "image-loading"
              )}>
                <img
                  src="/images/decent-app-hero-single-right.png"
                  alt="Decent App Interface Right"
                  className="w-full h-auto object-contain"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, 'right': true }))}
                />
              </div>
            </div>
          </div>
        </Container>
        
        <Container className="relative max-w-4xl">
          <Link 
            to="/#top" 
            className="inline-flex items-center text-body-sm text-muted-foreground hover:text-foreground mb-6 md:mb-8"
            onClick={() => {
              // Force immediate scroll to top when clicking back to home
              window.scrollTo(0, 0);
            }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
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
      <Container className="max-w-4xl">
        <div className="py-12 md:py-24">
          {/* Challenge Section */}
          <div className="flex flex-col gap-16 md:gap-24">
            <div className="flex flex-col gap-2">
              <h2 className="text-display-md md:text-display-lg font-normal text-accent">
                {project.challenge.title}
              </h2>
              <p className="text-body-lg text-muted-foreground">
                {project.challenge.content}
              </p>
              {project.challenge.subchallenges && (
                <div className="flex flex-col gap-2">
                  {project.challenge.subchallenges.map((subchallenge: SubChallenge, index: number) => (
                    <div key={index} className="flex flex-col gap-4">
                      <h3 className="text-display-sm font-normal text-accent">
                        {subchallenge.title}
                      </h3>
                      <p className="text-body-lg text-muted-foreground">
                        {subchallenge.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solution Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-display-md md:text-display-lg font-normal text-accent">
                {project.solution.title}
              </h2>
              <p className="text-body-lg text-muted-foreground">
                {project.solution.content}
              </p>
              {project.solution.subsolutions && (
                <div className="flex flex-col gap-6">
                  {project.solution.subsolutions.map((subsolution: SubSolution, index: number) => (
                    <div key={index} className="flex flex-col gap-4">
                      <h3 className="text-display-sm font-normal text-accent">
                        {subsolution.title}
                      </h3>
                      <p className="text-body-lg text-muted-foreground">
                        {subsolution.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Sections */}
            <div className="flex flex-col gap-16 md:gap-24">
              {project.sections.map((section: Section, index: number) => {
                switch (section.type) {
                  case 'narrative': {
                    const narrativeSection = section as NarrativeSection;
                    return (
                      <div key={index} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                          <h2 className="text-display-md md:text-display-lg font-normal text-accent">
                            {narrativeSection.title}
                          </h2>
                          <p className="text-body-lg text-muted-foreground">
                            {narrativeSection.content}
                          </p>
                        </div>
                        {narrativeSection.subsections && (
                          <div className="flex flex-col gap-6">
                            {narrativeSection.subsections.map((subsection, subIndex: number) => (
                              <div key={subIndex} className="flex flex-col gap-4">
                                <h3 className="text-display-sm font-normal text-accent">
                                  {subsection.title}
                                </h3>
                                <p className="text-body-lg text-muted-foreground">
                                  {subsection.content}
                                </p>
                                {subsection.keyPoints && (
                                  <ul className="flex flex-col gap-3">
                                    {subsection.keyPoints.map((point: string, pointIndex: number) => (
                                      <li key={pointIndex} className="text-body-lg text-muted-foreground flex items-center gap-3">
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
                      <div key={index} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                          <h2 className="text-display-md md:text-display-lg font-normal text-accent">
                            {processSection.title}
                          </h2>
                          <p className="text-body-lg text-muted-foreground">
                            {processSection.content}
                          </p>
                        </div>
                        {processSection.steps && (
                          <div className="flex flex-col gap-2">
                            {processSection.steps.map((step, stepIndex: number) => (
                              <div key={stepIndex} className="flex flex-col gap-4">
                                <h3 className="text-display-sm font-normal text-accent">
                                  {step.title}
                                </h3>
                                <p className="text-body-lg text-muted-foreground">
                                  {step.content}
                                </p>
                                {step.keyPoints && (
                                  <ul className="flex flex-col gap-3">
                                    {step.keyPoints.map((point: string, pointIndex: number) => (
                                      <li key={pointIndex} className="text-body-lg text-muted-foreground flex items-center gap-3">
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
            <div className="flex flex-col items-center gap-2 max-w-3xl mx-auto">
              <blockquote className="text-display-lg md:text-display-xl font-normal text-accent text-center">
                "{project.testimonial.quote}"
              </blockquote>
              <cite className="not-italic flex flex-col items-center gap-2">
                <p className="text-body-lg font-normal text-foreground">{project.testimonial.author}</p>
                <p className="text-body-lg text-muted-foreground">{project.testimonial.role}</p>
              </cite>
            </div>

            {/* Technologies */}
            <Tags tags={project.technologies} />
          </div>
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