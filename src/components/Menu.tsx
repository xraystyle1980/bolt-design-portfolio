import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu as MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "./icons/arrow-right";
import { SocialLinks } from "./SocialLinks";
import { useState } from "react";
import { BlinkAnimation } from "./BlinkAnimation";

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
    title: "Playground",
    items: [
      { label: "3D Experiments", href: "/playground/threejs" },
      { label: "Design System Demo", href: "/playground/design-system" },
    ]
  }
];

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-12 h-8 md:w-14 md:h-10"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </DialogTrigger>


      <DialogContent className="w-[95vw] h-[90vh] max-w-[1400px] p-6 md:p-12">
        <div className="flex flex-col">
          

          {/* Main Content */}
          <div className="flex flex-1 h-full mt-6">
            <div className="flex flex-col w-full">
              
              {/* Create a container for both sections with equal widths */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 flex-1">


                

                {/* Contact Section */}
                <div className="flex flex-col space-y-3 md:space-y-6 items-center md:items-start justify-center border-b md:border-r md:border-b-0 border-border">
                  {/* Logo */}
                  <div>
                    <BlinkAnimation className="h-[100px] md:h-[150px] w-auto" />
                  </div>
                  {/* Social Links */}
                  <div className="py-2">
                    <SocialLinks className="flex items-center gap-6" />
                  </div>

                  {/* Contact */}
                  <a 
                    href="mailto:hello@trice.design"
                    className="text-body-lg lg:text-body-xl pb-2 text-foreground hover:text-accent transition-colors"
                  >
                    hello@trice.design
                  </a>

                  {/* Book a Call Button */}
                  <Button 
                    variant="outline"
                    size="md"
                    className="rounded-full group transition-all duration-300 w-fit"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>


                {/* Navigation */}
                <nav className="flex flex-col space-y-4 md:space-y-8 justify-center items-center md:items-end" aria-label="Main navigation">
                  {menuSections.map((section) => (
                    <div key={section.title} className="flex flex-col">
                      <p className="text-muted-foreground caption">{section.title}</p>
                      <div className="flex flex-col gap-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="text-body-lg lg:text-body-xl font-normal text-foreground hover:text-accent transition-colors"
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