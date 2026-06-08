import type { LeadInput } from './schema';

// Score 0-100 based on BANT-lite signals
export function scoreLead(lead: Partial<LeadInput>): number {
  let score = 0;
  if (lead.name && lead.email && lead.company) score += 20; // basic contact
  if (lead.role) score += 10;
  if (lead.teamSize) {
    const sizeScore: Record<string, number> = { '1-10': 5, '11-50': 10, '51-200': 15, '201-1000': 20, '1000+': 15 };
    score += sizeScore[lead.teamSize] ?? 0;
  }
  if (lead.painPoint) score += 15;
  if (lead.monthlyOutreachVolume) {
    const volScore: Record<string, number> = { '<100': 5, '100-500': 10, '500-2000': 15, '2000+': 20 };
    score += volScore[lead.monthlyOutreachVolume] ?? 0;
  }
  if (lead.budgetSignal) {
    const budgetScore: Record<string, number> = { exploring: 5, budgeted: 15, urgent: 20 };
    score += budgetScore[lead.budgetSignal] ?? 0;
  }
  return Math.min(100, score);
}

export function missingFields(lead: Partial<LeadInput>): (keyof LeadInput)[] {
  const required: (keyof LeadInput)[] = ['name', 'email', 'company'];
  return required.filter(f => !lead[f]);
}

export function isQualified(score: number): boolean {
  return score >= 50;
}
