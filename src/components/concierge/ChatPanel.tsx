'use client';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, lastAssistantMessageIsCompleteWithToolCalls } from 'ai';
import { MessageList } from './MessageList';
import { ChatComposer } from './ChatComposer';
import { capture } from '@/lib/analytics';

export function ChatPanel() {
  const [input, setInput] = useState('');

  const { messages, sendMessage, status, error, regenerate, clearError } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
  });

  const isStreaming = status === 'streaming' || status === 'submitted';

  function handleSend() {
    const text = input.trim();
    if (!text || isStreaming) return;
    capture({ event: 'chat_message_sent', properties: { message_length: text.length } });
    setInput('');
    sendMessage({ text });
  }

  return (
    <div className="flex h-full flex-col">
      <MessageList
        messages={messages as Parameters<typeof MessageList>[0]['messages']}
        isStreaming={isStreaming}
      />

      {error && (
        <div className="flex items-center justify-between gap-3 border-t border-red-500/20 bg-red-500/10 px-4 py-3">
          <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                clearError();
                regenerate();
              }}
              className="text-xs text-red-400 underline transition-colors hover:text-red-300"
            >
              Retry
            </button>
            <button
              type="button"
              onClick={clearError}
              className="text-brand-text-muted hover:text-brand-text text-xs transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      <ChatComposer value={input} onChange={setInput} onSend={handleSend} disabled={isStreaming} />
    </div>
  );
}
