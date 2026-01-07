'use client';

import { useRouter } from 'next/navigation';
import { ADUTimelineArticle } from './ADUTimelineArticle';
import { getRoute } from '@/lib/navigation';

export function ADUTimelineContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <ADUTimelineArticle onNavigate={handleNavigate} />;
}
