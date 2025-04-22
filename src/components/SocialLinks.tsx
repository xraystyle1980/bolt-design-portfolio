import { DribbbleIcon, GitHubIcon, LinkedInIcon } from "./icons/social"

export const socialLinks = [
  { icon: LinkedInIcon, href: "https://linkedin.com/in/trice", label: "LinkedIn" },
  { icon: GitHubIcon, href: "https://github.com/trice", label: "GitHub" },
  { icon: DribbbleIcon, href: "https://dribbble.com/trice", label: "Dribbble" },
];

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
} 