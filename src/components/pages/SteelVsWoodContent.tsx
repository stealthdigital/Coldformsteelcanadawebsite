'use client';

import { useRouter } from 'next/navigation';
import { SteelVsWoodArticle } from './SteelVsWoodArticle';
import { getRoute } from '@/lib/navigation';

export function SteelVsWoodContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <SteelVsWoodArticle onNavigate={handleNavigate} />;
}
