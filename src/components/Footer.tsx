import { DribbbleIcon, GitHubIcon, LinkedInIcon } from "./icons/social"
import { Link } from "react-router-dom"

interface FooterProps {
  className?: string
}

interface FooterSection {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

const footerSections: FooterSection[] = [
  {
    title: "Home",
    links: [
      { label: "Home", href: "/" },
      { label: "About Me", href: "/about" },
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
  { icon: DribbbleIcon, href: "https://dribbble.com", label: "Dribbble" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
]

export function Footer({ className }: FooterProps) {
  return (
    <div className="flex w-full flex-col gap-2 py-24">
      <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-3 min-[1190px]:flex-nowrap">
        <div className="h-[30px] w-52 bg-accent" />
        <div className="flex items-center gap-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-white/60 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <p className="text-body-xl text-accent">
        Always iterating, always experimenting.
      </p>

      <div className="pt-16">
        <h2 className="text-display-sm text-neutral-500 mb-6">
          Pages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[88px] gap-y-[51px]">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-body-sm font-bold text-neutral-500">
                {section.title}
              </h3>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-body-md text-neutral-800 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center pt-16">
        <p className="text-body-caption text-neutral-500 text-center">
          ©2025 Trice Design, LLC. Built for learning and tinkering—fork it, remix it, build cool shit. Designed with 🐈
        </p>
      </div>
    </div>
  )
}