import { useEffect } from 'react';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author?: {
    name: string;
    jobTitle?: string;
  };
  datePublished: string;
  dateModified?: string;
  category?: string;
  keywords?: string[];
  imageUrl?: string;
}

export function ArticleSchema({
  headline,
  description,
  author = { name: 'Cold Form Steel Canada', jobTitle: 'Construction Experts' },
  datePublished,
  dateModified,
  category = 'Construction',
  keywords = [],
  imageUrl = 'https://yourdomain.com/images/default-article.jpg'
}: ArticleSchemaProps) {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "description": description,
      "image": imageUrl,
      "author": {
        "@type": "Person",
        "name": author.name,
        ...(author.jobTitle && { "jobTitle": author.jobTitle })
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cold Form Steel Canada",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/images/logo.png"
        }
      },
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "articleSection": category,
      "keywords": keywords.join(', '),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };

    // Create or update the schema script tag
    const scriptId = 'article-schema';
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
  }, [headline, description, author, datePublished, dateModified, category, keywords, imageUrl]);

  return null;
}
