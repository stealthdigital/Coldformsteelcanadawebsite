'use client';

import { useRouter } from 'next/navigation';
import { DualStructurePownal } from './DualStructurePownal';
import { getRoute } from '@/lib/navigation';

export function PownalContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <DualStructurePownal onNavigate={handleNavigate} />;
}
