'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does Houdiny find leads and emails?',
    answer:
      'Houdiny identifies prospects through LinkedIn and other data sources, enriches them with verified business emails, and prepares them for outreach campaigns automatically.',
  },
  {
    question: 'Do I need technical knowledge to use Houdiny?',
    answer:
      'No. Houdiny is designed to run outbound campaigns with minimal setup. Once your email and LinkedIn accounts are connected, campaigns can be launched in minutes.',
  },
  {
    question: 'Is it safe to run outreach campaigns with Houdiny?',
    answer:
      'Yes. Houdiny includes built-in safeguards such as email warm-up, sending limits, and account health protections to ensure campaigns run safely and protect your domain reputation.',
  },
  {
    question: 'Can I try Houdiny before paying?',
    answer:
      'Yes. You can test Houdiny for 7 days completely free. No credit card is required, and you receive leads to launch your first campaign immediately.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        minHeight: 100,
        opacity: 1,
        transform: 'translateY(0px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
    >
      <div className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h2 className="text-4xl font-bold" style={{ color: '#1b1f3c' }}>
              FAQ
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b" style={{ borderColor: '#e5e7eb' }}>
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center gap-3 py-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{
                        color: '#237ff3',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg
                        fill="currentColor"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                      </svg>
                    </span>
                    <span className="text-base font-semibold" style={{ color: '#1b1f3c' }}>
                      {faq.question}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="pb-5 pl-9">
                      <p className="text-sm leading-relaxed" style={{ color: '#6f6c90' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export { FAQSection };
