/**
 * Analytics — thin PostHog wrapper.
 * All events are no-ops when NEXT_PUBLIC_POSTHOG_KEY is unset (dev/test).
 *
 * TODO (production):
 *   - Set NEXT_PUBLIC_POSTHOG_KEY + NEXT_PUBLIC_POSTHOG_HOST in Vercel env
 *   - Add consent gate before init if targeting EU users (GDPR)
 *   - Wire server-side events via posthog-node for lead capture / booking
 */

import posthog from 'posthog-js';

export type CaptureEvent =
  | {
      event: 'cta_clicked';
      properties: { cta: 'schedule_demo' | 'start_for_free' | 'book_demo_nav' };
    }
  | { event: 'coming_soon_triggered'; properties: { item: string } }
  | { event: 'chat_message_sent'; properties: { message_length: number } }
  | { event: 'ai_response_received'; properties: { word_count: number } }
  | { event: 'sample_email_generated'; properties: { tone: string; prospect_role: string } }
  | {
      event: 'lead_captured';
      properties: { score: number; has_pain_point: boolean; team_size?: string };
    }
  | { event: 'demo_booked'; properties: { booking_id: string } }
  | { event: 'coming_soon_toast_shown'; properties: { item: string } };

export function capture({ event, properties }: CaptureEvent): void {
  if (typeof window === 'undefined') return;
  if (!process.env['NEXT_PUBLIC_POSTHOG_KEY']) return;
  posthog.capture(event, properties);
}
