import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LeadSummaryCard } from '@/components/concierge/LeadSummaryCard';

describe('LeadSummaryCard', () => {
  it('renders nothing when no data', () => {
    const { container } = render(<LeadSummaryCard />);
    expect(container.firstChild).toBeNull();
  });

  it('renders lead name and email', () => {
    render(
      <LeadSummaryCard
        lead={{ name: 'Alice', email: 'alice@example.com', company: 'Acme', score: 80 }}
      />
    );
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
    expect(screen.getByText('Acme')).toBeInTheDocument();
  });

  it('renders booking info', () => {
    render(
      <LeadSummaryCard
        lead={{ name: 'Alice', email: 'alice@example.com', company: 'Acme', score: 70 }}
        booking={{ bookingId: 'ABC12345', slot: 'Tuesday afternoon', calendarNote: 'Invite sent to alice@example.com' }}
      />
    );
    expect(screen.getByText('ABC12345')).toBeInTheDocument();
    expect(screen.getByText(/Tuesday afternoon/)).toBeInTheDocument();
  });

  it('has data-testid lead-summary-card', () => {
    render(
      <LeadSummaryCard
        lead={{ name: 'Alice', email: 'alice@example.com', company: 'Acme', score: 60 }}
        booking={{ bookingId: 'X' }}
      />
    );
    expect(screen.getByTestId('lead-summary-card')).toBeInTheDocument();
  });
});
