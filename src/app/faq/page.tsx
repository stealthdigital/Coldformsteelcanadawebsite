import { Metadata } from 'next';
import { FAQContent } from '@/components/pages/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Common questions about cold-form steel construction, costs, timelines, permits, and more. Get answers to your steel home questions.',
  openGraph: {
    title: 'FAQ - Cold Form Steel Canada',
    description: 'Answers to common questions about steel home construction.',
  },
};

export default function FAQPage() {
  return <FAQContent />;
}
