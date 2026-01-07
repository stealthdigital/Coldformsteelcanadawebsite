'use client';

import { useRouter } from 'next/navigation';
import { LearningCenter } from './LearningCenter';
import { getRoute } from '@/lib/navigation';

export function LearningContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <LearningCenter onNavigate={handleNavigate} />;
}
