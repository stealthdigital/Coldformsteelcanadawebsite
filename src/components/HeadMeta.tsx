import { useEffect } from 'react';

interface HeadMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function HeadMeta({ 
  title = 'SteelBuilt - Cold-Form Steel Homes & Barndominiums',
  description = 'Build your dream home faster with factory-built cold-form steel construction. Structures framed in 4-5 days. Durable, fire-resistant, and eco-friendly.',
  image = 'https://via.placeholder.com/1200x630/665f55/ffffff?text=SteelBuilt+Homes',
  url = window.location.href
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