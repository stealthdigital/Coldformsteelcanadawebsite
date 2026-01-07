import { Metadata } from 'next';
import { BlueMountainContent } from '@/components/pages/BlueMountainContent';

export const metadata: Metadata = {
  title: 'Blue Mountain Shop - Success Story',
  description: 'Commercial shop building in Blue Mountain area built with cold-form steel. Fast construction, durable results.',
  openGraph: {
    title: 'Blue Mountain Shop - Cold Form Steel Canada',
    description: 'Cold-form steel shop building success story.',
  },
};

export default function BlueMountainShopPage() {
  return <BlueMountainContent />;
}
