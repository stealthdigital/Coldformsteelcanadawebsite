'use client';

import { useRouter } from 'next/navigation';
import { Contact } from './Contact';
import { getRoute } from '@/lib/navigation';

export function ContactContent() {
  const router = useRouter();

  const handleNavigate = (page: string, data?: any) => {
    const route = getRoute(page, data);
    router.push(route);
  };

  return <Contact onNavigate={handleNavigate} />;
}
