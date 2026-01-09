import { useEffect } from 'react';

interface HeadMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  preloadImage?: string;
}

export function HeadMeta({ 
  title = 'SteelBuilt - Cold-Form Steel Homes & Barndominiums',
  description = 'Build your dream home faster with factory-built cold-form steel construction. Structures framed in 4-5 days. Durable, fire-resistant, and eco-friendly.',
  image = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png',
  url = window.location.href,
  preloadImage
}: HeadMetaProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to set or update meta tag
    const setMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Preload Critical Image (LCP Optimization)
    if (preloadImage) {
      let link = document.querySelector(`link[rel="preload"][as="image"][href="${preloadImage}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'image');
        link.setAttribute('href', preloadImage);
        document.head.appendChild(link);
      }
    }
    
    // Set Open Graph meta tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', url);
    setMetaTag('og:type', 'website');
    
    // Set Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', image, true);
    
    // Set standard meta tags
    setMetaTag('description', description, true);
    
  }, [title, description, image, url]);
  
  return null;
}