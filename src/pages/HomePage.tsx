import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Insights } from '../components/Insights';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';

export function HomePage() {
  return (
    <div className="relative pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <ThreeHero />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Container className="flex flex-1 items-center">
            <div className="flex w-full flex-col gap-4 pb-[72px] pt-48">
              <div className="text-body-xl text-muted-foreground">
                👋 Hello, I'm Matt Trice.
              </div>
              <div className="text-display-3xl text-foreground leading-none max-w-4xl">
                I am a Senior Product Designer connecting UX, design systems, and front-end.
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

      {/* CTA Section */}
      <Container>
        <CTA />
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



