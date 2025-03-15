import { ThreeHero } from '../components/ThreeHero';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/components/icons/arrow-right';
import { CaseStudies } from '../components/CaseStudies';
import { Insights } from '../components/Insights';
import { Footer } from '../components/Footer';
import { MobileMenu } from '../components/MobileMenu';
import { Link } from 'react-router-dom';
import { GltfLogo } from '../components/GltfLogo';
import { LottieLogo } from '@/components/LottieLogo';
import { Container } from '@/components/ui/container';

export function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <ThreeHero />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Container>
            <nav className="fixed left-0 right-0 top-0 flex items-center justify-between p-8">
              <Link to="/" className="flex items-center">
                <LottieLogo />
              </Link>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hidden md:inline-flex group"
                >
                  Let's Talk
                  <ArrowRight size="sm" />
                </Button>
                <MobileMenu />
              </div>
            </nav>
          </Container>

          <Container className="flex flex-1 items-center">
            <div className="flex w-full flex-col gap-4 pb-[72px] pt-48">
              <div className="text-body-xl text-muted-foreground">
                👋 Hello, I'm Matt Trice.
              </div>
              <div className="text-display-3xl text-foreground leading-none max-w-4xl">
                I am a Senior Product Designer connecting UX, design systems, and front-end.
              </div>
              <div className="flex items-end pt-12">
                <Button 
                  variant="default"
                  size="lg"
                  className="group"
                >
                  Let's Talk
                  <ArrowRight size="lg" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Case Studies Section */}
      <Container>
        <CaseStudies />
      </Container>

      {/* Insights Section */}
      <Container>
        <Insights />
      </Container>

      {/* Contact Section */}
      <Container>
        <section className="py-24 text-center">
          <h2 className="text-display-3xl md:text-display-4xl lg:text-display-5xl font-normal mb-8">
            Let's rock <span className="text-muted-foreground">with me</span>
          </h2>
          <Button 
            variant="outline"
            size="lg"
            className="group mx-auto"
          >
            Let's Talk
            <ArrowRight size="lg" />
          </Button>
        </section>
      </Container>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}



