import { streamText, convertToModelMessages, stepCountIs } from 'ai';
import { type NextRequest } from 'next/server';
import { getModel } from '@/lib/ai/model';
import { buildSystemPrompt } from '@/lib/ai/system-prompt';
import { agentTools } from '@/lib/ai/tools';
import { createMockChatResponse } from '@/lib/ai/mock-stream';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  let body: { messages: unknown[] };
  try {
    body = (await req.json()) as { messages: unknown[] };
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }
  const { messages } = body;

  // Mock mode: no API key needed — streams a canned UI message response
  const isMock =
    process.env['DEMO_MODE'] === 'mock' || !process.env['GOOGLE_GENERATIVE_AI_API_KEY'];
  if (isMock) {
    const lastUserMsg = [...messages].reverse().find((m: unknown) => {
      const msg = m as { role?: string };
      return msg.role === 'user';
    }) as { role: string; parts?: Array<{ type: string; text?: string }> } | undefined;

    const userText = lastUserMsg?.parts?.find((p) => p.type === 'text')?.text ?? '';
    return createMockChatResponse(userText);
  }

  const result = streamText({
    model: getModel(),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(
      messages as Parameters<typeof convertToModelMessages>[0],
    ),
    tools: agentTools,
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
