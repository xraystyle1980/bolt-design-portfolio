import { Container } from '@/components/ui/container';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ProjectSection } from '@/components/ProjectSection';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { getAdjacentProjects } from '@/data/navigation';
import { threeJsDemo } from '@/data/demos/threejs';
import { Tags } from '@/components/Tags';
import { TokenHero } from '@/components/TokenHero';

export function ThreeJsPlayground() {
  const { prev, next } = getAdjacentProjects('threejs-experiments');

  return (
    <div id="top">
      <section className="mt-20">
        <Container className="text-foreground mb-16">
          {/* Back to Home */}
          <Link 
            to="/#top"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "mt-20 w-fit group transition-all duration-300"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-display-2xl md:text-display-4xl lg:text-display-5xl my-4 md:my-6 text-foreground">
            {threeJsDemo.title}
          </h1>
          <div className="max-w-full md:max-w-[70%]">
            <h2 className="text-display-sm md:text-display-md mb-10 md:mb-12 text-foreground !font-normal">
              {threeJsDemo.subtitle}
            </h2>
          </div>
          
          {/* Hero Section */}
          <div className="py-20">
            <div className="w-full h-[300px] md:h-[600px] bg-muted rounded-2xl md:rounded-3xl overflow-hidden">
              <TokenHero />
            </div>
          </div>
        </Container>
      </section>

      {/* Project Sections */}
      <div className="space-y-0">
        {threeJsDemo.projects.map((project) => (
          <ProjectSection
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            videoUrl={project.videoUrl}
            technologies={project.technologies}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            codesandboxUrl={project.codesandboxUrl}
          />
        ))}
      </div>

      <ProjectNavigation prevProject={prev} nextProject={next} />

      <Footer />
    </div>
  );
} 



