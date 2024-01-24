import NavDesktop from "../components/nav-desktop";
import ServiceOffer from "../components/service-offer";
import Testimonials from "../components/Testimonials";
import PromoTwo from "../components/Promo-Two";
import FAQ from "../components/FAQ";
export default function InstallationPage() {
  return (
    <div className="">
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
            alt="B&L Underfloor Heating & Plumbing Services, South East of Ireland"
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
            <h3 className="text-white text-center lg:text-4xl md:text-3xl sm:text-2xl font-semibold lg:px-8 md:px-8 sm:px-4">
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
                    Step Two: Connect the heating system to the primary heat
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
                      alt="B&L Underfloor Heating & Plumbing Services, South East of Ireland"
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
        <div className="w-11/12 my-32 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-24 md:gap-20 sm:gap-6">
            <div>
              <h3 className="text-zinc-800 lg:text-4xl md:text-5xl sm:text-3xl font-bold">
                Minimal Disruption with Our Installation Service
              </h3>
              <h4 className="font-semibold text-lightgrey lg:text-2xl md:text-2xl sm:text-xl lg:mt-6 md:mt-6 sm:mt-2">
                Installations can be completed quickly, usually within 3-5
                working days
              </h4>
              <p className="font-medium text-lightgrey text-base mt-4">
                The beauty of our method is that there&apos;s no need to remove
                or raise the existing screed. This non-invasive process ensures
                minimal disruption to your home.
              </p>
              <p className="font-medium text-lightgrey text-base mt-2">
                Additionally, our system is eco-friendly and energy-efficient,
                using very low water temperatures to provide a comfortable and
                uniform level of warmth.
              </p>
            </div>
            <div>
              <div className="relative">
                <picture>
                  <img
                    src="/installation/installation-pipe.jpg"
                    alt="B&L Underfloor Heating & Plumbing Services, South East of Ireland"
                    class="w-full h-full"
                  />
                </picture>
                <div class="absolute bottom-0 left-0 px-6 py-8">
                  <p class="text-white font-bold lg:text-4xl md:text-5xl sm:text-3xl">
                    Installation 3-5 days
                  </p>
                  <p className="text-white font-semibold lg:text-2xl md:text-3xl sm:text-xl">
                    No Need to Remove Existing Floor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 my-32 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-12 sm:gap-6">
            <div>
              <h3 className="text-zinc-800 lg:mt-7 lg:w-11/12 font-bold lg:text-4xl md:text-5xl sm:text-3xl">
                Customised Cutting Process for Optimal Results
              </h3>
            </div>
            <div>
              <p className="font-medium md:mt-2 sm:mt-0 text-lightgrey text-base">
                Our cutting process is tailored specifically to each site,
                ensuring optimal efficiency and results. With our bespoke
                approach, we are able to provide a customised solution that
                meets the unique needs. By utilising our concrete milling
                machine, we are able to create precise channels in existing
                floors without producing any minium dust.
              </p>
            </div>
          </div>
          <div className="w-full my-16 mx-auto">
            <div className="flex-col overflow-hidden self-center relative flex min-h-[420px] w-full max-w-[1400px] mt-20 px-20 py-12 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <picture>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bedb026f4cce104a0d1462e029b05f1a4f9b6b6ca8195922edc45a904926814?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="absolute rounded-md h-full w-full object-cover lg:object-center inset-0"
                  alt="B&L Underfloor Heating & Plumbing Services, South East of Ireland"
                />
              </picture>
              <div className="relative text-white lg:text-5xl md:text-6xl sm:text-3xl font-bold leading-[60px] lg:mt-32 md:mt-32 sm:mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                Quick and Affordable
              </div>
              <div className="relative text-white lg:text-2xl md:text-3xl sm:text-xl font-semibold leading-9 w-[689px] max-w-full mt-4 lg:mb-5">
                Contact us today to discuss how we can transform your space with
                our integrated underfloor heating and plumbing services
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ServiceOffer />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <PromoTwo />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <FAQ />
        </div>
      </div>
    </div>
  );
}
