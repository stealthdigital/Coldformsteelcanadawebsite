import { useEffect } from 'react';

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
  sameAs?: string[]; // Social media URLs
}

export function OrganizationSchema({
  name = 'Cold Form Steel Canada',
  description = 'Leading provider of cold-form steel homes and barndominiums in Canada. Factory-built construction with 4-5 day framing times.',
  url = 'https://coldformsteelcanada.com',
  logo = 'https://yourdomain.com/images/logo.png',
  address,
  contactPoint,
  sameAs = []
}: OrganizationSchemaProps) {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": name,
      "description": description,
      "url": url,
      "logo": {
        "@type": "ImageObject",
        "url": logo
      },
      ...(address && {
        "address": {
          "@type": "PostalAddress",
          ...address
        }
      }),
      ...(contactPoint && {
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": contactPoint.telephone,
          "email": contactPoint.email,
          "contactType": contactPoint.contactType || "Customer Service"
        }
      }),
      ...(sameAs.length > 0 && { "sameAs": sameAs })
    };

    // Create or update the schema script tag
    const scriptId = 'organization-schema';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(schemaData);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [name, description, url, logo, address, contactPoint, sameAs]);

  return null;
}
