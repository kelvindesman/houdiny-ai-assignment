import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/hero/Hero';

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/easiest way to run/i)).toBeInTheDocument();
  });

  it('renders Schedule Demo CTA linking to /book-demo', () => {
    render(<Hero />);
    const demoLink = screen.getByTestId('hero-cta-demo');
    expect(demoLink).toHaveAttribute('href', '/book-demo');
    expect(demoLink).toHaveTextContent(/schedule demo/i);
  });

  it('renders Start For Free CTA', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-cta-free')).toBeInTheDocument();
  });

  it('renders the checklist items', () => {
    render(<Hero />);
    expect(screen.getByText(/7-Days Free Trial/i)).toBeInTheDocument();
    expect(screen.getByText(/100 free Leads/i)).toBeInTheDocument();
    expect(screen.getByText(/No credit card required/i)).toBeInTheDocument();
  });

  it('checklist is an accessible list', () => {
    render(<Hero />);
    const list = screen.getByRole('list', { name: /free trial highlights/i });
    expect(list).toBeInTheDocument();
  });
});
