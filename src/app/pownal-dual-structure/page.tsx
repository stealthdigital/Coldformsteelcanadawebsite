import { Metadata } from 'next';
import { PownalContent } from '@/components/pages/PownalContent';

export const metadata: Metadata = {
  title: 'Pownal Dual Structure - Success Story',
  description: 'Dual structure project in Pownal built with cold-form steel. Two buildings, one amazing project.',
  openGraph: {
    title: 'Pownal Dual Structure - Cold Form Steel Canada',
    description: 'Two steel structures, one impressive project in Pownal.',
  },
};

export default function PownalDualStructurePage() {
  return <PownalContent />;
}
