/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useToast } from '@/components/common/ToastProvider';

const LOGO_URL = 'https://houdiny.ai/_next/static/media/logo-old.ae5140af.svg';

const BLUE = '#237ff3';
const DARK = '#1b1f3c';
const GRAY = '#6f6c90';

interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
  description?: string;
  comingSoon?: boolean;
}

interface NavItem {
  label: string;
  href?: string;
  comingSoon?: boolean;
  dropdown?: {
    links: DropdownItem[];
    info?: {
      title: string;
      description: string;
      cta?: { label: string; href: string };
    };
  };
}

const navItems: NavItem[] = [
  {
    label: 'Features',
    dropdown: {
      links: [
        {
          label: 'AI Copywriting Agent',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-ai-copyright-agent.dd902587.svg',
          description: 'Hyper-personalised cold emails at scale',
        },
        {
          label: 'LinkedIn Data Scraper',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-linkedIn-data-scraper.6998b8c1.svg',
          description: 'Find verified leads from LinkedIn',
        },
        {
          label: 'Email Outreach',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-email-outreach.c2b249e4.svg',
          description: 'Multi-inbox sequences with domain rotation',
        },
      ],
      info: {
        title: 'Close more deals with Cold Outreach',
        description:
          'AI-personalised emails, domain rotation, and LinkedIn automation built to scale — all from one dashboard.',
        cta: { label: 'BOOK A DEMO', href: '/book-demo' },
      },
    },
  },
  {
    label: 'Use Cases',
    dropdown: {
      links: [
        {
          label: 'B2B SaaS Companies',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-b2b-saas.25f36d89.svg',
          description: 'Scale pipeline without growing headcount',
        },
        {
          label: 'Entrepreneurs & Startups',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-enterprenuers-startups.f11c451e.svg',
          description: 'Launch outbound from day one',
        },
        {
          label: 'Marketing Agencies',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-marketing-agencies.0940060d.svg',
          description: 'Run campaigns for multiple clients',
        },
        {
          label: 'Sales Teams',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-sales-teams.8e04d9fb.svg',
          description: 'Hit quota with AI-powered sequences',
        },
      ],
      info: {
        title: 'Proven success across industries',
        description: 'Trusted by 10,000+ businesses generating $150M+ in revenue.',
        cta: { label: 'See success stories', href: '#' },
      },
    },
  },
  {
    label: 'Resources',
    dropdown: {
      links: [
        {
          label: 'Blog',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-blog.86a7214f.svg',
          description: 'Tips, guides and outbound playbooks',
        },
        {
          label: 'YouTube',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-youtube.44814216.svg',
          description: 'Video tutorials and walkthroughs',
        },
        {
          label: 'Free Email Warmup',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-free-email.131d609f.svg',
          description: 'Warm up your inbox for free',
        },
        {
          label: 'Affiliate Program',
          href: '#',
          icon: 'https://houdiny.ai/_next/static/media/icon-affiliate.3f32cfb9.svg',
          description: 'Earn commission referring customers',
        },
      ],
    },
  },
  {
    label: 'Pricing',
    href: '#',
  },
];

function ComingSoonBadge() {
  return (
    <span
      style={{ backgroundColor: '#f0f7ff', color: BLUE }}
      className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase"
    >
      Soon
    </span>
  );
}

