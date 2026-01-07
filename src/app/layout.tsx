import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Cold Form Steel Canada - Factory-Built Homes & Barndominiums',
    template: '%s | Cold Form Steel Canada',
  },
  description: 'Build your dream home faster with factory-built cold-form steel construction. Structures framed in 4-5 days. Durable, fire-resistant, and eco-friendly.',
  keywords: ['cold form steel', 'barndominium', 'steel homes', 'Canada', 'FrameCAD', 'ADU', 'modular homes'],
  authors: [{ name: 'Cold Form Steel Canada' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Cold Form Steel Canada',
    title: 'Cold Form Steel Canada - Factory-Built Homes & Barndominiums',
    description: 'Build your dream home faster with factory-built cold-form steel construction. Structures framed in 4-5 days.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cold Form Steel Canada',
    description: 'Build your dream home faster with factory-built cold-form steel construction.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
