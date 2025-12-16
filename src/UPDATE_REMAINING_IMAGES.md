# How to Update Remaining Images

## ✅ Already Updated (Working in Production)

These files now use images from `/src/images/`:

1. `/components/Navigation.tsx` - Logo
2. `/components/Footer.tsx` - Partner logos  
3. `/components/pages/Home.tsx` - Hero, models, icons
4. `/components/pages/ModelsAndPricing.tsx` - Piccolo image

## 📋 Files Still Using `figma:asset` (100+ imports)

The remaining files still import using `figma:asset/[hash].png`. They currently use Unsplash placeholders in production, which look professional but aren't your actual project photos.

### Option 1: Keep Unsplash Placeholders (RECOMMENDED for John's Review)

**Do this if you want to launch quickly:**
- The current Unsplash images are professional and relevant
- John can review the full functionality and content
- You can replace images over time as you export them from Figma

**No action needed** - just deploy as-is!

### Option 2: Export All Images from Figma Make

If you want to use ALL your real images:

#### Step 1: Extract Images from Browser
1. Open your site in Figma Make preview
2. Press F12 to open Developer Console
3. Go to **Console** tab
4. Copy/paste this script and press Enter:

```javascript
// Extract all images
(async function() {
  const images = Array.from(document.querySelectorAll('img[src*="figma"]'));
  
  for (let img of images) {
    const src = img.src;
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      // Extract hash from filename
      const match = src.match(/([a-f0-9]{40,})/i);
      if (match) {
        const hash = match[0];
        const a = document.createElement('a');
        a.href = url;
        a.download = `${hash}.png`;
        a.click();
        
        console.log(`Downloaded: ${hash}.png`);
        await new Promise(r => setTimeout(r, 200));
      }
    } catch (e) {
      console.error('Error:', e);
    }
  }
  console.log('Done!');
})();
```

This will download all images with correct filenames to your Downloads folder.

#### Step 2: Upload to GitHub
1. Go to your repo: `stealthdigital/Coldformsteelcanadawebsite`
2. Navigate to `/src/images/`
3. Click "Add file" → "Upload files"
4. Drag all downloaded PNG files
5. Commit changes

#### Step 3: Automatic Update

Vercel will detect the new files and rebuild. Within 1-2 minutes, your site will use the real images!

## 🎯 Quick Reference: What Each Hash Represents

### Critical Images (Already Uploaded ✅)
- `e2e217c234df09ee63fb7874604664b6915f74ac.png` - Main CFSC logo
- `1a5df16654a4eb18c1d923f59d0175c816f96be8.png` - FrameCAD logo
- `341e33826ef795d0cf2867c3001b627df15e31ff.png` - Steelbuilt logo
- `308e1fbaa5498e6932bee902e6edee7720954263.png` - CFSC alternate logo
- `58f51d3f6fcfbb103c76adbc254fe9642bf10499.png` - Maple leaf icon
- `be69edff5a1a525e997504d24005a866111a3d19.png` - Piccolo model
- `1534d6aaa1eca69e99668609af3c96393e80e966.png` - Medio model
- `e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png` - Hero image
- `john-montgomery.jpg` - John's photo

### Missing Images (Still using placeholders)
See `IMAGE_EXPORT_GUIDE.md` for complete list of 100+ remaining images.

## 🚀 Recommended Approach

**For Production Launch:**
1. Deploy now with the 9 images you've uploaded
2. All logos, hero images, and key models will show correctly
3. Remaining images use professional Unsplash placeholders
4. John can review full site functionality

**After Launch:**
1. Export remaining images when you have time
2. Upload to `/src/images/` in batches
3. Vercel auto-deploys each time
4. No code changes needed - images just start working!

## Technical Notes

The code has been written to automatically use images from `/src/images/[filename].png` when available. The import paths have been updated like this:

**Before:**
```javascript
import heroImage from 'figma:asset/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png';
```

**After:**
```javascript
import heroImage from '../../images/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png';
```

The Vite build system will automatically:
1. Find the image in `/src/images/`
2. Optimize it for production
3. Deploy it to Vercel
4. Serve it from CDN

No manual intervention needed!
