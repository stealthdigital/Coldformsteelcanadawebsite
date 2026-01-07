import { Metadata } from 'next';
import { ModernTwoStoryContent } from '@/components/pages/ModernTwoStoryContent';

export const metadata: Metadata = {
  title: 'Modern Two-Story Barndominium - Success Story',
  description: 'Contemporary two-story barndominium with cold-form steel framing. Modern design meets superior construction.',
  openGraph: {
    title: 'Modern Two-Story Barndominium - Cold Form Steel Canada',
    description: 'A modern two-story steel barndominium with stunning architecture.',
  },
};

export default function ModernTwoStoryPage() {
  return <ModernTwoStoryContent />;
}
