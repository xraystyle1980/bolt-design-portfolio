import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { articles } from '@/data/articles';
import { demos } from '@/data/demos';
import { projects } from '@/data/case-studies';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface NavItem {
  title: string;
  items: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

interface InPageNavigationProps {
  className?: string;
}

const navigationSections: NavItem[] = [
  {
    title: 'Case Studies',
    items: projects.map(project => ({
      id: project.id,
      label: project.title,
      href: `#${project.id}`
    }))
  },
  {
    title: 'Demos',
    items: demos.map(demo => ({
      id: demo.id,
      label: demo.title,
      href: `#${demo.id}`
    }))
  },
  {
    title: 'Writing',
    items: articles.map(article => ({
      id: article.id,
      label: article.title,
      href: `#${article.id}`
    }))
  }
];

export function InPageNavigation({ className }: InPageNavigationProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!navRef.current) return;

    // Use the content container as trigger for better pin range
    const triggerElement = document.getElementById('content-with-nav');
    
    if (!triggerElement) return;

    // Create ScrollTrigger pin for the navigation
    pinTriggerRef.current = ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 128px",
      end: "bottom bottom",
      pin: navRef.current,
      pinSpacing: false,
    });

    // Create ScrollTrigger instances for each navigation item to track active state
    const allItems = navigationSections.flatMap(section => section.items);
    
    allItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveId(item.id),
          onEnterBack: () => setActiveId(item.id),
        });
      }
    });

    return () => {
      if (pinTriggerRef.current) {
        pinTriggerRef.current.kill();
      }
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger && allItems.some(item => 
          document.getElementById(item.id) === trigger.vars.trigger
        )) {
          trigger.kill();
        }
      });
    };
  }, []);

  const handleNavClick = (href: string) => {
    // Handle external links (Medium articles)
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    // Use GSAP ScrollToPlugin for internal anchor links
    const element = document.querySelector(href);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: 100 // Offset to account for fixed navigation
        },
        ease: "power2.inOut",
        onComplete: () => {
          // Refresh ScrollTrigger after programmatic scroll
          ScrollTrigger.refresh();
        }
      });
    }
  };

  return (
    <div ref={navRef} className={cn("hidden lg:block", className)}>
      <nav className="bg-background/80 backdrop-blur-sm rounded-lg pl-4 pr-0 py-4 mt-4">
        <div className="space-y-3">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-body-caption font-medium text-foreground">
                {section.title}
              </h4>
              <ul>
                {section.items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "block w-full text-left px-3 py-1 !text-body-xs transition-all duration-200 rounded-md",
                          "hover:bg-muted hover:text-foreground",
                          isActive 
                            ? "bg-muted text-foreground font-medium" 
                            : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}