import NavDesktop from "../components/nav-desktop";

export default function InstallationPage() {
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
          Installation Process
        </div>
        <div className="relative text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-semibold lg:w-3/6 leading-10 mt-6 mb-20 max-md:max-w-full max-md:mb-10">
          Retrofitting Your Space with Underfloor Heating
        </div>
      </div>
      <div>
        <div className="w-full bg-zinc-800 py-16 pb-40 antialiased">
          <div className="text-white text-center text-4xl lg:w-9/12 mx-auto font-bold leading-10 mt-14 max-md:max-w-full max-md:mt-10">
            <h3 className="text-white text-center lg:text-4xl md:text-3xl sm:text-xl font-semibold px-8">
              Streamlined the installation process to make upgrading to
              underfloor heating a hassle-free and efficient experience
            </h3>
          </div>
          <div className="lg:w-11/12 mx-auto mt-16">
            <div className="grid lg:grid-cols-3 lg:gap-8 md:gap-16 sm:gap-16 lg:mt-16 px-4">
              <div>
                <div>
                  <picture>
                    <img
                      className="rounded-md w-full object-cover"
                      src="./installation/step-one.jpg"
                      alt=""
                    />
                  </picture>
                  <h4 className="text-white lg:text-base md:text-xl sm:text-xl lg:min-h-6  font-semibold leading-6 mt-3">
                    Step One: Create tightly routed grooves in the floor using
                    our Concrete Milling Machine
                  </h4>
                  <p className="text-zinc-300 lg:text-sm md:text-base sm:text-base font-medium mt-2">
                    Lay the underfloor heating pipes into the created channels
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <picture>
                    <img
                      className="rounded-md w-full object-cover"
                      src="./installation/step-two.jpg"
                      alt=""
                    />
                  </picture>
                  <h4 className="text-white lg:text-base md:text-xl sm:text-xl lg:min-h-5 font-semibold leading-6 mt-3">
                    Step two: Connect the heating system to the primary heat
                    source
                  </h4>
                  <p className="text-zinc-300 lg:text-sm md:text-base sm:text-base font-medium mt-2">
                    Test the entire underfloor heating system for leaks,
                    verifying temperature control functionality
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <picture>
                    <img
                      className="rounded-md w-full object-cover"
                      src="./installation/step-three.jpg"
                      alt=""
                    />
                  </picture>
                  <h4 className="text-white lg:text-base md:text-xl sm:text-xl lg:min-h-5 font-semibold leading-6 mt-3">
                    Step Three: Enjoy the energy-efficient and eco-friendly
                    heating system
                  </h4>
                  <p className="text-zinc-300 lg:text-sm md:text-base sm:text-base font-medium mt-2">
                    Experience the warmth within in every corner of the room
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-8/12 md:w-11/12 sm:w-11/12 mx-auto">
            <h5 className="text-white lg:text-3xl md:text-3xl sm:text-lg text-center font-medium mt-16">
              We rigorously test the entire underfloor heating system. This
              includes checking for leaks, verifying temperature control
              functionality, and ensuring that every aspect operates at peak
              performance
            </h5>
          </div>
        </div>
        <div className="">KKKK</div>
      </div>
    </div>
  );
}
