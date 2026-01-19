#!/usr/bin/env node

/**
 * Next.js Route Generator
 * 
 * This script automatically creates all the Next.js route files
 * for the Cold Form Steel Canada website migration.
 * 
 * Usage:  node scripts/generate-nextjs-routes.js
 */

const fs = require('fs');
const path = require('path');

// Route definitions with metadata
const routes = [
  // Main pages
  {
    path: 'models/page.tsx',
    component: 'ModelsAndPricing',
    title: 'Models & Pricing',
    description: 'Explore our cold-form steel building models. Piccolo (420 sq ft) and Medio (560 sq ft). Framed in 4-5 days.',
  },
  {
    path: 'models/piccolo/page.tsx',
    component: 'Piccolo',
    title: 'The Piccolo - 420 sq ft Steel Frame ADU',
    description: 'The Piccolo model: 420 sq ft studio ADU framed in 4-5 days. Perfect for guest houses, home offices, or rental units.',
  },
  {
    path: 'models/medio/page.tsx',
    component: 'Medio',
    title: 'The Medio - 560 sq ft Steel Frame ADU',
    description: 'The Medio model: 560 sq ft one-bedroom ADU framed in 4-5 days. Ideal for larger living spaces with bedroom and full amenities.',
  },
  {
    path: 'stories/page.tsx',
    component: 'SuccessStories',
    title: 'Success Stories',
    description: 'Real cold-form steel construction projects across Canada. See how homeowners built their dream barndominiums and ADUs.',
  },
  {
    path: 'stories/fort-erie-barndominium/page.tsx',
    component: 'BarndominiumProjectFortErie',
    title: 'Fort Erie Barndominium Project',
    description: 'A stunning cold-form steel barndominium project in Fort Erie, Ontario.',
  },
  {
    path: 'stories/marvelous-barndominium/page.tsx',
    component: 'MarvelousBarndominium',
    title: 'Marvelous Barndominium',
    description: 'A marvelous cold-form steel barndominium showcasing modern design and durability.',
  },
  {
    path: 'stories/modern-two-story-barndominium/page.tsx',
    component: 'ModernTwoStoryBarndominium',
    title: 'Modern Two-Story Barndominium',
    description: 'A modern two-story barndominium built with cold-form steel construction.',
  },
  {
    path: 'stories/family-barndominium/page.tsx',
    component: 'FamilyBarndominium',
    title: 'Family Barndominium',
    description: 'A spacious family barndominium perfect for modern Canadian living.',
  },
  {
    path: 'stories/dual-structure-pownal/page.tsx',
    component: 'DualStructurePownal',
    title: 'Dual Structure Pownal',
    description: 'A dual-structure cold-form steel project in Pownal.',
  },
  {
    path: 'stories/diy-barndominium-strathroy/page.tsx',
    component: 'DIYBarndominiumStrathroy',
    title: 'DIY Barndominium Strathroy',
    description: 'A DIY cold-form steel barndominium project in Strathroy, Ontario.',
  },
  {
    path: 'stories/sister-barndominiums/page.tsx',
    component: 'SisterBarndominiums',
    title: 'Sister Barndominiums',
    description: 'Two matching sister barndominiums built side-by-side with cold-form steel.',
  },
  {
    path: 'stories/blue-mountain/page.tsx',
    component: 'BlueMountainDetail',
    title: 'Blue Mountain Project',
    description: 'A cold-form steel construction project in the Blue Mountain region.',
  },
  {
    path: 'learning/page.tsx',
    component: 'LearningCenter',
    title: 'Learning Center',
    description: 'Everything you need to know about cold-form steel construction, building process, costs, and permits.',
  },
  {
    path: 'learning/steel-vs-wood/page.tsx',
    component: 'SteelVsWoodArticle',
    title: 'Cold-Form Steel vs Wood Framing',
    description: 'Comparing cold-form steel and traditional wood framing for residential construction.',
  },
  {
    path: 'learning/cold-form-steel-vs-traditional-steel/page.tsx',
    component: 'CFSvsTraditionalSteelArticle',
    title: 'Cold-Form Steel vs Traditional Steel',
    description: 'Understanding the differences between cold-form steel and traditional hot-rolled steel construction.',
  },
  {
    path: 'learning/factory-tour/page.tsx',
    component: 'FactoryTourArticle',
    title: 'Factory Tour - Cold-Form Steel Manufacturing',
    description: 'Take a virtual tour of our cold-form steel manufacturing facility.',
  },
  {
    path: 'learning/framecad-technology/page.tsx',
    component: 'FrameCADArticle',
    title: 'FrameCAD Technology',
    description: 'Learn about FrameCAD technology and how it revolutionizes cold-form steel construction.',
  },
  {
    path: 'learning/five-day-build/page.tsx',
    component: 'FiveDayBuildArticle',
    title: 'Five-Day Frame Build Process',
    description: 'How we frame a complete structure in just 4-5 days with cold-form steel.',
  },
  {
    path: 'learning/adu-timeline/page.tsx',
    component: 'ADUTimelineArticle',
    title: 'ADU Build Timeline',
    description: 'Complete timeline for building an ADU with cold-form steel construction.',
  },
  {
    path: 'learning/permit-process/page.tsx',
    component: 'PermitArticle',
    title: 'Building Permit Process',
    description: 'Navigate the building permit process for cold-form steel construction in Canada.',
  },
  {
    path: 'learning/steel-construction-downsides/page.tsx',
    component: 'SteelDownsidesArticle',
    title: 'Cold-Form Steel Construction Downsides',
    description: 'Honest discussion about the challenges and considerations of steel construction.',
  },
  {
    path: 'learning/cost-drivers/page.tsx',
    component: 'CostDriversArticle',
    title: 'Cost Drivers in Steel Construction',
    description: 'Understanding what impacts the cost of cold-form steel construction projects.',
  },
  {
    path: 'learning/financing-options/page.tsx',
    component: 'FinancingArticle',
    title: 'Financing Options for Steel Homes',
    description: 'Financing options and considerations for cold-form steel construction projects.',
  },
  {
    path: 'learning/does-steel-rust/page.tsx',
    component: 'SteelRustArticle',
    title: 'Does Cold-Form Steel Rust?',
    description: 'Addressing concerns about rust and corrosion in cold-form steel construction.',
  },
  {
    path: 'learning/reddit-myths-debunked/page.tsx',
    component: 'RedditMythsArticle',
    title: 'Reddit Myths About Steel Construction - Debunked',
    description: 'Debunking common myths and misconceptions about cold-form steel construction.',
  },
  {
    path: 'about/page.tsx',
    component: 'About',
    title: 'About Us',
    description: 'Learn about Cold Form Steel Canada and our mission to revolutionize residential construction.',
  },
  {
    path: 'contact/page.tsx',
    component: 'Contact',
    title: 'Contact Us',
    description: 'Get in touch with Cold Form Steel Canada. Start your project today.',
  },
  {
    path: 'privacy-policy/page.tsx',
    component: 'PrivacyPolicy',
    title: 'Privacy Policy',
    description: 'Privacy policy for Cold Form Steel Canada website.',
  },
  {
    path: 'terms-of-service/page.tsx',
    component: 'TermsOfService',
    title: 'Terms of Service',
    description: 'Terms of service for Cold Form Steel Canada website.',
  },
];

// Template for page files
function generatePageFile(component, title, description) {
  return `import type { Metadata } from 'next';
import { ${component} } from '@/components/pages/${component}';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  openGraph: {
    title: '${title}',
    description: '${description}',
  },
};

export default function ${component}Page() {
  return <${component} />;
}
`;
}

// Create route files
function createRoutes() {
  const appDir = path.join(process.cwd(), 'app');
  
  routes.forEach((route) => {
    const filePath = path.join(appDir, route.path);
    const dir = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
    
    // Create page file
    const content = generatePageFile(route.component, route.title, route.description);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created route: ${route.path}`);
  });
  
  console.log(`\n✨ Successfully created ${routes.length} route files!`);
  console.log('\n📝 Next steps:');
  console.log('1. Remove `onNavigate` prop from all page components');
  console.log('2. Add "use client" directive to components that use hooks/state');
  console.log('3. Run: npm install');
  console.log('4. Run: npm run dev');
  console.log('5. Test each route');
}

// Run the script
createRoutes();
