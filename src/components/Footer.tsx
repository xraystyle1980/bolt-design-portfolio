import { Container } from "./ui/container"
import { Link } from "react-router-dom"
import { LottieLogo } from "./LottieLogo"
import { cn } from "../lib/utils"

const menuSections = [
  {
    title: "Trice Design",
    items: [
      { label: "Home", href: "/" },
      { label: "Book a Call", href: "#book-call" },
      { label: "hello@trice.design", href: "mailto:hello@trice.design" },
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

export function Footer() {
  return (
    <footer className="w-full pt-24 border-t border-border">
      <Container className="max-w-screen-2xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col gap-2 mb-4">
            <LottieLogo />
            <p className="text-body-xl">Matt Trice Design.<span className="text-muted-foreground"> Always iterating, always experimenting</span></p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 mb-24 md:max-w-screen-lg">
          {menuSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <p className="text-muted-foreground mb-4 md:mb-8">{section.title}</p>
              <div className="flex flex-col">
                {section.items.map((item, index) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "py-2 md:py-4",
                      index !== section.items.length - 1 && "md:border-b md:border-border"
                    )}
                  >
                    <span className="text-body-lg lg:text-body-xl text-foreground hover:text-accent transition-colors">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col space-y-2">
          <p className="text-body-sm">©2025 Trice Design, LLC. Built for learning and tinkering—fork it, remix it, build cool shit.<br />
          <span className="caption text-muted-foreground">Designed despite of tyrannical 🐈</span></p>
        </div>
      </Container>
    </footer>
  );
}