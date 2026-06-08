import Link from 'next/link';

interface StoredLead {
  leadId: string;
  name: string;
  email: string;
  company: string;
  role?: string;
  teamSize?: string;
  painPoint?: string;
  score: number;
  createdAt: string;
}

async function getLeads(): Promise<StoredLead[]> {
  // In production, replace with a real DB query.
  // For the demo, we read from the in-memory store via the API route.
  // Since this is a Server Component co-located with the API, we import directly.
  const { listLeads } = await import('@/lib/lead/store');
  return listLeads();
}

function scoreColor(score: number): string {
  if (score >= 70) return 'text-green-400 bg-green-400/10';
  if (score >= 50) return 'text-yellow-400 bg-yellow-400/10';
  return 'text-red-400 bg-red-400/10';
}

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
  const leads = await getLeads();

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Header */}
      <div className="border-b border-brand-border bg-brand-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-brand-text-secondary hover:text-brand-text transition-colors">
              ← Back
            </Link>
            <span className="text-brand-border">|</span>
            <h1 className="font-semibold text-brand-text">Sales Follow-Up Queue</h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-xs font-medium text-yellow-400">Demo Store — resets on redeploy</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {leads.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-brand-surface-elevated border border-brand-border flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-text-muted" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <p className="text-brand-text-secondary text-sm">No leads captured yet.</p>
            <p className="text-brand-text-muted text-xs mt-1">Book a demo via the AI concierge to see leads here.</p>
            <Link
              href="/book-demo"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-primary-light to-brand-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Try the AI Concierge →
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-brand-text-secondary">
                <span className="font-semibold text-brand-text">{leads.length}</span> lead{leads.length !== 1 ? 's' : ''} captured
              </p>
              <Link
                href="/book-demo"
                className="text-xs text-brand-primary-light hover:underline"
              >
                + Capture another lead →
              </Link>
            </div>

            <div className="space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.leadId}
                  className="rounded-xl border border-brand-border bg-brand-surface p-5 hover:border-brand-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-semibold text-brand-text truncate">{lead.name}</p>
                        {lead.role && (
                          <span className="text-xs text-brand-text-muted bg-brand-surface-elevated px-2 py-0.5 rounded-full shrink-0">
                            {lead.role}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-brand-text-secondary">{lead.email}</p>
                      <p className="text-sm text-brand-text-muted">{lead.company}</p>
                      {lead.painPoint && (
                        <p className="text-xs text-brand-text-muted mt-2 italic">&ldquo;{lead.painPoint}&rdquo;</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${scoreColor(lead.score)}`}>
                        {lead.score}/100
                      </div>
                      <p className="text-xs text-brand-text-muted">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {lead.teamSize && (
                    <div className="mt-3 pt-3 border-t border-brand-border flex gap-4">
                      <span className="text-xs text-brand-text-muted">Team: <span className="text-brand-text-secondary">{lead.teamSize}</span></span>
                      {lead.teamSize && <span className="text-xs text-brand-text-muted">Lead ID: <span className="text-brand-text-secondary font-mono">{lead.leadId.slice(0, 8)}</span></span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
