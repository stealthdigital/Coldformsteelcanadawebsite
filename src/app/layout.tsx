import type { Metadata, Viewport } from 'next';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://coldformsteelcanada.com'),
  title: {
    default: 'Cold Form Steel Canada | Modern Steel Frame Homes | Framed in 4-5 Days',
    template: '%s | Cold Form Steel Canada',
  },
  description: 'Build your dream home faster with factory-built cold-form steel construction. The Piccolo model: 392 sq ft studio framed in 4-5 days. Durable, fire-resistant, and eco-friendly.',
  keywords: ['cold form steel', 'steel frame homes', 'barndominium', 'prefab homes', 'ADU', 'modular construction', 'Canada'],
  authors: [{ name: 'Cold Form Steel Canada' }],
  creator: 'Cold Form Steel Canada',
  publisher: 'Cold Form Steel Canada',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://coldformsteelcanada.com',
    siteName: 'Cold Form Steel Canada',
    title: 'Cold Form Steel Canada | Modern Steel Frame Homes',
    description: 'Build your dream home faster with factory-built cold-form steel construction. Framed in 4-5 days.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png',
        width: 1200,
        height: 630,
        alt: 'Cold Form Steel Canada - Modern Steel Frame Homes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cold Form Steel Canada | Modern Steel Frame Homes',
    description: 'Build your dream home faster with factory-built cold-form steel construction.',
    images: ['https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#665f55',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KX8MTFSZ');
              });
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KX8MTFSZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
