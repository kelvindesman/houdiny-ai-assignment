'use client';
import { useRef, type KeyboardEvent } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatComposer({ value, onChange, onSend, disabled, placeholder }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) onSend();
    }
  }

  function autoResize() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }

  return (
    <div className="border-brand-border border-t bg-white px-4 py-3">
      <div className="mx-auto flex max-w-3xl items-end gap-3">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              autoResize();
            }}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder ?? 'Ask about Houdiny, or say hi…'}
            rows={1}
            className="border-brand-border text-brand-text placeholder:text-brand-text-muted focus:ring-brand-primary/30 focus:border-brand-primary/50 w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none disabled:opacity-50"
            aria-label="Message input"
          />
          <p className="text-brand-text-muted pointer-events-none absolute right-3 bottom-2 text-xs select-none">
            ↵ Send
          </p>
        </div>

        <button
          type="button"
          onClick={onSend}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="bg-brand-primary hover:bg-brand-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white transition-colors disabled:opacity-40"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22l-4-9-9-4 19-7z" />
          </svg>
        </button>
      </div>
      <p className="text-brand-text-muted mx-auto mt-2 max-w-3xl text-center text-xs">
        Shift+Enter for new line · Powered by Houdiny AI
      </p>
    </div>
  );
}
