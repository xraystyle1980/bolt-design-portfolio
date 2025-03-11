import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function CaseStudies() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-bold">CASE STUDIES</h2>
        <Button variant="outline" className="rounded-full">
          View All Works <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-12">
        {projects.map((project) => (
          <Link to={`/case-study/${project.id}`} key={project.id}>
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 hover:bg-neutral-200 transition-colors">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-600 mb-8">{project.summary}</p>
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="rounded-2xl w-full object-cover"
                  style={{ height: '400px' }}
                />
              </div>
              <Button
                variant="outline"
                className="absolute bottom-8 right-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}