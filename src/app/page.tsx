import { Metadata } from 'next';
import { HomeContent } from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Cold Form Steel Canada - Factory-Built Homes & Barndominiums',
  description: 'Build your dream home faster with factory-built cold-form steel construction. The Piccolo model: 392 sq ft studio framed in 4-5 days. Durable, fire-resistant, and eco-friendly.',
  openGraph: {
    title: 'Cold Form Steel Canada - Factory-Built Homes & Barndominiums',
    description: 'Build your dream home faster with factory-built cold-form steel construction. Structures framed in 4-5 days.',
    images: [{
      url: 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png',
      width: 1200,
      height: 630,
      alt: 'Cold Form Steel Canada Homes',
    }],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
