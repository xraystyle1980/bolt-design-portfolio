import { ThreeHero } from '../components/ThreeHero';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CaseStudies } from '../components/CaseStudies';
import { Insights } from '../components/Insights';
import { Footer } from '../components/Footer';
import { MobileMenu } from '../components/MobileMenu';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <ThreeHero />
        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 md:px-16 lg:px-24">
          <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-8 md:p-16 lg:p-24">
            <Link to="/" className="text-xl font-bold tracking-tight">BOLT DESIGN</Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-full hidden md:flex">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <MobileMenu />
            </div>
          </nav>
          <h2 className="text-xl font-medium text-neutral-600 mb-4">
            Hello, I'm Bolt
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 max-w-4xl mb-6">
            I am a Senior Product Designer connecting UX, design systems, and front-end.
          </h1>
          <div className="mt-8">
            <Button variant="outline" className="rounded-full group">
              View All Works
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Insights Section */}
      <Insights />

      {/* Contact Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Let's rock <span className="text-neutral-400">with me</span></h2>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}