import { Button } from "./ui/button"
import { ArrowRight } from "./icons/arrow-right"

interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  return (
      <div className="flex flex-col items-center gap-8 py-24">
        <h4 className="text-display-lg text-neutral-500">
          Have an idea?
        </h4>
        <h5 className="text-display-5xl">
          <span className="text-foreground">hello</span>
          <span className="text-accent">@trice.design</span>
        </h5>
        <div className="pt-10">
          <Button 
            variant="outline" 
            size="sm"
            className="group"
          >
            Book a Call
            <ArrowRight size="sm" />
          </Button>
        </div>
      </div>
    
  )
} 