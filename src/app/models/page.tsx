import { Metadata } from 'next';
import { ModelsContent } from '@/components/pages/ModelsContent';

export const metadata: Metadata = {
  title: 'Explore Models - Piccolo & Medio',
  description: 'Explore our cold-form steel home models. Piccolo: 392 sq ft studio. Medio: 560 sq ft home. Both framed in 4-5 days with transparent pricing.',
  openGraph: {
    title: 'Explore Models - Cold Form Steel Canada',
    description: 'Piccolo & Medio models. Factory-built steel homes framed in 4-5 days.',
  },
};

export default function ModelsPage() {
  return <ModelsContent />;
}
