export default function AboutUs() {
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
        {/* <div className="relative text-white lg:w-[60%] md:w-full sm:w-full lg:text-6xl md:text-5xl sm:text-4xl font-bold leading-[72px] lg:mt-24 md:mt-28 sm:mt-28 max-md:max-w-full">
          40 years experience
        </div> */}
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
          <div className="bg-white rounded-xl lg:p-12 md:p12 sm:py-12 sm:px-6">
            <div>
              <O1Icon />
            </div>
            <div>
              <h4 className="text-neutral-800 lg:text-4xl md:text-3xl sm:text-2xl mt-8 font-bold">
                Unmatched Expertise
              </h4>
              <p className="text-neutral-700 lg:text-2xl md:text-2xl sm:text-xl lg:mt-12 md:mt-8 sm:mt-6 lg:min-h-80 md:min-h-80 sm:min-h-auto lg:font-semibold md:font-semibold sm:font-medium">
                With a combined experience of over 40 years, our team consists
                of fully qualified plumbers who bring a wealth of knowledge to
                every project. We&apos;ve seen the evolution of plumbing
                technology and have honed our skills to stay ahead of the curve.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-secondary rounded-xl lg:p-12 md:p-12 sm:py-12 sm:px-6">
              <div>
                <O2Icon />
              </div>
              <div>
                <h4 className="text-white lg:text-4xl md:text-3xl sm:text-2xl mt-8 font-bold">
                  Integrated Solutions
                </h4>
                <p className="text-white text-2xl lg:text-2xl md:text-2xl sm:text-xl lg:mt-12 md:mt-8 sm:mt-6 lg:min-h-80 md:min-h-80 sm:min-h-auto lg:font-semibold md:font-semibold sm:font-medium">
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
          <div>
            <div>
              <div className="bg-gray-400 rounded-xl lg:p-12 md:p-12 sm:py-12 sm:px-6">
                <div>
                  <O3Icon />
                </div>
                <div>
                  <h4 className="text-neutral-800 lg:text-4xl md:text-3xl sm:text-2xl mt-8 font-bold">
                    Non-Invasive Innovation
                  </h4>
                  <p className="text-neutral-800 text-2xl lg:text-2xl md:text-2xl sm:text-xl lg:mt-12 md:mt-8 sm:mt-6 lg:min-h-80 md:min-h-80 sm:min-h-auto lg:font-semibold md:font-semibold sm:font-medium">
                    We revolutionise the way underfloor heating is installed.
                    Our non-invasive Concrete Milling technique allows us to cut
                    precise channels without the need to remove or raise
                    existing screed, ensuring a seamless and efficient process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="bg-gray-200 rounded-xl lg:p-12 md:p-12 sm:py-12 sm:px-6">
                  <div>
                    <O4Icon />
                  </div>
                  <div>
                    <h4 className="text-neutral-800 lg:text-4xl md:text-3xl sm:text-2xl mt-8 font-bold">
                      Customer focused
                    </h4>
                    <p className="text-neutral-800 text-2xl lg:text-2xl md:text-2xl sm:text-xl lg:mt-12 md:mt-8 sm:mt-6 lg:min-h-80 md:min-h-80 sm:min-h-auto lg:font-semibold md:font-semibold sm:font-medium">
                      Your satisfaction is at the heart of everything we do.
                      From the moment you reach out to us to the completion of
                      your project, we prioritise clear communication,
                      transparency, and a commitment to delivering results that
                      exceed your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-white lg:text-5xl md:text-5xl sm:text-4xl lg:w-[70%] font-bold lg:mt-32 md:mt-28 sm:mt-20">
            Our Vision for the Future
          </h3>
          <h4 className="text-white lg:text-2xl md:text-2xl sm:text-lg font-semibold lg:mt-6 md:mt-6 sm:mt-4">
            At
            <span className="text-secondary pl-2 pr-2">
              Southeast Plumbing & Underfloor Heating Solution
            </span>
            we envision a future where every home experiences the ultimate blend
            of comfort, efficiency, and elegance. We&apos;re dedicated to
            staying at the forefront of industry advancements, continually
            refining our techniques, and embracing innovations that make a
            positive impact on your daily life.
          </h4>
          <p></p>
        </div>
        <div className="mb-40">
          <h5 className="text-white text-center lg:text-4xl md:text-4xl sm:text-3xl lg:w-[60%] mx-auto lg:font-semibold md:font-semibold sm:font-medium lg:mt-40 md:mt-28 sm:mt-20">
            Ready to experience plumbing excellence?
          </h5>
          <h6 className="text-white text-center lg:text-3xl md:text-2xl sm:text-lg font-medium lg:mt-6 md:mt-4 sm:mt-2">
            Get in touch with us today
          </h6>
          <p className="text-white text-center lg:text-2xl md:text-3xl sm:text-2xl font-semibold whitespace-nowrap mt-6">
            Liam 087-2605262
          </p>
          <p className="text-white text-center lg:text-2xl md:text-3xl sm:text-2xl font-semibold whitespace-nowrap mt-2">
            Damien 087-7618255
          </p>
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
      <circle cx="41" cy="41" r="40" stroke="#080808" strokeWidth="2" />
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
      <circle cx="41" cy="41" r="40" stroke="white" strokeWidth="2" />
      <path
        d="M30.3583 56V51.5682L40.7134 41.9801C41.5941 41.1278 42.3327 40.3608 42.9293 39.679C43.5354 38.9971 43.9947 38.3295 44.3072 37.6761C44.6197 37.0132 44.7759 36.2983 44.7759 35.5312C44.7759 34.679 44.5818 33.9451 44.1935 33.3295C43.8053 32.7045 43.275 32.2263 42.6026 31.8949C41.9303 31.554 41.168 31.3835 40.3157 31.3835C39.4255 31.3835 38.649 31.5634 37.9862 31.9233C37.3233 32.2831 36.8119 32.7992 36.4521 33.4716C36.0922 34.1439 35.9123 34.9441 35.9123 35.8721H30.0742C30.0742 33.9687 30.5051 32.3163 31.3668 30.9148C32.2286 29.5132 33.436 28.429 34.989 27.6619C36.542 26.8949 38.3318 26.5114 40.3583 26.5114C42.4416 26.5114 44.2551 26.8807 45.7987 27.6193C47.3517 28.3485 48.5591 29.3617 49.4208 30.6591C50.2826 31.9564 50.7134 33.4432 50.7134 35.1193C50.7134 36.2178 50.4956 37.3021 50.06 38.3721C49.6339 39.4422 48.8716 40.6307 47.7731 41.9375C46.6746 43.2348 45.1263 44.7926 43.1282 46.6108L38.881 50.7727V50.9716H51.0969V56H30.3583Z"
        fill="white"
      />
    </svg>
  );
}

