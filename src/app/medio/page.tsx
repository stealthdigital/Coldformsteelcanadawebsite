import { Metadata } from 'next';
import { MedioContent } from '@/components/pages/MedioContent';

export const metadata: Metadata = {
  title: 'Medio Model - 560 sq ft Steel Home',
  description: '560 sq ft modern steel home. 1 bed, 1 bath. Framed in 4-5 days. Spacious layout with premium fixtures and large windows.',
  openGraph: {
    title: 'Medio Model - 560 sq ft Steel Home',
    description: '1 bed, 1 bath steel home. Spacious, modern, built to last 100+ years.',
    images: [{
      url: 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png',
    }],
  },
};

export default function MedioPage() {
  return <MedioContent />;
}
