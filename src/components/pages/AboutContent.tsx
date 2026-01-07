'use client';

import { useRouter } from 'next/navigation';
import { About } from './About';
import { getRoute } from '@/lib/navigation';

export function AboutContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <About onNavigate={handleNavigate} />;
}
