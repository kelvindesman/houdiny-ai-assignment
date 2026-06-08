import { describe, it, expect } from 'vitest';
import { scoreLead, missingFields, isQualified } from '@/lib/lead/qualification';

describe('scoreLead', () => {
  it('returns 0 for empty lead', () => {
    expect(scoreLead({})).toBe(0);
  });

  it('gives 20 points for name+email+company', () => {
    expect(scoreLead({ name: 'Alice', email: 'a@b.com', company: 'Acme' })).toBe(20);
  });

  it('adds 10 for role', () => {
    const score = scoreLead({ name: 'Alice', email: 'a@b.com', company: 'Acme', role: 'VP Sales' });
    expect(score).toBe(30);
  });

  it('adds team size points', () => {
    const s = scoreLead({ name: 'A', email: 'a@b.com', company: 'C', teamSize: '51-200' });
    expect(s).toBe(35); // 20 + 15
  });

  it('adds budget signal points', () => {
    const s = scoreLead({ name: 'A', email: 'a@b.com', company: 'C', budgetSignal: 'urgent' });
    expect(s).toBe(40); // 20 + 20
  });

  it('caps at 100', () => {
    const s = scoreLead({
      name: 'Alice',
      email: 'a@b.com',
      company: 'Acme',
      role: 'CEO',
      teamSize: '201-1000',
      painPoint: 'no outreach at scale',
      monthlyOutreachVolume: '2000+',
      budgetSignal: 'urgent',
    });
    expect(s).toBe(100);
  });

  it('table-driven: teamSize scoring', () => {
    const cases: Array<[string, number]> = [
      ['1-10', 5],
      ['11-50', 10],
      ['51-200', 15],
      ['201-1000', 20],
      ['1000+', 15],
    ];
    for (const [size, expected] of cases) {
      const s = scoreLead({ name: 'A', email: 'a@b.com', company: 'C', teamSize: size as '1-10' });
      expect(s, `teamSize=${size}`).toBe(20 + expected);
    }
  });
});

describe('missingFields', () => {
  it('returns all required fields when empty', () => {
    expect(missingFields({})).toEqual(['name', 'email', 'company']);
  });

  it('returns empty array when all provided', () => {
    expect(missingFields({ name: 'A', email: 'a@b.com', company: 'C' })).toEqual([]);
  });

  it('returns only missing fields', () => {
    expect(missingFields({ name: 'A' })).toEqual(['email', 'company']);
  });
});

describe('isQualified', () => {
  it('returns false below 50', () => {
    expect(isQualified(49)).toBe(false);
  });

  it('returns true at 50', () => {
    expect(isQualified(50)).toBe(true);
  });

  it('returns true above 50', () => {
    expect(isQualified(80)).toBe(true);
  });
});
