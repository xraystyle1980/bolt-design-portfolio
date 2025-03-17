import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { projects } from '../data/projects';

export function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-screen pt-24 md:pt-24">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        
        <Container className="relative text-white">
          <Link to="/" className="inline-flex items-center text-body-sm hover:text-neutral-200 mb-6 md:mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <p className="text-body-xl mb-3 md:mb-4">{project.category}</p>
          <h1 className="text-display-2xl md:text-display-4xl lg:text-display-5xl font-normal tracking-tight mb-4 md:mb-6 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-body-lg md:text-body-xl max-w-2xl mb-16 md:mb-24">
            {project.summary}
          </p>
        </Container>
      </section>

      {/* Project Details */}
      <Container>
        <div className="py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 mb-16 md:mb-24">
            <div>
              <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4">The Challenge</h2>
              <p className="text-body-md text-neutral-600">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4">The Solution</h2>
              <p className="text-body-md text-neutral-600">{project.solution}</p>
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
                  <h2 className="text-display-md md:text-display-lg font-normal mb-3 md:mb-4">{section.title}</h2>
                  <p className="text-body-md text-neutral-600">{section.content}</p>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="my-16 md:my-24 lg:my-32 text-center max-w-3xl mx-auto">
            <blockquote className="text-display-lg md:text-display-xl font-normal mb-6 md:mb-8">
              "{project.testimonial.quote}"
            </blockquote>
            <cite className="not-italic">
              <p className="text-body-lg font-normal">{project.testimonial.author}</p>
              <p className="text-body-md text-neutral-600">{project.testimonial.role}</p>
            </cite>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 justify-center">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-neutral-100 rounded-full text-body-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}