import { Metadata } from 'next';
import { RedditMythsContent } from '@/components/pages/RedditMythsContent';

export const metadata: Metadata = {
  title: 'Debunking Steel Home Myths from Reddit',
  description: 'Addressing common misconceptions about cold-form steel homes from Reddit and online forums. Facts vs myths explained.',
  openGraph: {
    title: 'Steel Home Myths Debunked - Cold Form Steel Canada',
    description: 'Separating fact from fiction about steel construction.',
  },
};

export default function RedditMythsPage() {
  return <RedditMythsContent />;
}
