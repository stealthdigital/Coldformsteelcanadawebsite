import { Metadata } from 'next';
import { StoriesContent } from '@/components/pages/StoriesContent';

export const metadata: Metadata = {
  title: 'Success Stories - Real Cold Form Steel Projects',
  description: 'Explore real cold-form steel projects across Canada. Barndominiums, ADUs, shops, and custom homes built with FrameCAD technology.',
  openGraph: {
    title: 'Success Stories - Cold Form Steel Canada',
    description: 'Real Canadian steel construction projects. See what\'s possible with cold-form steel.',
  },
};

export default function StoriesPage() {
  return <StoriesContent />;
}
