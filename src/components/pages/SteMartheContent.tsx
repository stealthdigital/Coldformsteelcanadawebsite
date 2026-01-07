'use client';

import { useRouter } from 'next/navigation';
import { FamilyBarndominium } from './FamilyBarndominium';
import { getRoute } from '@/lib/navigation';

export function SteMartheContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <FamilyBarndominium onNavigate={handleNavigate} />;
}
