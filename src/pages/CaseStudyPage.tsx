import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MobileMenu } from '../components/MobileMenu';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';

export function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-8 md:p-16 lg:p-24 bg-white/80 backdrop-blur-sm z-50">
        <Link to="/" className="text-display-sm font-normal tracking-tight">BOLT DESIGN</Link>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-full hidden md:flex">
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 relative">
        <div className="absolute inset-0 h-[70vh]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative pt-48 px-8 md:px-16 lg:px-24 text-white">
          <Link to="/" className="inline-flex items-center text-body-sm hover:text-neutral-200 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <p className="text-body-xl mb-4">{project.category}</p>
          <h1 className="text-display-3xl md:text-display-4xl lg:text-display-5xl font-normal tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-body-xl max-w-2xl mb-24">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-display-lg font-normal mb-4">The Challenge</h2>
            <p className="text-body-md text-neutral-600">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-display-lg font-normal mb-4">The Solution</h2>
            <p className="text-body-md text-neutral-600">{project.solution}</p>
          </div>
        </div>

        {/* Project Sections */}
        <div className="space-y-32">
          {project.sections.map((section, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <h2 className="text-display-lg font-normal mb-4">{section.title}</h2>
                <p className="text-body-md text-neutral-600">{section.content}</p>
              </div>
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="my-32 text-center max-w-3xl mx-auto">
          <blockquote className="text-display-xl font-normal mb-8">
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
              className="px-4 py-2 bg-neutral-100 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}