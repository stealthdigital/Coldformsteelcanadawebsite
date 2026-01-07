'use client';

import { useRouter } from 'next/navigation';
import { Home } from './Home';

export function HomeContent() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    const routeMap: Record<string, string> = {
      'home': '/',
      'models': '/models',
      'learning': '/learning',
      'stories': '/stories',
      'about': '/about',
      'contact': '/contact',
      'piccolo': '/piccolo',
      'medio': '/medio',
      'steel-vs-wood': '/steel-vs-wood',
      'faq': '/faq',
    };

    const route = routeMap[page] || '/';
    router.push(route);
  };

  return <Home onNavigate={handleNavigate} />;
}
