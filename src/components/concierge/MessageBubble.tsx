'use client';
import { ToolCallRenderer } from './ToolCallRenderer';

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
  message: Message;
}

function renderMarkdown(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
}

export function MessageBubble({ message }: Props) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          isUser
            ? 'border-brand-border text-brand-text-secondary border bg-slate-100'
            : 'bg-brand-primary text-white'
        }`}
      >
        {isUser ? 'You' : 'H'}
      </div>

      <div className={`flex max-w-[80%] flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`}>
        {message.parts.map((part, i) => {
          if (part.type === 'text') {
            return (
              <div
                key={i}
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  isUser
                    ? 'bg-brand-primary rounded-tr-sm text-white'
                    : 'text-brand-text border-brand-border rounded-tl-sm border bg-slate-50'
                }`}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(part.text) }}
              />
            );
          }

          if (part.type === 'tool-invocation') {
            return (
              <div key={i} className="w-full">
                <ToolCallRenderer part={part} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
