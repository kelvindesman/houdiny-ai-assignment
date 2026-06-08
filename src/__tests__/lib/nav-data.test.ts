import { describe, it, expect } from 'vitest';
import { NAV_GROUPS, NAV_RIGHT, NAV_AUTH, BOOK_DEMO, SCHEDULE_DEMO } from '@/lib/nav-data';

describe('nav-data', () => {
  it('has exactly 3 nav groups', () => {
    expect(NAV_GROUPS).toHaveLength(3);
  });

  it('Features group has exactly 3 items', () => {
    const features = NAV_GROUPS.find((g) => g.label === 'Features');
    expect(features?.dropdown.items).toHaveLength(3);
  });

  it('Use Cases group has exactly 4 items', () => {
    const useCases = NAV_GROUPS.find((g) => g.label === 'Use Cases');
    expect(useCases?.dropdown.items).toHaveLength(4);
  });

  it('Resources group has exactly 4 items', () => {
    const resources = NAV_GROUPS.find((g) => g.label === 'Resources');
    expect(resources?.dropdown.items).toHaveLength(4);
  });

  it('all group items have comingSoon: true', () => {
    for (const group of NAV_GROUPS) {
      for (const item of group.dropdown.items) {
        expect(item.comingSoon, `${group.label} > ${item.label}`).toBe(true);
      }
    }
  });

  it('NAV_RIGHT Pricing has comingSoon: true', () => {
    const pricing = NAV_RIGHT.find((i) => i.label === 'Pricing');
    expect(pricing?.comingSoon).toBe(true);
  });

  it('NAV_AUTH login and start have comingSoon: true', () => {
    expect(NAV_AUTH.login.comingSoon).toBe(true);
    expect(NAV_AUTH.start.comingSoon).toBe(true);
  });

  it('BOOK_DEMO routes to /book-demo and is NOT comingSoon', () => {
    expect(BOOK_DEMO.href).toBe('/book-demo');
    expect(BOOK_DEMO.comingSoon).toBeFalsy();
  });

  it('SCHEDULE_DEMO routes to /book-demo and is NOT comingSoon', () => {
    expect(SCHEDULE_DEMO.href).toBe('/book-demo');
    expect(SCHEDULE_DEMO.comingSoon).toBeFalsy();
  });
});
