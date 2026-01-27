export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  type?: string;
  canonicalUrl?: string;
}

/**
 * Base site URL (preferred canonical version)
 * Always use the non-www version for canonical URLs
 */
export const SITE_URL = 'https://coldformsteelcanada.com';

/**
 * Generate canonical URL for a given path
 * @param path - The page path (e.g., '/models', '/learning-center/steel-vs-wood')
 * @returns Full canonical URL
 */
export function getCanonicalUrl(path: string): string {
  // Remove trailing slash except for root
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${SITE_URL}${cleanPath}`;
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    title: 'Cold Form Steel Canada | Modern Steel Frame Homes | Framed in 4-5 Days',
    description: 'Build your dream home faster with factory-built cold-form steel construction. Structures framed in 4-5 days. Durable, fire-resistant, and eco-friendly. Serving all of Canada.',
    keywords: 'cold form steel, steel frame homes, barndominiums, prefab homes, ADU, steel construction, Canada, Ontario, modular homes, fast construction',
    image: 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png'
  },
  models: {
    title: 'Models & Pricing | Cold Form Steel Homes',
    description: 'Explore our steel frame home models: The Piccolo (420 sq ft) and Medio (560 sq ft). Factory-built, precision-engineered, and delivered to your site. Get pricing and specifications.',
    keywords: 'steel home models, barndominium pricing, ADU cost, prefab home prices, Piccolo model, Medio model, steel frame pricing, modular home cost'
  },
  piccolo: {
    title: 'The Piccolo Model | 420 sq ft Steel Frame Studio | Framed in 4-5 Days',
    description: 'The Piccolo: 420 sq ft modern steel frame studio. Perfect for ADUs, home offices, or guest suites. Factory-built with precision, delivered and framed in just 4-5 days.',
    keywords: 'Piccolo model, 420 sq ft ADU, steel frame studio, accessory dwelling unit, backyard cottage, home office, guest suite, small home'
  },
  medio: {
    title: 'The Medio Model | 560 sq ft Steel Frame Home | Framed in 4-5 Days',
    description: 'The Medio: 560 sq ft steel frame home with 1 bedroom. Ideal for ADUs, rental properties, or vacation homes. Precision-engineered and framed in 4-5 days.',
    keywords: 'Medio model, 560 sq ft home, 1 bedroom ADU, steel frame cottage, rental property, vacation home, small house, barndominium'
  },
  learning: {
    title: 'Learning Center | Cold Form Steel Construction Education',
    description: 'Learn about cold-form steel construction, FrameCAD technology, building processes, permits, financing, and more. Expert insights on modern steel frame building.',
    keywords: 'cold form steel education, steel construction guide, building process, construction technology, FrameCAD, permits, financing, steel framing'
  },
  stories: {
    title: 'Success Stories | Real Cold Form Steel Projects in Canada',
    description: 'Explore real cold-form steel projects across Canada. See completed barndominiums, ADUs, and custom homes. Client testimonials and project transformations.',
    keywords: 'steel home projects, barndominium examples, ADU success stories, completed projects, client testimonials, steel construction Canada, real builds'
  },
  about: {
    title: 'About Us | Cold Form Steel Canada',
    description: 'Leading cold-form steel construction company in Canada. Combining FrameCAD technology with expert craftsmanship to deliver precision-built steel frame homes.',
    keywords: 'cold form steel company, steel construction Canada, FrameCAD partner, steel frame builder, about us, company history'
  },
  contact: {
    title: 'Contact Us | Start Your Steel Frame Project',
    description: 'Ready to build your dream home? Contact Cold Form Steel Canada for quotes, consultations, and project information. Serving all of Canada.',
    keywords: 'contact cold form steel, get quote, steel home consultation, project inquiry, Ontario builder, Canadian steel construction'
  },
  
  // Learning Center Articles
  'steel-vs-wood': {
    title: 'Cold-Form Steel vs Wood Framing | Complete Comparison Guide',
    description: 'Comprehensive comparison of cold-form steel and wood framing. Compare costs, durability, construction speed, environmental impact, and long-term value.',
    keywords: 'steel vs wood framing, cold form steel comparison, construction materials, building costs, steel framing benefits, wood framing'
  },
  'cfs-vs-traditional-steel': {
    title: 'Cold-Form Steel vs Traditional Steel Framing | Key Differences',
    description: 'Understand the differences between cold-form steel (light gauge) and traditional hot-rolled steel framing. Compare manufacturing, applications, costs, and benefits.',
    keywords: 'cold form steel, traditional steel, light gauge steel, hot rolled steel, steel framing types, construction methods'
  },
  'factory-tour': {
    title: 'Inside Our Factory | Cold Form Steel Manufacturing Process',
    description: 'Take a virtual tour of our cold-form steel manufacturing facility. See FrameCAD technology, quality control, and precision engineering in action.',
    keywords: 'steel factory tour, FrameCAD manufacturing, steel frame production, construction facility, quality control, precision engineering'
  },
  'framecad-technology': {
    title: 'FrameCAD Technology | Advanced Steel Frame Manufacturing',
    description: 'Learn about FrameCAD roll-forming technology. Discover how precision computer-controlled manufacturing creates superior steel frame structures.',
    keywords: 'FrameCAD technology, steel roll forming, automated manufacturing, precision construction, CAD steel framing, construction technology'
  },
  'five-day-build': {
    title: 'Frame Your Home in 4-5 Days | Cold Form Steel Speed',
    description: 'How we frame homes in just 4-5 days using factory-built cold-form steel. Step-by-step timeline from delivery to completed frame.',
    keywords: 'fast construction, 5 day build, quick framing, steel construction speed, rapid building, efficient construction, modular building'
  },
  'adu-timeline': {
    title: 'ADU Build Timeline | From Permit to Completion',
    description: 'Complete timeline for building an Accessory Dwelling Unit with cold-form steel. Permitting, foundation, framing, and finishing schedules explained.',
    keywords: 'ADU timeline, accessory dwelling unit, building schedule, construction timeline, ADU process, project phases'
  },
  'permit-process': {
    title: 'Permit Process for Steel Frame Homes | Complete Guide',
    description: 'Navigate the permit process for cold-form steel construction. Requirements, documentation, approvals, and engineering stamps explained.',
    keywords: 'building permits, steel construction permits, permit process, building approvals, engineering stamps, construction documentation'
  },
  'steel-downsides': {
    title: 'Honest Look at Steel Construction Downsides | What to Consider',
    description: 'An honest assessment of cold-form steel construction limitations and considerations. Thermal bridging, specialized trades, and other factors to evaluate.',
    keywords: 'steel construction downsides, building limitations, steel frame considerations, construction challenges, honest assessment'
  },
  'cost-drivers': {
    title: 'What Drives Construction Costs | Steel Frame Home Pricing',
    description: 'Understand what affects steel frame home costs. 90% of costs are identical to wood construction - learn where the differences lie.',
    keywords: 'construction costs, steel home pricing, cost drivers, building budget, construction expenses, price factors'
  },
  'financing': {
    title: 'Financing Your Steel Frame Home | Options & Resources',
    description: 'Explore financing options for cold-form steel homes and ADUs. Construction loans, mortgages, and lender considerations for steel construction.',
    keywords: 'construction financing, home loans, ADU financing, building loans, mortgage options, construction budget'
  },
  'steel-rust': {
    title: 'Does Steel Framing Rust? | Galvanized Steel Protection',
    description: 'Learn about galvanized steel protection, corrosion resistance, and longevity of cold-form steel frames. Understanding zinc coating and rust prevention.',
    keywords: 'steel rust, galvanized steel, corrosion resistance, steel protection, zinc coating, steel durability, rust prevention'
  },
  'reddit-myths': {
    title: 'Steel Construction Myths Debunked | Reddit Questions Answered',
    description: 'Common cold-form steel construction myths from Reddit and forums debunked with facts. Thermal bridging, costs, insurance, and more clarified.',
    keywords: 'steel construction myths, Reddit construction, building myths, steel frame questions, construction facts, misconceptions'
  },
  
  // Success Stories
  'fort-erie-barndominium': {
    title: 'Fort Erie Barndominium | Steel Frame Success Story',
    description: 'A stunning barndominium project in Fort Erie, Ontario built with cold-form steel framing. See the transformation from concept to completed home.',
    keywords: 'Fort Erie barndominium, Ontario steel home, barndominium project, steel frame home, custom barndominium, success story',
    type: 'article'
  },
  'marvelous-barndominium': {
    title: 'Marvelous Barndominium | Modern Steel Frame Living',
    description: 'Explore this beautiful barndominium built with cold-form steel construction. Modern design meets rural living with superior durability.',
    keywords: 'barndominium design, modern barndominium, steel frame barndominium, rural home, custom design, steel construction',
    type: 'article'
  },
  'modern-two-story-barndominium': {
    title: 'Modern Two-Story Barndominium | Cold Form Steel Success',
    description: 'A stunning two-story barndominium showcasing the versatility of cold-form steel construction. Open concept living with durability built in.',
    keywords: 'two story barndominium, modern barndominium, steel frame home, multi-story steel, custom barndominium, open concept',
    type: 'article'
  },
  'family-barndominium': {
    title: 'Family Barndominium | Spacious Steel Frame Home',
    description: 'A family-friendly barndominium built with cold-form steel. Spacious, durable, and designed for modern family living.',
    keywords: 'family barndominium, steel frame family home, spacious home, modern family living, barndominium for families',
    type: 'article'
  },
  'dual-structure-pownal': {
    title: 'Dual Structure Project Pownal | Steel Frame Complex',
    description: 'Unique dual-structure property in Pownal built with cold-form steel. Multi-building project showcasing design flexibility.',
    keywords: 'dual structure, Pownal project, multi-building, steel frame complex, property development, custom project',
    type: 'article'
  },
  'diy-barndominium-strathroy': {
    title: 'DIY Barndominium Strathroy | Owner-Builder Success',
    description: 'Owner-builder project in Strathroy using cold-form steel framing. A DIY success story with professional results.',
    keywords: 'DIY barndominium, owner builder, Strathroy project, DIY steel frame, owner built home, self-build',
    type: 'article'
  },
  'sister-barndominiums': {
    title: 'Sister Barndominiums | Matching Steel Frame Homes',
    description: 'Two matching barndominiums built with cold-form steel. Perfect symmetry and design consistency with steel construction.',
    keywords: 'sister barndominiums, matching homes, dual project, steel frame homes, matching design, twin barndominiums',
    type: 'article'
  },
  'blue-mountain': {
    title: 'Blue Mountain Project | Luxury Steel Frame Retreat',
    description: 'Luxury retreat near Blue Mountain built with cold-form steel. High-end finishes meet superior steel frame construction.',
    keywords: 'Blue Mountain home, luxury barndominium, steel frame retreat, vacation home, luxury steel home, mountain property',
    type: 'article'
  },
  
  // Legal
  'privacy-policy': {
    title: 'Privacy Policy | Cold Form Steel Canada',
    description: 'Cold Form Steel Canada privacy policy. Learn how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, personal information, privacy terms',
    type: 'article'
  },
  'terms-of-service': {
    title: 'Terms of Service | Cold Form Steel Canada',
    description: 'Terms of service for Cold Form Steel Canada. Website usage terms, conditions, and legal information.',
    keywords: 'terms of service, terms and conditions, legal terms, website terms',
    type: 'article'
  }
};

export function getSEO(pageKey: string): PageSEO {
  return seoConfig[pageKey] || seoConfig.home;
}