import { Metadata } from 'next';
import { FrameCADContent } from '@/components/pages/FrameCADContent';

export const metadata: Metadata = {
  title: 'FrameCAD Technology - Our Official Partner',
  description: 'Learn about FrameCAD technology, the world-leading cold-form steel manufacturing system. Precision engineering for Canadian homes.',
  openGraph: {
    title: 'FrameCAD Technology - Cold Form Steel Canada',
    description: 'World-leading cold-form steel technology. Precision manufacturing for Canadian homes.',
  },
};

export default function FrameCADPage() {
  return <FrameCADContent />;
}
