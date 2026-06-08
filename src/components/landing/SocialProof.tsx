'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: (
      <>
        {' '}
        <span className="font-semibold" style={{ color: '#237ff3' }}>
          Outbound is still one of the most reliable B2B growth channels.
        </span>{' '}
        Houdiny finally gave us a system that makes execution simple and effective.{' '}
      </>
    ),
    name: 'Teddy',
    role: 'Co-Founder at Tech Startup',
    image: 'https://houdiny.ai/_next/static/media/customer-review-1.4601f39d.svg',
  },
  {
    id: 2,
    quote: (
      <>
        {' '}
        We replaced multiple outbound tools with Houdiny. Campaigns are{' '}
        <span className="font-semibold" style={{ color: '#237ff3' }}>
          faster to launch
        </span>{' '}
        and far{' '}
        <span className="font-semibold" style={{ color: '#237ff3' }}>
          easier to manage
        </span>
        , with{' '}
        <span className="font-semibold" style={{ color: '#237ff3' }}>
          better results.
        </span>{' '}
      </>
    ),
    name: 'Maximilian',
    role: 'CEO at ISS GmbH Strempel',
    image: 'https://houdiny.ai/_next/static/media/customer-review-2.b247fbb2.svg',
  },
  {
    id: 3,
    quote: (
      <>
        {' '}
        Most tools promise personalization but still sound generic. Houdiny helped us{' '}
        <span className="font-semibold" style={{ color: '#237ff3' }}>
          send messages that actually feel human
        </span>{' '}
        and get replies.{' '}
      </>
    ),
    name: 'Vika',
    role: 'CEO - B2B Makeup Artist',
    image: 'https://houdiny.ai/_next/static/media/customer-review-3.7989a739.svg',
  },
  {
    id: 4,
    quote: (
      <>
        As a founder,{' '}
        <span className="font-semibold" style={{ color: '#237ff3' }}>
          I care about outcomes
        </span>
        , not managing tools. Houdiny runs outbound in the background so I can focus on closing
        deals.
      </>
    ),
    name: 'Maxim',
    role: 'AdJet - Marketing Agency',
    image: 'https://houdiny.ai/_next/static/media/customer-review-4.320b263f.svg',
  },
  {
    id: 5,
    quote: (
      <>
        {' '}
        We tested nearly every outbound platform on the market. Houdiny was the only one that truly
        combined{' '}
        <span className="font-semibold" style={{ color: '#237ff3' }}>
          lead quality, execution, and clarity
        </span>
        .{' '}
      </>
    ),
    name: 'Brian',
    role: 'VP of Business Development',
    image: 'https://houdiny.ai/_next/static/media/customer-review-5.8c402e00.svg',
  },
];

const SLIDES_PER_VIEW = 2;
const TOTAL = testimonials.length;

function ChevronLeft() {
  return (
    <svg
      fill="currentColor"
      height="14"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      fill="currentColor"
      height="14"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div
      className="flex h-full flex-col justify-between rounded-2xl p-8"
      style={{
        backgroundColor: '#f8f9ff',
        border: '1px solid #e8eaf6',
        minHeight: 280,
      }}
    >
      {/* Quote text */}
      <p
        className="flex-1 text-base leading-relaxed"
        style={{ color: '#1b1f3c', fontStyle: 'normal' }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author + avatar row */}
      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <h4 className="text-base font-semibold" style={{ color: '#1b1f3c' }}>
            {testimonial.name}
          </h4>
          <p className="mt-0.5 text-sm" style={{ color: '#6f6c90' }}>
            {testimonial.role}
          </p>
        </div>
        <Image
          alt="customer"
          src={testimonial.image}
          width={125}
          height={120}
          loading="lazy"
          decoding="async"
          unoptimized
          className="shrink-0 object-contain"
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
  );
}

export function SocialProof() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TOTAL) % TOTAL);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TOTAL);
  }, []);

  // Build visible indices (wrap around)
  const visibleIndices = Array.from({ length: SLIDES_PER_VIEW }, (_, i) => (current + i) % TOTAL);

  return (
    <section
      className="w-full py-16 sm:py-20"
      style={{
        minHeight: 100,
        opacity: 1,
        transform: 'translateY(0px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2
          className="mb-10 text-center leading-tight font-bold tracking-tight"
          style={{
            color: '#1b1f3c',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
          }}
        >
          Used by 10,000 businesses to generate $150M+ in Revenue
        </h2>

        {/* Slider */}
        <div className="relative">
          {/* Left arrow */}
          <div className="absolute top-1/2 left-0 z-10 -translate-x-4 -translate-y-1/2 sm:-translate-x-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-all hover:opacity-80"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                color: '#1b1f3c',
              }}
            >
              <ChevronLeft />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2">
            {visibleIndices.map((idx, pos) => (
              <div key={`${idx}-${pos}`} className="w-full">
                <TestimonialCard testimonial={testimonials[idx]!} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <div className="absolute top-1/2 right-0 z-10 translate-x-4 -translate-y-1/2 sm:translate-x-8">
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-all hover:opacity-80"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                color: '#1b1f3c',
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        <ul
          className="mt-8 flex items-center justify-center gap-2"
          role="list"
          aria-label="Slide indicators"
        >
          {testimonials.map((t, idx) => (
            <li key={t.id}>
              <button
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className="block rounded-full transition-all"
                style={{
                  width: idx === current ? 20 : 8,
                  height: 8,
                  backgroundColor: idx === current ? '#237ff3' : '#d1d5db',
                  border: 'none',
                  padding: 0,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
