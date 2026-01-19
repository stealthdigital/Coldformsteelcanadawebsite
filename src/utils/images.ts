/**
 * Image Optimization Utilities
 * 
 * These functions help you serve optimized images from your CDN.
 * Currently configured for Cloudinary, but can work with any CDN.
 */

// TODO: Replace with your Cloudinary cloud name after signing up
// Get this from your Cloudinary dashboard: https://cloudinary.com/console
const CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUD_NAME_HERE';
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

/**
 * Get an optimized image URL from Cloudinary
 * 
 * @param imageName - The name of the image in Cloudinary (without path)
 * @param width - Maximum width in pixels (default: 1920)
 * @param quality - Image quality: 'auto' or 1-100 (default: 'auto')
 * @returns Optimized image URL
 * 
 * @example
 * ```tsx
 * const heroImage = getOptimizedImage('medio-dark-interior-3', 1920);
 * // Returns: https://res.cloudinary.com/your-account/image/upload/w_1920,q_auto,f_auto/medio-dark-interior-3
 * 
 * <img src={heroImage} alt="Medio Interior" />
 * ```
 */
export function getOptimizedImage(
  imageName: string,
  width: number = 1920,
  quality: 'auto' | number = 'auto'
): string {
  // If you haven't set up Cloudinary yet, return the original GitHub URL
  // TODO: Remove this fallback after Cloudinary setup
  if (CLOUDINARY_CLOUD_NAME === 'YOUR_CLOUD_NAME_HERE') {
    console.warn('⚠️ Cloudinary not configured. Using fallback URL. Please update CLOUDINARY_CLOUD_NAME in /utils/images.ts');
    return `https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/${imageName}`;
  }

  return `${CLOUDINARY_BASE}w_${width},q_${quality},f_auto/${imageName}`;
}

/**
 * Get a responsive image srcset for multiple sizes
 * 
 * @param imageName - The name of the image in Cloudinary
 * @returns Object with srcset and sizes for responsive images
 * 
 * @example
 * ```tsx
 * const responsive = getResponsiveImageSet('hero-image.jpg');
 * 
 * <img
 *   src={responsive.src}
 *   srcSet={responsive.srcSet}
 *   sizes={responsive.sizes}
 *   alt="Hero"
 * />
 * ```
 */
export function getResponsiveImageSet(imageName: string) {
  return {
    src: getOptimizedImage(imageName, 1920),
    srcSet: `
      ${getOptimizedImage(imageName, 640)} 640w,
      ${getOptimizedImage(imageName, 1024)} 1024w,
      ${getOptimizedImage(imageName, 1920)} 1920w
    `.trim(),
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
  };
}

/**
 * Convert GitHub raw URL to optimized Cloudinary URL
 * 
 * Useful for migrating existing images
 * 
 * @param githubUrl - Full GitHub raw URL
 * @param width - Desired width
 * @returns Cloudinary URL
 * 
 * @example
 * ```tsx
 * const oldUrl = 'https://raw.githubusercontent.com/.../Medio-Dark-Interior-3.jpg';
 * const newUrl = githubToCDN(oldUrl, 1920);
 * ```
 */
export function githubToCDN(githubUrl: string, width: number = 1920): string {
  // Extract filename from GitHub URL
  const filename = githubUrl.split('/').pop() || '';
  return getOptimizedImage(filename, width);
}

/**
 * Preload critical images for better LCP
 * 
 * Call this for above-the-fold images (hero images)
 * 
 * @param imageName - Image to preload
 * @param width - Width to preload
 * 
 * @example
 * ```tsx
 * // In your page component
 * useEffect(() => {
 *   preloadImage('hero-image.jpg', 1920);
 * }, []);
 * ```
 */
export function preloadImage(imageName: string, width: number = 1920): void {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = getOptimizedImage(imageName, width);
  document.head.appendChild(link);
}

/**
 * Image size presets for consistent sizing across the site
 */
export const IMAGE_SIZES = {
  hero: 1920,
  modelCard: 800,
  thumbnail: 400,
  icon: 100,
  fullWidth: 1920,
  mobile: 640,
  tablet: 1024,
} as const;

/**
 * Helper to get image with preset size
 * 
 * @example
 * ```tsx
 * const heroImage = getImageWithSize('hero.jpg', 'hero');
 * const thumbnail = getImageWithSize('project.jpg', 'thumbnail');
 * ```
 */
export function getImageWithSize(
  imageName: string,
  size: keyof typeof IMAGE_SIZES
): string {
  return getOptimizedImage(imageName, IMAGE_SIZES[size]);
}

// Export image size constants for use in components
export { IMAGE_SIZES as imageSizes };
