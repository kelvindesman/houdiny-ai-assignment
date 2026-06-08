/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const features = [
  {
    id: 1,
    imagePosition: 'right' as const,
    heading: 'Generate leads that actually convert',
    description:
      'Houdiny finds the leads, enriches them with verified emails, and identifies buyer intent so you focus on the hottest opportunities.',
    detail:
      'Instead of working through long, unqualified lists, Houdiny automatically scores every lead based on fit and intent. You see who matters before you start outreach, not after.',
    imageSrc: 'https://houdiny.ai/_next/static/media/featureCardImg1.f86aa94a.svg',
  },
  {
    id: 2,
    imagePosition: 'left' as const,
    heading: 'Your entire outbound stack in one platform',
    description:
      'Houdiny consolidates lead generation, outreach, warm up, and reporting into one system.',
    detail:
      'Sales teams launch campaigns faster with fewer tools and lower operational overhead. Everything runs from a single workflow built for scale and execution.',
    imageSrc: 'https://houdiny.ai/_next/static/media/featureCardImg2-old.4b7b2280.svg',
  },
  {
    id: 3,
    imagePosition: 'right' as const,
    heading: 'AI that writes real one to one emails',
    description: 'Houdiny generates messages that feel personally written for each prospect.',
    detail:
      'Every email is tailored to the company, role, and context. Prospects receive outreach that reads like a real human took the time to write it.',
    imageSrc: 'https://houdiny.ai/_next/static/media/featureCardImg3-old.927d85f8.svg',
  },
];

function FeatureCard({
  imagePosition,
  heading,
  description,
  detail,
  imageSrc,
  index,
}: (typeof features)[0] & { index: number }) {
  const isImageRight = imagePosition === 'right';

  return (
    <div
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Text side */}
      <div className="flex flex-1 flex-col gap-5 lg:max-w-[480px]">
        <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight text-[#1b1f3c] sm:text-[2rem] lg:text-[2.125rem]">
          {heading}
        </h2>
        <p className="text-base leading-relaxed text-[#6f6c90]">{description}</p>
        <div className="rounded-2xl bg-[#f8faff] px-5 py-4 text-sm leading-relaxed text-[#47525d]">
          {detail}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <button
            aria-label="Expand"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e9ef] bg-white text-lg font-semibold text-[#237ff3] shadow-sm transition-shadow hover:shadow-md"
          >
            +
          </button>
          <Link
            href="/book-demo"
            id={`home-btn-${7 + index + 1}`}
            className="inline-flex items-center justify-center rounded-full bg-[#237ff3] px-7 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#237ff3]/20 transition-all hover:bg-[#1a6dd4] hover:shadow-lg"
          >
            Start Free Trial
          </Link>
        </div>
      </div>

      {/* Image side */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative w-full max-w-[480px]">
          <img
            src={imageSrc}
            alt="featureCardImg"
            width={670}
            height={670}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-50/60 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-[#1b1f3c] sm:text-4xl lg:mb-20 lg:text-[2.5rem]">
          Better way for finding right customers
        </h2>

        {/* Feature cards */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
