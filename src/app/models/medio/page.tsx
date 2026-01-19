import type { Metadata } from 'next';
import { Medio } from '@/components/pages/Medio';

export const metadata: Metadata = {
  title: 'The Medio - 560 sq ft Steel Frame ADU',
  description: 'The Medio model: 560 sq ft one-bedroom ADU framed in 4-5 days. Ideal for larger living spaces with bedroom and full amenities.',
  openGraph: {
    title: 'The Medio - 560 sq ft Steel Frame ADU | Cold Form Steel Canada',
    description: 'The Medio model: 560 sq ft one-bedroom ADU framed in 4-5 days. Ideal for larger living spaces with bedroom and full amenities.',
  },
};

export default function MedioPage() {
  return <Medio />;
}
