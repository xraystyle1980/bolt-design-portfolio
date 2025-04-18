import { Container } from "./ui/container"
import { Link } from "react-router-dom"
import { GitHubIcon, LinkedInIcon } from "./icons/social"

interface FooterSection {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

const footerSections: FooterSection[] = [
  {
    title: "Trice Design",
    links: [
      { label: "Home", href: "/" },
    ]
  },
  {
    title: "Case Studies",
    links: [
      { label: "Decent App", href: "/case-study/decent-app" },
      { label: "Blockset Docs by BRD", href: "/case-study/blockset-docs" },
      { label: "Decent Design System", href: "/case-study/decent-design-system" },
    ]
  },
  {
    title: "Playground",
    links: [
      { label: "3D Experiments", href: "/playground/threejs" },
      { label: "Design System Demo", href: "/playground/design-system" },
    ]
  }
]

const socialLinks = [
  // { icon: DribbbleIcon, href: "https://dribbble.com", label: "Dribbble" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
]

export function Footer() {
  return (
    <div className="flex w-full flex-col gap-2 pt-12 pb-3 border-t border-border">
      <Container className="max-w-screen-2xl">
      <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-3">
        <h2 className="text-display-sm flex flex-col">
          Matt Trice Design
          <span className="text-muted-foreground mt-2">
            Always iterating, always experimenting.
          </span>
        </h2>
        <div className="flex items-center gap-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="pt-16 max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[88px] gap-y-[51px]">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-body-sm font-bold text-muted-foreground">
                {section.title}
              </h3>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-body-md hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex pt-16">
        <p className="text-body-sm">
          ©2025 Trice Design, LLC. Built for learning and tinkering—fork it, remix it, build cool shit. Designed despite of tyrannical 🐈
        </p>
      </div>
      </Container>
    </div>
  )
}