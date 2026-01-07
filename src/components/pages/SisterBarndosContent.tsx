'use client';

import { useRouter } from 'next/navigation';
import { SisterBarndominiums } from './SisterBarndominiums';
import { getRoute } from '@/lib/navigation';

export function SisterBarndosContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <SisterBarndominiums onNavigate={handleNavigate} />;
}
