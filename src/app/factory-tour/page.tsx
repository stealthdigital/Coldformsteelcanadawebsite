import { Metadata } from 'next';
import { FactoryTourContent } from '@/components/pages/FactoryTourContent';

export const metadata: Metadata = {
  title: 'Virtual Factory Tour - See How Steel Homes Are Made',
  description: 'Take a virtual tour of our FrameCAD manufacturing facility. See how cold-form steel panels are precision-engineered and built.',
  openGraph: {
    title: 'Factory Tour - Cold Form Steel Canada',
    description: 'See how precision steel panels are manufactured for Canadian homes.',
  },
};

export default function FactoryTourPage() {
  return <FactoryTourContent />;
}
