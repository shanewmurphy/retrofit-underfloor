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

      <div className="bg-zinc-800 w-full antialiased">
        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-6 sm:gap-2 lg:py-32 md:py-28 sm:py-16">
            <div>
              <h3 className="text-white lg:text-4xl md:text-4xl sm:text-2xl font-bold">
                The Only Heating Source You Need for a Comfortable Indoor
                Climate
              </h3>
              <p className="text-base text-white mt-4">
                Our underfloor heating system serves as the primary heat source,
                providing the most comfortable and uniform level of warmth. With
                our system, you won't need any other heating systems.
              </p>
              <div className="grid lg:grid-cols-2 lg:mt-16 md:mt-8 sm:mt-16 gap-8">
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
              <div className="grid lg:grid-cols-2 lg:mt-16 md:mt-8 sm:mt-16 gap-8">
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
          <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-6 sm:gap-2 lg:py-32 md:py-28 sm:py-16">
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
            <div>
              <picture>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1db79a02d616cf2a3caa560d04ba64193fa8c973118ca27efe0123ffef750e0?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="aspect-[0.66] object-contain object-center w-[250px] mx-auto overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
