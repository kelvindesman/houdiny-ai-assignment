import type { Metadata } from 'next';
import { HoudinyHeader } from '@/components/landing/HoudinyHeader';
import { HoudinyHero } from '@/components/landing/HoudinyHero';
import { LogoTicker } from '@/components/landing/LogoTicker';
import { RatingsSection } from '@/components/landing/RatingsSection';
import { SocialProof } from '@/components/landing/SocialProof';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { Testimonials } from '@/components/landing/Testimonials';
import { ComparisonSection } from '@/components/landing/ComparisonSection';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { CaseStudies } from '@/components/landing/CaseStudies';
import { TrialCTA } from '@/components/landing/TrialCTA';
import { FAQSection } from '@/components/landing/FAQSection';
import { LandingFooter } from '@/components/landing/LandingFooter';

export const metadata: Metadata = {
  title: 'Houdiny — AI Sales Concierge',
  description:
    'Houdiny is an AI-powered sales concierge that qualifies leads, books demos, and closes deals while you sleep.',
};

export default function Home() {
  return (
    <>
      <HoudinyHeader />
      <main>
        <HoudinyHero />
        <LogoTicker />
        <RatingsSection />
        <SocialProof />
        <FeaturesSection />
        <Testimonials />
        <ComparisonSection />
        <FeaturesGrid />
        <CaseStudies />
        <TrialCTA />
        <FAQSection />
      </main>
      <LandingFooter />
    </>
  );
}
