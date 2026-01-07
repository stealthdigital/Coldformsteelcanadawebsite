'use client';

import { useRouter } from 'next/navigation';
import { RedditMythsArticle } from './RedditMythsArticle';
import { getRoute } from '@/lib/navigation';

export function RedditMythsContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <RedditMythsArticle onNavigate={handleNavigate} />;
}
