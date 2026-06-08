import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import { ToastProvider } from '@/components/common/ToastProvider';
import { PostHogProvider } from '@/components/common/PostHogProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Houdiny.ai — AI-Powered B2B Sales',
  description:
    'The easiest way to run AI-powered B2B sales campaigns. Automate cold outreach with AI copywriting, LinkedIn scraping, and intelligent email sequences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand-bg text-brand-text antialiased">
        <Suspense>
          <PostHogProvider>
            <ToastProvider>{children}</ToastProvider>
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
