# Next.js Migration Guide

## ✅ What's Been Migrated

### Core Files
- ✅ `/app/layout.tsx` - Root layout with metadata, GTM, navigation, footer
- ✅ `/app/page.tsx` - Home page route
- ✅ `/next.config.js` - Next.js configuration
- ✅ `/package.json` - Updated dependencies
- ✅ `/components/Navigation.tsx` - Updated to use next/link and usePathname
- ✅ `/components/Footer.tsx` - Updated to use next/link
- ✅ `/components/BackToTop.tsx` - Made client component

### Benefits of Next.js

1. **Automatic Code Splitting** - Better than React.lazy()
2. **Server-Side Rendering** - Improves SEO and initial load
3. **Image Optimization** - Built-in with next/image
4. **File-Based Routing** - No more React Router configuration
5. **Metadata API** - Better SEO with type-safe metadata
6. **Better Performance** - Optimized builds by default

## 🚧 Routes to Create

You need to create these page files in the `/app` directory:

```
/app
├── page.tsx (✅ Home - Done)
├── layout.tsx (✅ Root layout - Done)
├── models
│   ├── page.tsx (ModelsAndPricing)
│   ├── piccolo
│   │   └── page.tsx (Piccolo)
│   └── medio
│       └── page.tsx (Medio)
├── stories
│   ├── page.tsx (SuccessStories)
│   ├── fort-erie-barndominium
│   │   └── page.tsx
│   ├── marvelous-barndominium
│   │   └── page.tsx
│   ├── modern-two-story-barndominium
│   │   └── page.tsx
│   ├── family-barndominium
│   │   └── page.tsx
│   ├── dual-structure-pownal
│   │   └── page.tsx
│   ├── diy-barndominium-strathroy
│   │   └── page.tsx
│   ├── sister-barndominiums
│   │   └── page.tsx
│   └── blue-mountain
│       └── page.tsx
├── learning
│   ├── page.tsx (LearningCenter)
│   ├── steel-vs-wood
│   │   └── page.tsx
│   ├── cold-form-steel-vs-traditional-steel
│   │   └── page.tsx
│   ├── factory-tour
│   │   └── page.tsx
│   ├── framecad-technology
│   │   └── page.tsx
│   ├── five-day-build
│   │   └── page.tsx
│   ├── adu-timeline
│   │   └── page.tsx
│   ├── permit-process
│   │   └── page.tsx
│   ├── steel-construction-downsides
│   │   └── page.tsx
│   ├── cost-drivers
│   │   └── page.tsx
│   ├── financing-options
│   │   └── page.tsx
│   ├── does-steel-rust
│   │   └── page.tsx
│   └── reddit-myths-debunked
│       └── page.tsx
├── about
│   └── page.tsx (About)
├── contact
│   └── page.tsx (Contact)
├── privacy-policy
│   └── page.tsx (PrivacyPolicy)
└── terms-of-service
    └── page.tsx (TermsOfService)
```

## 📝 Page Template

Each page.tsx follows this pattern:

```tsx
// For pages with metadata
import type { Metadata } from 'next';
import { PageComponent } from '@/components/pages/PageComponent';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description...',
  openGraph: {
    title: 'Page Title',
    description: 'Page description...',
  },
};

export default function Page() {
  return <PageComponent />;
}
```

## 🔄 Component Updates Needed

### Remove PageWrapper
Next.js handles page transitions automatically, so remove the PageWrapper pattern:

```tsx
// OLD (React Router):
<Route path="/" element={
  <PageWrapper>
    {(onNavigate) => <Home onNavigate={onNavigate} />}
  </PageWrapper>
} />

// NEW (Next.js):
// /app/page.tsx
export default function HomePage() {
  return <Home />;
}
```

### Update Page Components
Remove `onNavigate` prop from all page components:

```tsx
// OLD:
export function Home({ onNavigate }: { onNavigate: (path: string) => void }) {
  // ...
}

// NEW:
'use client'; // Only if component uses hooks/state

export function Home() {
  // Use Next.js router if needed
  // const router = useRouter();
  // router.push('/models');
}
```

### Update Internal Links
Replace any remaining Link/navigate usage:

```tsx
// OLD (React Router):
import { Link, useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/models');
<Link to="/models">Models</Link>

// NEW (Next.js):
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/models');
<Link href="/models">Models</Link>
```

## 🎯 Quick Migration Script

To quickly create all route files, use this pattern:

1. Create directory structure
2. Copy page component import
3. Add metadata export
4. Add default page export

Example for `/app/models/page.tsx`:

```tsx
import type { Metadata } from 'next';
import { ModelsAndPricing } from '@/components/pages/ModelsAndPricing';

export const metadata: Metadata = {
  title: 'Models & Pricing',
  description: 'Explore our cold-form steel building models. Piccolo (420 sq ft) and Medio (560 sq ft). Framed in 4-5 days.',
};

export default function ModelsPage() {
  return <ModelsAndPricing />;
}
```

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Dependencies Removed

These are no longer needed:
- react-router-dom
- react-helmet-async
- @vitejs/plugin-react
- vite

## 📦 Dependencies Added

- next (^14.2.0)
- Already have: react, react-dom, tailwindcss, etc.

## ⚡ Performance Improvements

With Next.js you get:
- **Better initial load** - Server-side rendering
- **Automatic code splitting** - Per-route automatic splitting
- **Image optimization** - Built-in with next/image
- **Better caching** - Built-in ISR and static generation
- **Smaller bundles** - Tree-shaking and optimizations

## 🔍 SEO Improvements

- **Server-side metadata** - Better for crawlers
- **Automatic sitemap** - Can generate dynamically
- **Better Core Web Vitals** - Optimized by default

## 📱 Mobile Performance

Next.js provides:
- Automatic responsive images
- Better mobile bundle sizes
- Optimized fonts
- Faster navigation

## 🎨 Styling

Tailwind CSS v4 continues to work the same way:
- Keep `/styles/globals.css`
- Keep Tailwind configuration
- No changes needed

## 🖼️ Images

For better performance, consider migrating to next/image:

```tsx
// OLD:
<img src="..." alt="..." />

// NEW (optional but recommended):
import Image from 'next/image';
<Image src="..." alt="..." width={1920} height={1080} />
```

Benefits:
- Automatic optimization
- Lazy loading
- Responsive images
- WebP conversion

## 🐛 Common Issues

### Issue: "use client" directive
**Solution:** Add `'use client';` at top of components that use:
- useState, useEffect, etc.
- Event handlers (onClick, etc.)
- Browser APIs

### Issue: Link "to" prop
**Solution:** Change `to=` to `href=` for all next/link components

### Issue: useNavigate not found
**Solution:** Use Next.js router:
```tsx
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/path');
```

### Issue: useLocation not found
**Solution:** Use Next.js pathname:
```tsx
import { usePathname } from 'next/navigation';
const pathname = usePathname();
```

## ✅ Next Steps

1. Create all route files using the template above
2. Update page components to remove onNavigate prop
3. Test each route
4. Deploy to Vercel (optimized for Next.js)
5. Monitor performance improvements

## 🎉 Expected Results

- **Performance Score:** 85-95 (from 53)
- **FCP:** < 1.5s (from 8.5s)
- **LCP:** < 2.0s (from 10.6s)
- **Better SEO:** Server-side rendering
- **Faster navigation:** Built-in optimizations
