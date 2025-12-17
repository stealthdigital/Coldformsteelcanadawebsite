# Deployment Guide - Image Management

## How the Two-Branch System Works

This project uses **two branches** to separate code from images:

- **`main` branch**: All code (pushed from Figma Make)
- **`assets` branch**: All images (uploaded manually to GitHub)

When Vercel builds the site, it automatically pulls images from the `assets` branch before building.

## Initial Setup (One-Time Only)

### 1. Create the Assets Branch

1. Go to your GitHub repository
2. Click the branch dropdown (currently shows "main")
3. Type `assets` in the search box
4. Click **"Create branch: assets from main"**

### 2. Upload Your Images to Assets Branch

1. **Switch to the `assets` branch** (use the branch dropdown)
2. Navigate to `/public/assets/`
3. Click "Add file" → "Upload files"
4. Upload these PNG files:
   - `e2e217c234df09ee63fb7874604664b6915f74ac.png` (Company logo)
   - `1a5df16654a4eb18c1d923f59d0175c816f96be8.png` (FrameCAD logo)
   - `341e33826ef795d0cf2867c3001b627df15e31ff.png` (Steelbuilt logo)
   - `308e1fbaa5498e6932bee902e6edee7720954263.png` (CFSC logo)
   - Any other model/gallery images
5. Commit changes (should be to `assets` branch)

6. Navigate to `/public/images/`
7. Upload:
   - `john-montgomery.jpg` (or .png)
   - Any other photos
8. Commit changes

### 3. Configure Vercel (If Needed)

Vercel should automatically use the build command from `package.json`, but verify:

1. Go to Vercel dashboard → Your project → Settings → General
2. Check **Build Command**: Should be `npm run build`
3. The build command automatically runs `npm run fetch-assets` first

**That's it!** The setup is complete.

## Daily Workflow

### When You Update Code in Figma Make:

1. ✅ Push from Figma Make to GitHub (updates `main` branch)
2. ✅ Vercel rebuilds automatically
3. ✅ Build script pulls images from `assets` branch
4. ✅ **Your images are preserved!**

### When You Need to Add/Update Images:

1. Go to GitHub
2. **Switch to `assets` branch**
3. Navigate to `/public/assets/` or `/public/images/`
4. Upload or replace image files
5. Commit changes
6. Vercel will rebuild on next push from Figma Make (or manually trigger rebuild)

## How the Build Process Works

```
Vercel Build Process:
1. Checks out main branch (code from Figma Make)
2. Runs npm install
3. Runs npm run build
   ↳ This runs npm run fetch-assets first
     ↳ Pulls images from assets branch
   ↳ Then runs vite build
4. Deploys the site with code + images
```

## Troubleshooting

### Images Not Appearing After Push

1. Verify images are in the `assets` branch (not `main`)
2. Check Vercel build logs for "Fetching images from assets branch"
3. Manually trigger a rebuild in Vercel

### Need to Add More Images

1. Switch to `assets` branch in GitHub
2. Upload new images to `/public/assets/` or `/public/images/`
3. Update `vite.config.ts` in Figma Make if you need to map new `figma:asset` hashes

## Benefits

✅ **Images never get deleted** when you push from Figma Make
✅ **Clean separation** between code and assets
✅ **Easy to manage** - upload images once in GitHub
✅ **Automatic deployment** - Vercel handles everything
✅ **Scalable** - Add 100s of images to `assets` branch anytime
