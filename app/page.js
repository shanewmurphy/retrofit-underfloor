import Image from "next/image";
import NavDesktop from "./components/nav-desktop";
import BelowFoldSection from "./components/below-fold";
import NavBarMobile from "./components/nav-mobile";
import PromoOne from "./components/Promo-One";
import UpgradeFloors from "./components/Upgrade-floors";
import BenefitsSection from "./components/Key-benefits";
import RadiatorsUnderfloor from "./components/radiators-underfloor";
import UnderfloorHeating from "./components/Underfloor-heating";
import Instalation from "./components/instalation";
import PromoTwo from "./components/Promo-Two";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
export default function Home() {
  return (
    <div>
      <div className="relative">
        <NavDesktop />
        <NavBarMobile />
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[605px] w-full items-stretch px-16 py-12 max-md:max-w-full max-md:px-5">
          <picture>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/636942f621aef85a83b081ccfa4e1791477ac7b0953dc0b11612ed7c2b5ccd14?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
              className="absolute h-full w-full object-cover object-center inset-0"
              alt="Underfloor heating"
            />
          </picture>
          <div className="relative lg:max-w-4xl leading-[58px] lg:mt-72 md:mt-72 sm:mt-72">
            <blockquote className="text-white font-bold antialiased">
              Transforming Homes with Underfloor Heating
            </blockquote>
          </div>
        </div>
      </div>
      <div>
        <BelowFoldSection />
      </div>
      <div>
        <PromoOne />
      </div>
      <div>
        <UpgradeFloors />
      </div>
      <div>
        <BenefitsSection />
      </div>
      <div>
        <RadiatorsUnderfloor />
      </div>
      <div>
        <UnderfloorHeating />
      </div>
      <div>
        <Instalation />
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
