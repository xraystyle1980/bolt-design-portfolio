import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';
import { Playground } from '../components/Playground';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedHeroText } from '@/components/AnimatedHeroText';
import MetaTags from '@/components/MetaTags';

export function HomePage() {
  return (
    <div id="top">
      <MetaTags 
        title="Matt Trice Design | Senior Product Designer"
        description="👋 Hello, I'm Matt Trice. I am a Senior Product Designer focused on UX, UI, design systems, and frontend craft."
        ogImage="https://trice.design/meta/OG-image.png"
        ogUrl="https://trice.design"
        ogType="website"
        twitterCard="summary_large_image"
        twitterSite="@tricedesign"
        twitterCreator="@tricedesign"
      />
      <ThreeHero />
      <Container>
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
          <section className='flex flex-col justify-center h-screen gap-8 md:gap-12'>
            <AnimatedHeroText
              greeting="👋 Hello, I'm Matt Trice."
              title="Senior Product Designer focused on UX, UI, design systems, and frontend craft."
            />
            <a 
              href="https://calendly.com/matt-trice/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-fit"
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
