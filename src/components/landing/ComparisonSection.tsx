/* eslint-disable @next/next/no-img-element */

const checkItems = ['One source of leads', 'One sending infrastructure', 'One outbound workflow'];

const highlightItem = 'One system for growth';

export function ComparisonSection() {
  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1b1f3c] sm:text-4xl">
          How modern teams run outbound today
        </h2>

        <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
          {/* Old Stack */}
          <div className="flex flex-1 flex-col items-center">
            <h3 className="mb-4 text-center text-xl font-bold text-[#1b1f3c]">Old Stack</h3>
            <div className="flex w-full justify-center">
              <img
                alt="Old outbound stack"
                src="https://houdiny.ai/_next/static/media/newStackImg.78817c85.svg"
                width={585}
                height={537}
                className="h-auto max-w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* With Houdiny AI */}
          <div className="flex flex-1 flex-col items-center">
            <h3 className="mb-4 flex items-center gap-2 text-center text-xl font-bold text-[#1b1f3c]">
              With{' '}
              <img
                alt="houdinyIcon"
                src="https://houdiny.ai/_next/static/media/houdinyIcon-old.a117383a.svg"
                width={48}
                height={48}
                className="inline-block align-middle"
                loading="lazy"
                decoding="async"
              />{' '}
              Houdiny AI
            </h3>

            <div className="mt-2 flex w-full flex-col gap-3">
              {/* Regular check items */}
              {checkItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#237ff3]/20 bg-[#237ff3]/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0"
                      width="1em"
                      height="1em"
                      className="text-[#237ff3]"
                    >
                      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-[#1b1f3c]">{item}</span>
                </div>
              ))}

              {/* Highlight item */}
              <div className="mt-1 flex items-center gap-3 rounded-xl bg-[#237ff3] px-5 py-4 shadow-md">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0"
                    width="1em"
                    height="1em"
                    className="text-white"
                  >
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
                  </svg>
                </span>
                <span className="text-base font-semibold text-white">{highlightItem}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
