import type { Metadata } from 'next';
import { LearningCenter } from '@/components/pages/LearningCenter';

export const metadata: Metadata = {
  title: 'Learning Center',
  description: 'Everything you need to know about cold-form steel construction, building process, costs, and permits.',
  openGraph: {
    title: 'Learning Center | Cold Form Steel Canada',
    description: 'Everything you need to know about cold-form steel construction, building process, costs, and permits.',
  },
};

export default function LearningCenterPage() {
  return <LearningCenter />;
}
