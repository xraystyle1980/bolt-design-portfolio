import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Insights } from '../components/Insights';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/components/icons/arrow-right';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function HomePage() {
  const location = useLocation();
  const sectionRefs = useScrollAnimation();
  
  // Use our custom hook to scroll to top when navigating to home
  useScrollToTop([location.pathname]);
  
  const buttonClasses = cn(
    'max-w-fit rounded-full group transition-all duration-300'
  );
  
  return (
    <div id="top" className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <ThreeHero />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Container className="flex flex-1 items-center">
            <div className="flex w-full flex-col gap-4 overflow-visible">
              <div className="flex flex-col gap-4 max-w-4xl">
                <h1>
                  <span className="block text-body-lg md:text-body-xl text-accent">
                    👋 Hello, I'm Matt Trice.
                  </span>
                  <span className="block text-display-xl md:text-display-3xl text-foreground leading-[1.1] pt-3 md:pt-4 break-words overflow-hidden">
                    I am a Senior Product Designer connecting UX, design systems, and front-end.
                  </span>
                </h1>
              </div>
              <Button 
                variant="default"
                size="lg"
                className={buttonClasses}
              >
                Let's Talk
                <ArrowRight size="sm" />
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* Case Studies Section */}
      <Container>
        <div className="py-12 md:py-24">
          <h2 className="text-display-lg font-normal text-foreground mb-8 md:mb-10">
            Case Studies
          </h2>
          <CaseStudies />
        </div>
      </Container>

      {/* Insights Section */}
      <Container>
        <div ref={el => sectionRefs.current[0] = el}>
          <Insights />
        </div>
      </Container>

      {/* CTA Section */}
      <section className="border-t border-solid border-border">
        <Container>
          <div ref={el => sectionRefs.current[1] = el}>
            <CTA />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Container>
        <div ref={el => sectionRefs.current[2] = el}>
          <Footer />
        </div>
      </Container>
    </div>
  );
}



