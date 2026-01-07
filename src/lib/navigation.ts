// Map old page IDs to Next.js routes
export const ROUTE_MAP: Record<string, string> = {
  'home': '/',
  'models': '/models',
  'piccolo': '/piccolo',
  'medio': '/medio',
  'learning': '/learning',
  'article': '/learning', // fallback
  'cfs-vs-traditional-steel': '/cfs-vs-traditional-steel',
  'steel-vs-wood': '/steel-vs-wood',
  'framecad': '/framecad-technology',
  'adu-timeline': '/adu-timeline',
  'steel-downsides': '/steel-downsides',
  'steel-rust': '/steel-rust',
  'reddit-myths': '/reddit-myths',
  'cost-drivers': '/cost-drivers',
  'five-day-build': '/five-day-build',
  'permit': '/permit-guide',
  'financing': '/financing-guide',
  'factory-tour': '/factory-tour',
  'stories': '/stories',
  'success-stories': '/stories',
  'blue-mountain': '/blue-mountain-shop',
  'family-barndominium': '/ste-marthe-barndo',
  'dual-structure-pownal': '/pownal-dual-structure',
  'diy-barndominium-strathroy': '/diy-barndominium',
  'marvelous-barndominium': '/marvelous-barndominium',
  'modern-two-story-barndominium': '/modern-two-story',
  'barndominium-project-fort-erie': '/fort-erie-barndo',
  'sister-barndominiums': '/sister-barndominiums',
  'about': '/about',
  'contact': '/contact',
  'privacy': '/privacy',
  'terms': '/terms',
  'faq': '/faq',
};

export function getRoute(pageId: string, projectId?: string): string {
  if (pageId === 'project' && projectId) {
    return ROUTE_MAP[projectId] || '/stories';
  }
  return ROUTE_MAP[pageId] || '/';
}
