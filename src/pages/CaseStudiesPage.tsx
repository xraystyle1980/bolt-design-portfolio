import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { MobileMenu } from '../components/MobileMenu';
import { Footer } from '../components/Footer';

const projects = [
  {
    id: 1,
    title: 'Decent App',
    category: 'Mobile Development',
    description: 'Revolutionizing mobile sport apps to drive growth and engagement through a compelling startup.',
    fullDescription: 'A comprehensive mobile application designed to transform the way users interact with sports content. The project involved creating an intuitive user interface, implementing real-time data integration, and developing engaging social features.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&q=80&w=1000',
    ],
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Firebase'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Payrate',
    category: 'Analytics Design',
    description: 'Analytics Design',
    fullDescription: 'A sophisticated analytics platform that provides real-time insights and data visualization for financial institutions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    ],
    technologies: ['React', 'D3.js', 'GraphQL', 'AWS'],
    year: '2023',
  },
  // Add more projects as needed
];

export function CaseStudiesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-8 md:p-16 lg:p-24 bg-white z-50">
        <Link to="/" className="text-xl font-bold tracking-tight">BOLT DESIGN</Link>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-full hidden md:flex">
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <MobileMenu />
        </div>
      </nav>

      {/* Header */}
      <header className="pt-48 pb-24 px-8 md:px-16 lg:px-24">
        <Link to="/" className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Case Studies
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl">
          Explore our latest work and discover how we help businesses transform their digital presence.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="space-y-8">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-neutral-600">{project.category}</p>
                  </div>
                  <span className="text-neutral-400">{project.year}</span>
                </div>
                <p className="text-neutral-600">{project.description}</p>
                
                {/* Gallery Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {project.gallery.map((image, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <button className="aspect-square overflow-hidden rounded-lg bg-neutral-100">
                          <img
                            src={image}
                            alt={`${project.title} gallery ${index + 1}`}
                            className="w-full h-full object-cover transition-transform hover:scale-110"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogTitle className="sr-only">
                          {`${project.title} - Image ${index + 1}`}
                        </DialogTitle>
                        <div className="relative">
                          <img
                            src={image}
                            alt={`${project.title} gallery ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => setSelectedImage(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neutral-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}