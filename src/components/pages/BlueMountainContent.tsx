'use client';

import { useRouter } from 'next/navigation';
import { BlueMountainDetail } from './BlueMountainDetail';
import { getRoute } from '@/lib/navigation';

export function BlueMountainContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <BlueMountainDetail onNavigate={handleNavigate} />;
}
