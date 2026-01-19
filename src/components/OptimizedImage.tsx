import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // For above-the-fold images
  width?: number;
  height?: number;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  width,
  height,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images load immediately
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Increased from 50px to start loading earlier
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Calculate aspect ratio for layout shift prevention
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div 
      ref={imgRef}
      className={`relative ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {isInView ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          width={width}
          height={height}
          style={{
            maxWidth: '100%',
            height: 'auto',
            ...props.style,
          }}
          {...props}
        />
      ) : (
        <div 
          className={`bg-gray-100 animate-pulse absolute inset-0`}
          style={aspectRatio ? { aspectRatio } : width && height ? { width, height } : undefined}
          aria-label={`Loading ${alt}`}
        />
      )}
    </div>
  );
}