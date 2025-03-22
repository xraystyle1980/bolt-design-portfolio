import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "./icons/arrow-right";
import { DribbbleIcon, GitHubIcon, LinkedInIcon } from "./icons/social";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Decent App", href: "/case-study/decent-app" },
  { label: "Blockset Docs", href: "/case-study/blockset-docs" },
  { label: "Decent Design System", href: "/case-study/decent-design-system" },
  { label: "3D Experiments", href: "/playground/threejs" },
  { label: "Design System Demo", href: "/playground/design-system" },
];

const socialLinks = [
  { icon: DribbbleIcon, href: "https://dribbble.com/trice" },
  { icon: GitHubIcon, href: "https://github.com/trice" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/trice" },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-10 h-10"
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
        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          {socialLinks.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <nav className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-display-lg text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button 
            variant="default"
            size="lg"
            className="rounded-full mt-8 w-fit group transition-all duration-300"
          >
            Let's Talk
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}