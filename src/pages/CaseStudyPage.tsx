import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { projects } from '../data/projects';
import { cn } from '@/lib/utils';
import { Tags } from '@/components/Tags';
import { TextSection } from '@/components/case-study/TextSection';
import { Section } from '@/data/types';
import { HeroSection } from '@/components/case-study/HeroSection';
import { buttonVariants } from '@/components/ui/button';
import { Lightbox } from '@/components/Lightbox';

interface CaseStudyPageProps {}

export function CaseStudyPage({}: CaseStudyPageProps) {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div id="top">
      <section className="mt-20">
        <Container className="text-foreground mb-16">
     
          {/* Back to Home */}
          <Link 
            to="/#top"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
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
            <div className="w-full h-[300px] md:h-[600px] bg-muted rounded-2xl md:rounded-3xl overflow-hidden">
              <HeroSection 
                id={project.id}
              />
            </div>
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
                const commonProps = {
                  key: section.title,
                  title: section.title,
                  content: section.content,
                };

                switch (section.type) {
                  case 'content':
                    return (
                      <TextSection
                        {...commonProps}
                        items={'subsections' in section ? section.subsections : []}
                      />
                    );
                  case 'process':
                    return (
                      <TextSection
                        {...commonProps}
                        items={'steps' in section ? section.steps : []}
                      />
                    );
                  case 'gallery':
                    return (
                      <div className={cn(
                        "flex flex-col gap-8",
                        section.layout === 'wide' && "col-span-3",
                        section.layout === 'narrow' && "col-span-2"
                      )}>
                        <div className="flex flex-col gap-4">
                          <h3 className="text-display-md text-foreground">{section.title}</h3>
                          <p className="text-body-lg text-foreground">{section.content}</p>
                        </div>
                        <Lightbox images={section.images} />
                      </div>
                    );
                  case 'comparison':
                    return (
                      <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-display-md text-foreground">{section.title}</h3>
                          <p className="text-body-lg text-foreground">{section.content}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col gap-4">
                            <h4 className="text-display-sm text-foreground">{section.before.title}</h4>
                            <p className="text-body-md text-foreground">{section.before.content}</p>
                            <img src={section.before.image} alt={section.before.title} className="w-full h-auto" />
                          </div>
                          <div className="flex flex-col gap-4">
                            <h4 className="text-display-sm text-foreground">{section.after.title}</h4>
                            <p className="text-body-md text-foreground">{section.after.content}</p>
                            <img src={section.after.image} alt={section.after.title} className="w-full h-auto" />
                          </div>
                        </div>
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
          <blockquote className="border-l-4 border-primary p-4 my-6 bg-neutral-50 rounded-r-lg max-w-none">
            <p className="text-body-lg italic">{project.testimonial.quote}</p>
            <footer className="text-body-sm mt-2">
              — <cite>{project.testimonial.author}</cite>, {project.testimonial.role}
            </footer>
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