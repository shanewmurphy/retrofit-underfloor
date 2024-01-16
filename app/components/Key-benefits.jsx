export default function BenefitsSection() {
  return (
    <div className="bg-zinc-100 self-stretch w-full pt-4 pb-36 px-16 max-md:max-w-full max-md:px-5">
      <div className="grid lg:grid-cols-2 lg:gap-16 pt-24">
        <div>
          <div className="max-md:max-w-full">
            <h3 className="text-zinc-800 lg:text-5xl md:text-6xl sm:text-4xl font-bold leading-snug mb-6 antialiased">
              Affordable, Quick, and Dust-Free
            </h3>
            <p className="text-lightgrey text-base mb-4 font-semibold antialiased">
              Our revolutionary underfloor heating system offers affordability,
              quick installation, a dust-free process, and zero floor build-up.
            </p>
            <p className="text-lightgrey text-base font-semibold antialiased">
              Experience the most comfortable and uniform level of warmth with
              our Low Temperature Heating system.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-flow-row gap-8 mt-6">
            <div>
              <div className="text-zinc-800 lg:text-lg md:text-xl sm:text-xl font-bold leading-7 whitespace-nowrap antialiased">
                No Sub-floor needed
              </div>
              <p className="text-sm sm:text-base font-medium text-lightgrey antialiased">
                Our underfloor heating system is an affordable solution that
                requires no sub-floor work.
              </p>
            </div>
            <div>
              <div className="text-zinc-800 lg:text-lg md:text-xl sm:text-xl font-bold leading-7 whitespace-nowrap">
                Quick Installation
              </div>
              <p className="text-sm sm:text-base font-medium text-lightgrey antialiased">
                Installations of our system can be completed in 3 - 5 working
                days.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <picture>
              <img
                loading="lazy"
                src="/floor-iq-machine-two.jpeg"
                className="object-cover h-full w-full lg:mt-0 sm:mt-8 rounded-md"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
