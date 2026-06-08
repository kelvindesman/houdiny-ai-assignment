'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from '@/components/common/ToastProvider';
import { capture } from '@/lib/analytics';

const CHECK_ITEMS = ['7-Days Free Trial', '100 free Leads', 'No credit card required'] as const;

function CheckIcon() {
  return (
    <svg
      className="shrink-0"
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

export function HoudinyHero() {
  const { showComingSoon } = useToast();

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="w-full pt-[72px]">
      {/* Text + CTA block */}
      <div className="mx-auto max-w-[1200px] px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Headline */}
          <h1
            className="leading-tight font-bold tracking-tight"
            style={{
              color: '#1b1f3c',
              fontSize: 'clamp(2.5rem, 4.5vw, 4.375rem)',
              lineHeight: 1.1,
            }}
          >
            The easiest way to run{' '}
            <Image
              alt="sparkles"
              decoding="async"
              height={53}
              loading="lazy"
              src="https://houdiny.ai/_next/static/media/sparkles.373c0347.svg"
              width={53}
              className="inline-block align-middle"
              unoptimized
            />{' '}
            AI-powered
            <br />
            <Image
              alt="sendIcon"
              decoding="async"
              height={55}
              loading="lazy"
              src="https://houdiny.ai/_next/static/media/sendIcon.3f1cfcea.svg"
              width={57}
              className="mr-2 inline-block align-middle"
              unoptimized
            />{' '}
            B2B sales campaigns
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed" style={{ color: '#6f6c90' }}>
            Find leads, hyper personalized AI outreach, warm up inboxes, and track results in one
            platform.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Start For Free — blue pill */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                capture({ event: 'cta_clicked', properties: { cta: 'start_for_free' } });
                showComingSoon();
              }}
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              style={{ backgroundColor: '#237ff3', minWidth: 160 }}
              data-testid="hero-cta-free"
            >
              Start For Free
            </a>

            {/* Schedule Demo — white pill with border */}
            <Link
              href="/book-demo"
              onClick={() =>
                capture({ event: 'cta_clicked', properties: { cta: 'schedule_demo' } })
              }
              className="inline-flex items-center justify-center rounded-full border px-8 py-3.5 text-base font-semibold transition-all hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#d1d5db',
                color: '#1b1f3c',
                minWidth: 160,
              }}
              data-testid="hero-cta-demo"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Checkmarks */}
          <ul
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            role="list"
            aria-label="Free trial highlights"
          >
            {CHECK_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: '#6f6c90' }}
              >
                <span style={{ color: '#237ff3' }}>
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dashboard image */}
      <div className="w-full overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-4 pb-0 sm:px-6 lg:px-8">
          <div className="mx-auto" style={{ maxWidth: 1100 }}>
            <Image
              alt="Houdiny Platform Dashboard"
              decoding="async"
              height={800}
              loading="lazy"
              src="https://houdiny.ai/_next/static/media/heroSectionBanner-with-old-logo.e7a607c7.svg"
              width={1566}
              className="h-auto w-full"
              style={{ opacity: 1, transition: 'opacity 0.5s ease-in-out' }}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
