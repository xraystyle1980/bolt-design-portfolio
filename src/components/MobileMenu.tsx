import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "./icons/arrow-right";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Decent App", href: "/case-study/decent-app" },
  { label: "Blockset Docs", href: "/case-study/blockset-docs" },
  { label: "Decent Design System", href: "/case-study/decent-design-system" },
  { label: "3D Experiments", href: "/playground/threejs" },
  { label: "Design System Demo", href: "/playground/design-system" },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full w-12 h-12 hover:bg-accent"
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
        <nav className="flex flex-col gap-8 mt-16">
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