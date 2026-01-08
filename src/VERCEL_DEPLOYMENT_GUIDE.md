# Cold Form Steel Canada - Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is now ready for deployment! Here's what's been configured:

### Files Ready:
- ✅ `.gitignore` - Properly excludes node_modules, dist, and build files
- ✅ `vercel.json` - Configured for Vite with proper routing
- ✅ `vite.config.ts` - Optimized build configuration
- ✅ `package.json` - All scripts and dependencies set up

## 🚀 Deployment Steps

### Step 1: Initialize Git Repository (if not done)

```bash
git init
git add .
git commit -m "Initial commit - Cold Form Steel Canada website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `cold-form-steel-canada` (or your preferred name)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL (e.g., `https://github.com/yourusername/cold-form-steel-canada.git`)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/yourusername/cold-form-steel-canada.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect the framework settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click "Deploy"

#### Option B: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts, and Vercel will deploy your site.

## 🔧 Build Configuration

Your `vercel.json` is already configured with:

- **Framework:** Vite
- **SPA Routing:** All routes redirect to `/index.html` for client-side routing
- **Security Headers:** X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **SEO Headers:** X-Robots-Tag for search engine indexing
- **Static Files:** Proper handling of sitemap.xml and robots.txt

## 📦 What Gets Deployed

The following will be included in your deployment:
- ✅ All React components and pages
- ✅ Tailwind CSS v4 styles
- ✅ Public assets (images, logos, icons)
- ✅ Sitemap and robots.txt
- ✅ All routes and navigation

The following are excluded (via `.gitignore`):
- ❌ node_modules
- ❌ dist folder
- ❌ Environment files
- ❌ Editor config files

## 🌐 Post-Deployment

After deployment, Vercel will provide:
- **Production URL:** Your live site (e.g., `https://your-project.vercel.app`)
- **Preview URLs:** For each push to non-main branches
- **Automatic HTTPS:** SSL certificate included
- **CDN:** Global edge network for fast loading

### Custom Domain (Optional)

To add a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your domain and follow DNS configuration instructions

## 🔄 Continuous Deployment

Once connected to GitHub, every push to `main` will automatically trigger a new deployment:

```bash
git add .
git commit -m "Update feature cards styling"
git push origin main
```

Vercel will:
1. Detect the push
2. Build your project
3. Deploy to production
4. Send you a notification

## 🐛 Troubleshooting

### Build Fails

If the build fails, check:
- Node version (specified in package.json: `>=20.0.0`)
- All dependencies are in package.json
- No syntax errors in TypeScript files

### 404 Errors on Routes

If direct URLs return 404:
- Verify `vercel.json` has the routes configuration
- The routing rule `{ "src": "/.*", "dest": "/index.html" }` handles all routes

### Images Not Loading

If images don't appear:
- Check that all assets are in the `/public` folder
- Verify the `figma-asset-resolver` in `vite.config.ts` is working
- Check browser console for 404 errors

## 📝 Environment Variables (If Needed)

If you need to add environment variables later:

1. In Vercel Dashboard: Project Settings → Environment Variables
2. Add variables with `VITE_` prefix (e.g., `VITE_API_URL`)
3. Access in code: `import.meta.env.VITE_API_URL`
4. Redeploy for changes to take effect

## 🎉 You're Ready!

Your project is fully configured and ready to deploy. If you have any issues, check the troubleshooting section above or reach out to Vercel support.

Good luck with your launch! 🚀
