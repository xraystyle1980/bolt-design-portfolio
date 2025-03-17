import { Link } from 'react-router-dom';
import { ArrowRight } from './icons/arrow-right';
import { projects } from '../data/projects';

export function CaseStudies() {
  return (
    <section className="py-12 px-6 sm:px-8 md:px-0 md:py-24">
      <h2 className="text-display-lg font-normal text-neutral-500 mb-8 md:mb-10">
        Case Studies
      </h2>
      <div className="flex flex-grow flex-col gap-8 md:gap-16 lg:gap-24">
        {projects.map((project) => (
          <Link 
            key={project.id}
            to={`/case-study/${project.id}`}
            className="group flex flex-col gap-4 md:gap-8"
          >
            <div className="flex flex-col items-center overflow-clip rounded-2xl md:rounded-3xl bg-neutral-200">
              <div 
                className={`aspect-[16/9] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${project.backgroundClass}`} 
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-display-lg font-normal text-neutral-500">
                  {project.title}
                </h3>
                <p className="text-body-lg text-neutral-600">{project.description}</p>
              </div>
              <div className="flex items-center justify-center rounded-[100px] border border-solid border-gray-950 px-6 py-3 md:px-7 md:py-[15px] transition-colors group-hover:bg-neutral-800 group-hover:text-white shrink-0">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}