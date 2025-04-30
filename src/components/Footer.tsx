import { LottieLogo } from "@/components/LottieLogo"
import { Container } from "@/components/ui/container"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Lightbox } from "@/components/Lightbox"

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

export function Footer() {
  return (
    <footer className="w-full pt-24 border-t border-border">
      <Container className="max-w-screen-2xl">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col gap-2 mb-4">
            <LottieLogo />
            <p className="text-body-md md:text-body-xl">Matt Trice Design.<span className="text-muted-foreground"> Always iterating, always experimenting.</span></p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-10 lg:gap-20 mb-24">
          {menuSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <p className="text-muted-foreground caption mb-0 md:mb-2">{section.title}</p>
              <div className="flex flex-col">
                {section.items.map((item, index) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "text-body-lg lg:text-body-xl font-normal text-foreground hover:text-accent transition-colors",
                      index !== section.items.length - 1 && ""
                    )}
                  >
                    <span className="text-body-lg lg:text-body-xl text-foreground hover:text-accent transition-colors hover:underline-offset-4 hover:underline">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col space-y-2">
          <p className="max-w-[85%] caption text-foreground">
            ©2025 Trice Design, LLC. Built for learning and tinkering—fork it, remix it, build cool shit.&nbsp;
            <Lightbox
              images={[{
                url: "/fuzzy-404.mp4",
                alt: "Static video",
                videoUrl: "/fuzzy-404.mp4",
                aspectRatio: "16/9"
              }]}
              containerHidden
            >
              <span className="caption text-muted-foreground cursor-pointer hover:text-accent transition-colors inline-flex">Designed despite of tyrannical 🐈</span>
            </Lightbox>
          </p>
        </div>
      </Container>
    </footer>
  );
}


