import { tool } from 'ai';
import { z } from 'zod';
import { leadSchema } from '@/lib/lead/schema';
import { scoreLead } from '@/lib/lead/qualification';
import { addLead } from '@/lib/lead/store';

export const generateSampleEmailTool = tool({
  description:
    'Generate a hyper-personalized sample cold email to demonstrate the Houdiny product.',
  inputSchema: z.object({
    prospectRole: z.string().describe("The prospect's job title or role"),
    prospectCompany: z.string().optional().describe("The prospect's company name"),
    offer: z.string().describe('The core value proposition / offer to pitch'),
    tone: z.enum(['professional', 'casual', 'bold']).describe('Email tone'),
  }),
  execute: async ({ prospectRole, prospectCompany, offer, tone }) => {
    const companyLine = prospectCompany ? ` at ${prospectCompany}` : '';
    const toneMap = {
      professional: 'formal but personable',
      casual: 'conversational and friendly',
      bold: 'punchy and direct',
    };
    return {
      subject: `Quick question for ${prospectRole}s${companyLine}`,
      body: `Hi [First Name],\n\nI noticed you're a ${prospectRole}${companyLine} — and I imagine scaling outbound is on your radar.\n\nWe help ${prospectRole}s ${offer} using AI-powered outreach that writes, personalizes, and sends cold emails at scale — without the manual grind.\n\nWould a 7-day free trial (100 leads, no card needed) be worth a quick look?\n\nBest,\n[Your Name]`,
      personalizationNotes: [
        `Tone: ${toneMap[tone]}`,
        `Role-specific opening: addresses ${prospectRole} directly`,
        `Pain-point hook: outbound scaling`,
        `Low-friction CTA: free trial, no commitment`,
      ],
    };
  },
});

export const captureLeadTool = tool({
  description: "Capture the prospect's lead information and save it to the pipeline.",
  inputSchema: leadSchema,
  execute: async (lead) => {
    const score = scoreLead(lead);
    const leadId = crypto.randomUUID();
    const storedLead = { ...lead, leadId, score, createdAt: new Date().toISOString() };
    addLead(storedLead);
    // TODO: fire posthog-node server-side event here for reliable lead attribution
    // posthog.capture({ distinctId: lead.email, event: 'lead_captured', properties: { score, ... } })
    console.log('[Lead captured]', JSON.stringify(storedLead, null, 2));
    return { ok: true, leadId, score, ...lead };
  },
});

export const bookDemoTool = tool({
  description: 'Book a demo call for the prospect.',
  inputSchema: z.object({
    email: z.string().email(),
    leadId: z.string().optional(),
    preferredTime: z.string().optional().describe('e.g. "Tuesday afternoon" or "next week"'),
  }),
  execute: async ({ email, preferredTime }) => {
    // TODO: fire posthog-node server-side event here for booking attribution
    const bookingId = crypto.randomUUID().slice(0, 8).toUpperCase();
    const slot = preferredTime ?? 'next available slot (Mon–Fri, 9am–5pm ET)';
    return {
      ok: true,
      bookingId,
      slot,
      calendarNote: `A calendar invite will be sent to ${email}. Our team will confirm within 1 business day.`,
    };
  },
});

export const agentTools = {
  generate_sample_email: generateSampleEmailTool,
  capture_lead: captureLeadTool,
  book_demo: bookDemoTool,
};
