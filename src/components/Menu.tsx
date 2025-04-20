import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "./icons/arrow-right";
import { GitHubIcon, LinkedInIcon } from "./icons/social";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { LottieLogo } from "./LottieLogo";

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

const socialLinks = [
  { icon: LinkedInIcon, href: "https://linkedin.com/in/trice" },
  { icon: GitHubIcon, href: "https://github.com/trice" },
];

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-14 h-10"
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        className={cn(
          "w-full sm:w-[540px] lg:w-screen h-screen bg-background p-8 lg:p-12",
          "flex flex-col lg:flex-row lg:items-stretch"
        )}
        side="right"
      >
        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Logo */}
          <div className="mb-12">
            <LottieLogo />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-12" aria-label="Main navigation">
            {menuSections.map((section) => (
              <div key={section.title} className="flex flex-col space-y-6">
                <h2 className="text-lg text-muted-foreground">{section.title}</h2>
                <div className="flex flex-col space-y-6">
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="text-display-lg text-foreground hover:text-primary transition-colors"
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

        {/* Contact Section - Mobile: Bottom, Desktop: Right Side */}
        <div className={cn(
          "flex flex-col space-y-8 mt-auto lg:mt-0",
          "lg:w-[400px] lg:justify-end lg:pl-8 lg:border-l lg:border-border"
        )}>
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Visit ${href.split('.com/')[1]} profile`}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <a 
            href="mailto:hello@trice.design"
            className="text-lg text-foreground hover:text-primary transition-colors"
          >
            hello@trice.design
          </a>

          {/* Book a Call Button */}
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full group transition-all duration-300 w-fit"
          >
            Book a Call
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}