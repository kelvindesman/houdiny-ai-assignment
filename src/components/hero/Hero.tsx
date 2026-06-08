'use client';
import Link from 'next/link';
import { useToast } from '@/components/common/ToastProvider';
import { capture } from '@/lib/analytics';

export function Hero() {
  const { showComingSoon } = useToast();
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
      {/* Soft background gradient blobs — matches houdiny.ai */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[500px] rounded-full bg-orange-200/20 blur-[100px]" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[400px] rounded-full bg-purple-100/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide">
          <span className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
          AI-POWERED B2B OUTREACH
        </div>

        {/* H1 */}
        <h1 className="text-brand-text mb-6 text-[2.5rem] leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[65px]">
          The easiest way to run <span className="text-brand-primary">AI-powered</span>{' '}
          <br className="hidden sm:block" />
          B2B sales campaigns
        </h1>

        {/* Description */}
        <p className="text-brand-text-secondary mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl">
          Find leads, hyper personalized AI outreach, warm up inboxes, and track results in one
          platform.
        </p>

        {/* CTAs */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/book-demo"
            onClick={() => capture({ event: 'cta_clicked', properties: { cta: 'schedule_demo' } })}
            className="bg-brand-primary shadow-brand-primary/20 hover:bg-brand-accent inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all sm:w-auto"
            data-testid="hero-cta-demo"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22l-4-9-9-4 19-7z" />
            </svg>
            Schedule Demo
          </Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              capture({ event: 'cta_clicked', properties: { cta: 'start_for_free' } });
              showComingSoon();
            }}
            className="border-brand-primary/15 text-brand-text hover:border-brand-primary/30 inline-flex w-full items-center justify-center gap-2 rounded-full border bg-white px-8 py-3.5 text-base font-semibold shadow-sm transition-all hover:shadow-md sm:w-auto"
            data-testid="hero-cta-free"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
            </svg>
            Start For Free
          </a>
        </div>

        {/* Checklist */}
        <ul
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
          role="list"
          aria-label="Free trial highlights"
        >
          {['7-Days Free Trial', '100 free Leads', 'No credit card required'].map((item) => (
            <li key={item} className="text-brand-text-secondary flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="#237ff3" strokeWidth="1.5" />
                <path
                  d="M5 8l2 2 4-4"
                  stroke="#237ff3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Dashboard mockup */}
        <div
          className="border-brand-border mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border bg-white shadow-2xl shadow-slate-200/80"
          aria-label="Houdiny dashboard preview"
          role="img"
        >
          {/* Window chrome */}
          <div className="border-brand-border bg-brand-surface flex h-9 items-center gap-2 border-b px-4">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />
            <div className="ml-4 flex gap-4 text-xs">
              <span className="text-brand-text-muted">Get Started</span>
              <span className="text-brand-text-muted">Quick Actions</span>
              <span className="border-brand-primary text-brand-primary border-b-2 pb-px font-semibold">
                Dashboard
              </span>
            </div>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3 p-5">
            {[
              {
                label: 'Email Sent',
                value: '12,350',
                trend: '+5,000 than last month',
                color: 'text-green-500',
              },
              {
                label: 'Email Opened',
                value: '5,412',
                trend: '+21% than last month',
                color: 'text-green-500',
              },
              {
                label: 'Email Replies',
                value: '1,853',
                trend: '+6.2% than last month',
                color: 'text-green-500',
              },
              {
                label: 'Click Through Rate',
                value: '1,131',
                trend: '+5.2% than last month',
                color: 'text-red-400',
              },
            ].map((stat) => (
              <div key={stat.label} className="border-brand-border rounded-xl border bg-white p-4">
                <p className="text-brand-text-muted mb-1 text-xs">{stat.label}</p>
                <p className="text-brand-text text-xl font-bold">{stat.value}</p>
                <p className={`mt-1 text-[10px] ${stat.color}`}>{stat.trend}</p>
              </div>
            ))}
          </div>
          {/* Secondary row */}
          <div className="grid grid-cols-2 gap-3 px-5 pb-5">
            <div className="border-brand-border rounded-xl border bg-white p-4">
              <p className="text-brand-text-muted mb-3 text-xs">Positive Response</p>
              <p className="text-brand-text text-2xl font-bold">613</p>
              <div className="mt-3 flex flex-1 items-end gap-0.5" style={{ height: 40 }}>
                {[40, 55, 45, 70, 60, 85, 70, 90, 75, 95, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="bg-brand-primary/20 hover:bg-brand-primary/40 flex-1 rounded-sm transition-colors"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="border-brand-border rounded-xl border bg-white p-4">
              <p className="text-brand-text-muted mb-3 text-xs">Recent Campaigns</p>
              <div className="space-y-2.5">
                {[
                  { name: 'SaaS Founders', status: 'Active', color: 'text-green-500 bg-green-50' },
                  { name: 'Marketing VPs', status: 'Active', color: 'text-green-500 bg-green-50' },
                  { name: 'RevOps Leads', status: 'Active', color: 'text-green-500 bg-green-50' },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between">
                    <span className="text-brand-text-secondary text-xs">{c.name}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.color}`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
