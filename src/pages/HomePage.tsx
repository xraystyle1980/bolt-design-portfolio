import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Insights } from '../components/Insights';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/components/icons/arrow-right';
import { cn } from '@/lib/utils';

export function HomePage() {
  const buttonClasses = cn(
    'max-w-fit rounded-full group transition-all duration-300'
  );

  return (
    <div id="top">
      <ThreeHero />
      <Container>
          <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
            <section className='flex flex-col justify-center h-screen'>
              <h1>
                <span className="block text-body-xl md:text-display-lg text-muted-foreground">
                  👋 Hello, I'm Matt Trice.
                </span>
                <span className="block text-display-xl md:text-display-3xl text-foreground pt-3 md:pt-4 break-words overflow-hidden">
                  I am a Senior Product Designer connecting UX, design systems, and front-end.
                </span>
              </h1>
              <Button 
                variant="default"
                size="lg"
                className={buttonClasses}
              >
                Let's Talk
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </section>
            <CaseStudies />
            <Insights />
            <CTA />
          </div>
      </Container>
      <Footer />
    </div>
  );
}



