import { Metadata } from 'next';
import { DIYBarndominiumContent } from '@/components/pages/DIYBarndominiumContent';

export const metadata: Metadata = {
  title: 'DIY Barndominium Strathroy - Success Story',
  description: 'Owner-built barndominium in Strathroy with cold-form steel framing. DIY finish work, professional framing.',
  openGraph: {
    title: 'DIY Barndominium - Cold Form Steel Canada',
    description: 'Owner-built barndominium success story from Strathroy.',
  },
};

export default function DIYBarndominiumPage() {
  return <DIYBarndominiumContent />;
}
