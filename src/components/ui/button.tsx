import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants, iconClasses } from './button-variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconPlacement?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon: Icon, iconPlacement = 'right', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const iconSize = size === 'lg' ? iconClasses.lg : size === 'sm' ? iconClasses.sm : iconClasses.md;

    if (size === 'icon') {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === 'left' && (
          <Icon className={cn(iconSize, 'transition-transform duration-200 ease-custom-spring group-hover:-translate-x-1')} />
        )}
        {children}
        {Icon && iconPlacement === 'right' && (
          <Icon className={cn(iconSize, 'transition-transform duration-200 ease-custom-spring group-hover:translate-x-1')} />
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
