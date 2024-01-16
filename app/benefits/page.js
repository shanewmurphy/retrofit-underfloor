export default function benefitsPage() {
  return (
    <div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[500px] w-full items-stretch px-16 py-12 max-md:max-w-full max-md:px-5">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet="./Hero/hero-1280.jpg"
          ></source>
          <source
            media="(min-width: 1240px)"
            srcSet="./Hero/hero-1280.jpg"
          ></source>
          <source
            media="(min-width: 620px)"
            srcSet="./Hero/Hero-mobile-620.jpg"
          ></source>
          <img
            className="absolute h-full w-full object-cover lg:object-center sm:object-right inset-0"
            src="./Hero/Hero-mobile-620.jpg"
            alt=""
          />
        </picture>
        <div className="relative text-white lg:text-6xl md:text-5xl sm:text-5xl font-bold leading-[72px] lg:mt-24 md:mt-28 sm:mt-28 max-md:max-w-full">
          Experience Warmth
        </div>
        <div className="relative text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-semibold lg:w-9/12 leading-10 mt-6 mb-20 max-md:max-w-full max-md:mb-10">
          Discover the benefits of our underfloor heating system and enjoy a
          comfortable home all year round.
        </div>
      </div>
    </div>
  );
}
