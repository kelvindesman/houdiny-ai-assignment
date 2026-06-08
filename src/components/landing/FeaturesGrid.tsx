'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tabs = [
  {
    id: 1,
    label: 'AI Concierge',
    iconUrl: 'https://houdiny.ai/_next/static/media/featureIcon1.e75269f1.svg',
    heading: 'Book demos while you sleep',
    subheading: 'Your AI sales rep, always on',
    body: "Houdiny's AI Concierge engages every inbound lead instantly — qualifying, answering objections, and booking calendar slots without a human in the loop. No more chasing, no more delays.",
    highlight: 'Respond to every lead in under 3 seconds.',
    screenshot: 'https://houdiny.ai/_next/static/media/featureDetailImg1.1c7789ca.png',
  },
  {
    id: 2,
    label: 'Lead Scoring',
    iconUrl: 'https://houdiny.ai/_next/static/media/featureIcon2.2299dbd6.svg',
    heading: 'Focus on leads that close',
    subheading: 'Prioritize ruthlessly',
    body: 'Every conversation is scored in real time. Budget, timeline, authority, and need are extracted automatically so your sales team spends time only on the highest-intent prospects.',
    highlight: 'Cut time-to-qualified-pipeline by 60%.',
    screenshot: 'https://houdiny.ai/_next/static/media/featureDetailImg1.1c7789ca.png',
  },
  {
    id: 3,
    label: 'Smart Scheduling',
    iconUrl: 'https://houdiny.ai/_next/static/media/featureIcon3.ece5e9f9.svg',
    heading: 'Zero back-and-forth scheduling',
    subheading: 'Calendar sync, done right',
    body: "Houdiny connects to your reps' calendars and books meetings directly — accounting for time zones, buffer time, and round-robin assignment. Leads pick a slot; it just works.",
    highlight: 'Eliminate scheduling friction entirely.',
    screenshot: 'https://houdiny.ai/_next/static/media/featureDetailImg1.1c7789ca.png',
  },
  {
    id: 4,
    label: 'CRM Sync',
    iconUrl: 'https://houdiny.ai/_next/static/media/featureIcon4.40570e5f.svg',
    heading: 'Your CRM, always up to date',
    subheading: 'Automatic data capture',
    body: 'Every lead detail, qualification answer, and meeting note flows directly into your CRM. No manual data entry, no lost context — just clean records your team can act on.',
    highlight: 'Save 5+ hours of admin work per rep per week.',
    screenshot: 'https://houdiny.ai/_next/static/media/featureDetailImg1.1c7789ca.png',
  },
  {
    id: 5,
    label: 'Analytics',
    iconUrl: 'https://houdiny.ai/_next/static/media/featureIcon5.30448178.svg',
    heading: "See exactly what's working",
    subheading: 'Pipeline intelligence',
    body: 'Track conversion rates at every stage — from first message to booked demo to closed deal. Spot drop-off points, A/B test messaging, and compound improvements over time.',
    highlight: 'Turn your funnel data into a growth engine.',
    screenshot: 'https://houdiny.ai/_next/static/media/featureDetailImg1.1c7789ca.png',
  },
];

export function FeaturesGrid() {
  const [activeId, setActiveId] = useState(1);
  const active = (tabs.find((t) => t.id === activeId) ?? tabs[0])!;

  return (
    <section style={{ backgroundColor: '#f8faff' }} className="w-full px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#ffb703' }}
          >
            Everything you need
          </p>
          <h2
            className="mb-4 text-4xl leading-tight font-bold md:text-5xl"
            style={{ color: '#1b1f3c' }}
          >
            The AI-powered sales stack, <span style={{ color: '#237ff3' }}>built for speed</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: '#6f6c90' }}>
            From first touch to booked demo — Houdiny handles the entire top-of-funnel so your team
            can focus on closing.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2 rounded-2xl p-2"
          style={{ backgroundColor: '#e8edf8' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200"
              style={
                activeId === tab.id
                  ? {
                      backgroundColor: '#ffffff',
                      color: '#1b1f3c',
                      boxShadow: '0 2px 8px rgba(27,31,60,0.12)',
                    }
                  : { color: '#6f6c90' }
              }
            >
              <Image src={tab.iconUrl} alt={tab.label} width={18} height={18} unoptimized />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          className="grid gap-0 overflow-hidden rounded-3xl md:grid-cols-2"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 32px rgba(27,31,60,0.08)',
          }}
        >
          {/* Copy — left col */}
          <div className="flex flex-col justify-center p-10 md:p-14">
            <p
              className="mb-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: '#ffb703' }}
            >
              {active.subheading}
            </p>
            <h3 className="mb-4 text-3xl leading-snug font-bold" style={{ color: '#1b1f3c' }}>
              {active.heading}
            </h3>
            <p className="mb-6 text-base leading-relaxed" style={{ color: '#6f6c90' }}>
              {active.body}
            </p>
            <p className="mb-8 text-sm font-semibold" style={{ color: '#237ff3' }}>
              {active.highlight}
            </p>
            <Link
              href="/book-demo"
              className="self-start rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#237ff3' }}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Screenshot — right col */}
          <div
            className="flex items-center justify-center p-10"
            style={{ backgroundColor: '#f0f4ff' }}
          >
            <div
              className="w-full overflow-hidden rounded-2xl"
              style={{ backgroundColor: '#e2e8f7' }}
            >
              <Image
                src={active.screenshot}
                alt={`${active.label} screenshot`}
                width={600}
                height={420}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
