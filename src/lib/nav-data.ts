import type { NavDropdownGroup, NavItem } from '@/lib/types';

export const NAV_GROUPS: { label: string; dropdown: NavDropdownGroup }[] = [
  {
    label: 'Features',
    dropdown: {
      title: 'Features',
      items: [
        { label: 'AI Copywriting Agent', href: '#', comingSoon: true },
        { label: 'LinkedIn Data Scraper', href: '#', comingSoon: true },
        { label: 'Email Outreach', href: '#', comingSoon: true },
      ],
      infoTitle: 'Automate Your Outreach',
      infoDesc: 'Let AI handle prospecting, writing, and sending at scale.',
    },
  },
  {
    label: 'Use Cases',
    dropdown: {
      title: 'Use Cases',
      items: [
        { label: 'B2B SaaS', href: '#', comingSoon: true },
        { label: 'Entrepreneurs & Startups', href: '#', comingSoon: true },
        { label: 'Marketing Agencies', href: '#', comingSoon: true },
        { label: 'Sales Teams', href: '#', comingSoon: true },
      ],
      infoTitle: 'Built for Growth',
      infoDesc: 'Works for any team running outbound sales campaigns.',
    },
  },
  {
    label: 'Resources',
    dropdown: {
      title: 'Resources',
      items: [
        { label: 'Blog', href: '#', comingSoon: true },
        { label: 'Youtube', href: '#', comingSoon: true },
        { label: 'Free Email Guide', href: '#', comingSoon: true },
        { label: 'Affiliate', href: '#', comingSoon: true },
      ],
      infoTitle: 'Learn & Grow',
      infoDesc: 'Guides, videos, and resources to master cold outreach.',
    },
  },
];

export const NAV_RIGHT: NavItem[] = [
  { label: 'Pricing', href: '#', comingSoon: true },
];

export const NAV_AUTH: { login: NavItem; start: NavItem } = {
  login: { label: 'Login', href: '#', comingSoon: true },
  start: { label: 'Start For Free', href: '#', comingSoon: true },
};

export const BOOK_DEMO: NavItem = { label: 'Book a Demo', href: '/book-demo', comingSoon: false };
export const SCHEDULE_DEMO: NavItem = { label: 'Schedule Demo', href: '/book-demo', comingSoon: false };
