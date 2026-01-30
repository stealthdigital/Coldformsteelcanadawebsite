# Vercel 404 Routing Issue - Solutions

## Problem
When accessing routes directly (e.g., `https://coldformsteelcanadawebsite.vercel.app/learning`), you get a 404 error. This is because:

1. **Figma Make's deployment to Vercel doesn't respect `vercel.json` rewrites**
2. Single Page Applications (SPAs) handle routing client-side, but the server needs to serve `index.html` for all routes

## Current Status
- ✅ `vercel.json` is properly configured with rewrites
- ✅ React Router is properly set up
- ❌ Figma Make's deployment system bypasses `vercel.json`

---

## Solution 1: Deploy Directly to Vercel (RECOMMENDED)

### Steps:
1. **Export your code to GitHub:**
   - Create a new GitHub repository
   - Push all your code to the repository

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Deploy

3. **Configure Custom Domain (Optional):**
   - In Vercel dashboard → Settings → Domains
   - Add `coldformsteelcanada.com`

### Why This Works:
- Vercel will properly read and apply `vercel.json` configuration
- All routes will work correctly: `/learning`, `/contact`, etc.
- No code changes needed

---

## Solution 2: Use Hash Router (QUICK FIX)

### If you MUST use Figma Make's deployment:

Change this line in `/App.tsx`:
```tsx
// FROM:
import { Route, Routes, useLocation, useNavigate, BrowserRouter as Router } from 'react-router';

// TO:
import { Route, Routes, useLocation, useNavigate, HashRouter as Router } from 'react-router';
```

### URLs will change to:
- ❌ `/learning` → ✅ `/#/learning`
- ❌ `/contact` → ✅ `/#/contact`
- ❌ `/stories/fort-erie-barndominium` → ✅ `/#/stories/fort-erie-barndominium`

### Pros:
- ✅ Works immediately without server configuration
- ✅ No deployment changes needed
- ✅ Compatible with any hosting platform

### Cons:
- ❌ URLs look less clean (have `#` in them)
- ❌ Slightly worse for SEO (though modern search engines handle it)
- ❌ Sharing links will include the hash

---

## Solution 3: Manual Vercel Configuration

### If you have direct access to Vercel dashboard:

1. Go to your project in Vercel dashboard
2. Settings → General → Build & Development Settings
3. Ensure these are set:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

4. Settings → Rewrites (if available)
   - Add rewrite: `/*` → `/index.html`

5. Redeploy the project

---

## Solution 4: Add SPA Fallback in Build Process

### Create `/public/_redirects` file:
```
/* /index.html 200
```

This is a Netlify-style redirects file that some platforms support.

---

## Recommended Action

**For Production:** Use **Solution 1** (Deploy directly to Vercel)

**For Quick Testing:** Use **Solution 2** (HashRouter)

---

## Testing After Deployment

1. **Clear browser cache** or use Incognito mode
2. **Test these URLs directly:**
   - `https://your-domain.com/learning`
   - `https://your-domain.com/contact`
   - `https://your-domain.com/stories/fort-erie-barndominium`

3. **All should load without 404 errors**

---

## Current `vercel.json` Configuration

The file is already properly configured:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This will work correctly once deployed directly to Vercel (not through Figma Make).

---

## Questions?

If you continue to experience issues after deploying directly to Vercel, check:
1. ✅ Deployment logs for errors
2. ✅ Vercel project settings match the configuration above
3. ✅ `dist` folder contains `index.html` after build
4. ✅ Clear CDN cache (in Vercel dashboard)
