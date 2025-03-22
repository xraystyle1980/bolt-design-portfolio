import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { projects } from '../data/projects';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { cn } from '@/lib/utils';

export function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
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
            "image-loading"
          )}>
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover"
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
              <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4 text-accent">The Challenge</h2>
              <p className="text-body-md text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4 text-accent">The Solution</h2>
              <p className="text-body-md text-muted-foreground">{project.solution}</p>
            </div>
          </div>

          {/* Project Sections */}
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {project.sections.map((section, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center"
              >
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4 text-accent">{section.title}</h2>
                  <p className="text-body-md text-muted-foreground">{section.content}</p>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="group aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                    <div className={cn(
                      "relative h-full w-full",
                      "image-loading"
                    )}>
                      <img
                        src={section.image}
                        alt={section.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="flex flex-wrap gap-2 justify-center">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-muted text-muted-foreground rounded-full text-body-sm"
              >
                {tech}
              </span>
            ))}
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