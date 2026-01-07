import { Metadata } from 'next';
import { PermitGuideContent } from '@/components/pages/PermitGuideContent';

export const metadata: Metadata = {
  title: 'Permits & Zoning Guide for Steel Homes',
  description: 'Navigate permits and zoning for cold-form steel homes. Building codes, approvals, and requirements for Canadian steel construction.',
  openGraph: {
    title: 'Permits & Zoning Guide - Cold Form Steel Canada',
    description: 'Everything you need to know about permits for steel homes in Canada.',
  },
};

export default function PermitGuidePage() {
  return <PermitGuideContent />;
}
