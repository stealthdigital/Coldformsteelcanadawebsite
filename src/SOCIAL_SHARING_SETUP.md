# Social Sharing Image Setup

## Current Status
✅ Open Graph meta tags have been configured in the application
✅ The Piccolo model is set as the default social sharing image
✅ HeadMeta component dynamically updates meta tags

## What Happens When Someone Shares This Website

When someone shares your SteelBuilt website on social media platforms (Facebook, Twitter, LinkedIn, etc.), the following information will be displayed:

**Title:** SteelBuilt - Cold-Form Steel Homes & Barndominiums

**Description:** Build your dream home faster with factory-built cold-form steel construction. The Piccolo model: 392 sq ft studio framed in 4-5 days. Durable, fire-resistant, and eco-friendly.

**Image:** Currently set to a placeholder URL that needs to be replaced with your hosted Piccolo image

## Setup Instructions

### Step 1: Export the Piccolo Image
Choose one of these Piccolo images from `/components/pages/Piccolo.tsx`:
- `piccoloDarkExt1` - Dark exterior view (recommended for social sharing)
- `piccoloLightExt1` - Light exterior view
- `piccoloDarkInt1` - Dark interior view

The recommended image is **piccoloDarkExt1** as it shows the exterior of the home, which is most appealing for social media.

### Step 2: Optimize the Image
For best results:
- **Dimensions:** 1200px × 630px (Facebook/LinkedIn standard)
- **File format:** JPG or PNG
- **File size:** Under 1MB
- **Content:** Ensure the main subject is centered, as some platforms crop differently

### Step 3: Host the Image
Upload your optimized image to:
- Your web hosting provider
- A CDN service (Cloudflare, AWS CloudFront, etc.)
- Image hosting service (Imgur, Cloudinary, etc.)

### Step 4: Update the Image URL
In `/App.tsx`, replace the placeholder URL:

```tsx
<HeadMeta 
  title="SteelBuilt - Cold-Form Steel Homes & Barndominiums"
  description="Build your dream home faster with factory-built cold-form steel construction. The Piccolo model: 392 sq ft studio framed in 4-5 days. Durable, fire-resistant, and eco-friendly."
  image="https://yourdomain.com/images/piccolo-social-share.jpg"  // ← Update this URL
/>
```

Replace `https://yourdomain.com/images/piccolo-social-share.jpg` with your actual hosted image URL.

## Testing Your Social Sharing

After updating the image URL, test how it appears on different platforms:

### Facebook Debugger
https://developers.facebook.com/tools/debug/
- Enter your website URL
- Click "Scrape Again" to refresh the cache
- View how your site will appear when shared

### Twitter Card Validator
https://cards-dev.twitter.com/validator
- Enter your website URL
- View the preview

### LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/
- Enter your website URL
- View how it will appear on LinkedIn

## Dynamic Page-Specific Meta Tags (Optional Future Enhancement)

Currently, all pages use the same social sharing image. You could enhance this by:

1. Adding different images for different pages (e.g., specific project pages, model pages)
2. Passing dynamic meta data to the HeadMeta component based on the current page
3. Example:

```tsx
// In App.tsx
const getPageMeta = (currentPage: string) => {
  switch(currentPage) {
    case 'piccolo':
      return {
        title: 'The Piccolo - 392 sq ft Studio | SteelBuilt',
        description: 'Compact 392 sq ft studio home framed in 4-5 days...',
        image: 'https://yourdomain.com/images/piccolo-hero.jpg'
      };
    case 'medio':
      return {
        title: 'The Medio - Two Bedroom Home | SteelBuilt',
        description: 'Spacious two bedroom home with modern amenities...',
        image: 'https://yourdomain.com/images/medio-hero.jpg'
      };
    default:
      return {
        title: 'SteelBuilt - Cold-Form Steel Homes & Barndominiums',
        description: 'Build your dream home faster...',
        image: 'https://yourdomain.com/images/piccolo-social-share.jpg'
      };
  }
};

const pageMeta = getPageMeta(currentPage);

<HeadMeta 
  title={pageMeta.title}
  description={pageMeta.description}
  image={pageMeta.image}
/>
```

## Technical Details

The HeadMeta component (`/components/HeadMeta.tsx`) automatically sets the following meta tags:

**Open Graph (Facebook, LinkedIn):**
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:type`

**Twitter Card:**
- `twitter:card` (set to "summary_large_image")
- `twitter:title`
- `twitter:description`
- `twitter:image`

**Standard HTML:**
- `<title>` tag
- `description` meta tag

## Recommended Piccolo Image
The dark exterior view of the Piccolo model is recommended because:
- Shows the complete home exterior
- Clean, modern aesthetic that aligns with your brand
- Professional appearance for social media
- Appeals to your target demographic (female homeowners 35+)
- Highlights the compact, efficient design
