import { createUIMessageStream, createUIMessageStreamResponse } from 'ai';

const MOCK_RESPONSES: Record<string, string> = {
  default:
    "Hey there! I'm **Houdiny AI**, your AI Sales Concierge. I help B2B teams automate cold outreach — from AI copywriting to LinkedIn prospecting and email campaigns at scale.\n\nTo make this conversation useful: **what's your role, and what does your current outreach process look like?**",
  pricing:
    "Our **free trial** gives you 7 days, 100 leads, and no credit card required — so you can see the results before committing.\n\nFor full pricing details, I'd love to connect you with our team in a quick demo. **What's the best email to send the invite to?**",
  email:
    "Great question! Houdiny's **AI Copywriting Agent** analyzes your prospect's role, company, and pain points, then generates hyper-personalized cold emails — at scale, in seconds.\n\nWant me to generate a live sample for your use case? Just tell me your target prospect's role and the offer you're pitching.",
  linkedin:
    "The **LinkedIn Data Scraper** pulls verified contact data from your target market — role, company, industry — and feeds it directly into your outreach sequences.\n\nWhat kind of prospects are you targeting? I can show you a sample email generated from that profile.",
};

export function getMockResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (lower.includes('price') || lower.includes('cost') || lower.includes('plan'))
    return MOCK_RESPONSES['pricing']!;
  if (lower.includes('email') || lower.includes('copy') || lower.includes('write'))
    return MOCK_RESPONSES['email']!;
  if (lower.includes('linkedin') || lower.includes('prospect') || lower.includes('scraper'))
    return MOCK_RESPONSES['linkedin']!;
  return MOCK_RESPONSES['default']!;
}

export function createMockChatResponse(userMessage: string): Response {
  const text = getMockResponse(userMessage);

  // Split into word-by-word chunks to simulate streaming
  const words = text.split(' ');

  const textId = crypto.randomUUID();
  const stream = createUIMessageStream({
    execute({ writer }) {
      writer.write({ type: 'text-start', id: textId });
      for (let i = 0; i < words.length; i++) {
        writer.write({
          type: 'text-delta',
          id: textId,
          delta: (i === 0 ? '' : ' ') + words[i]!,
        });
      }
      writer.write({ type: 'text-end', id: textId });
    },
  });

  return createUIMessageStreamResponse({ stream });
}
