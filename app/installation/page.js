"use client";
import Testimonials from "../components/Testimonials";
import PromoTwo from "../components/Promo-Two";
import BenefitsSection from "../components/Key-benefits";
import AllFAQ from "../components/All-FAQ";
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
            alt="B&L Underfloor Heating & Plumbing Services, South East of Ireland"
          />
        </picture>
        <div className="relative text-white lg:text-5xl md:text-5xl sm:text-5xl font-bold leading-[72px] lg:mt-24 md:mt-28 sm:mt-28 max-md:max-w-full">
          Transforming Concrete Floor Into A Underfloor Heating System
        </div>
        <div className="relative text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-semibold lg:w-3/6 leading-10 mt-6 mb-20 max-md:max-w-full max-md:mb-10">
          Retrofitting Your Space with Underfloor Heating
        </div>
      </div>
      <div>
        <section>
          <div>
            <div className="bg-secondary self-stretch w-full pl-16 pr-24 py-24 max-md:max-w-full max-md:px-5 antialiased">
              <div className="grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="sm:mb-4 font-bold">
                    <h2 className="text-white lg:text-5xl md:text-6xl sm:text-4xl leading-snug">
                      Upgrade Your Floors To Underfloor Heating
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="text-white text-2xl font-semibold">
                    Experience the ultimate comfort and energy efficiency with
                    our revolutionary underfloor heating system. Say goodbye to
                    cold floors and high energy bills
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 text-white gap-x-16 gap-y-8 mt-16 antialiased">
                <div>
                  <p className="lg:text-base md:text-xl sm:text-xl font-medium">
                    <span className="inline-block align-middle pr-2">
                      <BulletpointIcon />
                    </span>
                    Effortlessly retrofit underfloor heating into your existing
                    floor constructions.
                  </p>
                </div>
                <div>
                  <p className="lg:text-base md:text-xl sm:text-xl font-medium">
                    <span className="inline-block align-middle pr-2">
                      <BulletpointIcon />
                    </span>
                    Enjoy the benefits of a dust-free, bespoke, and responsive
                    heating solution
                  </p>
                </div>
                <div>
                  <p className="lg:text-base md:text-xl sm:text-xl font-medium">
                    <span className="inline-block align-middle pr-2">
                      <BulletpointIcon />
                    </span>
                    Save on your fuel bill while reducing your carbon footprint
                  </p>
                </div>
                <div>
                  <p className="lg:text-base md:text-xl sm:text-xl font-medium">
                    <span className="inline-block align-middle pr-2">
                      <BulletpointIcon />
                    </span>
                    Our system can work with oil, gas or air to water heatpump
                    heating systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <BenefitsSection />
        </section>
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
        <div>
          <PromoTwo />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <AllFAQ />
        </div>
      </div>
    </div>
  );
}
function BulletpointIcon() {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.28769 0.00161468C8.1284 0.00721729 7.97017 0.0298987 7.81572 0.0692693C7.60598 0.133059 7.4018 0.213869 7.20522 0.310893C7.03286 0.384991 6.86533 0.471976 6.70103 0.570236C6.37935 0.746214 6.06894 0.94204 5.77159 1.15658C5.28834 1.50451 4.82764 1.86695 4.37822 2.25194C3.95457 2.61598 3.54381 2.99453 3.13628 3.37951C2.98808 3.51804 2.84311 3.65819 2.69813 3.79994C2.83022 3.59912 2.96714 3.39992 3.10889 3.20232C3.4826 2.73196 3.87403 2.2761 4.24452 1.80091C4.34439 1.67043 4.44749 1.54317 4.54575 1.41109L4.68589 1.22101C4.72133 1.17268 4.75193 1.12758 4.78576 1.07926C4.81959 1.03093 4.82603 1.01321 4.84536 0.980996C4.87758 0.908509 4.90979 0.836022 4.9404 0.761924C4.96242 0.693845 4.97021 0.621965 4.96329 0.550748C4.95636 0.479531 4.93486 0.4105 4.90013 0.347942C4.86129 0.286095 4.80734 0.235158 4.74337 0.19993C4.67939 0.164702 4.6075 0.146345 4.53447 0.146589C4.39882 0.154949 4.26624 0.190559 4.14465 0.251293C3.5567 0.48003 3.08795 0.918174 2.58215 1.28383C2.33086 1.46424 2.07635 1.64466 1.81862 1.81862C1.65754 1.92494 1.49646 2.03286 1.33537 2.13113C1.3982 2.01998 1.46424 1.91044 1.53834 1.80896C1.58827 1.74614 1.63982 1.68654 1.69942 1.62694C1.75965 1.56474 1.79332 1.48156 1.79332 1.39498C1.79332 1.3084 1.75965 1.22522 1.69942 1.16302C1.66939 1.13209 1.63346 1.1075 1.59375 1.09071C1.55405 1.07391 1.51138 1.06526 1.46827 1.06526C1.42516 1.06526 1.38248 1.07391 1.34278 1.09071C1.30307 1.1075 1.26714 1.13209 1.23711 1.16302C0.985093 1.45131 0.759729 1.76186 0.563789 2.09085L0.384987 2.36953C0.330486 2.43652 0.290231 2.51394 0.266688 2.59703C0.243145 2.68012 0.236809 2.76715 0.248067 2.85277C0.380155 3.33602 0.964884 3.14111 1.28222 3.01386C1.54494 2.89079 1.79944 2.75089 2.04414 2.59504C2.18106 2.5145 2.31798 2.43396 2.4549 2.3502C2.2326 2.59665 2.01675 2.84633 1.81057 3.10728C1.54961 3.42945 1.31604 3.78222 1.08731 4.13016C0.885314 4.4421 0.700336 4.76474 0.533183 5.09665C0.410693 5.33238 0.303094 5.57556 0.211018 5.82475C0.129707 6.02941 0.110108 6.2534 0.154639 6.46908C0.198264 6.61849 0.289234 6.7497 0.413861 6.84295C0.538488 6.9362 0.69003 6.98646 0.845683 6.98615C1.1308 6.98615 1.36115 6.80896 1.56894 6.63982C1.67687 6.55284 1.77352 6.45458 1.875 6.36276L2.32764 5.94878C2.60793 5.69427 2.88499 5.43493 3.16205 5.17719C3.90625 4.48454 4.67676 3.82464 5.47358 3.19749C5.58312 3.11373 5.69427 3.03641 5.80541 2.95265C5.33988 3.43589 4.89207 3.94975 4.43943 4.45232C3.95619 4.99839 3.43911 5.5348 2.97841 6.10664C2.71854 6.42881 2.46188 6.75097 2.20844 7.07314C2.04736 7.26966 1.90722 7.4694 1.75902 7.67075C1.63499 7.83183 1.52384 8.01708 1.40786 8.19105C1.21295 8.48261 1.03576 8.79027 0.869845 9.10116C0.658748 9.49257 0.473118 9.89719 0.314111 10.3125C0.193289 10.603 0.105224 10.9061 0.0515464 11.2162C0.025538 11.3692 0.00832758 11.5235 0 11.6785C0.000523572 11.9032 0.0558141 12.1243 0.161082 12.3228C0.266632 12.4944 0.411943 12.6381 0.584729 12.7416C0.686211 12.7867 0.789304 12.8302 0.892397 12.8721C1.01538 12.9068 1.14386 12.9177 1.27094 12.9043C1.84278 12.8753 2.29381 12.4936 2.67075 12.0989C2.79961 11.962 2.93331 11.8251 3.06057 11.6865C4.13338 10.5155 5.2078 9.34923 6.30638 8.20554C6.90238 7.58699 7.50966 6.98078 8.12822 6.38692C8.72262 5.82314 9.35084 5.30123 9.99033 4.78899C10.1885 4.63757 10.3866 4.48776 10.588 4.34118C10.7893 4.19459 10.981 4.05767 11.184 3.92397L10.9939 4.11244C10.4816 4.65045 9.97101 5.19008 9.47487 5.74259C8.38918 6.95555 7.28898 8.17011 6.29832 9.4636C5.80552 10.0775 5.36019 10.728 4.96617 11.4095C4.8663 11.5867 4.76804 11.7655 4.67139 11.9427C4.57474 12.1198 4.48615 12.3228 4.3895 12.5113C4.2782 12.749 4.18137 12.9932 4.09955 13.2426C4.01181 13.5217 3.97152 13.8136 3.98035 14.106C3.98033 14.4364 4.10519 14.7546 4.3299 14.9968C4.47568 15.1328 4.6549 15.2276 4.8493 15.2718C5.0437 15.3159 5.24633 15.3077 5.43653 15.2481C5.69531 15.152 5.93201 15.0046 6.13241 14.8148C6.23711 14.7326 6.32893 14.6311 6.42558 14.5393L6.89916 14.0834C7.16978 13.8225 7.43825 13.561 7.70458 13.299C8.25548 12.7722 8.8096 12.2519 9.38305 11.7526C9.81153 11.3789 10.2497 11.0132 10.6814 10.6411C10.9713 10.3914 11.2613 10.1434 11.5577 9.90013C11.0241 10.4234 10.5314 10.9867 10.0838 11.5851C9.93024 11.7781 9.78876 11.9803 9.66012 12.1907C9.53773 12.402 9.43527 12.6242 9.35406 12.8544C9.32684 12.9324 9.30689 13.0127 9.29446 13.0944C9.26593 13.2335 9.28288 13.378 9.34278 13.5068C9.38694 13.5989 9.45513 13.6775 9.54017 13.7342C9.62521 13.7909 9.72396 13.8236 9.82603 13.8289C10.0327 13.8318 10.2368 13.7819 10.4188 13.684C10.6459 13.569 10.865 13.4388 11.0744 13.2941C11.7188 12.893 12.3502 12.4887 13.0074 12.1263C13.3296 11.9507 13.6517 11.7848 13.9739 11.643C14.0528 11.6108 14.135 11.5802 14.2107 11.5561C14.2669 11.581 14.329 11.5893 14.3897 11.58C14.4504 11.5708 14.5072 11.5444 14.5535 11.5039C14.5997 11.4635 14.6334 11.4106 14.6505 11.3517C14.6677 11.2927 14.6677 11.23 14.6505 11.1711C14.6333 11.098 14.5982 11.0303 14.5485 10.9741C14.4987 10.9179 14.4358 10.8749 14.3653 10.8489C14.27 10.8231 14.1703 10.8171 14.0725 10.8312C13.9748 10.8454 13.8809 10.8793 13.7967 10.9311C13.6227 11.0116 13.452 11.0921 13.2829 11.1856C12.9285 11.3708 12.5822 11.5722 12.2342 11.7719C11.6157 12.1263 11.0084 12.5097 10.3673 12.8222C10.5586 12.482 10.7784 12.1586 11.0245 11.8557C11.2597 11.5625 11.4948 11.2709 11.7494 10.9955C12.0039 10.72 12.3003 10.4446 12.587 10.1788C12.8737 9.91302 13.1427 9.64401 13.4198 9.37339C13.5809 9.22198 13.7419 9.07861 13.903 8.93364C14.0566 8.79638 14.1886 8.63672 14.2945 8.46006C14.352 8.36216 14.3841 8.2514 14.3879 8.13789C14.388 7.97587 14.331 7.81899 14.2268 7.69491C14.1618 7.62104 14.0796 7.56432 13.9874 7.52976C13.8953 7.49521 13.796 7.48388 13.6985 7.49678C13.5416 7.51998 13.3884 7.56329 13.2426 7.62565C13.0475 7.70117 12.8575 7.78941 12.674 7.88982C12.3202 8.07502 11.9771 8.27992 11.6463 8.50355C11.0105 8.96563 10.4012 9.46308 9.8212 9.99356C9.25741 10.4768 8.69362 10.9601 8.11372 11.4336C7.63048 11.8412 7.14723 12.2519 6.64304 12.6482C6.7703 12.4291 6.90238 12.2149 7.03769 12.0039C7.35986 11.4932 7.7239 11.0132 8.08956 10.5332C8.56314 9.94685 9.03834 9.36373 9.5232 8.78705C10.0081 8.21038 10.5139 7.59987 11.0229 7.01515C11.5319 6.43042 12.0876 5.81508 12.6337 5.2223C13.1508 4.6569 13.6566 4.08344 14.1463 3.49227C14.2784 3.33119 14.4104 3.17011 14.5329 3.00902C14.6005 2.91399 14.6666 2.82056 14.7294 2.7223L14.7777 2.62726C14.8293 2.50913 14.8792 2.39154 14.9275 2.27449C14.9652 2.11901 14.9895 1.96056 15 1.80091C14.9949 1.58709 14.9397 1.37745 14.8389 1.18879C14.7525 1.01568 14.6274 0.86485 14.4731 0.748058C14.3189 0.631267 14.1398 0.551669 13.9497 0.515468C13.7863 0.480025 13.6185 0.469704 13.452 0.484862C13.2675 0.493794 13.0839 0.516408 12.9027 0.552517C12.5904 0.637677 12.286 0.749225 11.9926 0.885957C11.7639 0.982607 11.5432 1.09698 11.3209 1.20812C11.1501 1.29189 10.9858 1.39659 10.8199 1.49002C10.654 1.58344 10.48 1.69781 10.3109 1.80413C9.99839 2.00226 9.70522 2.2165 9.404 2.43557C8.71456 2.94942 8.05573 3.49872 7.40657 4.06089C6.81379 4.57958 6.26933 5.14015 5.72487 5.70716C5.18041 6.27417 4.67784 6.81862 4.16559 7.38563C4.47004 6.95877 4.79059 6.54156 5.10954 6.12758C5.06765 6.18396 5.02577 6.23873 4.98228 6.28866C5.43976 5.69749 5.90851 5.11437 6.38048 4.53609C6.63177 4.23003 6.88466 3.92719 7.14723 3.63241C7.40979 3.33763 7.65303 3.0654 7.89787 2.77545C8.19641 2.42429 8.48207 2.06401 8.75483 1.69459C8.89906 1.50444 9.00816 1.29006 9.077 1.06154C9.11103 0.919933 9.11377 0.772612 9.08505 0.629836C9.06194 0.491003 8.99736 0.362411 8.89981 0.260957C8.82407 0.178401 8.73195 0.112553 8.62933 0.0676195C8.5267 0.0226864 8.41583 -0.000342766 8.3038 3.85544e-06L8.28769 0.00161468ZM13.4762 7.96231C13.4687 7.98446 13.4595 8.006 13.4488 8.02674C13.4584 8.0058 13.4681 7.98325 13.4762 7.96231Z"
        fill="white"
      />
    </svg>
  );
}
