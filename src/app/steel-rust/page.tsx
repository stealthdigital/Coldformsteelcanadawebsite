import { Metadata } from 'next';
import { SteelRustContent } from '@/components/pages/SteelRustContent';

export const metadata: Metadata = {
  title: 'Does Cold-Form Steel Rust?',
  description: 'The truth about steel rust. Galvanized coating, corrosion protection, and why modern steel homes don\'t rust.',
  openGraph: {
    title: 'Does Steel Rust? - Cold Form Steel Canada',
    description: 'The science behind galvanized steel and corrosion protection.',
  },
};

export default function SteelRustPage() {
  return <SteelRustContent />;
}
