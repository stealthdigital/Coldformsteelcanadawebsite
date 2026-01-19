import type { Metadata } from 'next';
import { Contact } from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Cold Form Steel Canada. Start your project today.',
  openGraph: {
    title: 'Contact Us | Cold Form Steel Canada',
    description: 'Get in touch with Cold Form Steel Canada. Start your project today.',
  },
};

export default function ContactPage() {
  return <Contact />;
}