function O3Icon() {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41" cy="41" r="40" stroke="#080808" strokeWidth="2" />
      <path
        d="M40.1112 56.3977C37.9899 56.3977 36.1007 56.0331 34.4435 55.304C32.7958 54.5653 31.4937 53.5521 30.5373 52.2642C29.5903 50.9668 29.1026 49.4706 29.0742 47.7756H35.2674C35.3053 48.4858 35.5373 49.1108 35.9634 49.6506C36.399 50.1809 36.9767 50.5928 37.6964 50.8864C38.4161 51.1799 39.2257 51.3267 40.1254 51.3267C41.0629 51.3267 41.8915 51.161 42.6112 50.8295C43.3308 50.4981 43.8943 50.0388 44.3015 49.4517C44.7087 48.8646 44.9123 48.1875 44.9123 47.4204C44.9123 46.6439 44.6945 45.9574 44.2589 45.3608C43.8327 44.7547 43.2172 44.2812 42.4123 43.9403C41.6168 43.5994 40.6699 43.429 39.5714 43.429H36.8583V38.9119H39.5714C40.4994 38.9119 41.3185 38.7509 42.0288 38.429C42.7485 38.107 43.3072 37.6619 43.7049 37.0937C44.1026 36.5161 44.3015 35.8437 44.3015 35.0767C44.3015 34.3475 44.1263 33.7083 43.7759 33.1591C43.435 32.6004 42.9521 32.1648 42.3271 31.8523C41.7115 31.5398 40.9918 31.3835 40.168 31.3835C39.3346 31.3835 38.5723 31.535 37.881 31.8381C37.1897 32.1316 36.6358 32.553 36.2191 33.1023C35.8024 33.6515 35.5799 34.2954 35.5515 35.0341H29.6566C29.685 33.3579 30.1632 31.8807 31.0913 30.6023C32.0193 29.3239 33.2693 28.3248 34.8413 27.6051C36.4227 26.8759 38.2077 26.5114 40.1964 26.5114C42.204 26.5114 43.9606 26.8759 45.4663 27.6051C46.9719 28.3343 48.1415 29.3191 48.9748 30.5596C49.8176 31.7907 50.2343 33.1733 50.2248 34.7074C50.2343 36.3362 49.7276 37.6951 48.7049 38.7841C47.6916 39.8731 46.3706 40.5644 44.7418 40.8579V41.0852C46.882 41.3598 48.5108 42.1032 49.6282 43.3153C50.7551 44.518 51.3138 46.0237 51.3043 47.8324C51.3138 49.4896 50.8356 50.9621 49.8697 52.25C48.9132 53.5379 47.5922 54.5511 45.9066 55.2898C44.221 56.0284 42.2892 56.3977 40.1112 56.3977Z"
        fill="#0C0C0C"
      />
    </svg>
  );
}

function O4Icon() {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41" cy="41" r="40" stroke="#080808" strokeWidth="2" />
      <path
        d="M28.918 50.8863V46.0426L41.0629 26.9091H45.239V33.6136H42.7674L35.1112 45.7301V45.9574H52.3697V50.8863H28.918ZM42.881 56V49.4091L42.9947 47.2642V26.9091H48.7617V56H42.881Z"
        fill="#0C0C0C"
      />
    </svg>
  );
}
