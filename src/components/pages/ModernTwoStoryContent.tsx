'use client';

import { useRouter } from 'next/navigation';
import { ModernTwoStoryBarndominium } from './ModernTwoStoryBarndominium';
import { getRoute } from '@/lib/navigation';

export function ModernTwoStoryContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <ModernTwoStoryBarndominium onNavigate={handleNavigate} />;
}
