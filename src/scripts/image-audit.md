# Image Audit - Priority for Optimization

## 🔴 CRITICAL - Largest Images (Optimize First)

These are the biggest performance killers from GitHub raw URLs:

### Hero Images (Home Page)
1. **Medio Dark Interior** - Likely 3-5MB
   - URL: `https://raw.githubusercontent.com/.../Medio-Dark-Interior-3.jpg`
   - Used on: Home page hero
   - **Action:** Compress to 200-300KB, convert to WebP
   - **Impact:** -3-4MB, improves LCP by ~2-3 seconds

2. **Piccolo Dark Exterior** - Likely 2-4MB
   - URL: `https://raw.githubusercontent.com/.../CFS-Piccolo-Dark-Exterior-2.jpg`
   - Used on: Home page model cards
   - **Action:** Compress to 150-200KB
   - **Impact:** -2-3MB

3. **Medio Dark Exterior** - Likely 2-4MB
   - URL: `https://raw.githubusercontent.com/.../Medio-Dark-Exterior-2.jpg`
   - Used on: Home page model cards
   - **Action:** Compress to 150-200KB
   - **Impact:** -2-3MB

### Model Detail Pages
4. **Piccolo Model Images** (Multiple)
   - Multiple high-res images on `/models/piccolo`
   - Each likely 2-3MB
   - **Action:** Create 3 sizes: mobile (640w), tablet (1024w), desktop (1920w)
   - **Impact:** -6-10MB per page

5. **Medio Model Images** (Multiple)
   - Multiple high-res images on `/models/medio`
   - Each likely 2-3MB
   - **Action:** Create responsive sizes
   - **Impact:** -6-10MB per page

### Success Story Images
6. **Fort Erie Barndominium**
   - Featured image likely 3-5MB
   - **Action:** Compress and create WebP version
   - **Impact:** -3-4MB

7. **Other Success Stories** (8 total)
   - Each with multiple images
   - Combined likely 20-40MB
   - **Action:** Compress all, lazy load

## 🟡 HIGH PRIORITY - Secondary Images

### Learning Center Articles
- Factory tour images
- FrameCAD technology images
- Process diagrams
- **Action:** Compress to ~100KB each

### About Page
- Team photos
- Company images
- **Action:** Compress to ~100-150KB each

## Optimization Strategy

### Phase 1: Quick Wins (2-3 hours)
1. Optimize top 5 images manually using:
   - [TinyPNG](https://tinypng.com) - Compress JPG/PNG
   - [Squoosh](https://squoosh.app) - Convert to WebP
   - Target: 80% quality, ~200KB max for hero images

2. Upload optimized images to a temporary folder on GitHub

3. Update URLs to point to optimized versions

**Expected improvement:** Performance score 53 → 68-72

### Phase 2: CDN Setup (2-4 hours)
1. Sign up for Cloudinary free tier:
   - Go to [cloudinary.com](https://cloudinary.com)
   - Create account
   - Upload all images to Media Library

2. Use Cloudinary transformations:
   ```
   https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/
   w_1920,q_auto,f_auto/
   your-image-name.jpg
   ```

   - `w_1920` = max width 1920px
   - `q_auto` = automatic quality optimization
   - `f_auto` = automatic format (WebP for modern browsers)

3. Create an image helper function:
   ```typescript
   const CLOUDINARY_BASE = 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/';
   
   export function getOptimizedImage(
     imageName: string, 
     width: number = 1920,
     quality: 'auto' | number = 'auto'
   ) {
     return `${CLOUDINARY_BASE}w_${width},q_${quality},f_auto/${imageName}`;
   }
   ```

4. Replace all image URLs:
   ```typescript
   // Before
   const heroImage = 'https://raw.githubusercontent.com/.../Medio-Dark-Interior-3.jpg';
   
   // After
   const heroImage = getOptimizedImage('medio-dark-interior-3', 1920);
   ```

**Expected improvement:** Performance score 68-72 → 85-90

### Phase 3: Responsive Images (1-2 hours)
1. Create `<ResponsiveImage>` component:
   ```tsx
   export function ResponsiveImage({ src, alt, priority = false }) {
     return (
       <picture>
         <source
           srcSet={`
             ${getOptimizedImage(src, 640)} 640w,
             ${getOptimizedImage(src, 1024)} 1024w,
             ${getOptimizedImage(src, 1920)} 1920w
           `}
           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
           type="image/webp"
         />
         <img
           src={getOptimizedImage(src, 1920)}
           alt={alt}
           loading={priority ? 'eager' : 'lazy'}
           decoding="async"
         />
       </picture>
     );
   }
   ```

2. Replace image tags with component

**Expected improvement:** Performance score 85-90 → 90-95

## Measurement

### Before Optimization
Run PageSpeed and record:
- [ ] Performance score: ___
- [ ] FCP: ___
- [ ] LCP: ___
- [ ] Total page weight: ___

### After Each Phase
- [ ] Phase 1 complete - Score: ___
- [ ] Phase 2 complete - Score: ___
- [ ] Phase 3 complete - Score: ___

## Tools

### For Compression
- **TinyPNG** - https://tinypng.com (PNG/JPG compression)
- **Squoosh** - https://squoosh.app (All formats, WebP conversion)
- **ImageOptim** - https://imageoptim.com/mac (Mac app, batch processing)

### For Analysis
- **PageSpeed Insights** - https://pagespeed.web.dev
- **WebPageTest** - https://www.webpagetest.org
- **Chrome DevTools Network Tab** - See actual image sizes

### CDN Options
1. **Cloudinary** (Recommended)
   - Free: 25GB storage, 25GB bandwidth/month
   - Automatic optimization
   - Easy URL transformations
   
2. **ImageKit**
   - Free: 20GB bandwidth/month
   - Similar features to Cloudinary
   
3. **Imgix**
   - Paid, but excellent quality
   - Great for production sites

## Success Criteria

- [ ] All hero images < 200KB
- [ ] All model images < 150KB
- [ ] All article images < 100KB
- [ ] Total page weight < 2MB
- [ ] LCP < 2.5 seconds
- [ ] Performance score > 85

## Notes

- GitHub raw URLs are NOT a CDN
- They don't compress or optimize images
- They have slow response times
- They don't support modern formats (WebP/AVIF)
- They're meant for code hosting, not production image serving

**Moving to a proper CDN is the #1 most impactful optimization you can make.**
