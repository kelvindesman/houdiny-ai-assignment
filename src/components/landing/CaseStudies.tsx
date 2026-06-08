/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';

const TABS = [
  {
    label: 'SAAS',
    icon: 'https://houdiny.ai/_next/static/media/caseStudyBtnIcon1.1a697f46.svg',
    iconWidth: 30,
    iconHeight: 30,
  },
  {
    label: 'SMBs',
    icon: 'https://houdiny.ai/_next/static/media/caseStudyBtnIcon2.41e7091d.svg',
    iconWidth: 27,
    iconHeight: 24,
  },
  {
    label: 'Sales Team',
    icon: 'https://houdiny.ai/_next/static/media/caseStudyBtnIcon3.01ad1781.svg',
    iconWidth: 27,
    iconHeight: 27,
  },
  {
    label: 'Solo Entrepreneurs',
    icon: 'https://houdiny.ai/_next/static/media/caseStudyBtnIcon4.6dbe589a.svg',
    iconWidth: 24,
    iconHeight: 32,
  },
  {
    label: 'Startups',
    icon: 'https://houdiny.ai/_next/static/media/caseStudyBtnIcon5.9b61f7b7.svg',
    iconWidth: 24,
    iconHeight: 31,
  },
] as const;

const STATS = [
  { value: '3200', label: 'Connection requests' },
  { value: '21%', label: 'Response rate' },
  { value: '46', label: 'Demos booked' },
] as const;

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2
          className="mb-10 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
          style={{ color: '#1b1f3c' }}
        >
          Case Study
        </h2>

        {/* Tab buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {TABS.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className="flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg, #237ff3 0%, #1a6fd4 100%)',
                        color: '#ffffff',
                        boxShadow: '0 4px 15px rgba(35, 127, 243, 0.35)',
                      }
                    : {
                        background: '#f4f7fb',
                        color: '#1b1f3c',
                        border: '1px solid #e8edf5',
                      }
                }
              >
                <img
                  src={tab.icon}
                  alt="btnIcon"
                  width={tab.iconWidth}
                  height={tab.iconHeight}
                  style={{ display: 'inline-block' }}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main card */}
        <div
          className="relative mb-10 overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #0d1b3e 0%, #1b2d5e 50%, #0d1b3e 100%)',
            minHeight: 320,
          }}
        >
          {/* Background eclipse image */}
          <img
            src="https://houdiny.ai/_next/static/media/caseStudyBgEclipse2.63cd007a.png"
            alt="caseStudyBgEclipse"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 select-none"
            style={{ mixBlendMode: 'luminosity' }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
            {/* Left: text + CTA */}
            <div className="min-w-0 flex-1">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl" style={{ color: '#ffffff' }}>
                Predictable Demo Pipeline
              </h3>
              <p
                className="mb-8 text-base leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 480 }}
              >
                Selenacat GmbH struggled with low response rates and scattered outbound tools. After
                switching to Houdiny, they built targeted lead lists from LinkedIn and launched AI
                driven email and LinkedIn campaigns from one platform.
              </p>
              <Link
                href="/book-demo"
                className="inline-block rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #237ff3 0%, #1a6fd4 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(35, 127, 243, 0.4)',
                }}
              >
                Start Free Trial
              </Link>
            </div>

            {/* Right: illustration */}
            <div className="flex w-full flex-shrink-0 justify-center md:w-auto">
              <img
                src="https://houdiny.ai/_next/static/media/caseStudyImg1.7d756fce.svg"
                alt="Predictable Demo Pipeline graphic"
                width={529}
                height={364}
                className="h-auto max-w-full"
                style={{ maxWidth: 420 }}
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mb-16 flex flex-wrap justify-center gap-6 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span
                className="mb-1 text-4xl font-extrabold md:text-5xl"
                style={{ color: '#237ff3' }}
              >
                {stat.value}
              </span>
              <span className="text-sm font-medium" style={{ color: '#6f6c90' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom struggle section */}
        <div className="text-center">
          <h2
            className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl"
            style={{ color: '#1b1f3c' }}
          >
            Struggle of getting right customers
          </h2>
          <p
            className="mb-8 text-base leading-relaxed md:text-lg"
            style={{ color: '#6f6c90', maxWidth: 560, margin: '0 auto 2rem' }}
          >
            Outbound should create conversations, not chaos.
            <br />
            Most teams lose deals because their tools, data, and messaging are disconnected.
          </p>
          <div className="flex justify-center">
            <Link
              href="/book-demo"
              className="inline-block rounded-full px-8 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #237ff3 0%, #1a6fd4 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 15px rgba(35, 127, 243, 0.35)',
              }}
            >
              Get Easy Solution
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
