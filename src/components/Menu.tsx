import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Menu as MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { useState } from "react";
import { manageScrollbarWidth } from "@/lib/utils";

const menuSections = [
  {
    title: "Trice Design",
    items: [
      { label: "Home", href: "/" },
    ]
  },
  {
    title: "Case Studies",
    items: [
      { label: "Decent App", href: "/case-study/decent-app" },
      { label: "Blockset by BRD - Docs Site", href: "/case-study/blockset-docs" },
      { label: "Decent Design System", href: "/case-study/decent-design-system" },
    ]
  },
  {
    title: "Demos",
    items: [
      { label: "Design System Demo", href: "/demo/design-system" },
      { label: "3D Experiments", href: "/demo/threejs" },
    ]
  }
];

export function Menu() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    manageScrollbarWidth(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full w-8 h-8 md:w-10 md:h-10"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </DialogTrigger>


      <DialogContent className="w-[95vw] max-w-[1400px] p-6 md:p-12">
        <div className="flex flex-col">
          

          {/* Main Content */}
          <div className="flex flex-1 h-full mt-6">
            <div className="flex flex-col w-full">
              
              {/* Create a container for both sections with equal widths */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 flex-1">


                

                {/* Contact Section */}
                <div className="flex flex-col space-y-3 md:space-y-6 items-center justify-center border-b md:border-r md:border-b-0 border-border pb-6 md:pb-0">
       
                  {/* Social Links */}
                  <div className="py-0 md:py-2">
                    <SocialLinks className="flex items-center gap-6" />
                  </div>

                  {/* Contact */}
                  <a 
                    href="mailto:hello@trice.design"
                    className="text-body-md lg:text-body-xl pb-2 text-foreground hover:text-accent transition-colors"
                    aria-label="Send me an email at hello@trice.design"
                    title="Send an email to Matt Trice"
                  >
                    hello@trice.design
                  </a>
                  <a 
                    href="https://calendly.com/matt-trice/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Schedule a 30-minute consultation call with Matt Trice"
                  >
                    <Button 
                      size="sm"
                      className="md:size-lg text-primary-foreground"
                      icon={ArrowRight}
                      iconPlacement="right"
                    >
                      Book a Call
                    </Button>
                  </a>
                </div>


                {/* Navigation */}
                <nav className="flex flex-col space-y-4 md:space-y-8 justify-center items-center md:items-end" aria-label="Main navigation">
                  {menuSections.map((section) => (
                    <div key={section.title} className="flex flex-col">
                      <p className="text-muted-foreground caption mb-0 md:mb-2">{section.title}</p>
                      <div className="flex flex-col gap-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="text-body-lg lg:text-body-xl font-normal text-foreground hover:text-accent transition-colors hover:underline-offset-4 hover:underline"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>




              </div>
            </div>
          </div>
        </div>
      </DialogContent>


    </Dialog>
  );
}