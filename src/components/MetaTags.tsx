import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

const MetaTags = ({
  title = "Matt Trice Design | Senior Product Designer",
  description = "👋 Hello, I'm Matt Trice. I am a Senior Product Designer focused on UX, UI, design systems, and frontend craft.",
  ogImage = "https://trice.design/meta/OG-image.png",
  ogUrl = "https://trice.design",
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@tricedesign',
  twitterCreator = '@tricedesign',
}: MetaTagsProps) => {
  // Get the base URL from environment or use current origin
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;
  
  // Only construct full URL for images if it's a relative path
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      {twitterSite && <meta property="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta property="twitter:creator" content={twitterCreator} />}
    </Helmet>
  );
};

export default MetaTags; 