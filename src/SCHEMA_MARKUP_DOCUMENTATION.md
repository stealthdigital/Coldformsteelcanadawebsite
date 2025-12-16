# Schema Markup Documentation

## Overview
Schema markup (structured data) has been implemented across the SteelBuilt website to improve SEO performance and enable rich snippets in Google search results. This documentation outlines what has been implemented and how to maintain it.

## What is Schema Markup?
Schema markup is structured data in JSON-LD format that helps search engines understand your content better. It can result in:
- **Rich snippets** in search results (ratings, FAQs, article info)
- **Better click-through rates** from search results
- **Improved search visibility** for specific content types
- **Enhanced knowledge graph** presence

## Implemented Schema Types

### 1. FAQ Schema (`/components/schema/FAQSchema.tsx`)
**Where:** FAQ page (`/components/pages/FAQ.tsx`)

**Purpose:** Enables FAQ rich snippets in Google search results, showing question/answer pairs directly in search.

**Example Output:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is cold formed steel and how is it different from wood framing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cold formed steel is high strength galvanized steel..."
      }
    }
  ]
}
```

**Benefits:**
- FAQs can appear directly in search results
- Improved visibility for question-based searches
- Higher click-through rates

### 2. Article Schema (`/components/schema/ArticleSchema.tsx`)
**Where:** All Learning Center articles

**Implemented on:**
- How the 5 Day Build Works (`FiveDayBuildArticle.tsx`)
- Steel vs. Wood: Full Breakdown (`SteelVsWoodArticle.tsx`)
- Why FrameCAD Matters for Your Build (`FrameCADArticle.tsx`)
- What Drives the Cost of Your Build? (`CostDriversArticle.tsx`)
- Financing Options in 24 Hours (`FinancingArticle.tsx`)
- Do I Need a Permit for My ADU? (`PermitArticle.tsx`)

**Purpose:** Helps Google understand article content, author, publish date, and category.

**Example Output:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How the 5 Day Build Works",
  "description": "The idea of framing a home in four to five days...",
  "author": {
    "@type": "Person",
    "name": "John Montgomery",
    "jobTitle": "President, Cold Form Steel Canada"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cold Form Steel Canada"
  },
  "datePublished": "2025-12-09",
  "articleSection": "Process & Permits",
  "keywords": "cold form steel, 5 day build, construction speed"
}
```

**Benefits:**
- Better article discoverability in Google
- Can appear in "Top Stories" section
- Shows publish date and author in search results

### 3. Review Schema (`/components/schema/ReviewSchema.tsx`)
**Where:** Home page (`/components/pages/Home.tsx`)

**Purpose:** Displays customer reviews and aggregate ratings in search results.

**Example Output:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cold Form Steel Canada",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Robin Langlois"
      },
      "reviewBody": "The quality of these buildings is excellent...",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }
  ]
}
```

**Benefits:**
- Star ratings can appear in search results
- Builds trust and credibility
- Improves click-through rates

### 4. Organization Schema (`/components/schema/OrganizationSchema.tsx`)
**Where:** Home page (`/components/pages/Home.tsx`)

**Purpose:** Defines your organization for Google's Knowledge Graph.

**Example Output:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cold Form Steel Canada",
  "description": "Leading provider of cold-form steel homes...",
  "url": "https://coldformsteelcanada.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yourdomain.com/images/logo.png"
  }
}
```

**Benefits:**
- Appears in Google Knowledge Panel
- Consistent brand identity across Google
- Can show contact info, location, social links

## How Schema Components Work

All schema components:
1. Accept props with content data
2. Generate JSON-LD structured data
3. Inject it into the `<head>` using a `<script type="application/ld+json">` tag
4. Automatically clean up when the component unmounts
5. Update when props change

## Testing Your Schema Markup

### Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

1. Enter your page URL or paste the HTML
2. Check if schema is valid
3. Preview how it appears in search
4. Fix any errors or warnings

### Schema Markup Validator
**URL:** https://validator.schema.org/

