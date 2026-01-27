/**
 * Centralized Image Configuration
 * 
 * All image URLs in one place for easy management and migration.
 * Supports Cloudinary transformations for automatic optimization.
 */

// ============================================
// CLOUDINARY CONFIGURATION
// ============================================

const CLOUDINARY_CLOUD_NAME = 'dj76bnpni';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// GitHub fallback (current URLs)
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets';

// Choose your primary image provider
const USE_CLOUDINARY = true; // Set to true to use Cloudinary
const BASE_URL = USE_CLOUDINARY ? CLOUDINARY_BASE_URL : GITHUB_BASE_URL;

// ============================================
// CLOUDINARY TRANSFORMATION PRESETS
// ============================================

/**
 * Cloudinary transformation parameters for automatic optimization
 * Docs: https://cloudinary.com/documentation/image_transformations
 */
export const CloudinaryTransforms = {
  // Auto format (WebP/AVIF) with quality optimization
  auto: 'f_auto,q_auto',
  
  // Auto format with progressive loading
  autoProgressive: 'f_auto,q_auto,fl_progressive',
  
  // Responsive hero images (large)
  hero: 'f_auto,q_auto,w_1920,c_limit',
  
  // Card/thumbnail images (medium)
  card: 'f_auto,q_auto,w_800,c_limit',
  
  // Small thumbnails
  thumb: 'f_auto,q_auto,w_400,c_limit',
  
  // Logo images
  logo: 'f_auto,q_auto,w_600,c_limit',
  
  // Floor plans (keep quality high)
  floorPlan: 'f_auto,q_90,w_1200,c_limit',
} as const;

// ============================================
// IMAGE URL BUILDER
// ============================================

/**
 * Build Cloudinary URL with transformations
 * @param path - Path relative to /public/assets/ (e.g., 'Models/Piccolo/image.jpg')
 * @param transform - Cloudinary transformation preset (default: 'auto')
 */
function buildCloudinaryUrl(path: string, transform: keyof typeof CloudinaryTransforms = 'auto'): string {
  const transformStr = CloudinaryTransforms[transform];
  const cleanPath = path.replace(/^\/+/, ''); // Remove leading slashes
  return `${CLOUDINARY_BASE_URL}/${transformStr}/public/assets/${cleanPath}`;
}

/**
 * Build GitHub raw URL
 */
function buildGitHubUrl(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  return `${GITHUB_BASE_URL}/public/assets/${cleanPath}`;
}

/**
 * Get image URL from path
 * @param path - Path relative to /public/assets/
 * @param transform - Optional Cloudinary transformation
 */
export function getImageUrl(path: string, transform?: keyof typeof CloudinaryTransforms): string {
  if (USE_CLOUDINARY && transform) {
    return buildCloudinaryUrl(path, transform);
  } else if (USE_CLOUDINARY) {
    return buildCloudinaryUrl(path);
  } else {
    return buildGitHubUrl(path);
  }
}

// ============================================
// ORGANIZED IMAGE CATALOG
// ============================================

export const Images = {
  // Logos
  logo: {
    white: getImageUrl('CFSC-LogoV2 - White.png', 'logo'),
  },

  // Icons
  icons: {
    mapleLeaf: '/assets/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png', // Local asset
  },

  // Models - Piccolo
  piccolo: {
    exterior: getImageUrl('Models/Piccolo/CFS-Piccolo-Dark-Exterior-2.jpg', 'card'),
    floorPlan: getImageUrl('Models/Piccolo/PICCOLO-FLOOR-PLAN.jpg', 'floorPlan'),
  },

  // Models - Medio
  medio: {
    exterior: getImageUrl('Models/Medio/Medio-Dark-Exterior-2.jpg', 'card'),
    interior: getImageUrl('Models/Medio/Medio-Dark-Interior-3.jpg', 'hero'),
    floorPlan: getImageUrl('Models/Medio/MEDIO-FLOOR-PLAN.jpg', 'floorPlan'),
  },

  // Learning Center
  learning: {
    steelVsWood: getImageUrl('Learning Centre/Steel vs. Wood- Full Breakdown.jpeg', 'card'),
    costDrivers: getImageUrl('Learning Centre/What Drives the Cost of Your Build.jpeg', 'card'),
    johnMontgomery: getImageUrl('Learning Centre/John Montgomery.jpeg', 'thumb'),
    factoryWallPanels: getImageUrl('Learning Centre/Wall panels engineered and assembled in our factory.jpeg', 'card'),
    framecad: getImageUrl('Learning Centre/FrameCAD.jpeg', 'card'),
    labeledPanels: getImageUrl('Learning Centre/Each panel is labeled and numbered for easy onsite assembly.jpeg', 'card'),
    galvanizedSteel: getImageUrl('Learning Centre/Galvanized steel features a zinc coating that creates a protective barrier against moisture, oxygen, and corrosion.jpeg', 'card'),
    coldFormedSteel: getImageUrl('Learning Centre/Cold formed steel framing is engineered to last for decades in Canadian climates.jpeg', 'card'),
  },

  // Success Stories
  successStories: {
    steMarthe: getImageUrl('Success Stories/Steel-Built Barndo Retreat/Completed Barndominium.png', 'hero'),
    blueMountain: getImageUrl('Success Stories/Blue Mountain Steel Workshop/Completed Steel Building - Final Result.png', 'card'),
  },
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get responsive srcset for an image
 * Generates multiple sizes for responsive images
 */
export function getResponsiveSrcSet(path: string): string {
  if (!USE_CLOUDINARY) {
    return ''; // srcset only works with Cloudinary
  }

  const sizes = [400, 800, 1200, 1920];
  return sizes
    .map(width => {
      const url = `${CLOUDINARY_BASE_URL}/f_auto,q_auto,w_${width},c_limit/public/assets/${path}`;
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Preload critical images (hero, LCP)
 */
export function preloadImage(url: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  }
}