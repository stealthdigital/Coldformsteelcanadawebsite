'use client';

import { useRouter } from 'next/navigation';
import { FinancingArticle } from './FinancingArticle';
import { getRoute } from '@/lib/navigation';

export function FinancingGuideContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <FinancingArticle onNavigate={handleNavigate} />;
}
