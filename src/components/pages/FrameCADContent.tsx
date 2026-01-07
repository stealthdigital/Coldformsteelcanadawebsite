'use client';

import { useRouter } from 'next/navigation';
import { FrameCADArticle } from './FrameCADArticle';
import { getRoute } from '@/lib/navigation';

export function FrameCADContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <FrameCADArticle onNavigate={handleNavigate} />;
}
