/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Dustin Wandelt',
    role: 'Founder at Di Luma',
    image: 'https://houdiny.ai/_next/static/media/testimonialImg1.12615c3e.png',
    highlight: "Houdiny's AI writes messages that feel genuinely human.",
    quote: 'Replies increased immediately without changing our targeting.',
    rating: '4.9',
    stars: 5,
  },
  {
    name: 'Rishi Rias',
    role: 'Director at Dignitas Digital',
    image: 'https://houdiny.ai/_next/static/media/testimonialImg2.b89653a7.png',
    highlight:
      'We built LinkedIn lead lists directly in Houdiny and enriched them with verified business emails.',
    quote: 'No external tools needed anymore.',
    rating: '4.7',
    stars: 5,
  },
  {
    name: 'Shafqat Mahmood',
    role: 'CEO at Digital OORT',
    image: 'https://houdiny.ai/_next/static/media/testimonialImg3.5002d0d1.png',
    highlight: '',
    quote:
      'We connected multiple inboxes and scaled outreach with full confidence. Warm up runs automatically and deliverability stays consistently high."',
    rating: '4.6',
    stars: 5,
  },
];

function StarIcon() {
  return (
    <img
      alt="starIcon"
      src="https://houdiny.ai/_next/static/media/starIcon.83782cbe.svg"
      width={20}
      height={20}
      loading="lazy"
    />
  );
}

function ChevronLeft() {
  return (
    <svg
      fill="currentColor"
      height="22"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      fill="currentColor"
      height="22"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
    </svg>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const testimonial = TESTIMONIALS[current]!;

  return (
    <section className="w-full overflow-hidden py-16 md:py-24" style={{ background: '#f8faff' }}>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Quote icon */}
        <div className="mb-10 flex justify-center">
          <img
            alt="quoteIcon"
            src="https://houdiny.ai/_next/static/media/quoteIcon.b01fd66b.svg"
            width={154}
            height={109}
            loading="lazy"
          />
        </div>

        {/* Slider area */}
        <div className="relative flex items-center gap-4">
          {/* Prev button — desktop */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e5e9ef] bg-white text-[#1b1f3c] shadow-sm transition-colors hover:border-[#237ff3] hover:bg-[#237ff3] hover:text-white md:flex"
          >
            <ChevronLeft />
          </button>

          {/* Card */}
          <div className="flex-1 overflow-hidden">
            <div
              key={current}
              className="w-full rounded-2xl border border-[#e5e9ef] bg-white shadow-sm"
              style={{ animation: 'fadeSlide 0.4s ease-out' }}
            >
              <div className="flex flex-col gap-0 md:flex-row">
                {/* Left: avatar + name (desktop) */}
                <div className="flex shrink-0 flex-col items-center justify-center gap-4 border-b border-[#e5e9ef] px-8 py-10 md:w-64 md:border-r md:border-b-0">
                  <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full ring-4 ring-[#237ff3]/10">
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      width={120}
                      height={120}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="hidden text-center md:block">
                    <h4 className="text-base leading-snug font-semibold text-[#1b1f3c]">
                      {testimonial.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-[#6f6c90]">{testimonial.role}</p>
                  </div>
                </div>

                {/* Right: quote content */}
                <div className="flex flex-1 flex-col justify-between gap-6 px-8 py-10">
                  {/* Quote text */}
                  <div className="flex-1">
                    {testimonial.highlight ? (
                      <p className="mb-3 text-lg leading-relaxed font-semibold text-[#1b1f3c] md:text-xl">
                        {testimonial.highlight}
                      </p>
                    ) : null}
                    <span className="text-base leading-relaxed text-[#47525d] md:text-lg">
                      {testimonial.quote}
                    </span>
                  </div>

                  {/* Footer: name (mobile) + rating */}
                  <div className="flex flex-col gap-4 border-t border-[#e5e9ef] pt-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Name — shown on mobile here, hidden on desktop (shown in left panel) */}
                    <div className="md:hidden">
                      <h4 className="text-sm font-semibold text-[#1b1f3c]">{testimonial.name}</h4>
                      <p className="text-xs text-[#6f6c90]">{testimonial.role}</p>
                    </div>
                    {/* Desktop: also show name in footer for symmetry */}
                    <div className="hidden md:block">
                      <h4 className="text-sm font-semibold text-[#1b1f3c]">{testimonial.name}</h4>
                      <p className="text-xs text-[#6f6c90]">{testimonial.role}</p>
                    </div>

                    {/* Stars + rating */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#1b1f3c]">
                        ( {testimonial.rating} )
                      </span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next button — desktop */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e5e9ef] bg-white text-[#1b1f3c] shadow-sm transition-colors hover:border-[#237ff3] hover:bg-[#237ff3] hover:text-white md:flex"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e9ef] bg-white text-[#1b1f3c] transition-colors hover:border-[#237ff3] hover:bg-[#237ff3] hover:text-white"
          >
            <ChevronLeft />
          </button>
          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? 'bg-[#237ff3]' : 'bg-[#e5e9ef]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e9ef] bg-white text-[#1b1f3c] transition-colors hover:border-[#237ff3] hover:bg-[#237ff3] hover:text-white"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Desktop dots */}
        <div className="mt-6 hidden items-center justify-center gap-2 md:flex">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? 'bg-[#237ff3]' : 'bg-[#e5e9ef]'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
