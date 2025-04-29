import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';
import { Playground } from '../components/Playground';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HomePage() {
  return (
    <div id="top">
      <ThreeHero />
      <Container>
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
          <section className='flex flex-col justify-center h-screen gap-8 md:gap-12'>
            <h1>
              <span className="block text-display-sm  md:text-display-lg text-muted-foreground">
                👋 Hello, I'm Matt Trice.
              </span>
              <span className="font-normal block text-display-md md:text-display-3xl text-foreground pt-3 md:pt-4 break-words overflow-hidden">
                I am a Senior Product Designer connecting UX, design systems, and front-end.
              </span>
            </h1>
            <a 
              href="https://calendly.com/matt-trice/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                icon={ArrowRight}
                iconPlacement="right"
              >
                Let's Talk
              </Button>
            </a>
          </section>
          <CaseStudies />
          <Playground />
        </div>
      </Container>
      <div className="border-t border-border">
        <CTA />
      </div>
          
      <Footer />
    </div>
  );
}
