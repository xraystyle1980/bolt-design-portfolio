import { ProjectSection } from '@/components/ProjectSection';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { Footer } from '@/components/Footer';
import { getAdjacentProjects } from '@/data/navigation';
import { threeJsDemo } from '@/data/demos/threejs';
import { Container } from '@/components/ui/container';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { TokenHero } from '@/components/TokenHero';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Project } from '@/types/project';
import MetaTags from '@/components/MetaTags';

export function ThreeJsPlayground() {
  const { prev, next } = getAdjacentProjects('threejs-experiments');

  return (
    <div id="top">
      <MetaTags 
        title={`${threeJsDemo.title} | Matt Trice Design`}
        description={threeJsDemo.subtitle}
        canonical="https://www.trice.design/demo/threejs"
        ogImage="/images/playground-3dtoken.png"
      />
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
            {threeJsDemo.title}
          </h1>
          <div className="max-w-full md:max-w-[80%]">
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
          {/* Project Sections */}
          <div className="space-y-0">
            {threeJsDemo.projects.map((project: Project) => (
              <ProjectSection
                key={project.id}
                title={project.title}
                description={project.description}
                videoUrl={project.videoUrl}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                codesandboxUrl={project.codesandboxUrl}
              />
            ))}
          </div>
        
      </section>

      <ProjectNavigation prevProject={prev} nextProject={next} />

      <Footer />
      <ScrollToTop />
    </div>
  );
} 



