'use client';
import Link from 'next/link';
import { useState } from 'react';
import { NavMenu } from './NavMenu';
import { MobileNav } from './MobileNav';
import { NAV_AUTH } from '@/lib/nav-data';
import { useToast } from '@/components/common/ToastProvider';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { showComingSoon } = useToast();

  function handleComingSoon(e: React.MouseEvent) {
    e.preventDefault();
    showComingSoon();
  }

  return (
    <header className="border-brand-border fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="focus-visible:ring-brand-primary flex shrink-0 items-center gap-2 rounded-md focus-visible:ring-2"
        >
          <div className="bg-brand-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <span className="text-sm font-black text-white">H</span>
          </div>
          <span className="text-brand-text text-lg font-bold tracking-tight">
            houdiny<span className="text-brand-primary">.ai</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center md:flex">
          <NavMenu />
        </div>

        {/* Desktop auth */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href={NAV_AUTH.login.href}
            onClick={handleComingSoon}
            className="text-brand-text-secondary hover:text-brand-text px-3 py-1.5 text-sm font-medium transition-colors"
            data-testid="nav-login"
          >
            {NAV_AUTH.login.label}
          </a>
          <a
            href={NAV_AUTH.start.href}
            onClick={handleComingSoon}
            className="bg-brand-primary hover:bg-brand-accent rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            data-testid="nav-start"
          >
            {NAV_AUTH.start.label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-brand-text-secondary hover:text-brand-text hover:bg-brand-surface rounded-md p-2 transition-colors md:hidden"
          data-testid="hamburger"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <MobileNav id="mobile-nav" open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
