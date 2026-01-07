'use client';

import { useRouter } from 'next/navigation';
import { Piccolo } from './Piccolo';
import { getRoute } from '@/lib/navigation';

export function PiccoloContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <Piccolo onNavigate={handleNavigate} />;
}
