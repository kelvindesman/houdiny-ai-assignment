'use client';
import Image from 'next/image';
import { useToast } from '@/components/common/ToastProvider';
import { capture } from '@/lib/analytics';

const TRIAL_STEPS = [
  {
    icon: 'https://houdiny.ai/_next/static/media/freeTrialIcon1.3354db81.svg',
    iconWidth: 23,
    iconHeight: 26,
    day: 'Today',
    description: 'Launch campaigns, connect inboxes, and build lead lists right away.',
  },
  {
    icon: 'https://houdiny.ai/_next/static/media/freeTrialIcon2.3bdfe40c.svg',
    iconWidth: 29,
    iconHeight: 32,
    day: 'Day 3',
    description:
      'We send you a quick reminder so you know where you stand. You stay fully in control of your trial.',
  },
  {
    icon: 'https://houdiny.ai/_next/static/media/freeTrialIcon3.fe10556b.svg',
    iconWidth: 33,
    iconHeight: 32,
    day: 'Day 7',
    description: 'Keep using Houdiny, upgrade, or cancel. No hidden steps, no surprises.',
  },
] as const;

export function TrialCTA() {
  const { showComingSoon } = useToast();

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2
            className="mb-5 leading-tight font-bold tracking-tight"
            style={{
              color: '#1b1f3c',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              lineHeight: 1.2,
            }}
          >
            Your risk-free, free trial period
          </h2>
          <p
            className="mx-auto text-base leading-relaxed sm:text-lg"
            style={{ color: '#6f6c90', maxWidth: 560 }}
          >
            Try Houdiny for 7 days with full access to every feature.
            <br />
            No pressure, no commitments, cancel anytime.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mb-12" style={{ maxWidth: 680 }}>
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 left-[22px] w-px"
            style={{ backgroundColor: '#e5e7eb' }}
          />

          <div className="flex flex-col gap-8">
            {TRIAL_STEPS.map((step) => (
              <div key={step.day} className="relative flex items-start gap-5">
                {/* Icon circle */}
                <div
                  className="relative z-10 flex shrink-0 items-center justify-center rounded-full"
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: '#f0f6fe',
                    border: '1px solid #dbeafe',
                  }}
                >
                  <Image
                    alt="icon"
                    decoding="async"
                    height={step.iconHeight}
                    loading="lazy"
                    src={step.icon}
                    width={step.iconWidth}
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="mb-1 text-base font-semibold" style={{ color: '#1b1f3c' }}>
                    {step.day}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6f6c90' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center">
          <button
            id="home-btn-13"
            onClick={() => {
              capture({ event: 'cta_clicked', properties: { cta: 'start_for_free' } });
              showComingSoon();
            }}
            className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold text-white transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            style={{ backgroundColor: '#237ff3', minWidth: 180 }}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
