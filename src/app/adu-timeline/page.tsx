import { Metadata } from 'next';
import { ADUTimelineContent } from '@/components/pages/ADUTimelineContent';

export const metadata: Metadata = {
  title: 'ADU Timeline - How Long to Build a Backyard Home',
  description: 'Complete timeline for building an ADU with cold-form steel. From permits to move-in, see realistic timelines for accessory dwelling units.',
  openGraph: {
    title: 'ADU Timeline - Cold Form Steel Canada',
    description: 'How long does it take to build a steel ADU? Complete timeline from permits to move-in.',
  },
};

export default function ADUTimelinePage() {
  return <ADUTimelineContent />;
}
