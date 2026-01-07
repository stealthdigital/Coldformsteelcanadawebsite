import { Metadata } from 'next';
import { FinancingGuideContent } from '@/components/pages/FinancingGuideContent';

export const metadata: Metadata = {
  title: 'Financing Guide for Steel Homes',
  description: 'Learn about financing options for cold-form steel homes. Mortgages, construction loans, and Canadian lending options explained.',
  openGraph: {
    title: 'Financing Guide - Cold Form Steel Canada',
    description: 'Financing options for Canadian steel homes. Mortgages and construction loans explained.',
  },
};

export default function FinancingGuidePage() {
  return <FinancingGuideContent />;
}
