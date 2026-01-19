import type { Metadata } from 'next';
import { SuccessStories } from '@/components/pages/SuccessStories';

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Real cold-form steel construction projects across Canada. See how homeowners built their dream barndominiums and ADUs.',
  openGraph: {
    title: 'Success Stories | Cold Form Steel Canada',
    description: 'Real cold-form steel construction projects across Canada. See how homeowners built their dream barndominiums and ADUs.',
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStories />;
}
