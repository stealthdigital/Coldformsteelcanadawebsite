import { Metadata } from 'next';
import { PiccoloContent } from '@/components/pages/PiccoloContent';

export const metadata: Metadata = {
  title: 'Piccolo Model - 392 sq ft Steel Studio',
  description: '392 sq ft modern studio home with cold-form steel framing. 1 bed, 1 bath. Framed in 4-5 days. Perfect for ADUs, starter homes, or rental properties.',
  openGraph: {
    title: 'Piccolo Model - 392 sq ft Steel Studio',
    description: '1 bed, 1 bath steel home framed in 4-5 days. Modern, durable, fire-resistant.',
    images: [{
      url: 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/be69edff5a1a525e997504d24005a866111a3d19.png',
    }],
  },
};

export default function PiccoloPage() {
  return <PiccoloContent />;
}
