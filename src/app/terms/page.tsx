import { Metadata } from 'next';
import { TermsContent } from '@/components/pages/TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service - Cold Form Steel Canada',
  description: 'Terms of service for Cold Form Steel Canada. Website usage terms and conditions.',
  openGraph: {
    title: 'Terms of Service - Cold Form Steel Canada',
    description: 'Terms and conditions for using our website and services.',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
