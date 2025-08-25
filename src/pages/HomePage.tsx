import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';
import { Playground } from '../components/Playground';
import { Writing } from '../components/Writing';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedHeroText } from '@/components/AnimatedHeroText';
import { InPageNavigation } from '@/components/InPageNavigation';
import MetaTags from '@/components/MetaTags';

export function HomePage() {
  return (
    <div id="top">
      <MetaTags 
        title="Matt Trice Design | Lead Product Designer"
        description="👋 Hello, I'm Matt Trice. I am a Lead Product Designer blending creative momentum with thoughtful UX, clean UI, and scalable design systems."
        ogImage="https://trice.design/meta/OG-image.png"
        ogUrl="https://trice.design"
        ogType="website"
        twitterCard="summary_large_image"
        twitterSite="@tricedesign"
        twitterCreator="@tricedesign"
      />
      <ThreeHero />
      
      {/* Hero section - full width */}
      <Container>
        <section id="about" className='flex flex-col justify-center h-screen gap-8 md:gap-12'>
          <AnimatedHeroText
            greeting="👋 Hello, I'm Matt Trice."
            title="I am a Lead Product Designer blending creative momentum with thoughtful UX, clean UI, and scalable design systems."
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
      </Container>

      {/* Content sections with navigation sidebar */}
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8" id="content-with-nav">
          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
              <section id="case-studies">
                <CaseStudies />
              </section>
              <section id="demos">
                <Playground />
              </section>
              <section id="writing">
                <Writing />
              </section>
            </div>
          </div>
          
          {/* Navigation sidebar - hidden on mobile, visible on lg and up */}
          <div className="lg:col-span-3">
            <InPageNavigation />
          </div>
        </div>
      </Container>
      <section id="contact">
        <div className="border-t border-border">
          <CTA />
        </div>
      </section>
          
      <Footer />
    </div>
  );
}
