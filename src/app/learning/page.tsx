import { Metadata } from 'next';
import { LearningContent } from '@/components/pages/LearningContent';

export const metadata: Metadata = {
  title: 'Learning Centre - Cold Form Steel Education',
  description: 'Learn everything about cold-form steel construction. Articles on cost, durability, permits, financing, and the 5-day build process.',
  openGraph: {
    title: 'Learning Centre - Cold Form Steel Canada',
    description: 'Expert articles on steel construction, costs, permits, and more.',
  },
};

export default function LearningPage() {
  return <LearningContent />;
}
