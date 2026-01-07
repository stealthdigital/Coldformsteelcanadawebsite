import { Metadata } from 'next';
import { AboutContent } from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About Us - Cold Form Steel Canada',
  description: 'Learn about Cold Form Steel Canada, our mission, team, and partnership with FrameCAD. Building durable, sustainable steel homes across Canada.',
  openGraph: {
    title: 'About Us - Cold Form Steel Canada',
    description: 'Canadian leaders in cold-form steel construction. FrameCAD Technology Partner.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
