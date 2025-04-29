import { Button } from "./ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTA() {
  return (
      <div className="flex flex-col items-center gap-8 py-24">
        <h4>
          Let's work together
        </h4>
        <div className="flex flex-row items-center justify-center gap-2">
          <Mail className="text-muted-foreground h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14" />
          <h5 className="mb-0 text-display-sm sm:text-display-lg md:text-display-2xl lg:text-display-4xl font-normal">
            <a href="mailto:hello@trice.design" className="text-muted-foreground hover:text-accent hover:underline-offset-4 hover:underline transition-opacity">
              <span className="text-foreground">hello</span>@trice.design
            </a>
          </h5>
        </div>
        
        <div className="pt-2 md:pt-8">
          <a 
            href="https://calendly.com/matt-trice/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="md"
              className="md:size-lg text-primary-foreground"
              icon={ArrowRight}
              iconPlacement="right"
            >
              Book a Call
            </Button>
          </a>
        </div>
      </div>
  )
} 