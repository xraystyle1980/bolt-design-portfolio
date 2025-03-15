import { Button } from "./ui/button"
import { ArrowRight } from "./icons/arrow-right"

interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  return (
    <section className="border-t border-solid border-neutral-300">
      <div className="flex flex-col items-center gap-8 py-24">
        <h2 className="text-display-lg text-neutral-500">
          Have an idea?
        </h2>
        <div className="text-display-5xl">
          <span className="text-foreground">hello</span>
          <span className="text-accent">@trice.design</span>
        </div>
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
    </section>
  )
} 