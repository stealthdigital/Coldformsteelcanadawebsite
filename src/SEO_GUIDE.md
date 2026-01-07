# SEO Guide for Cold Form Steel Canada

## ✅ What I Just Fixed

1. **Created `robots.txt`** - Tells search engines what to crawl
2. **Created `sitemap.xml`** - Lists all your pages for Google
3. **Added Canonical URLs** - Prevents duplicate content issues

---

## 🚨 Critical SEO Issue: Client-Side Routing

### The Problem

Your React app uses **hash-based routing** (`#/piccolo`, `#/medio`). This means:

❌ Google sees everything as ONE page (`/`)  
❌ Your Piccolo, Medio, About pages are invisible to Google  
❌ Social media previews only show homepage  
❌ You can't get separate rankings for each page  

**Current URL structure:**
- ✅ `https://coldformsteelcanadawebsite.vercel.app/` (Google sees this)
- ❌ `https://coldformsteelcanadawebsite.vercel.app/#/piccolo` (Google ignores everything after #)
- ❌ `https://coldformsteelcanadawebsite.vercel.app/#/medio` (Same page to Google)

### The Solution: Enable SSR or SSG

You have 3 options:

---

## OPTION 1: Switch to Next.js (Best for SEO) ⭐⭐⭐

**What is it?**  
Next.js is a React framework that adds **Server-Side Rendering (SSR)** or **Static Site Generation (SSG)**.

**Benefits:**
- ✅ Each page gets a real URL (`/piccolo` instead of `/#/piccolo`)
- ✅ Google crawls all pages perfectly
- ✅ Social media previews work correctly
- ✅ Faster page loads (better SEO)
- ✅ Vercel deployment is optimized for Next.js
- ✅ Keeps all your existing React code

**Effort:** Medium (I can help migrate)

**When to do this:** If serious about SEO and want to rank on Google

---

## OPTION 2: Use Vercel's "prerender" Setting (Quick Fix) ⭐⭐

**What is it?**  
Tell Vercel to pre-render your React app so Google sees actual HTML.

**How to do it:**

1. Create `vercel.json` in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "index, follow"
        }
      ]
    }
  ]
}
```

2. In `package.json`, add:

```json
{
  "scripts": {
    "build": "vite build && npm run generate-sitemap",
    "generate-sitemap": "node generate-sitemap.js"
  }
}
```

**Benefits:**
- ✅ Works with current code
- ✅ No major changes needed

**Limitations:**
- ⚠️ Still uses hash routing (URLs have `#`)
- ⚠️ Not as good as proper SSR
- ⚠️ Social previews may not work perfectly

---

## OPTION 3: Do Nothing (Partial SEO) ⭐

**What I just added helps:**
- ✅ robots.txt tells Google to crawl
- ✅ sitemap.xml lists all pages
- ✅ Structured data (reviews, organization) shows in search results
- ✅ Meta tags work on homepage

**Limitations:**
- ❌ Google only indexes homepage deeply
- ❌ Other pages get minimal indexing
- ❌ Social sharing shows generic preview

**When to choose this:** If you don't care about organic search traffic

---

## 🎯 My Recommendation

### For Launch: Do OPTION 2 NOW (Quick)
- Adds `vercel.json` config
- Enables pre-rendering
- Takes 5 minutes

### For Long-Term: Plan OPTION 1 (Next.js)
- Migrate to Next.js over time
- Proper URLs, proper SEO
- Best long-term solution

---

## Additional SEO Improvements (After Fixing URLs)

### 1. Google Search Console Setup
Once deployed:
1. Go to: https://search.google.com/search-console
2. Add property: `coldformsteelcanadawebsite.vercel.app`
3. Verify ownership (HTML tag method)
4. Submit sitemap: `https://coldformsteelcanadawebsite.vercel.app/sitemap.xml`

### 2. Improve Page Speed
- ✅ Already using Tailwind (good!)
- ✅ Images need optimization (we're working on this)
- 🔄 Consider lazy-loading images
- 🔄 Add service worker for caching

### 3. Add More Content
Google loves content! You already have:
- ✅ Learning Center articles (great!)
- ✅ Success stories (good for local SEO)
- 🔄 Add blog posts regularly
- 🔄 Add FAQ sections

### 4. Local SEO (Important for Your Business!)

Add to every page with structured data:

```typescript
// In HeadMeta or schema components
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cold Form Steel Canada",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA",
    "addressRegion": "Ontario"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "YOUR_LATITUDE",
    "longitude": "YOUR_LONGITUDE"
  },
  "areaServed": ["Ontario", "Quebec", "Canada"],
  "telephone": "YOUR_PHONE",
  "priceRange": "$$"
}
```

### 5. Get Backlinks
- ✅ FrameCAD partnership (ask for link!)
- 🔄 Submit to building directories
- 🔄 Get featured in construction blogs
- 🔄 Local business listings (Google Business Profile!)

### 6. Monitor Performance

**Free Tools:**
- Google Search Console (must-have)
- Google Analytics (track traffic)
- PageSpeed Insights (performance)
- Ahrefs/SEMrush free tier (keyword research)

---

## Current SEO Score Estimate

**Homepage:** 6/10
- ✅ Good meta tags
- ✅ Structured data
- ✅ Mobile responsive
- ❌ Client-side rendering
- ❌ Slow initial paint

**Other Pages:** 2/10
- ❌ Not indexed separately
- ❌ Hash-based URLs
- ❌ Social previews don't work

**After Option 1 (Next.js):** 9/10
**After Option 2 (Pre-render):** 7/10

---

## Action Items (Priority Order)

### NOW (Today):
1. ✅ robots.txt and sitemap.xml (done!)
2. ✅ Canonical URLs (done!)
3. 🔄 Add `vercel.json` for pre-rendering (see Option 2)
4. 🔄 Set up Google Search Console
5. 🔄 Create Google Business Profile

### This Week:
1. 🔄 Submit sitemap to Google
2. 🔄 Add local business schema
3. 🔄 Fix remaining images (helps page speed)

### This Month:
1. 🔄 Plan Next.js migration
2. 🔄 Get backlinks from partners
3. 🔄 Add more blog content

---

## Questions?

Let me know which option you want to pursue:
- **Option 1:** Migrate to Next.js (best SEO, more work)
- **Option 2:** Add Vercel pre-rendering (quick win)
- **Option 3:** Leave as-is (minimal SEO)

I can help implement any of these! 🚀
