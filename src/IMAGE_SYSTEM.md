# Image System Documentation

## Overview

The Cold Form Steel Canada website uses a hybrid image system that **works immediately** when you push from Figma Make, with the option to replace specific images with your own branded versions later.

## How It Works

### 1. Default Behavior (Automatic)
- ✅ **All images use Unsplash placeholders by default**
- ✅ **Site works immediately after pushing from Figma Make**
- ✅ **No manual uploads required**
- ✅ **Professional-looking placeholder images**

### 2. Custom Branded Images (Optional)
- 📤 Upload your actual branded images to `/public/assets/` in GitHub
- 🔄 Images automatically replace the Unsplash placeholders
- 💾 Your images persist across Figma Make pushes (as long as you keep them in GitHub)

## Current Image Status

### Using Unsplash Placeholders (Working Now):
- ✅ Hero background - Modern home interior
- ✅ Piccolo model - Small barndominium
- ✅ Medio model - Medium home exterior  
- ✅ Maple leaf icon - Canadian flag
- ✅ All other model/gallery images

### Ready for Branded Uploads (Logos):
- 📤 Company logo (`e2e217c234df09ee63fb7874604664b6915f74ac.png`)
- 📤 FrameCAD logo (`1a5df16654a4eb18c1d923f59d0175c816f96be8.png`)
- 📤 Steelbuilt logo (`341e33826ef795d0cf2867c3001b627df15e31ff.png`)
- 📤 CFSC logo (`308e1fbaa5498e6932bee902e6edee7720954263.png`)
- 📤 John's photo (`/public/images/john-montgomery.jpg`)

## Workflow

### Every Push from Figma Make:
1. ✅ Push to GitHub
2. ✅ Vercel deploys automatically
3. ✅ **Site works immediately with Unsplash images**
4. ✅ No further action needed!

### When You Want Custom Images:
1. Go to GitHub → `/public/assets/` or `/public/images/`
2. Click "Add file" → "Upload files"
3. Upload your branded images with the exact filenames listed above
4. Commit changes
5. Vercel rebuilds automatically
6. Your branded images appear on the site!

## Technical Details

The system uses a Vite plugin (`vite.config.ts`) that intercepts `figma:asset` imports and maps them to either:
- **Unsplash URLs** (default, always works)
- **Local files in `/public/assets/`** (if you upload them)

The ImageWithFallback component handles any loading errors gracefully.

## Benefits

✅ **No workflow friction** - Site always works after Figma Make push
✅ **Flexible** - Add branded images only when ready
✅ **Scalable** - Can handle 100s of images
✅ **Professional** - Looks good even with placeholders
✅ **Progressive enhancement** - Works now, improves later

## Next Steps

1. **Immediate:** Push from Figma Make and verify the site works with Unsplash images
2. **Later:** Upload your 4 logo files + John's photo to GitHub when you have them ready
3. **Eventually:** Add more model photos, construction images, etc. as needed
