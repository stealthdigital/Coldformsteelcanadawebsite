import { Metadata } from 'next';
import { FortErieContent } from '@/components/pages/FortErieContent';

export const metadata: Metadata = {
  title: 'Fort Erie Barndominium - Success Story',
  description: 'Barndominium project in Fort Erie built with cold-form steel. Quality construction, happy homeowners.',
  openGraph: {
    title: 'Fort Erie Barndominium - Cold Form Steel Canada',
    description: 'Fort Erie steel barndominium success story.',
  },
};

export default function FortErieBarndoPage() {
  return <FortErieContent />;
}
