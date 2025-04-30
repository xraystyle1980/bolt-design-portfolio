import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function MetaTags({ 
  title = "Matt Trice Design | Senior Product Designer",
  description = "👋 Hello, I'm Matt Trice. I am a Senior Product Designer connecting UX, design systems, and front-end.",
  ogImage = "https://trice.design/OG-image.png",
  ogUrl = "https://trice.design"
}: MetaTagsProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: 'title', content: title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: ogUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:url', content: ogUrl }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    });
  }, [title, description, ogImage, ogUrl]);

  return null;
} 