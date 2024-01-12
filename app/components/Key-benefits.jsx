export default function BenefitsSection() {
  return (
    <div className="bg-zinc-100 self-stretch w-full pt-4 pb-12 px-16 max-md:max-w-full max-md:px-5">
      <div className="grid lg:grid-cols-2 lg:gap-16 pt-24">
        <div>
          <div className="max-md:max-w-full">
            <h3 className="text-zinc-800 lg:text-5xl md:text-6xl sm:text-4xl font-bold leading-snug mb-6 antialiased">
              Affordable, Quick, and Dust-Free
            </h3>
            <p className="text-lightgrey text-base mb-6 font-semibold antialiased">
              Our revolutionary underfloor heating system offers affordability,
              quick installation, a dust-free process, and zero floor build-up.
            </p>
            <p className="text-lightgrey text-base font-semibold antialiased">
              Experience the most comfortable and uniform level of warmth with
              our Low Temperature Heating system.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-flow-row gap-8 mt-8">
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
          <div className="flex flex-col items-stretch ml-16 max-md:w-full max-md:ml-0">
            <picture>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35d7dfe2b79fa653943033a806866a3c5182b2eb616a8fe989d5740f00ba3bfa?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                className="aspect-[0.76] object-contain object-center w-full overflow-hidden max-w-[360px]"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
