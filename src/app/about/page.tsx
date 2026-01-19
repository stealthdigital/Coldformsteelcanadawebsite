import type { Metadata } from 'next';
import { About } from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Cold Form Steel Canada and our mission to revolutionize residential construction.',
  openGraph: {
    title: 'About Us | Cold Form Steel Canada',
    description: 'Learn about Cold Form Steel Canada and our mission to revolutionize residential construction.',
  },
};

export default function AboutPage() {
  return <About />;
}
