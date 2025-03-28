import { Container } from '@/components/ui/container';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DesignSystemPlayground() {
  return (
    <div className="min-h-screen pt-32">
      <Container>
        <div className="flex flex-col gap-12">
          <Link 
            to="/" 
            className={cn(
              "flex items-center gap-2 text-body-lg text-muted-foreground w-fit",
              "transition-colors hover:text-primary"
            )}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-8">
            <h1 className="text-display-2xl">Design System Demo</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              An interactive showcase of the design system components and patterns.
              Coming soon.
            </p>
          </div>
        </div>
      </Container>
      
      <Container className="mt-24">
        <Footer />
      </Container>
    </div>
  );
} 