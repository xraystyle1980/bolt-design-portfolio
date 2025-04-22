import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';

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
  const getBadgeVariant = (_type: 'playground' | 'case-study'): 'default' | 'secondary' | 'destructive' | 'outline' | 'muted' => {
    return 'default';
  };

  const getBadgeLabel = (type: 'playground' | 'case-study') => {
    return type === 'playground' ? 'Demos' : 'Case Study';
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-16 md:mb-28 md:mt-32">
      <Container className="max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {prevProject ? (
            <Link 
              to={prevProject.link}
              className={cn(
                "group flex flex-col p-6 rounded-2xl border border-border hover:bg-muted transition-all duration-300 text-foreground no-underline hover:no-underline"
              )}
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="text-sm">Previous Project</span>
              </div>
              <div className="flex flex-col gap-2">
                <Badge variant={getBadgeVariant(prevProject.projectType)} className="w-fit">
                  {getBadgeLabel(prevProject.projectType)}
                </Badge>
                <h3 className="text-display-sm text-foreground">{prevProject.title}</h3>
                <p className="text-body-md text-muted-foreground hidden sm:block">{prevProject.subtitle}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {nextProject ? (
            <Link 
              to={nextProject.link}
              className={cn(
                "group flex flex-col p-6 rounded-2xl border border-border hover:bg-muted transition-all duration-300 text-foreground no-underline hover:no-underline items-end text-right"
              )}
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <span className="text-sm">Next Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="flex flex-col gap-2 items-end">
                <Badge variant={getBadgeVariant(nextProject.projectType)} className="w-fit">
                  {getBadgeLabel(nextProject.projectType)}
                </Badge>
                <h3 className="text-display-sm text-foreground">{nextProject.title}</h3>
                <p className="text-body-md text-muted-foreground hidden sm:block">{nextProject.subtitle}</p>
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