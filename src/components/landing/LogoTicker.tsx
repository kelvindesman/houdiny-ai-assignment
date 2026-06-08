/* eslint-disable @next/next/no-img-element */
'use client';

const LOGOS = [
  {
    src: 'https://houdiny.ai/_next/static/media/trusted-logo-1.339bf8e5.svg',
    alt: 'Brand Logo',
  },
  {
    src: 'https://houdiny.ai/_next/static/media/trusted-logo-2.2852fb88.svg',
    alt: 'Brand Logo',
  },
  {
    src: 'https://houdiny.ai/_next/static/media/trusted-logo-3.1b1164eb.svg',
    alt: 'Brand Logo',
  },
  {
    src: 'https://houdiny.ai/_next/static/media/trusted-logo-4.1c2250e1.svg',
    alt: 'Brand Logo',
  },
  {
    src: 'https://houdiny.ai/_next/static/media/trusted-logo-5.19c4ae44.svg',
    alt: 'Brand Logo',
  },
  {
    src: 'https://houdiny.ai/_next/static/media/trusted-logo-6.c86269e6.svg',
    alt: 'Brand Logo',
  },
  {
    src: 'https://houdiny.ai/_next/static/media/trusted-logo-7.039844b6.svg',
    alt: 'Brand Logo',
  },
];

export function LogoTicker() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="w-full overflow-hidden bg-white py-10">
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-ticker-track {
          animation: logo-scroll 28s linear infinite;
          will-change: transform;
        }
        .logo-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24"
          style={{
            background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)',
          }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24"
          style={{
            background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)',
          }}
        />

        <div className="flex overflow-hidden">
          <div className="logo-ticker-track flex shrink-0 items-center gap-0">
            {doubled.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{ width: 232, flexShrink: 0 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={50}
                  decoding="async"
                  loading="lazy"
                  style={{ display: 'inline-block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
