import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "./icons/arrow-right";
import { GitHubIcon, LinkedInIcon } from "./icons/social";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Decent App", href: "/case-study/decent-app" },
  { label: "Blockset Docs", href: "/case-study/blockset-docs" },
  { label: "Decent Design System", href: "/case-study/decent-design-system" },
  { label: "3D Experiments", href: "/playground/threejs" },
  { label: "Design System Demo", href: "/playground/design-system" },
];

const socialLinks = [
  // { icon: DribbbleIcon, href: "https://dribbble.com/trice" },
  { icon: GitHubIcon, href: "https://github.com/trice" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/trice" },
];

export function MobileMenu() {
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
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        className={cn(
          "w-full sm:w-[540px] bg-background border-l border-border",
          "flex flex-col"
        )}
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          {socialLinks.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label={`Visit ${href.split('.com/')[1]} profile`}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <nav className="flex flex-col gap-8" aria-label="Mobile navigation">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-display-lg text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            variant="default"
            size="lg"
            className="rounded-full mt-8 group transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Let's Talk
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}