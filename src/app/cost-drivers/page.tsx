import { Metadata } from 'next';
import { CostDriversContent } from '@/components/pages/CostDriversContent';

export const metadata: Metadata = {
  title: 'What Drives the Cost of Steel Homes',
  description: 'Understand what affects cold-form steel home costs. Materials, engineering, customization, and site preparation explained.',
  openGraph: {
    title: 'Cost Drivers - Cold Form Steel Canada',
    description: 'What really affects the cost of a steel home? Materials, engineering, and customization explained.',
  },
};

export default function CostDriversPage() {
  return <CostDriversContent />;
}
