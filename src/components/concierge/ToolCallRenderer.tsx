'use client';
import { SampleEmailCard } from './SampleEmailCard';
import { LeadSummaryCard } from './LeadSummaryCard';

interface ToolPart {
  type: 'tool-invocation';
  toolName: string;
  state: 'partial-call' | 'call' | 'result';
  input?: Record<string, unknown>;
  output?: Record<string, unknown>;
}

interface Props {
  part: ToolPart;
}

export function ToolCallRenderer({ part }: Props) {
  const { toolName, state, output } = part;

  if (toolName === 'generate_sample_email') {
    const isLoading = state !== 'result';
    const emailData = !isLoading && output ? {
      subject: output['subject'] as string | undefined,
      body: output['body'] as string | undefined,
      personalizationNotes: output['personalizationNotes'] as string[] | undefined,
    } : undefined;
    return <SampleEmailCard email={emailData} loading={isLoading} />;
  }

  if (toolName === 'capture_lead') {
    if (state === 'result' && output?.['ok']) {
      return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/20 text-brand-primary-light text-xs font-semibold my-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Lead captured
        </div>
      );
    }
    return null;
  }

  if (toolName === 'book_demo') {
    if (state === 'result' && output?.['ok']) {
      return (
        <LeadSummaryCard
          booking={{
            bookingId: output['bookingId'] as string | undefined,
            slot: output['slot'] as string | undefined,
            calendarNote: output['calendarNote'] as string | undefined,
          }}
        />
      );
    }
    if (state !== 'result') {
      return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface-elevated border border-brand-border text-brand-text-muted text-xs my-1 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-light" />
          Booking demo…
        </div>
      );
    }
    return null;
  }

  return null;
}
