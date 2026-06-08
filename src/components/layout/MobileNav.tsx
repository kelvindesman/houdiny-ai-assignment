'use client';
import { useState } from 'react';
import Link from 'next/link';
import { NAV_GROUPS, NAV_RIGHT, NAV_AUTH } from '@/lib/nav-data';
import { useToast } from '@/components/common/ToastProvider';

interface Props {
  id: string;
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ id, open, onClose }: Props) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const { showComingSoon } = useToast();

  function handleComingSoon(e: React.MouseEvent) {
    e.preventDefault();
    showComingSoon();
    onClose();
  }

  if (!open) return null;

  return (
    <div
      id={id}
      className="border-brand-border bg-brand-surface border-t pb-4 md:hidden"
      data-testid="mobile-nav"
    >
      <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-4 pt-3">
        {/* Groups */}
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <button
              type="button"
              aria-expanded={expandedGroup === group.label}
              onClick={() => setExpandedGroup((v) => (v === group.label ? null : group.label))}
              className="text-brand-text-secondary hover:text-brand-text flex w-full items-center justify-between py-3 text-sm font-medium transition-colors"
            >
              {group.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                className={`transition-transform duration-200 ${expandedGroup === group.label ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M6 8L1 3h10L6 8z" />
              </svg>
            </button>

            {expandedGroup === group.label && (
              <div className="mb-2 ml-3 space-y-1">
                {group.dropdown.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href ?? '#'}
                    onClick={item.comingSoon ? handleComingSoon : onClose}
                    className="text-brand-text-secondary hover:text-brand-text hover:bg-brand-surface-elevated block rounded-lg px-3 py-2 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Right items */}
        {NAV_RIGHT.map((item) => (
          <a
            key={item.label}
            href={item.href ?? '#'}
            onClick={item.comingSoon ? handleComingSoon : onClose}
            className="text-brand-text-secondary hover:text-brand-text block py-3 text-sm transition-colors"
          >
            {item.label}
          </a>
        ))}

        {/* Divider */}
        <div className="border-brand-border my-3 border-t" />

        {/* Auth */}
        <a
          href={NAV_AUTH.login.href}
          onClick={handleComingSoon}
          className="text-brand-text-secondary hover:text-brand-text hover:bg-brand-surface-elevated mb-2 block rounded-lg px-3 py-2.5 text-sm transition-colors"
        >
          {NAV_AUTH.login.label}
        </a>
        <Link
          href="/book-demo"
          onClick={onClose}
          className="bg-brand-primary hover:bg-brand-accent block w-full rounded-full px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors"
        >
          {NAV_AUTH.start.label}
        </Link>
      </nav>
    </div>
  );
}
