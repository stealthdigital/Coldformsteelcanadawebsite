// Sitemap.xml content for Cold Form Steel Canada
// This should be placed in the public folder as sitemap.xml

export const generateSitemap = () => {
  const baseUrl = 'https://coldformsteelcanada.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/models', priority: '0.9', changefreq: 'monthly' },
    { url: '/models/piccolo', priority: '0.9', changefreq: 'monthly' },
    { url: '/models/medio', priority: '0.9', changefreq: 'monthly' },
    { url: '/learning', priority: '0.8', changefreq: 'weekly' },
    { url: '/stories', priority: '0.8', changefreq: 'monthly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    
    // Learning Center Articles
    { url: '/learning/steel-vs-wood', priority: '0.8', changefreq: 'monthly' },
    { url: '/learning/cold-form-steel-vs-traditional-steel', priority: '0.8', changefreq: 'monthly' },
    { url: '/learning/factory-tour', priority: '0.7', changefreq: 'monthly' },
    { url: '/learning/framecad-technology', priority: '0.7', changefreq: 'monthly' },
    { url: '/learning/five-day-build', priority: '0.8', changefreq: 'monthly' },
    { url: '/learning/adu-timeline', priority: '0.7', changefreq: 'monthly' },
    { url: '/learning/permit-process', priority: '0.8', changefreq: 'monthly' },
    { url: '/learning/steel-construction-downsides', priority: '0.7', changefreq: 'monthly' },
    { url: '/learning/cost-drivers', priority: '0.8', changefreq: 'monthly' },
    { url: '/learning/financing-options', priority: '0.8', changefreq: 'monthly' },
    { url: '/learning/does-steel-rust', priority: '0.7', changefreq: 'monthly' },
    { url: '/learning/reddit-myths-debunked', priority: '0.7', changefreq: 'monthly' },
    
    // Success Stories
    { url: '/stories/fort-erie-barndominium', priority: '0.6', changefreq: 'yearly' },
    { url: '/stories/marvelous-barndominium', priority: '0.6', changefreq: 'yearly' },
    { url: '/stories/modern-two-story-barndominium', priority: '0.6', changefreq: 'yearly' },
    { url: '/stories/family-barndominium', priority: '0.6', changefreq: 'yearly' },
    { url: '/stories/dual-structure-pownal', priority: '0.6', changefreq: 'yearly' },
    { url: '/stories/diy-barndominium-strathroy', priority: '0.6', changefreq: 'yearly' },
    { url: '/stories/sister-barndominiums', priority: '0.6', changefreq: 'yearly' },
    { url: '/stories/blue-mountain', priority: '0.6', changefreq: 'yearly' },
    
    // Legal Pages
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// To use: Copy the output to public/sitemap.xml
console.log(generateSitemap());
