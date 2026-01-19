import type { Metadata } from 'next';
import { Piccolo } from '@/components/pages/Piccolo';

export const metadata: Metadata = {
  title: 'The Piccolo - 420 sq ft Steel Frame ADU',
  description: 'The Piccolo model: 420 sq ft studio ADU framed in 4-5 days. Perfect for guest houses, home offices, or rental units.',
  openGraph: {
    title: 'The Piccolo - 420 sq ft Steel Frame ADU | Cold Form Steel Canada',
    description: 'The Piccolo model: 420 sq ft studio ADU framed in 4-5 days. Perfect for guest houses, home offices, or rental units.',
  },
};

export default function PiccoloPage() {
  return <Piccolo />;
}
