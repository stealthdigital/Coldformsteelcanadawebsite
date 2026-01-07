'use client';

import { useRouter } from 'next/navigation';
import { BarndominiumProjectFortErie } from './BarndominiumProjectFortErie';
import { getRoute } from '@/lib/navigation';

export function FortErieContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <BarndominiumProjectFortErie onNavigate={handleNavigate} />;
}
