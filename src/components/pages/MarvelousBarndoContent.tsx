'use client';

import { useRouter } from 'next/navigation';
import { MarvelousBarndominium } from './MarvelousBarndominium';
import { getRoute } from '@/lib/navigation';

export function MarvelousBarndoContent() {
  const router = useRouter();
  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };
  return <MarvelousBarndominium onNavigate={handleNavigate} />;
}
