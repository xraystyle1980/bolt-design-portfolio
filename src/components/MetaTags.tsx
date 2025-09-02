import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.trice.design';

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonical?: string;
  noindex?: boolean;
}

const MetaTags = ({
  title = "Matt Trice Design | Senior Product Designer",
  description = "👋 Hello, I'm Matt Trice. I am a Senior Product Designer blending creative momentum with thoughtful UX, clean UI, and scalable design systems.",
  ogImage = `${BASE_URL}/meta/OG-image.png`,
  ogUrl = BASE_URL,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@tricedesign',
  twitterCreator = '@tricedesign',
  canonical,
  noindex = false,
}: MetaTagsProps) => {
  // Build canonical URL - use passed canonical or construct from current path
  const canonicalUrl = canonical || `${BASE_URL}${window.location.pathname === '/' ? '' : window.location.pathname}`;
  
  // Ensure ogUrl uses canonical URL if not explicitly provided
  const finalOgUrl = ogUrl === BASE_URL && canonical ? canonicalUrl : ogUrl;
  
  // Only construct full URL for images if it's a relative path
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Robots directive */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL - only add if not noindex */}
      {!noindex && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={finalOgUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      {twitterSite && <meta property="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta property="twitter:creator" content={twitterCreator} />}
    </Helmet>
  );
};

export default MetaTags; 