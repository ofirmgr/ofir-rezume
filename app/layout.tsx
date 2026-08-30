import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = (process.env.SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
const ogImageUrl = `${siteUrl}/og.png`;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: 'Ofir Meguri · Fullstack Quest',
  description:
    'Explore Ofir Meguri’s career, skills, and open-source work as a playable portfolio.',
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: 'OFIR.EXE · Fullstack Quest',
    description: 'A playable portfolio spanning 18+ years of fullstack engineering.',
    images: [{ url: ogImageUrl, width: 1672, height: 941, alt: 'OFIR.EXE Fullstack Quest' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OFIR.EXE · Fullstack Quest',
    description: 'A playable portfolio spanning 18+ years of fullstack engineering.',
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
