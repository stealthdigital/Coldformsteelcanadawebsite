# Performance Optimization Checklist

Use this checklist to track your progress optimizing the site.

## ✅ Completed (Already Done)

- [x] **Code Splitting** - React.lazy() for all routes
- [x] **Deferred GTM** - Google Tag Manager loads after page render
- [x] **DNS Prefetch** - Faster external resource loading
- [x] **Build Optimization** - Terser minification, tree shaking
- [x] **Loading States** - Spinner for lazy-loaded pages
- [x] **Meta Tags** - Complete SEO with HeadMeta component
- [x] **Sitemap** - XML sitemap for search engines
- [x] **Robots.txt** - Proper search engine directives

**Current Score: ~62-65** (after deploying these changes)

---

## 🔴 CRITICAL PRIORITY - Do This First

### Image Optimization (4-6 hours)

- [ ] **Sign up for Cloudinary**
  - Go to [cloudinary.com](https://cloudinary.com/users/register/free)
  - Create free account
  - Note your "Cloud Name" from dashboard

- [ ] **Update Cloudinary config**
  - Open `/utils/images.ts`
  - Replace `YOUR_CLOUD_NAME_HERE` with your actual cloud name
  - Save file

- [ ] **Upload images to Cloudinary**
  - [ ] Hero images (Home page)
    - Medio Dark Interior 3
    - Piccolo Dark Exterior 2
    - Medio Dark Exterior 2
  - [ ] Piccolo model images (all)
  - [ ] Medio model images (all)
  - [ ] Success story featured images
  - [ ] Learning center article images
  - [ ] About page images

- [ ] **Update image URLs** (use find & replace)
  
  **Home.tsx:**
  - [ ] Replace `heroImage` URL
  - [ ] Replace `piccoloImage` URL
  - [ ] Replace `medioImage` URL
  
  **Piccolo.tsx:**
  - [ ] Replace all model image URLs
  
  **Medio.tsx:**
  - [ ] Replace all model image URLs
  
  **ModelsAndPricing.tsx:**
  - [ ] Replace model card images
  
  **Success Stories:**
  - [ ] Fort Erie Barndominium images
  - [ ] Marvelous Barndominium images
  - [ ] Modern Two-Story images
  - [ ] Family Barndominium images
  - [ ] Dual Structure Pownal images
  - [ ] DIY Strathroy images
  - [ ] Sister Barndominiums images
  - [ ] Blue Mountain images
  
  **Learning Center:**
  - [ ] Steel vs Wood article images
  - [ ] CFS vs Traditional Steel images
  - [ ] Factory Tour images
  - [ ] FrameCAD article images
  - [ ] Five Day Build images
  - [ ] ADU Timeline images
  - [ ] Other article images
  
  **About Page:**
  - [ ] Team photos
  - [ ] Company images

- [ ] **Test one page first**
  - Update just Home page images
  - Build and deploy
  - Test on PageSpeed
  - Verify images load correctly

- [ ] **Update remaining pages**
  - Once confirmed working, update all pages

- [ ] **Final test**
  - Run PageSpeed Insights
  - Should see score of 85-90
  - Check LCP is under 2.5s

**Expected Score After This: 85-90** ✅

---

## 🟡 HIGH PRIORITY - Do Next

### Fine-Tune Image Loading (1-2 hours)

- [ ] **Add priority flags to hero images**
  ```tsx
  <OptimizedImage priority={true} src={heroImage} alt="..." />
  ```
  - [ ] Home page hero
  - [ ] Models page header
  - [ ] About page header
  - [ ] Contact page header

- [ ] **Add width/height attributes**
  - Prevents layout shift
  - Helps browser allocate space
  - [ ] All hero images
  - [ ] Model card images
  - [ ] Success story cards

- [ ] **Implement responsive images**
  - Use `getResponsiveImageSet()` from `/utils/images.ts`
  - [ ] Hero images (most important)
  - [ ] Model detail images
  - [ ] Success story images

**Expected Score After This: 88-92**

---

## 🟢 NICE TO HAVE - Polish

### Additional Optimizations (2-3 hours)

- [ ] **Font Optimization**
  - [ ] Preload critical fonts
  - [ ] Use font-display: swap
  - [ ] Subset fonts to include only used characters

- [ ] **Service Worker**
  - [ ] Create service worker for caching
  - [ ] Cache static assets
  - [ ] Implement offline fallback

- [ ] **Performance Monitoring**
  - [ ] Set up Web Vitals tracking
  - [ ] Add to Google Analytics
  - [ ] Monitor Core Web Vitals in Search Console

- [ ] **Additional Build Optimizations**
  - [ ] Enable CSS minification
  - [ ] Remove unused CSS
  - [ ] Optimize SVG files

- [ ] **Browser Caching**
  - [ ] Configure cache headers on server
  - [ ] Set long cache times for images
  - [ ] Implement cache busting

**Expected Score After This: 90-95**

---

## 📊 Testing & Verification

### Before Starting
- [ ] Run PageSpeed Insights baseline test
- [ ] Record current scores:
  - Performance: ___
  - FCP: ___
  - LCP: ___
  - Total page weight: ___

### After Critical Priority
- [ ] Run PageSpeed Insights
- [ ] Record new scores:
  - Performance: ___ (target: 85-90)
  - FCP: ___ (target: < 1.8s)
  - LCP: ___ (target: < 2.5s)
  - Total page weight: ___ (target: < 3MB)

### After High Priority
- [ ] Run PageSpeed Insights
- [ ] Record final scores:
  - Performance: ___ (target: 88-92)
  - FCP: ___ (target: < 1.5s)
  - LCP: ___ (target: < 2.0s)

### Cross-Browser Testing
- [ ] Chrome (mobile & desktop)
- [ ] Safari (mobile & desktop)
- [ ] Firefox
- [ ] Edge

### Real Device Testing
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet
- [ ] Slow 3G simulation

---

## 🎯 Success Criteria

### Must Have (Required)
- [ ] Performance score > 85
- [ ] LCP < 2.5 seconds
- [ ] FCP < 1.8 seconds
- [ ] Total page weight < 3MB
- [ ] All images optimized
- [ ] Mobile score > 80

### Nice to Have (Goals)
- [ ] Performance score > 90
- [ ] LCP < 2.0 seconds
- [ ] FCP < 1.5 seconds
- [ ] Total page weight < 2MB
- [ ] Desktop score > 95
- [ ] All pages load in < 3s on 3G

---

## 📝 Notes & Observations

**Date Started:** ___________

**Issues Encountered:**
- 
- 
- 

**Solutions Found:**
- 
- 
- 

**Performance Before:**
- Score: ___
- LCP: ___
- FCP: ___

**Performance After:**
- Score: ___
- LCP: ___
- FCP: ___

**Total Improvement:** ___ points

---

## 🆘 Troubleshooting

### If images don't load from Cloudinary:
1. Check cloud name is correct in `/utils/images.ts`
2. Verify images are uploaded to Cloudinary
3. Check image names match exactly (case-sensitive)
4. Try accessing the Cloudinary URL directly in browser

### If performance doesn't improve:
1. Clear browser cache
2. Test in incognito mode
3. Verify build is deployed (check build date)
4. Check Network tab in DevTools for actual file sizes
5. Run test 3-5 times and take average

### If code splitting breaks:
1. Check browser console for errors
2. Verify all imports are correct
3. Make sure Suspense wraps Routes
4. Check lazy imports use correct syntax

---

## 📞 Quick Reference

**Key Files:**
- `/utils/images.ts` - Image optimization helpers
- `/components/OptimizedImage.tsx` - Lazy loading image component
- `/PERFORMANCE-OPTIMIZATION-GUIDE.md` - Complete technical guide
- `/PERFORMANCE-FIXES-SUMMARY.md` - Executive summary
- `/scripts/image-audit.md` - List of images to optimize

**Important Commands:**
```bash
# Build for production
npm run build

# Test build locally
npm run preview

# Check bundle size
npm run build -- --mode analyze
```

**Useful Links:**
- PageSpeed Insights: https://pagespeed.web.dev/
- Cloudinary Console: https://cloudinary.com/console
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- WebPageTest: https://www.webpagetest.org/

---

**Remember:** Focus on the Critical Priority section first. That alone will take you from 53 → 85-90 score. Everything else is incremental improvement.

Good luck! 🚀
