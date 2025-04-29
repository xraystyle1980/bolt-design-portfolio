import { DribbbleIcon, GitHubIcon, LinkedInIcon } from "./icons/social"
import { Button } from "./ui/button"

export const socialLinks = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/matt-trice/", label: "LinkedIn" },
  { icon: GitHubIcon, href: "https://github.com/xraystyle1980", label: "GitHub" },
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
        >
          <Button
            variant="ghost"
            size="icon"
            className="p-[13px]"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </Button>
        </a>
      ))}
    </div>
  );
} 