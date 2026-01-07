'use client';

import { useRouter } from 'next/navigation';
import { Medio } from './Medio';
import { getRoute } from '@/lib/navigation';

export function MedioContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <Medio onNavigate={handleNavigate} />;
}
