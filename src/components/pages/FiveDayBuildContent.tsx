'use client';

import { useRouter } from 'next/navigation';
import { FiveDayBuildArticle } from './FiveDayBuildArticle';
import { getRoute } from '@/lib/navigation';

export function FiveDayBuildContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <FiveDayBuildArticle onNavigate={handleNavigate} />;
}
