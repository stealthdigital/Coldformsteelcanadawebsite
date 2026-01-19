# Favicon Setup Instructions

## Quick Fix for Publishing

The favicon isn't showing when published because the PNG files need to be generated and placed in the `/public` folder.

### Option 1: Generate Favicons Using the HTML Tool (Recommended)

1. Open the file `/scripts/generate-favicons.html` in your web browser
2. You'll see all the favicon sizes displayed
3. Click each download button:
   - Download 16x16
   - Download 32x32
   - Download Apple Touch Icon
   - Download 192x192
   - Download 512x512
   - Download favicon.ico
4. Save all downloaded files to the `/public` folder in your project
5. Rebuild and publish your site

### Option 2: Use an Online Favicon Generator

If you prefer to use an online tool:

1. Go to [RealFaviconGenerator.net](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/)
2. Upload your `/public/favicon.svg` file OR use these settings:
   - **Text:** C
   - **Background:** #665f55 (Primary brown)
   - **Font:** Arial Bold
   - **Shape:** Rounded
3. Download the generated favicon package
4. Extract and place these files in your `/public` folder:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-16x16.png` (optional)
   - `favicon-32x32.png` (optional)
   - `favicon-192x192.png` (optional)
   - `favicon-512x512.png` (optional)

### Option 3: Use Figma or Design Tool

If you have design access:

1. Create a 512x512px artboard
2. Add a rounded rectangle with your brand color (#665f55)
3. Add the letter "C" in white (#faf8f5) - Arial Bold, ~380px size
4. Add a small accent bar in terracotta (#c47b5c) near the bottom
5. Export as PNG at different sizes: 16x16, 32x32, 180x180, 192x192, 512x512
6. Also export one as `favicon.ico`
7. Place all files in `/public` folder

## Files Already Configured

The following files are already set up correctly:

- ✅ `/index.html` - Has proper favicon links
- ✅ `/public/favicon.svg` - SVG favicon (works in modern browsers)
- ✅ `/public/site.webmanifest` - PWA manifest for mobile
- ✅ `/public/robots.txt` - SEO configuration

## What You Need to Add

Place these files in your `/public` folder:

- [ ] `favicon.ico` (32x32 ICO format for older browsers)
- [ ] `apple-touch-icon.png` (180x180 PNG for iOS)
- [ ] `favicon-192x192.png` (192x192 PNG for Android)
- [ ] `favicon-512x512.png` (512x512 PNG for high-res displays)

## After Adding Favicons

1. Clear your browser cache
2. Rebuild your project: `npm run build`
3. Deploy/publish your site
4. Test the favicon by visiting your site in different browsers
5. You can also test using: https://realfavicongenerator.net/favicon_checker

## Brand Colors Reference

For consistency, use these brand colors:

- **Primary (Brown):** #665f55
- **Accent (Terracotta):** #c47b5c
- **Background (Cream):** #faf8f5
- **Text:** White (#faf8f5) on dark background

## Testing Your Favicon

After deploying, check:
- Chrome/Edge: Should show in tab and bookmarks
- Safari: Should show in tab and when saved to home screen
- Firefox: Should show in tab and bookmarks
- Mobile (iOS): Should show when saved to home screen
- Mobile (Android): Should show in browser and when saved to home screen
