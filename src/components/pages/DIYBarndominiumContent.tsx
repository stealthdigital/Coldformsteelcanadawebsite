'use client';

import { useRouter } from 'next/navigation';
import { DIYBarndominiumStrathroy } from './DIYBarndominiumStrathroy';
import { getRoute } from '@/lib/navigation';

export function DIYBarndominiumContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <DIYBarndominiumStrathroy onNavigate={handleNavigate} />;
}
