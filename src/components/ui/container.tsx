import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mx-auto w-full max-w-screen-xl px-6 md:px-8', className)}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container'; 