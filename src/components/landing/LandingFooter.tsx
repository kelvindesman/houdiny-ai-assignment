import Link from 'next/link';
import Image from 'next/image';

const NAV_COLS = [
  {
    heading: 'Solution',
    links: [
      { label: 'Email Outreach', href: '/email-outreach' },
      { label: 'LinkedIn Outreach', href: '/linkedIn-data-scraper' },
      { label: 'AI Agent', href: '/ai-personalization-agent' },
      { label: 'Data Scraper', href: '/linkedIn-data-scraper' },
    ],
  },
  {
    heading: 'Product',
    links: [
      { label: 'B2B SaaS', href: '/b2b-saas' },
      { label: 'Entrepreneurs', href: '/startups' },
      { label: 'Agencies', href: '/agencies' },
      { label: 'Sales Team', href: '/sales-teams' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Affiliate Program', href: '/affiliate' },
      { label: 'Blog', href: '/blog' },
      { label: 'Book Demo', href: '/book-demo' },
    ],
  },
  {
    heading: 'Assistance',
    links: [
      { label: 'Houdiny vs Instantly', href: '/comparison-instantly' },
      { label: 'Houdiny vs Smartlead', href: '/comparison-smartlead' },
      { label: 'Houdiny vs Dripify', href: '/comparison-dripify' },
      { label: 'Houdiny vs Apollo', href: '/comparison-apollo' },
      { label: 'Houdiny vs Nureply', href: '/comparison-nureply' },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'Contact Us', href: '/contact' },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/channel/UCBgtyOMgLjJRTDdxh7OAXkg',
        external: true,
      },
      {
        label: 'Skool Community',
        href: 'https://www.skool.com/the-ai-founder-show-1171/about?ref=992a7fede29e487abe94fb30807951d2',
        external: true,
      },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
] as const;

function LinkedInIcon() {
  return (
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/houdiny-ai/?viewAsMember=true',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/houdiny.ai?igsh=MW52a2JxczN3eWY3bA==',
    icon: <InstagramIcon />,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCNUBetiq0uQ3Me_ACw7Wkhg',
    icon: <YouTubeIcon />,
  },
] as const;

export function LandingFooter() {
  return (
    <footer style={{ backgroundColor: '#1b1f3c' }} className="w-full overflow-hidden">
      {/* CTA band */}
      <div className="relative w-full overflow-hidden pt-20 pb-0 text-center">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2
            className="leading-tight font-bold"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.15,
            }}
          >
            Fresh leads are waiting for you.
          </h2>
          <h2
            className="mt-1 leading-tight font-bold"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.15,
            }}
          >
            Get them now.
          </h2>

          {/* Email input */}
          <div className="mt-8 flex items-center justify-center">
            <div
              className="flex items-center overflow-hidden rounded-full"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                maxWidth: 480,
                width: '100%',
              }}
            >
              <input
                className="flex-1 bg-transparent px-6 py-3.5 text-base text-white placeholder-white/50 outline-none"
                placeholder="Enter your email"
                type="text"
              />
              <a
                href="#"
                className="m-1 inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#237ff3' }}
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>

        {/* Large watermark text */}
        <div className="mt-12 w-full overflow-hidden">
          <Image
            alt="houdinyTextIcon"
            decoding="async"
            height={296}
            loading="lazy"
            src="https://houdiny.ai/_next/static/media/houdinyTextIcon.9e9f6e74.svg"
            width={1488}
            className="h-auto w-full opacity-10"
            unoptimized
          />
        </div>
      </div>

      {/* Nav grid */}
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <strong
                className="mb-4 block text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {col.heading}
              </strong>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.7)' }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.7)' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials column */}
          <div>
            <strong
              className="mb-4 block text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Socials
            </strong>
            <ul className="flex flex-col gap-3" style={{ marginBottom: 10 }}>
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-lg transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="flex items-center gap-6">
          <Link
            href="/terms-and-conditions"
            className="text-sm transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="/"
            className="text-sm transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Cookie Policy
          </Link>
        </div>
        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          2026©{' '}
          <Link
            href="/"
            className="transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Houdiny Ai
          </Link>
        </span>
      </div>
    </footer>
  );
}
