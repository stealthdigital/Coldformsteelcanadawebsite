import { useEffect } from 'react';

interface Review {
  author: string;
  rating: number; // 1-5
  reviewBody: string;
  datePublished?: string;
  location?: string;
}

interface ReviewSchemaProps {
  itemName: string; // e.g., "Cold Form Steel Canada"
  reviews: Review[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ReviewSchema({ itemName, reviews, aggregateRating }: ReviewSchemaProps) {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": itemName,
      "aggregateRating": aggregateRating ? {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue.toString(),
        "reviewCount": aggregateRating.reviewCount.toString()
      } : undefined,
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author,
          ...(review.location && { "address": review.location })
        },
        "datePublished": review.datePublished || new Date().toISOString(),
        "reviewBody": review.reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    };

    // Remove undefined values
    const cleanedData = JSON.parse(JSON.stringify(schemaData));

    // Create or update the schema script tag
    const scriptId = 'review-schema';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(cleanedData);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [itemName, reviews, aggregateRating]);

  return null;
}
