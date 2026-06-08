import { Header } from '@/components/layout/Header';
import { ChatPanel } from '@/components/concierge/ChatPanel';
import Link from 'next/link';

export const metadata = {
  title: 'Book a Demo — Houdiny.ai',
  description: 'Chat with Houdiny AI to qualify your needs and book a personalized demo.',
};

export default function BookDemoPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-white pt-16">
        {/* Page header */}
        <div className="border-brand-border shrink-0 border-b bg-white">
          <div className="mx-auto flex max-w-5xl items-start justify-between gap-6 px-4 py-6 sm:px-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  AI Concierge Online
                </span>
              </div>
              <h1 className="text-brand-text text-xl font-bold sm:text-2xl">
                Meet Your AI Sales Concierge
              </h1>
              <p className="text-brand-text-secondary mt-1 max-w-lg text-sm">
                Houdiny AI qualifies your needs, answers product questions, and books your demo
                &mdash; demonstrating the exact product you&apos;re here to learn about.
              </p>
            </div>
            <Link
              href="/leads"
              className="text-brand-text-muted hover:text-brand-text-secondary hidden shrink-0 items-center gap-1.5 text-xs transition-colors sm:flex"
            >
              View captured leads →
            </Link>
          </div>
        </div>

        {/* Chat area */}
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-0 py-0 sm:px-6 sm:py-4">
          <div
            className="border-brand-border flex flex-1 flex-col overflow-hidden bg-white shadow-sm sm:rounded-2xl sm:border"
            style={{ minHeight: 0, height: 'calc(100vh - 200px)' }}
          >
            <ChatPanel />
          </div>
        </div>
      </main>
    </>
  );
}
