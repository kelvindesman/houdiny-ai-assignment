'use client';

interface Props {
  visible: boolean;
}

export function ComingSoonToast({ visible }: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={[
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]',
        'flex items-center gap-2 px-5 py-3 rounded-full',
        'bg-brand-surface-elevated border border-brand-border',
        'text-brand-text text-sm font-medium shadow-2xl',
        'transition-all duration-300',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none',
      ].join(' ')}
    >
      <span className="inline-block w-2 h-2 rounded-full bg-brand-primary-light animate-pulse" />
      Coming soon — stay tuned!
    </div>
  );
}
