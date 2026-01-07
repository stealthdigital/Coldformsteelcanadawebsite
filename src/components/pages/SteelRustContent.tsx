'use client';

import { useRouter } from 'next/navigation';
import { SteelRustArticle } from './SteelRustArticle';
import { getRoute } from '@/lib/navigation';

export function SteelRustContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <SteelRustArticle onNavigate={handleNavigate} />;
}
