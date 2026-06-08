'use client';
import Link from 'next/link';
import type { NavDropdownGroup } from '@/lib/types';
import { useToast } from '@/components/common/ToastProvider';

interface Props {
  group: NavDropdownGroup;
}

export function NavDropdownPanel({ group }: Props) {
  const { showComingSoon } = useToast();

  function handleComingSoon(e: React.MouseEvent, comingSoon?: boolean) {
    if (comingSoon) {
      e.preventDefault();
      showComingSoon();
    }
  }

  return (
    <div className="absolute top-full left-0 mt-2 w-[520px] rounded-2xl bg-brand-surface border border-brand-border shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex">
        {/* Items list */}
        <div className="flex-1 p-4">
          <p className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-3 px-2">{group.title}</p>
          <ul>
            {group.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href ?? '#'}
                  onClick={(e) => handleComingSoon(e, item.comingSoon)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-surface-elevated transition-colors group"
                  data-testid={`nav-item-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-surface-elevated group-hover:bg-brand-primary/20 flex items-center justify-center shrink-0 transition-colors border border-brand-border">
                    <span className="w-2 h-2 rounded-full bg-brand-primary-light" />
                  </div>
                  <span className="text-sm font-medium text-brand-text group-hover:text-brand-text transition-colors">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info column */}
        {group.infoTitle && (
          <div className="w-52 p-5 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border-l border-brand-border flex flex-col justify-between">
            <div>
              <p className="font-semibold text-brand-text text-sm mb-2">{group.infoTitle}</p>
              {group.infoDesc && <p className="text-xs text-brand-text-secondary leading-relaxed">{group.infoDesc}</p>}
            </div>
            <Link
              href="/book-demo"
              className="mt-4 text-center text-xs font-semibold py-2 px-3 rounded-lg bg-gradient-to-r from-brand-primary-light to-brand-accent text-white hover:opacity-90 transition-opacity"
            >
              BOOK A DEMO
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