1. Paste your page URL
2. Verify all schema types are detected
3. Ensure no errors

### Google Search Console
After deploying:
1. Submit your sitemap to Google Search Console
2. Monitor "Enhancements" section
3. Check for "FAQ", "Article", "Review" enhancements
4. Fix any issues reported

## Adding Schema to New Articles

When creating a new Learning Center article:

1. Import the ArticleSchema component:
```tsx
import { ArticleSchema } from '../schema/ArticleSchema';
```

2. Add it at the top of your component's return statement:
```tsx
return (
  <div className="min-h-screen bg-white">
    <ArticleSchema
      headline="Your Article Title"
      description="Brief description of the article"
      author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
      datePublished="2025-12-14"
      category="Process & Permits" // or other category
      keywords={['keyword1', 'keyword2', 'keyword3']}
    />
    {/* Rest of your article */}
  </div>
);
```

3. Use relevant keywords that match your content and target search terms

## Schema Best Practices

### DO:
✅ Keep descriptions accurate and relevant
✅ Use real dates for published content
✅ Include all actual testimonials/reviews
✅ Update dateModified when you edit articles
✅ Use specific, relevant keywords
✅ Test schema before deployment

### DON'T:
❌ Add fake reviews or ratings
❌ Use misleading descriptions
❌ Stuff keywords excessively
❌ Copy schema without updating content
❌ Add schema for content that doesn't exist on the page

## Expected Results

### Timeline for Results:
- **Immediate:** Schema validates in testing tools
- **1-2 weeks:** Google starts crawling and indexing schema
- **2-4 weeks:** Rich snippets may begin appearing
- **1-3 months:** Full impact on search visibility

### What You Might See:
- FAQ boxes directly in search results
- Star ratings next to your site in results
- Article cards with images and publish dates
- "People Also Ask" boxes featuring your content
- Knowledge panel for your organization

## Maintenance

### Regular Updates:
1. **Add new testimonials** - Update ReviewSchema when you get new reviews
2. **Update articles** - Change dateModified when editing articles
3. **Add new FAQs** - Keep FAQ schema current with new questions
4. **Monitor Search Console** - Fix any schema errors reported

### Monthly Checklist:
- [ ] Check Google Search Console for schema errors
- [ ] Add schema to any new articles published
- [ ] Update aggregate ratings if new reviews added
- [ ] Verify rich snippets are still appearing
- [ ] Test schema on new pages with validation tools

## Future Enhancements

Consider adding these schema types as the site grows:

### Product Schema
For model pages (Piccolo, Medio):
- Price information
- Availability
- Product reviews
- Specifications

### BreadcrumbList Schema
For improved navigation in search results:
- Home > Learning Center > Article
- Home > Success Stories > Project

### VideoObject Schema
For project walkthroughs:
- Video thumbnail
- Duration
- Upload date
- Description

### LocalBusiness Schema
When you have a physical location:
- Address
- Phone number
- Hours
- Service area
- Business type

## Technical Notes

### Why JSON-LD?
We use JSON-LD (JavaScript Object Notation for Linked Data) because:
- Google's recommended format
- Easy to implement with React
- Doesn't clutter HTML markup
- Easy to test and validate
- Can be dynamically generated

### Component Architecture
Each schema component:
- Is self-contained
- Handles its own injection/cleanup
- Accepts TypeScript props for type safety
- Uses useEffect for lifecycle management
- Creates unique script IDs to avoid duplicates

### Browser Compatibility
Schema markup is in `<script>` tags, so:
- No browser compatibility issues
- Works on all devices
- Doesn't affect page performance
- Invisible to users (only for search engines)

## Resources

- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Schema.org Documentation](https://schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [FAQ Schema Guidelines](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Article Schema Guidelines](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Review Schema Guidelines](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

## Support

For questions about schema implementation or debugging issues:
1. Test with Google's Rich Results Test
2. Check Google Search Console for errors
3. Validate with Schema.org validator
4. Review this documentation
5. Consult Google's official structured data documentation
