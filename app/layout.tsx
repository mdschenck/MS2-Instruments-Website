import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'MS2 Instruments',
    template: '%s | MS2 Instruments',
  },
  description: 'Instruments for the future, inspired by the past. Browser-based synthesizers, drum machines, and sonic tools.',
  metadataBase: new URL('https://ms2instruments.vercel.app'),
  openGraph: {
    title: 'MS2 Instruments',
    description: 'Instruments for the future, inspired by the past.',
    url: 'https://ms2instruments.vercel.app',
    siteName: 'MS2 Instruments',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
