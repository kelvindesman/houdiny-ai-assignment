import { describe, it, expect } from 'vitest';
import { leadSchema } from '@/lib/lead/schema';

describe('leadSchema', () => {
  it('parses a valid minimal lead', () => {
    const result = leadSchema.safeParse({ name: 'Alice', email: 'alice@example.com', company: 'Acme' });
    expect(result.success).toBe(true);
  });

  it('parses a full lead', () => {
    const result = leadSchema.safeParse({
      name: 'Bob',
      email: 'bob@company.com',
      company: 'TechCorp',
      role: 'VP Sales',
      teamSize: '51-200',
      painPoint: 'Manual outreach is too slow',
      monthlyOutreachVolume: '500-2000',
      budgetSignal: 'budgeted',
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = leadSchema.safeParse({ name: 'Alice', email: 'not-an-email', company: 'Acme' });
    expect(result.success).toBe(false);
  });

  it('rejects missing name', () => {
    const result = leadSchema.safeParse({ email: 'a@b.com', company: 'Acme' });
    expect(result.success).toBe(false);
  });

  it('rejects invalid teamSize enum', () => {
    const result = leadSchema.safeParse({ name: 'A', email: 'a@b.com', company: 'C', teamSize: 'huge' });
    expect(result.success).toBe(false);
  });

  it('rejects invalid budgetSignal enum', () => {
    const result = leadSchema.safeParse({ name: 'A', email: 'a@b.com', company: 'C', budgetSignal: 'maybe' });
    expect(result.success).toBe(false);
  });
});
