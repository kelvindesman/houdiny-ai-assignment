import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/layout/Header';

// Provide a minimal ToastProvider so the component tree works
const mockShowComingSoon = vi.fn();
vi.mock('@/components/common/ToastProvider', () => ({
  useToast: () => ({ showComingSoon: mockShowComingSoon }),
  ToastProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('@/components/layout/NavMenu', () => ({
  NavMenu: () => <nav data-testid="nav-menu" />,
}));

vi.mock('@/components/layout/MobileNav', () => ({
  MobileNav: ({ open }: { open: boolean }) => (open ? <div data-testid="mobile-nav" /> : null),
}));

describe('Header', () => {
  it('renders the Houdiny logo', () => {
    render(<Header />);
    expect(screen.getByText(/houdiny/i)).toBeInTheDocument();
  });

  it('renders Login and Start For Free buttons', () => {
    render(<Header />);
    expect(screen.getByTestId('nav-login')).toBeInTheDocument();
    expect(screen.getByTestId('nav-start')).toBeInTheDocument();
  });

  it('Login click fires showComingSoon', () => {
    render(<Header />);
    fireEvent.click(screen.getByTestId('nav-login'));
    expect(mockShowComingSoon).toHaveBeenCalled();
  });

  it('Start For Free click fires showComingSoon', () => {
    render(<Header />);
    fireEvent.click(screen.getByTestId('nav-start'));
    expect(mockShowComingSoon).toHaveBeenCalled();
  });

  it('hamburger button is rendered', () => {
    render(<Header />);
    expect(screen.getByTestId('hamburger')).toBeInTheDocument();
  });

  it('hamburger toggles mobile nav', () => {
    render(<Header />);
    const hamburger = screen.getByTestId('hamburger');
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
    fireEvent.click(hamburger);
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
    fireEvent.click(hamburger);
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
  });
});
