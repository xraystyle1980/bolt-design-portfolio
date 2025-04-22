import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import { ArrowRight } from "./icons/arrow-right";
import { SocialLinks } from "./SocialLinks";
import { LottieLogo } from "./LottieLogo";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-12 h-8 md:w-14 md:h-10"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        {/* Logo */}
        <div className="mb-12">
          <LottieLogo className="w-[160px] md:w-[200px]" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <SocialLinks />
          </div>

          {/* Contact */}
          <a 
            href="mailto:hello@trice.design"
            className="text-body-lg lg:text-body-xl text-foreground hover:text-accent transition-colors"
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
      </SheetContent>
    </Sheet>
  );
}