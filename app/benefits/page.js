"use client";

import PromoTwo from "../components/Promo-Two";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
export default function BenefitsPage() {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
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
        <div className="relative text-white lg:text-4xl md:text-2xl sm:text-2xl xs:text-2xl font-semibold lg:w-9/12 leading-10 mt-6 mb-20 max-md:max-w-full max-md:mb-10">
          Discover the benefits of our underfloor heating system and enjoy a
          comfortable home all year round.
        </div>
      </div>

      <div className="bg-zinc-800 w-full antialiased">
        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-6 sm:gap-2 lg:py-32 md:py-28 sm:py-16">
            <div>
              <h3 className="text-white lg:text-4xl md:text-4xl sm:text-xl font-bold">
                The Only Heating Source You Need for a Comfortable Indoor
                Climate
              </h3>
              <p className="text-base text-white mt-4">
                Our underfloor heating system serves as the primary heat source,
                providing the most comfortable and uniform level of warmth. With
                our system, you won&apos;t need any other heating systems.
              </p>
              <div className="grid lg:grid-cols-2 lg:mt-16 md:mt-8 sm:mt-8 gap-8">
                <div>
                  <h5 className="text-white font-semibold lg:text-xl">
                    Affordable
                  </h5>
                  <p className="text-white lg:text-sm">
                    No sub-floor work needed, making our underfloor heating
                    system a cost-effective choice.
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-semibold lg:text-xl">Quick</h5>
                  <p className="text-white lg:text-sm">
                    Installations takes 3-5 working days, saving you time and
                    hassle.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <picture>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a292608443015b4daa5a13c029081be3bc5c63125360598ff051fffb4d87d506?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="rounded-md object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-6 sm:gap-2 lg:py-32 md:py-28 sm:py-16">
            <div>
              <h3 className="text-white lg:text-4xl md:text-4xl sm:text-2xl font-bold">
                Energy Efficiency: Operating at Low Water Temperatures for Lower
                Energy Bills
              </h3>
              <p className="text-base text-white mt-4">
                Our underfloor heating system is designed to operate at very low
                water temperatures, making it highly energy efficient. By
                utilising the low temperature heating (LTH) technology, our
                system can easily integrate with existing heating systems,
                resulting in lower energy usage and reduced energy bills.
              </p>
            </div>
            <div>
              <picture>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/67d2c1a0d03701ce99eb7b2ea4bb004b15cf86876296e8b19c98c5eff03a25d9?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="aspect-[1.12] rounded-md object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-6 sm:gap-2 lg:py-32 md:py-28 sm:py-16">
            <div>
              <h3 className="text-white lg:text-4xl md:text-4xl sm:text-2xl font-bold">
                Quick and Disruptive-Free Installation Process
              </h3>
              <p className="text-base text-white mt-4">
                Our installation process is quick and efficient, ensuring
                minimal disruption to your space. With our concrete milling
                machine, we create tightly routed grooves into existing floor
                constructions, allowing for the installation of our certified
                water-based retro-fit underfloor heating system. This method
                eliminates the need for sub-floor work and produces zero dust
                buildup.
              </p>
              <div className="grid lg:grid-cols-2 lg:mt-16 md:mt-8 sm:mt-8 gap-8">
                <div>
                  <h5 className="text-white font-semibold lg:text-xl">
                    Minimal Disruption
                  </h5>
                  <p className="text-white lg:text-sm">
                    Our installation process takes only one working day,
                    providing you with a quick and hassle-free experience.
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-semibold lg:text-xl">
                    Efficient Solution
                  </h5>
                  <p className="text-white lg:text-sm">
                    Our system uses very low water temperatures, making it
                    energy-efficient and cost-effective.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <picture>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9586b6357879e19f83ba300402eb8bf1a677cc735447b4d4319d038b0afb5593?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="aspect-[0.98] rounded-md object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-6 sm:gap-2 lg:py-32 md:py-28 sm:py-12 sm:pb-40">
            <div>
              <h3 className="text-white lg:text-4xl md:text-4xl sm:text-2xl font-bold">
                Dustless Extraction for a Cleaner Installation Environment
              </h3>
              <p className="text-base text-white mt-4">
                Our concrete milling machine utilises dustless extraction,
                ensuring a clean and dust-free installation environment. With
                our system, you can enjoy the benefits of underfloor heating
                without the mess and hassle of traditional installation methods.
              </p>
            </div>
            <div className="relative">
              <picture>
                <img
                  loading="lazy"
                  src="/floor-iq-machine-two.jpeg"
                  className="object-cover relative h-full w-full lg:mt-0 sm:mt-8 rounded-md"
                  alt=""
                />
                <div>
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <button
                        type="button"
                        onClick={openModal}
                        className="rounded-md px-4 py-2 text-xl font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                      >
                        <PlayBtn />
                      </button>
                    </div>

                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={closeModal}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="lg:w-4/6 md:w-11/12 sm:w-11/12 transform overflow-hidden rounded-xl bg-white p-4 text-right align-middle shadow-xl transition-all">
                                <div className="">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent"
                                    onClick={closeModal}
                                  >
                                    <CloseBtn />
                                  </button>
                                </div>
                                <Dialog.Title
                                  as="h3"
                                  className="text-lg font-medium leading-6 text-gray-900"
                                ></Dialog.Title>
                                <div className="mt-2">
                                  <div className="video-responsive">
                                    <iframe
                                      width="854"
                                      height="480"
                                      src="https://www.youtube.com/embed/jpCJfYoXdC0?si=bUzz32HdwaCn_K6G"
                                      title="YouTube video player"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </>
                </div>
              </picture>
            </div>
          </div>
        </div>
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
  );
}

