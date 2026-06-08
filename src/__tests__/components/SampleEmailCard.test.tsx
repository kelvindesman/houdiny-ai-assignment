import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SampleEmailCard } from '@/components/concierge/SampleEmailCard';

describe('SampleEmailCard', () => {
  it('renders skeleton when loading', () => {
    const { container } = render(<SampleEmailCard loading />);
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders nothing when no email and not loading', () => {
    const { container } = render(<SampleEmailCard />);
    expect(container.firstChild).toBeNull();
  });

  it('renders email subject and body when provided', () => {
    render(
      <SampleEmailCard
        email={{
          subject: 'Quick question for CTOs',
          body: 'Hi [First Name],\n\nThis is a test email body.',
          personalizationNotes: ['Role-specific opening'],
        }}
      />
    );
    expect(screen.getByText(/Quick question for CTOs/)).toBeInTheDocument();
    expect(screen.getByText(/test email body/)).toBeInTheDocument();
  });

  it('renders personalization notes', () => {
    render(
      <SampleEmailCard
        email={{
          subject: 'Test',
          body: 'Body',
          personalizationNotes: ['Note one', 'Note two'],
        }}
      />
    );
    expect(screen.getByText('Note one')).toBeInTheDocument();
    expect(screen.getByText('Note two')).toBeInTheDocument();
  });
});
