'use client';

import { useRouter } from 'next/navigation';
import { FactoryTourArticle } from './FactoryTourArticle';
import { getRoute } from '@/lib/navigation';

export function FactoryTourContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <FactoryTourArticle onNavigate={handleNavigate} />;
}
