import { Metadata } from 'next';
import { SteelDownsidesContent } from '@/components/pages/SteelDownsidesContent';

export const metadata: Metadata = {
  title: 'The Honest Truth About Steel Downsides',
  description: 'Honest discussion of cold-form steel challenges: thermal bridging, skilled trades, and cost. Plus practical solutions for each.',
  openGraph: {
    title: 'Steel Downsides - Cold Form Steel Canada',
    description: 'The honest truth about steel construction challenges and solutions.',
  },
};

export default function SteelDownsidesPage() {
  return <SteelDownsidesContent />;
}
