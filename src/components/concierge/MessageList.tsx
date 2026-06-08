'use client';
import { useEffect, useRef } from 'react';
import { MessageBubble } from './MessageBubble';

type MessagePart =
  | { type: 'text'; text: string }
  | {
      type: 'tool-invocation';
      toolName: string;
      state: 'partial-call' | 'call' | 'result';
      input?: Record<string, unknown>;
      output?: Record<string, unknown>;
    };

interface Message {
  id: string;
  role: 'user' | 'assistant';
  parts: MessagePart[];
}

interface Props {
  messages: Message[];
  isStreaming: boolean;
}

export function MessageList({ messages, isStreaming }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isStreaming]);

  return (
    <div
      className="flex-1 space-y-6 overflow-y-auto px-4 py-6"
      role="log"
      aria-label="Chat messages"
      aria-live="polite"
      aria-relevant="additions"
    >
      {messages.length === 0 && (
        <div className="flex h-full flex-col items-center justify-center py-12 text-center">
          <div className="bg-brand-primary shadow-brand-primary/20 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg">
            <span className="text-xl font-black text-white">H</span>
          </div>
          <p className="text-brand-text-secondary max-w-xs text-sm">
            Say hello to <strong className="text-brand-text">Houdiny AI</strong> — ask about the
            product, get a live email demo, or book a call.
          </p>
        </div>
      )}

      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message as Parameters<typeof MessageBubble>[0]['message']}
        />
      ))}

      {isStreaming && (
        <div className="flex items-start gap-3">
          <div className="bg-brand-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
            H
          </div>
          <div className="border-brand-border rounded-2xl rounded-tl-sm border bg-slate-50 px-4 py-3">
            <div className="flex h-4 items-center gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="bg-brand-primary-light h-1.5 w-1.5 animate-bounce rounded-full"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
