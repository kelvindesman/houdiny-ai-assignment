import React from 'react';

interface RatingItem {
  value: number;
  label: string;
  average: number;
  color: string;
  max: number;
}

const ratings: RatingItem[] = [
  { value: 9.5, label: 'Usability', average: 8.5, color: '#0874FC', max: 10 },
  { value: 9.2, label: 'Personalization', average: 8.0, color: '#B74BFF', max: 10 },
  { value: 9.3, label: 'Deliverability', average: 7.8, color: '#FFB703', max: 10 },
];

function CircularRating({
  value,
  color,
  max = 10,
}: {
  value: number;
  color: string;
  max?: number;
}) {
  const radius = 47.5;
  const circumference = 2 * Math.PI * radius;
  const progress = value / max;
  const dashOffset = -(circumference * progress);

  return (
    <svg className="h-full w-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
      {/* Trail */}
      <path
        d={`M 50,50 m 0,-${radius} a ${radius},${radius} 1 1 1 0,${radius * 2} a ${radius},${radius} 1 1 1 0,-${radius * 2}`}
        fillOpacity="0"
        strokeWidth="5"
        style={{
          stroke: '#f3f3f3',
          strokeLinecap: 'butt',
          strokeDasharray: `${circumference}px ${circumference}px`,
          strokeDashoffset: '0px',
        }}
      />
      {/* Progress */}
      <path
        d={`M 50,50 m 0,-${radius} a ${radius},${radius} 1 1 1 0,${radius * 2} a ${radius},${radius} 1 1 1 0,-${radius * 2}`}
        fillOpacity="0"
        strokeWidth="5"
        style={{
          stroke: color,
          strokeLinecap: 'butt',
          transitionDuration: '0.1s',
          strokeDasharray: `${circumference}px ${circumference}px`,
          strokeDashoffset: `${dashOffset}px`,
        }}
      />
      {/* Text — counter-rotate to appear upright */}
      <text
        x="50"
        y="50"
        style={{
          fill: color,
          fontSize: '24px',
          transform: 'rotate(90deg)',
          transformOrigin: '50% 50%',
          textAnchor: 'middle',
          dominantBaseline: 'central',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
        }}
      >
        {value}
      </text>
    </svg>
  );
}

export function RatingsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
          style={{ color: '#1b1f3c' }}
        >
          User Ratings
        </h2>
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
          {ratings.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <div className="h-32 w-32">
                <CircularRating value={item.value} color={item.color} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#1b1f3c' }}>
                {item.label}
              </h3>
              <p className="text-sm" style={{ color: '#6f6c90' }}>
                Email Marketing Average : {item.average.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
