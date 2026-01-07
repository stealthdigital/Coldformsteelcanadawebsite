import { Metadata } from 'next';
import { FiveDayBuildContent } from '@/components/pages/FiveDayBuildContent';

export const metadata: Metadata = {
  title: 'How the 5-Day Build Works - Cold Form Steel',
  description: 'Learn how cold-form steel homes are framed in 4-5 days. Factory-built panels, precision engineering, and rapid on-site assembly explained.',
  openGraph: {
    title: 'How the 5-Day Build Works',
    description: 'Factory precision + field speed = homes framed in days, not months.',
  },
};

export default function FiveDayBuildPage() {
  return <FiveDayBuildContent />;
}
