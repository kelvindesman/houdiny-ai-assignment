import { describe, it, expect } from 'vitest';
import { buildSystemPrompt } from '@/lib/ai/system-prompt';

describe('buildSystemPrompt', () => {
  it('contains identity section', () => {
    const p = buildSystemPrompt();
    expect(p).toContain('Houdiny AI');
    expect(p).toContain('Sales Concierge');
  });

  it('contains product facts: free trial', () => {
    const p = buildSystemPrompt();
    expect(p).toContain('7 days');
    expect(p).toContain('100 free leads');
    expect(p).toContain('no credit card');
  });

  it('contains BANT mention', () => {
    const p = buildSystemPrompt();
    expect(p).toContain('BANT');
  });

  it('contains tool usage rules', () => {
    const p = buildSystemPrompt();
    expect(p).toContain('capture_lead');
    expect(p).toContain('generate_sample_email');
    expect(p).toContain('book_demo');
  });

  it('contains guardrails section', () => {
    const p = buildSystemPrompt();
    expect(p).toContain('Guardrails');
  });

  it('is a non-empty string', () => {
    const p = buildSystemPrompt();
    expect(typeof p).toBe('string');
    expect(p.length).toBeGreaterThan(100);
  });

  it('matches snapshot', () => {
    expect(buildSystemPrompt()).toMatchSnapshot();
  });
});
