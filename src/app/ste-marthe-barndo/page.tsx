import { Metadata } from 'next';
import { SteMartheContent } from '@/components/pages/SteMartheContent';

export const metadata: Metadata = {
  title: 'Ste-Marthe Family Barndominium - Success Story',
  description: 'Family barndominium in Ste-Marthe built with cold-form steel. See photos, timeline, and homeowner experience.',
  openGraph: {
    title: 'Ste-Marthe Barndominium - Cold Form Steel Canada',
    description: 'Family barndominium success story. Cold-form steel construction in Quebec.',
  },
};

export default function SteMartheBarndoPage() {
  return <SteMartheContent />;
}
