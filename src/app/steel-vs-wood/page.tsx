import { Metadata } from 'next';
import { SteelVsWoodContent } from '@/components/pages/SteelVsWoodContent';

export const metadata: Metadata = {
  title: 'Steel vs Wood - Complete Comparison',
  description: 'Compare cold-form steel vs wood framing. Costs, lifespan, durability, fire resistance, and maintenance. Steel lasts 100+ years vs wood 40-70 years.',
  openGraph: {
    title: 'Steel vs Wood Construction - Cold Form Steel Canada',
    description: 'Complete comparison: Steel 100+ year lifespan vs Wood 40-70 years. See the real differences.',
  },
};

export default function SteelVsWoodPage() {
  return <SteelVsWoodContent />;
}
