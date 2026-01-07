'use client';

import { useRouter } from 'next/navigation';
import { PermitArticle } from './PermitArticle';
import { getRoute } from '@/lib/navigation';

export function PermitGuideContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <PermitArticle onNavigate={handleNavigate} />;
}
