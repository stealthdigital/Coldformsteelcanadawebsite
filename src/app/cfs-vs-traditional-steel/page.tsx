import { Metadata } from 'next';
import { CFSvsTraditionalContent } from '@/components/pages/CFSvsTraditionalContent';

export const metadata: Metadata = {
  title: 'Cold-Form Steel vs Traditional Steel',
  description: 'Compare cold-form steel (CFS) vs traditional hot-rolled steel. Weight, cost, precision, and why CFS is better for residential construction.',
  openGraph: {
    title: 'CFS vs Traditional Steel - Cold Form Steel Canada',
    description: 'Why cold-form steel is the superior choice for residential construction.',
  },
};

export default function CFSvsTraditionalPage() {
  return <CFSvsTraditionalContent />;
}
