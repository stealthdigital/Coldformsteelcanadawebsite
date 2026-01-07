import { Metadata } from 'next';
import { MarvelousBarndoContent } from '@/components/pages/MarvelousBarndoContent';

export const metadata: Metadata = {
  title: 'Marvelous Barndominium - Success Story',
  description: 'Stunning barndominium built with cold-form steel. Modern design, fast construction, incredible results.',
  openGraph: {
    title: 'Marvelous Barndominium - Cold Form Steel Canada',
    description: 'A stunning steel barndominium that exceeded expectations.',
  },
};

export default function MarvelousBarndominiumPage() {
  return <MarvelousBarndoContent />;
}
