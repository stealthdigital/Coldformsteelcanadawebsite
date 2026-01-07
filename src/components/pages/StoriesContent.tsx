'use client';

import { useRouter } from 'next/navigation';
import { SuccessStories } from './SuccessStories';
import { getRoute } from '@/lib/navigation';

export function StoriesContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <SuccessStories onNavigate={handleNavigate} />;
}