function DropdownCard({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const { showComingSoon } = useToast();
  if (!item.dropdown) return null;
  const { links, info } = item.dropdown;

  return (
    <div
      className="absolute top-full left-1/2 mt-2 flex rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
      style={{ transform: 'translateX(-50%)', minWidth: 520, zIndex: 100 }}
    >
      {/* Links column */}
      <div className="flex-1 p-4">
        {links.map((link) => {
          const inner = (
            <div className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-gray-50">
              {link.icon && (
                <img
                  src={link.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="mt-0.5 shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold" style={{ color: DARK }}>
                    {link.label}
                  </span>
                  {link.comingSoon && <ComingSoonBadge />}
                </div>
                {link.description && (
                  <p className="mt-0.5 text-xs" style={{ color: GRAY }}>
                    {link.description}
                  </p>
                )}
              </div>
            </div>
          );

          const slug = link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          if (link.comingSoon || link.href === '#') {
            return (
              <button
                key={link.label}
                data-testid={`nav-item-${slug}`}
                className="w-full text-left"
                onClick={() => {
                  showComingSoon();
                  onClose();
                }}
              >
                {inner}
              </button>
            );
          }
          return (
            <Link key={link.label} href={link.href} onClick={onClose}>
              {inner}
            </Link>
          );
        })}
      </div>

      {/* Info column */}
      {info && (
        <div
          className="flex w-52 shrink-0 flex-col justify-between rounded-r-2xl p-5"
          style={{ backgroundColor: '#f8faff' }}
        >
          <div>
            <p className="text-sm font-bold" style={{ color: DARK }}>
              {info.title}
            </p>
            <p className="mt-2 text-xs leading-relaxed" style={{ color: GRAY }}>
              {info.description}
            </p>
          </div>
          {info.cta && (
            <Link
              href={info.cta.href}
              onClick={onClose}
              className="mt-4 inline-flex items-center text-xs font-semibold transition-opacity hover:opacity-80"
              style={{ color: BLUE }}
            >
              {info.cta.label}
              <svg
                className="ml-1 h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export function HoudinyHeader() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { showComingSoon } = useToast();

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close on scroll
  useEffect(() => {
    function onScroll() {
      setOpenIndex(null);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => {
            setOpenIndex(null);
            setMobileOpen(false);
          }}
        >
          <img
            src={LOGO_URL}
            alt="Houdiny AI"
            height={32}
            className="h-8 w-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => {
            const hasDropdown = !!item.dropdown;
            const isOpen = openIndex === i;

            if (hasDropdown) {
              return (
                <div key={item.label} className="relative">
                  <button
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
                    style={{ color: DARK }}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    data-testid={`nav-group-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      style={{ color: GRAY }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && <DropdownCard item={item} onClose={() => setOpenIndex(null)} />}
                </div>
              );
            }

            if (item.comingSoon) {
              return (
                <div
                  key={item.label}
                  className="flex cursor-default items-center rounded-lg px-3 py-2 text-sm font-medium"
                  style={{ color: GRAY }}
                >
                  {item.label}
                  <ComingSoonBadge />
                </div>
              );
            }

            return (
              <button
                key={item.label}
                className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
                style={{ color: DARK }}
                data-testid={`nav-${item.label.toLowerCase()}`}
                onClick={() => {
                  setOpenIndex(null);
                  showComingSoon();
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          <button
            className="hidden rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 md:block"
            style={{ color: DARK }}
            data-testid="nav-login"
            onClick={() => {
              setOpenIndex(null);
              showComingSoon();
            }}
          >
            Login
          </button>

          <button
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BLUE }}
            data-testid="nav-start"
            onClick={() => {
              setOpenIndex(null);
              setMobileOpen(false);
              showComingSoon();
            }}
          >
            Start For Free
          </button>

          {/* Hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="hamburger"
          >
            {mobileOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ color: DARK }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ color: DARK }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden"
          data-testid="mobile-nav"
        >
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label} className="py-1">
                  <p
                    className="px-2 py-1.5 text-xs font-semibold tracking-wider uppercase"
                    style={{ color: GRAY }}
                  >
                    {item.label}
                  </p>
                  {item.dropdown.links.map((link) => (
                    <div key={link.label}>
                      {link.comingSoon || link.href === '#' ? (
                        <div
                          className="flex items-center rounded-lg px-2 py-2 text-sm"
                          style={{ color: GRAY }}
                        >
                          {link.label}
                          <ComingSoonBadge />
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="block rounded-lg px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
                          style={{ color: DARK }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              );
            }

            return (
              <div key={item.label} className="py-0.5">
                {item.comingSoon ? (
                  <div
                    className="flex items-center rounded-lg px-2 py-2 text-sm"
                    style={{ color: GRAY }}
                  >
                    {item.label}
                    <ComingSoonBadge />
                  </div>
                ) : (
                  <Link
                    href={item.href ?? '#'}
                    className="block rounded-lg px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
                    style={{ color: DARK }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="mt-3 flex gap-2 border-t border-gray-100 pt-3">
            <button
              className="flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ color: DARK }}
              onClick={() => setMobileOpen(false)}
            >
              Login
            </button>
            <Link
              href="/book-demo"
              className="flex-1 rounded-full px-3 py-2 text-center text-sm font-semibold text-white"
              style={{ backgroundColor: BLUE }}
              onClick={() => setMobileOpen(false)}
            >
              Start For Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default HoudinyHeader;
