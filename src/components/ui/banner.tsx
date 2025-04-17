import { cn } from "@/lib/utils"

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'warning' | 'info'
  icon?: React.ReactNode
}

export function Banner({ 
  children, 
  className,
  variant = 'warning',
  icon,
  ...props 
}: BannerProps) {
  return (
    <div
      className={cn(
        "relative pl-7 pr-4 py-5 rounded-r-lg bg-card border-l-4 mt-1 mb-6",
        icon && "pl-12",
        variant === 'warning' && "border-l-yellow-500/50 bg-yellow-500/[0.08]",
        variant === 'info' && "border-l-muted-foreground bg-muted",
        className
      )}
      {...props}
    >
      {icon && (
        <div className={cn(
          "absolute left-4 top-4",
          variant === 'warning' && "text-yellow-500",
          variant === 'info' && "text-muted-foreground"
        )}>
          {icon}
        </div>
      )}
      <div className="text-body-lg text-foreground">
        {children}
      </div>
    </div>
  )
} 