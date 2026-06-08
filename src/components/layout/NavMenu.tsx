'use client';
import { useState, useRef, useEffect } from 'react';
import { NAV_GROUPS, NAV_RIGHT } from '@/lib/nav-data';
import { NavDropdownPanel } from './NavDropdownPanel';
import { useToast } from '@/components/common/ToastProvider';

export function NavMenu() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const { showComingSoon } = useToast();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="ml-6 flex items-center gap-1" aria-label="Main navigation">
      {NAV_GROUPS.map((group, i) => (
        <div key={group.label} className="relative">
          <button
            type="button"
            aria-expanded={activeIndex === i}
            aria-haspopup="true"
            onClick={() => setActiveIndex((v) => (v === i ? null : i))}
            className={[
              'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              activeIndex === i
                ? 'text-brand-text bg-slate-100'
                : 'text-brand-text hover:text-brand-primary hover:bg-slate-50',
            ].join(' ')}
            data-testid={`nav-group-${group.label.toLowerCase()}`}
          >
            {group.label}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              className={`transition-transform duration-200 ${activeIndex === i ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M6 8L1 3h10L6 8z" />
            </svg>
          </button>

          {activeIndex === i && <NavDropdownPanel group={group.dropdown} />}
        </div>
      ))}

      {NAV_RIGHT.map((item) => (
        <a
          key={item.label}
          href={item.href ?? '#'}
          onClick={(e) => {
            if (item.comingSoon) {
              e.preventDefault();
              showComingSoon();
            }
          }}
          className="text-brand-text hover:text-brand-primary rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50"
          data-testid={`nav-${item.label.toLowerCase()}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
