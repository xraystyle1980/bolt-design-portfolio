import { Container } from '@/components/ui/container';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Lightbox } from '@/components/Lightbox';
import { Tags } from '@/components/Tags';
import { designSystemDemo } from '@/data/demos/design-system';
import { Section } from '@/data/types';
import { DesignSystemHero } from '@/components/design-system/Hero';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { getAdjacentProjects } from '@/data/navigation';
import { FlexColumnSection, GridLayoutSection, ResourceSection } from '@/components/case-study';

export function DesignSystemDemo() {
  const { prev, next } = getAdjacentProjects('design-system-demo');

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
            {designSystemDemo.title}
          </h1>
          <div className="max-w-full md:max-w-[70%]">
            <h2 className="text-display-sm md:text-display-md mb-10 md:mb-12 text-foreground !font-normal">
              {designSystemDemo.subtitle}
            </h2>
          </div>

          {/* Hero Section */}
          <div className="py-20">
            <div className="w-full h-[300px] md:h-[600px] bg-muted rounded-2xl md:rounded-3xl overflow-hidden">
              <DesignSystemHero />
            </div>
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <Container className="relative max-w-4xl">
        <div className="flex justify-center mb-20">
          <Tags tags={designSystemDemo.technologies} justify="center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column - 25% */}
          <div className="col-span-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-display-xs text-foreground">Role</h3>
                <p className="text-body-md text-muted-foreground">{designSystemDemo.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-display-xs text-foreground">Team</h3>
                <p className="text-body-md text-muted-foreground">{designSystemDemo.team}</p>
              </div>
            </div>
          </div>
          
          {/* Right column - 75% */}
          <div className="col-span-1 md:col-span-3">
            <div className="flex flex-col gap-6 md:gap-8">
              {designSystemDemo.sections.map((section: Section, index: number) => {
                switch (section.type) {
                  case 'content':
                  case 'process':
                  case 'narrative':
                    return (
                      <FlexColumnSection
                        key={`${section.type}-${index}`}
                        title={section.title}
                        content={section.content}
                        items={'subsections' in section ? section.subsections : []}
                      />
                    );
                  case 'instruction':
                    return (
                      <GridLayoutSection
                        key={`${section.type}-${index}`}
                        {...section}
                      />
                    );
                  case 'resources':
                    return (
                      <ResourceSection
                        key={`${section.type}-${index}`}
                        section={section}
                      />
                    );
                  case 'gallery':
                    return (
                      <div key={`${section.type}-${index}`} className={cn(
                        "flex flex-col gap-8",
                        section.layout === 'wide' && "col-span-3",
                        section.layout === 'narrow' && "col-span-2"
                      )}>
                        <div className="flex flex-col gap-2">
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

      <ProjectNavigation prevProject={prev} nextProject={next} />

      <Footer />
    </div>
  );
} 