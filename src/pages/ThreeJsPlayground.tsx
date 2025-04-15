import { ProjectSection } from '@/components/ProjectSection';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { Footer } from '@/components/Footer';
import { getAdjacentProjects } from '@/data/navigation';
import { threeJsDemo } from '@/data/demos/threejs';

export function ThreeJsPlayground() {
  const { prev, next } = getAdjacentProjects('threejs-experiments');

  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <div className="space-y-0">
          {threeJsDemo.projects.map((project) => (
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
      </div>

      <ProjectNavigation prevProject={prev} nextProject={next} />

      <Footer />
    </div>
  );
} 



