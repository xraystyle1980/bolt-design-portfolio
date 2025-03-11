import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#" },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-12 h-12">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[540px] bg-white">
        <SheetTitle className="text-xl font-bold">Navigation Menu</SheetTitle>
        <nav className="flex flex-col gap-8 mt-16">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-4xl font-bold tracking-tight hover:text-neutral-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button className="rounded-full mt-8 w-fit">
            Let's Talk
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}