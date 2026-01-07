'use client';

import { useRouter } from 'next/navigation';
import { PrivacyPolicy } from './PrivacyPolicy';
import { getRoute } from '@/lib/navigation';

export function PrivacyContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <PrivacyPolicy onNavigate={handleNavigate} />;
}
