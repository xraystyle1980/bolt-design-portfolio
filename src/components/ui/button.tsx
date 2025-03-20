import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 rounded-[100px] font-domine font-normal transition-[transform,colors,background-color,border-color] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-4 border-solid border-transparent hover:border-accent hover:bg-transparent hover:text-primary hover:font-medium',
        outline: 'border border-solid border-primary bg-background hover:border-accent hover:bg-transparent hover:text-accent-foreground hover:font-medium',
        ghost: 'hover:bg-accent/10 hover:text-accent hover:font-medium',
        link: 'text-primary underline-offset-4 hover:underline hover:font-medium',
      },
      size: {
        lg: 'px-11 py-6 text-[22px] leading-[1.3]',
        md: 'px-[26px] py-4 text-body-md leading-normal',
        sm: 'px-[18px] py-3 text-body-sm leading-normal',
        icon: {
          lg: 'p-6',
          md: 'p-[15px]',
          sm: 'p-[13px]'
        }
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
