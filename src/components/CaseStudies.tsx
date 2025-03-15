import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from './icons/arrow-right';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  backgroundClass: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'decent-app',
    title: 'Decent App',
    description: 'Redesigning a failing legacy app to drive growth and capture market share for a struggling startup.',
    backgroundClass: 'bg-[url(/images/decent-app-hero-1.png)] [background-size:104%_161%] [background-position:-20.76px_-30.5px]'
  },
  {
    id: 'blockset-docs',
    title: 'Blockset Docs by BRD',
    description: 'Redesigning a failing legacy app to drive growth and capture market share for a struggling startup.',
    backgroundClass: 'bg-[url(/images/blockset-docs-hero.png)] [background-size:104%_161%] [background-position:-22.2px_-144.84px]'
  },
  {
    id: 'decent-design-system',
    title: 'Decent Design System',
    description: 'Redesigning a failing legacy app to drive growth and capture market share for a struggling startup.',
    backgroundClass: 'bg-[url(/images/decent-design-system-hero-collage.png)] [background-size:100%_155%] [background-position:0px_-216.56px]'
  }
];

export function CaseStudies() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold leading-none text-neutral-500 mb-10">
        Case Studies
      </h2>
      <div className="flex flex-grow flex-col gap-10 text-lg leading-normal text-neutral-800">
        {caseStudies.map((study) => (
          <Link 
            key={study.id}
            to={`/case-study/${study.id}`}
            className="group flex flex-col gap-6"
          >
            <div className="flex flex-col items-center overflow-clip rounded-3xl bg-neutral-200">
              <div className={`h-[512px] max-h-full w-full bg-no-repeat ${study.backgroundClass}`} />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-x-20 gap-y-7 min-[1190px]:flex-nowrap">
              <div className="flex w-[524px] flex-col gap-2">
                <h3 className="text-[22px] font-bold leading-[1.3] text-neutral-500">
                  {study.title}
                </h3>
                <div className="flex items-start">
                  <p className="text-body-lg">{study.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-[100px] border border-solid border-gray-950 px-7 py-[15px] transition-colors group-hover:bg-neutral-800 group-hover:text-white">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}