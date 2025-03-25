import { Button } from "./ui/button"
import { ArrowRight } from "./icons/arrow-right"
import { Mail } from "lucide-react"

interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  return (
      <div className="flex flex-col items-center gap-8 py-24">
        <h4 className="text-display-lg">
          Have an idea?
        </h4>
        <div className="flex flex-row items-center justify-center gap-2">
          <Mail className="text-accent h-14 w-14" />
          <h5 className="mb-0 text-display-xl sm:text-display-2xl md:text-display-4xl lg:text-display-5xl">
            <a href="mailto:hello@trice.design" className="text-accent hover:opacity-80 transition-opacity">
              <span className="text-foreground">hello</span>@trice.design
            </a>
          </h5>
        </div>
        
        <div className="pt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="group"
          >
            Book a Call
            <ArrowRight size="sm" />
          </Button>
        </div>
      </div>
    
  )
} 