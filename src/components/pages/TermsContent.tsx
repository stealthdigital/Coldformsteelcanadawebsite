'use client';

import { useRouter } from 'next/navigation';
import { TermsOfService } from './TermsOfService';
import { getRoute } from '@/lib/navigation';

export function TermsContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <TermsOfService onNavigate={handleNavigate} />;
}
