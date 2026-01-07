'use client';

import { useRouter } from 'next/navigation';
import { SteelDownsidesArticle } from './SteelDownsidesArticle';
import { getRoute } from '@/lib/navigation';

export function SteelDownsidesContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <SteelDownsidesArticle onNavigate={handleNavigate} />;
}
