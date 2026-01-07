import { Metadata } from 'next';
import { SisterBarndosContent } from '@/components/pages/SisterBarndosContent';

export const metadata: Metadata = {
  title: 'Sister Barndominiums - Success Story',
  description: 'Two matching barndominiums built side-by-side with cold-form steel. Double the success, double the quality.',
  openGraph: {
    title: 'Sister Barndominiums - Cold Form Steel Canada',
    description: 'Two matching steel barndominiums built simultaneously.',
  },
};

export default function SisterBarndominiumsPage() {
  return <SisterBarndosContent />;
}
