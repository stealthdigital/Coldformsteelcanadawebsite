import { Metadata } from 'next';
import { ContactContent } from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - Start Your Project',
  description: 'Contact Cold Form Steel Canada to start your project. Get a quote, ask questions, or schedule a consultation for your steel home.',
  openGraph: {
    title: 'Contact Us - Cold Form Steel Canada',
    description: 'Start your cold-form steel home project today. Call 905-642-1012 or email us.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
