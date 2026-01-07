'use client';

import { useRouter } from 'next/navigation';
import { CostDriversArticle } from './CostDriversArticle';
import { getRoute } from '@/lib/navigation';

export function CostDriversContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <CostDriversArticle onNavigate={handleNavigate} />;
}
