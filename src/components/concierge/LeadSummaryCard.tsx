interface LeadData {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  score?: number;
}

interface BookingData {
  bookingId?: string;
  slot?: string;
  calendarNote?: string;
}

interface Props {
  lead?: LeadData;
  booking?: BookingData;
}

export function LeadSummaryCard({ lead, booking }: Props) {
  if (!lead?.name && !booking?.bookingId) return null;

  return (
    <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5 my-2 space-y-4" data-testid="lead-summary-card">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-400" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-text">Demo Booked!</p>
          <p className="text-xs text-brand-text-muted">You&apos;re all set &mdash; here&apos;s a summary</p>
        </div>
      </div>

      {lead?.name && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-brand-text-muted mb-0.5">Name</p>
            <p className="text-sm text-brand-text font-medium">{lead.name}</p>
          </div>
          {lead.email && (
            <div>
              <p className="text-xs text-brand-text-muted mb-0.5">Email</p>
              <p className="text-sm text-brand-text font-medium">{lead.email}</p>
            </div>
          )}
          {lead.company && (
            <div>
              <p className="text-xs text-brand-text-muted mb-0.5">Company</p>
              <p className="text-sm text-brand-text font-medium">{lead.company}</p>
            </div>
          )}
          {lead.role && (
            <div>
              <p className="text-xs text-brand-text-muted mb-0.5">Role</p>
              <p className="text-sm text-brand-text font-medium">{lead.role}</p>
            </div>
          )}
        </div>
      )}

      {lead?.score !== undefined && (
        <div className="flex items-center gap-2">
          <p className="text-xs text-brand-text-muted">Lead Score:</p>
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
            lead.score >= 70 ? 'bg-green-400/20 text-green-400' :
            lead.score >= 50 ? 'bg-yellow-400/20 text-yellow-400' :
            'bg-red-400/20 text-red-400'
          }`}>
            {lead.score}/100
          </span>
        </div>
      )}

      {booking?.bookingId && (
        <div className="border-t border-green-500/20 pt-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-brand-text-muted">Booking ID</p>
            <p className="text-xs font-mono text-green-400">{booking.bookingId}</p>
          </div>
          {booking.slot && (
            <div className="flex items-center justify-between">
              <p className="text-xs text-brand-text-muted">Slot</p>
              <p className="text-xs text-brand-text-secondary">{booking.slot}</p>
            </div>
          )}
          {booking.calendarNote && (
            <p className="text-xs text-brand-text-muted italic mt-2">{booking.calendarNote}</p>
          )}
        </div>
      )}
    </div>
  );
}
