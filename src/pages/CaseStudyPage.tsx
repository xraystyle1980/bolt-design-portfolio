import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { projects } from '@/data/case-studies';
import { cn } from '@/lib/utils';
import { Tags } from '@/components/Tags';
import { TextSection } from '@/components/case-study/TextSection';
import { ResourceSection } from '@/components/case-study/ResourceSection';
import { Section, Project } from '@/data/types';
import { HeroSection } from '@/components/case-study/HeroSection';
import { buttonVariants } from '@/components/ui/button';
import { Lightbox } from '@/components/Lightbox';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { getAdjacentProjects } from '@/data/navigation';
import { FlexColumnSection } from '@/components/case-study/FlexColumnSection';
import { GridLayoutSection } from '@/components/case-study/GridLayoutSection';

interface CaseStudyPageProps {}

export function CaseStudyPage({}: CaseStudyPageProps) {
  const { id } = useParams();
  const project = projects.find((p: Project) => p.id === id);
  const { prev, next } = getAdjacentProjects(id || '');
  
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
            <ArrowLeft className="h-4 w-4" />
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
            <div className="w-full h-[300px] md:h-[600px] bg-muted rounded-2xl md:rounded-3xl">
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
              {project.sections.map((section: Section, index: number) => {
                switch (section.type) {
                  case 'content':
                  case 'process':
                  case 'narrative':
                    return (
                      <FlexColumnSection
                        key={index}
                        title={section.title}
                        content={section.content}
                        items={'subsections' in section ? section.subsections : []}
                      />
                    );
                  case 'instruction':
                    return (
                      <GridLayoutSection
                        key={index}
                        {...section}
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
                  case 'resources':
                    return <ResourceSection section={section} />;
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
          <blockquote className="border-l-4 border-primary p-4 my-6 rounded-r-lg max-w-none">
            <p className="text-body-lg italic">{project.testimonial.quote}</p>
            <footer className="text-body-sm mt-2">
              — <cite>{project.testimonial.author}</cite>, {project.testimonial.role}
            </footer>
          </blockquote>
        </Container>
      )}

      <ProjectNavigation prevProject={prev} nextProject={next} />
      
      <Footer />
    </div>
  );
}