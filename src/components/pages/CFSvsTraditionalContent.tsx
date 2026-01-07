'use client';

import { useRouter } from 'next/navigation';
import { CFSvsTraditionalSteelArticle } from './CFSvsTraditionalSteelArticle';
import { getRoute } from '@/lib/navigation';

export function CFSvsTraditionalContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <CFSvsTraditionalSteelArticle onNavigate={handleNavigate} />;
}
