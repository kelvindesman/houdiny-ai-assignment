'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

/**
 * Initialises PostHog analytics.
 * No-op when NEXT_PUBLIC_POSTHOG_KEY is absent (local dev / CI / mock mode).
 *
 * TODO: add cookie-consent gate here before posthog.init() if shipping to EU.
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = process.env['NEXT_PUBLIC_POSTHOG_KEY'];
    const host = process.env['NEXT_PUBLIC_POSTHOG_HOST'] ?? 'https://us.i.posthog.com';
    if (!key) return; // analytics disabled — no key

    posthog.init(key, {
      api_host: host,
      capture_pageview: false, // manual below so we get SPA navigation
      capture_pageleave: true,
      persistence: 'localStorage',
      autocapture: false, // explicit events only — avoids PII leakage
    });
  }, []);

  useEffect(() => {
    if (!process.env['NEXT_PUBLIC_POSTHOG_KEY']) return;
    posthog.capture('$pageview', { $current_url: window.location.href });
  }, [pathname, searchParams]);

  const key = process.env['NEXT_PUBLIC_POSTHOG_KEY'];
  if (!key) return <>{children}</>;

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
