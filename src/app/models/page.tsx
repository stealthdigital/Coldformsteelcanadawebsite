import type { Metadata } from 'next';
import { ModelsAndPricing } from '@/components/pages/ModelsAndPricing';

export const metadata: Metadata = {
  title: 'Models & Pricing',
  description: 'Explore our cold-form steel building models. Piccolo (420 sq ft) and Medio (560 sq ft). Framed in 4-5 days.',
  openGraph: {
    title: 'Models & Pricing | Cold Form Steel Canada',
    description: 'Explore our cold-form steel building models. Piccolo (420 sq ft) and Medio (560 sq ft). Framed in 4-5 days.',
  },
};

export default function ModelsPage() {
  return <ModelsAndPricing />;
}
