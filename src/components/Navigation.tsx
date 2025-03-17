import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/components/icons/arrow-right';
import { MobileMenu } from './MobileMenu';
import { Container } from '@/components/ui/container';
import { LottieLogo } from './LottieLogo';
import { cn } from '@/lib/utils';

interface NavigationProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Navigation({ variant = 'light', className }: NavigationProps) {
  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50',
    'bg-blue-500 py-4 shadow-lg',
    className
  );

  const logoClasses = cn(
    'transform transition-all duration-300 ease-in-out origin-left'
  );

  const buttonClasses = cn(
    'rounded-full hidden md:inline-flex group transition-all duration-300'
  );

  return (
    <nav className={navClasses}>
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {variant === 'light' ? (
            <div className={logoClasses}>
              <LottieLogo />
            </div>
          ) : (
            <span className={cn(logoClasses, 'text-display-sm font-normal tracking-tight')}>
              BOLT DESIGN
            </span>
          )}
        </Link>
        <div className="flex items-center gap-4">
          <Button 
            variant="default"
            size="lg"
            className={buttonClasses}
          >
            Let's Talk
            <ArrowRight size="sm" />
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </nav>
  );
} 