function PlayBtn() {
  return (
    <svg
      width="83"
      height="62"
      viewBox="0 0 83 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.551 32.9444L31.7156 45.4329C31.371 45.6299 30.9801 45.7336 30.5822 45.7336C30.1843 45.7336 29.7934 45.6298 29.4489 45.4328C29.1043 45.2357 28.8182 44.9523 28.6193 44.611C28.4204 44.2697 28.3157 43.8825 28.3158 43.4885V18.5115C28.3157 18.1175 28.4204 17.7303 28.6193 17.389C28.8182 17.0477 29.1043 16.7643 29.4489 16.5672C29.7934 16.3702 30.1843 16.2664 30.5822 16.2664C30.9801 16.2664 31.371 16.3701 31.7156 16.5671L53.551 29.0556C53.8957 29.2526 54.182 29.536 54.3811 29.8773C54.5801 30.2186 54.6849 30.6058 54.6849 31C54.6849 31.3942 54.5801 31.7814 54.3811 32.1227C54.182 32.464 53.8957 32.7474 53.551 32.9444ZM83 5.89664V56.1034C83 56.879 82.8455 57.6471 82.5453 58.3635C82.2451 59.0799 81.8051 59.7306 81.2506 60.2784C80.696 60.8261 80.0378 61.2601 79.3137 61.5555C78.5895 61.8509 77.8136 62.0019 77.0304 61.9998H6.00154C5.21567 62.0061 4.43633 61.8582 3.70847 61.5647C2.9806 61.2711 2.31861 60.8378 1.76068 60.2896C1.20275 59.7415 0.759921 59.0893 0.457732 58.3708C0.155543 57.6523 -2.54162e-05 56.8817 3.11456e-09 56.1034V5.89664C-2.81151e-06 5.12097 0.154521 4.35293 0.454718 3.63651C0.754915 2.92009 1.19489 2.26937 1.74943 1.72162C2.30396 1.17388 2.96217 0.739881 3.68635 0.444488C4.41052 0.149095 5.18643 -0.00188879 5.96962 0.000190734H76.9985C77.7843 -0.00606936 78.5637 0.141826 79.2915 0.435346C80.0194 0.728866 80.6814 1.1622 81.2393 1.71036C81.7973 2.25852 82.2401 2.91066 82.5423 3.62916C82.8445 4.34765 83 5.1183 83 5.89664ZM53.551 29.0556L31.7156 16.5671C31.371 16.3701 30.9801 16.2664 30.5822 16.2664C30.1843 16.2664 29.7934 16.3702 29.4489 16.5672C29.1043 16.7643 28.8182 17.0477 28.6193 17.389C28.4204 17.7303 28.3157 18.1175 28.3158 18.5115V43.4885C28.3157 43.8825 28.4204 44.2697 28.6193 44.611C28.8182 44.9523 29.1043 45.2357 29.4489 45.4328C29.7934 45.6298 30.1843 45.7336 30.5822 45.7336C30.9801 45.7336 31.371 45.6299 31.7156 45.4329L53.551 32.9444C53.8957 32.7474 54.182 32.464 54.3811 32.1227C54.5801 31.7814 54.6849 31.3942 54.6849 31C54.6849 30.6058 54.5801 30.2186 54.3811 29.8773C54.182 29.536 53.8957 29.2526 53.551 29.0556ZM53.551 29.0556L31.7156 16.5671C31.371 16.3701 30.9801 16.2664 30.5822 16.2664C30.1843 16.2664 29.7934 16.3702 29.4489 16.5672C29.1043 16.7643 28.8182 17.0477 28.6193 17.389C28.4204 17.7303 28.3157 18.1175 28.3158 18.5115V43.4885C28.3157 43.8825 28.4204 44.2697 28.6193 44.611C28.8182 44.9523 29.1043 45.2357 29.4489 45.4328C29.7934 45.6298 30.1843 45.7336 30.5822 45.7336C30.9801 45.7336 31.371 45.6299 31.7156 45.4329L53.551 32.9444C53.8957 32.7474 54.182 32.464 54.3811 32.1227C54.5801 31.7814 54.6849 31.3942 54.6849 31C54.6849 30.6058 54.5801 30.2186 54.3811 29.8773C54.182 29.536 53.8957 29.2526 53.551 29.0556Z"
        fill="#EB1010"
      />
    </svg>
  );
}

function CloseBtn() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9026 1.05568C18.2259 0.372598 16.394 0 14.5 0C7.11028 0 0.993574 5.52677 0.124195 12.6991C0.0620966 13.2891 0 13.879 0 14.5C0 22.5107 6.48929 29 14.5 29C22.5107 29 29 22.5107 29 14.5C29 8.41435 25.243 3.19808 19.9026 1.05568ZM19.3437 18.5364C19.561 18.7537 19.561 19.1263 19.3437 19.3437C19.2195 19.4679 19.0953 19.4989 18.94 19.4989C18.7848 19.4989 18.6606 19.4368 18.5364 19.3437L14.5 15.3073L10.4636 19.3437C10.3394 19.4679 10.2152 19.4989 10.06 19.4989C9.90471 19.4989 9.78051 19.4368 9.65631 19.3437C9.43897 19.1263 9.43897 18.7537 9.65631 18.5364L13.6927 14.5L9.65631 10.4636C9.43897 10.2463 9.43897 9.87366 9.65631 9.65632C9.87366 9.43897 10.2463 9.43897 10.4636 9.65632L14.5 13.6927L18.5364 9.65632C18.7537 9.43897 19.1263 9.43897 19.3437 9.65632C19.561 9.87366 19.561 10.2463 19.3437 10.4636L15.3073 14.5L19.3437 18.5364Z"
        fill="#D41717"
      />
    </svg>
  );
}
