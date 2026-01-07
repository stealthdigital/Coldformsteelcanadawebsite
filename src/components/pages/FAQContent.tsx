'use client';

import { useRouter } from 'next/navigation';
import { FAQ } from './FAQ';
import { getRoute } from '@/lib/navigation';

export function FAQContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <FAQ onNavigate={handleNavigate} />;
}
