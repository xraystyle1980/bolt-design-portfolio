import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ArrowRight } from "./icons/arrow-right"

export function Footer() {
  return (
    <div className="py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-body-lg text-neutral-400 mb-4">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="text-body-sm bg-transparent border-neutral-700 text-white placeholder:text-neutral-500"
            />
            <Button variant="outline" size="icon" className="shrink-0 border-neutral-700 text-white hover:bg-white/10">
              <ArrowRight />
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-display-xs font-normal mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                Insights
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-display-xs font-normal mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}