import { useNavigate } from 'react-router';

/**
 * Custom hook to handle navigation throughout the app
 * Maps old page IDs to new route paths for backward compatibility
 */
export function useAppNavigation() {
  const navigate = useNavigate();

  const navigateTo = (pageOrPath: string, id?: string) => {
    // Handle direct paths (starts with /)
    if (pageOrPath.startsWith('/')) {
      navigate(pageOrPath);
      return;
    }

    // Map old page IDs to new paths
    const routeMap: Record<string, string> = {
      'home': '/',
      'models': '/models',
      'learning': '/learning',
      'stories': '/stories',
      'about': '/about',
      'contact': '/contact',
      
      // Model pages
      'piccolo': '/models/piccolo',
      'medio': '/models/medio',
      
      // Learning Center articles
      'steel-vs-wood': '/learning/steel-vs-wood',
      'cfs-vs-traditional-steel': '/learning/cold-form-steel-vs-traditional-steel',
      'factory-tour': '/learning/factory-tour',
      'framecad': '/learning/framecad-technology',
      'five-day-build': '/learning/five-day-build',
      'adu-timeline': '/learning/adu-timeline',
      'permit': '/learning/permit-process',
      'steel-downsides': '/learning/steel-construction-downsides',
      'cost-drivers': '/learning/cost-drivers',
      'financing': '/learning/financing-options',
      'steel-rust': '/learning/does-steel-rust',
      'reddit-myths': '/learning/reddit-myths-debunked',
      
      // Success Stories
      'barndominium-project-fort-erie': '/stories/fort-erie-barndominium',
      'marvelous-barndominium': '/stories/marvelous-barndominium',
      'modern-two-story-barndominium': '/stories/modern-two-story-barndominium',
      'family-barndominium': '/stories/family-barndominium',
      'dual-structure-pownal': '/stories/dual-structure-pownal',
      'diy-barndominium-strathroy': '/stories/diy-barndominium-strathroy',
      'sister-barndominiums': '/stories/sister-barndominiums',
      'blue-mountain': '/stories/blue-mountain',
      'sainte-marthe-barndo': '/stories/sainte-marthe-barndo',
      
      // Legal pages
      'privacy-policy': '/privacy-policy',
      'terms-of-service': '/terms-of-service',
    };

    // Handle project navigation with ID
    if (pageOrPath === 'project' && id) {
      const projectRoute = routeMap[id];
      if (projectRoute) {
        navigate(projectRoute);
        return;
      }
    }

    const path = routeMap[pageOrPath] || '/';
    navigate(path);
  };

  return navigateTo;
}