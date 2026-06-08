import { describe, it, expect, beforeEach } from 'vitest';
import { addLead, listLeads, clearLeads } from '@/lib/lead/store';

const mockLead = {
  name: 'Alice',
  email: 'alice@example.com',
  company: 'Acme',
  leadId: 'test-id-1',
  score: 40,
  createdAt: '2024-01-01T00:00:00.000Z',
};

describe('lead store', () => {
  beforeEach(() => {
    clearLeads();
  });

  it('starts empty', () => {
    expect(listLeads()).toHaveLength(0);
  });

  it('adds a lead', () => {
    addLead(mockLead);
    expect(listLeads()).toHaveLength(1);
  });

  it('returns a copy so mutations do not affect the store', () => {
    addLead(mockLead);
    const leads1 = listLeads();
    leads1.push({ ...mockLead, leadId: 'mutated' });
    expect(listLeads()).toHaveLength(1);
  });

  it('stores multiple leads', () => {
    addLead(mockLead);
    addLead({ ...mockLead, leadId: 'test-id-2', email: 'bob@example.com' });
    expect(listLeads()).toHaveLength(2);
  });
});
