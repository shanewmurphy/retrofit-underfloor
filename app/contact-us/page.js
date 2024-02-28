"use client";
import AllFAQ from "../components/All-FAQ";
export default function ContactUs() {
  return (
    <div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[500px] w-full items-stretch px-16 py-12 max-md:max-w-full max-md:px-5">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet="./Hero/hero-about-contact.jpg"
          ></source>
          <source
            media="(min-width: 1240px)"
            srcSet="./Hero/hero-about-contact.jpg"
          ></source>
          <source
            media="(min-width: 620px)"
            srcSet="./Hero/hero-about-contact-mobile.jpg"
          ></source>
          <img
            className="absolute h-full w-full object-cover lg:object-center sm:object-right inset-0"
            src="./Hero/hero-about-contact-mobile.jpg"
            alt="Southeast Plumbling & underfloor Heating Solutions, South East of Ireland"
          />
        </picture>
      </div>
      <div className="bg-zinc-800 w-full antialiased">
        <div className="w-10/12 mx-auto lg:py-24 md:py-24 sm:py-12">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-24 md:gap-16 sm:gap-12">
            <div>
              <h4 className="text-white font-semibold lg:text-4xl md:text-2xl sm:text-2xl">
                Have any questions or want to schedule an appointment?
                We&apos;re here to help.
              </h4>
            </div>
            <div>
              <h5 className="text-white font-semibold lg:text-3xl md:text-3xl sm:text-2xl mb-2">
                Contact
              </h5>
              <p className="text-white font-medium lg:text-2xl md:text-xl sm:text-xl">
                Liam - 087-2605262
              </p>
              <p className="text-white font-medium lg:text-2xl md:text-xl sm:text-xl">
                Damien - 087-7618255
              </p>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto pb-32">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-24">
            <div>
              <h5 className="text-white font-semibold lg:text-3xl md:text-xl sm:text-xl mb-2">
                Business Hours
              </h5>
              <p className="text-white text-lg">Monday-Friday 9am - 5pm</p>
              <p className="text-white text-lg">Saturday 9am - 2pm</p>
            </div>
            <div>
              <h5 className="text-white font-semibold lg:text-3xl md:text-xl sm:text-xl mb-2">
                Address
              </h5>
              <p className="text-white font-medium lg:text-2xl">JJJJJJJ</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <AllFAQ />
      </section>
    </div>
  );
}
