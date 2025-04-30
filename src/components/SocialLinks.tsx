import { Button } from "./ui/button"
import { socialLinks } from "@/data/social-links"

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