import { Metadata } from 'next';
import { PrivacyContent } from '@/components/pages/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Cold Form Steel Canada',
  description: 'Privacy policy for Cold Form Steel Canada. How we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy - Cold Form Steel Canada',
    description: 'Our commitment to protecting your privacy.',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
