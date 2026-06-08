import { describe, it, expect } from 'vitest';
import { getMockResponse } from '@/lib/ai/mock-stream';

describe('getMockResponse', () => {
  it('returns default response for generic message', () => {
    const r = getMockResponse('hello');
    expect(r).toContain('Houdiny AI');
  });

  it('returns pricing response for cost-related message', () => {
    const r = getMockResponse('what does it cost?');
    expect(r).toContain('free trial');
  });

  it('returns pricing response for "plan" keyword', () => {
    const r = getMockResponse('what plans do you have');
    expect(r).toContain('free trial');
  });

  it('returns email response for email-related message', () => {
    const r = getMockResponse('can you write emails?');
    expect(r).toContain('AI Copywriting');
  });

  it('returns linkedin response for prospect-related message', () => {
    const r = getMockResponse('how does linkedin scraping work?');
    expect(r).toContain('LinkedIn Data Scraper');
  });

  it('is case-insensitive', () => {
    expect(getMockResponse('PRICE')).toContain('free trial');
    expect(getMockResponse('EMAIL')).toContain('AI Copywriting');
  });
});
