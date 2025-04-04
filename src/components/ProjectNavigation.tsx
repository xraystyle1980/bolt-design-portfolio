import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { buttonVariants } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  projectType: 'playground' | 'case-study';
}

interface ProjectNavigationProps {
  prevProject?: Project;
  nextProject?: Project;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  const getBadgeVariant = (type: 'playground' | 'case-study') => {
    return type === 'playground' ? 'secondary' : 'default';
  };

  const getBadgeLabel = (type: 'playground' | 'case-study') => {
    return type === 'playground' ? 'Playground' : 'Case Study';
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-28 mb-22 md:mb-28 md:mt-32">
      <Container className="max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-8">
          {prevProject ? (
            <Link 
              to={prevProject.link}
              className={cn(
                buttonVariants({ variant: "card" }),
                "items-start"
              )}
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm">Previous Project</span>
              </div>
              <div className="flex flex-col gap-2">
                <Badge variant={getBadgeVariant(prevProject.projectType)} className="w-fit">
                  {getBadgeLabel(prevProject.projectType)}
                </Badge>
                <h3 className="text-display-sm text-foreground">{prevProject.title}</h3>
                <p className="text-body-md text-muted-foreground">{prevProject.subtitle}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {nextProject ? (
            <Link 
              to={nextProject.link}
              className={cn(
                buttonVariants({ variant: "card" }),
                "items-end text-right"
              )}
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <span className="text-sm">Next Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="flex flex-col gap-2 items-end">
                <Badge variant={getBadgeVariant(nextProject.projectType)} className="w-fit">
                  {getBadgeLabel(nextProject.projectType)}
                </Badge>
                <h3 className="text-display-sm text-foreground">{nextProject.title}</h3>
                <p className="text-body-md text-muted-foreground">{nextProject.subtitle}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </div>
  );
} 