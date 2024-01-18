export default function AboutUs() {
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
        <div className="relative text-white lg:w-[60%] md:w-full sm:w-full lg:text-6xl md:text-5xl sm:text-5xl font-bold leading-[72px] lg:mt-24 md:mt-28 sm:mt-28 max-md:max-w-full">
          Revolutionising Underfloor Heating
        </div>
        <div className="relative text-white lg:w-[60%] md:w-full sm:w-full lg:text-4xl md:text-2xl sm:text-2xl xs:text-2xl font-semibold leading-10 mt-6 mb-20 max-md:max-w-full max-md:mb-10">
          Where expertise meets innovation in plumbing
        </div>
      </div>
      <div className="w-full bg-zinc-800 py-32 lg:px-20 md:px-16 sm:px-6 antialiased">
        <div className="self-stretch max-md:max-w-full">
          <h3 className="text-white lg:text-5xl md:text-5xl sm:text-4xl lg:w-[70%] font-bold">
            We are Plumbers with over 40 years experience
          </h3>
          <h4 className="text-white lg:text-2xl md:text-2xl sm:text-xl font-semibold lg:mt-8 md:mt-8 sm:mt-4">
            Our expertise meets innovation in plumbing and underfloor heating
            solutions. With a legacy of over 40 years in the industry, we take
            pride in being your trusted partner for superior home comfort and
            efficient plumbing services.
          </h4>
        </div>
        <div className="lg:mt-48 md:mt-36 sm:mt-24">
          <h3 className="text-white text-center lg:text-6xl md:text-5xl sm:text-4xl font-semibold">
            Why Choose Us
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 lg:mt-8 md:mt-8 sm:mt-4 gap-6">
          <div className="bg-white rounded-xl lg:p-12 md:p12 sm:p-6">
            <div>
              <O1Icon />
            </div>
            <div>
              <h4 className="text-neutral-800 lg:text-4xl md:text-3xl sm:text-2xl mt-8 font-semibold">
                Unmatched Expertise
              </h4>
              <p className="text-neutral-700 lg:text-2xl md:text-2xl sm:text-xl lg:mt-12 md:mt-8 sm:mt-6 lg:min-h-80 md:min-h-80 sm:min-h-96 font-semibold">
                With a combined experience of over 40 years, our team consists
                of fully qualified plumbers who bring a wealth of knowledge to
                every project. We've seen the evolution of plumbing technology
                and have honed our skills to stay ahead of the curve.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-secondary rounded-xl lg:p-12 md:p12 sm:p-6">
              <div>
                <O2Icon />
              </div>
              <div>
                <h4 className="text-white lg:text-4xl md:text-3xl sm:text-2xl mt-8 font-semibold">
                  Integrated Solutions
                </h4>
                <p className="text-white text-2xl lg:text-2xl md:text-2xl sm:text-xl lg:mt-12 md:mt-8 sm:mt-6 lg:min-h-80 md:min-h-80 sm:min-h-96 font-semibold">
                  As full-service plumbers, we&apos;re not just about fixing
                  leaks and installing pipes. We&apos;re your complete solution
                  for underfloor heating transformations. Our ability to
                  seamlessly integrate underfloor heating with our plumbing
                  expertise sets us apart, offering you a holistic approach to
                  home comfort.
                </p>
              </div>
            </div>
          </div>
          <div>CCC</div>
          <div>DDD</div>
        </div>
      </div>
    </div>
  );
}

function O1Icon() {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41" cy="41" r="40" stroke="#080808" stroke-width="2" />
      <path
        d="M46.0142 26.9091V56H39.8636V32.7471H39.6932L33.0312 36.9233V31.4687L40.233 26.9091H46.0142Z"
        fill="#0C0C0C"
      />
    </svg>
  );
}
function O2Icon() {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41" cy="41" r="40" stroke="white" stroke-width="2" />
      <path
        d="M30.3583 56V51.5682L40.7134 41.9801C41.5941 41.1278 42.3327 40.3608 42.9293 39.679C43.5354 38.9971 43.9947 38.3295 44.3072 37.6761C44.6197 37.0132 44.7759 36.2983 44.7759 35.5312C44.7759 34.679 44.5818 33.9451 44.1935 33.3295C43.8053 32.7045 43.275 32.2263 42.6026 31.8949C41.9303 31.554 41.168 31.3835 40.3157 31.3835C39.4255 31.3835 38.649 31.5634 37.9862 31.9233C37.3233 32.2831 36.8119 32.7992 36.4521 33.4716C36.0922 34.1439 35.9123 34.9441 35.9123 35.8721H30.0742C30.0742 33.9687 30.5051 32.3163 31.3668 30.9148C32.2286 29.5132 33.436 28.429 34.989 27.6619C36.542 26.8949 38.3318 26.5114 40.3583 26.5114C42.4416 26.5114 44.2551 26.8807 45.7987 27.6193C47.3517 28.3485 48.5591 29.3617 49.4208 30.6591C50.2826 31.9564 50.7134 33.4432 50.7134 35.1193C50.7134 36.2178 50.4956 37.3021 50.06 38.3721C49.6339 39.4422 48.8716 40.6307 47.7731 41.9375C46.6746 43.2348 45.1263 44.7926 43.1282 46.6108L38.881 50.7727V50.9716H51.0969V56H30.3583Z"
        fill="white"
      />
    </svg>
  );
}
