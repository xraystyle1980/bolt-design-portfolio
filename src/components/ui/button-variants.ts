import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[100px] font-domine transition-[transform,colors,background-color,border-color] ease-custom-spring hover:scale-[1.125] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group w-fit',
  {
    variants: {
      variant: {
        default: 'border border-solid border-primary bg-primary text-primary-foreground hover:bg-background hover:text-primary hover:border hover:border-solid hover:border-primary hover:font-bold',
        outline: 'border border-solid border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:font-medium',
        ghost: 'hover:bg-primary hover:text-primary-foreground hover:font-medium',
        link: 'text-primary underline-offset-4 hover:underline hover:font-medium',
        card: 'w-full flex flex-col p-6 rounded-2xl border border-border hover:bg-muted transition-colors text-foreground no-underline hover:no-underline'
      },
      size: {
        lg: 'px-11 py-6 text-[22px] leading-[1.3]',
        md: 'px-8 py-4 text-body-md leading-normal',
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

export const iconClasses = {
  lg: 'h-6 w-6 md:h-8 md:w-8',
  md: 'h-5 w-5 md:h-6 md:w-6',
  sm: 'h-4 w-4 md:h-5 md:w-5',
}; 