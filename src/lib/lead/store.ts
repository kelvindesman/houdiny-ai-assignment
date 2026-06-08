import type { LeadInput } from './schema';

export interface StoredLead extends LeadInput {
  leadId: string;
  score: number;
  createdAt: string;
}

const leads: StoredLead[] = [];

export function addLead(lead: StoredLead): void {
  leads.push(lead);
}

export function listLeads(): StoredLead[] {
  return [...leads];
}

export function clearLeads(): void {
  leads.length = 0;
}
