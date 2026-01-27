import { Helmet } from 'react-helmet-async';
import { getCanonicalUrl } from '../config/seo';

interface HeadMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  canonicalUrl?: string;
  robots?: string;
  pathname?: string; // Allow passing pathname directly for canonical URL
}

export function HeadMeta({ 
  title = 'Cold Form Steel Canada | Steel Frame Homes & Barndominiums',
  description = 'Build your dream home faster with factory-built cold-form steel construction. Structures framed in 4-5 days. Durable, fire-resistant, and eco-friendly.',
  keywords = 'cold form steel, steel frame homes, barndominiums, ADU, steel construction, prefab homes, Canada',
  image = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://coldformsteelcanada.com',
  type = 'website',
  author = 'Cold Form Steel Canada',
  canonicalUrl,
  robots = 'index, follow',
  pathname // Pathname for canonical URL generation
}: HeadMetaProps) {
  const siteTitle = 'Cold Form Steel Canada';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  
  // Generate canonical URL from pathname if provided, otherwise use canonicalUrl or default to base URL
  const currentPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const canonical = canonicalUrl || getCanonicalUrl(currentPath);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL - Always present */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Ontario" />
    </Helmet>
  );
}