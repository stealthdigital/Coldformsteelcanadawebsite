'use client';

import { useRouter } from 'next/navigation';
import { ModelsAndPricing } from './ModelsAndPricing';
import { getRoute } from '@/lib/navigation';

export function ModelsContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <ModelsAndPricing onNavigate={handleNavigate} />;
}
