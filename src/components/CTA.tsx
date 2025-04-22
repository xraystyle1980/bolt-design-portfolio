import { Button } from "./ui/button"
import { ArrowRight } from "./icons/arrow-right"
import { Mail } from "lucide-react"

export function CTA() {
  return (
      <div className="flex flex-col items-center gap-8 py-24">
        <h4 className="text-display-lg">
          Let's work together
        </h4>
        <div className="flex flex-row items-center justify-center gap-2">
          <Mail className="text-muted-foreground h-14 w-14" />
          <h5 className="mb-0 text-display-lg sm:text-display-xl md:text-display-3xl lg:text-display-4xl">
            <a href="mailto:hello@trice.design" className="text-muted-foreground hover:opacity-80 transition-opacity">
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