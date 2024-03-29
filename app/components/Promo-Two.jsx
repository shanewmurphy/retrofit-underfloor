export default function PromoTwo() {
  return (
    <div>
      <div className="w-full bg-zinc-100 relative">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet="./boy/little-boy-watching-films-laptop-1600-min.jpg"
          ></source>
          <source
            media="(min-width: 900px)"
            srcSet="./boy/little-boy-watching-films-laptop-1600-min.jpg"
          ></source>

          <source
            media="(min-width: 600px)"
            srcSet="./boy/little-boy-watching-films-laptop-600-min.jpg"
          ></source>
          <img
            className="w-full lg:h-auto md:h-auto sm:h-svh object-cover"
            src="./boy/little-boy-watching-films-laptop-600-min.jpg"
            alt="B&L Underfloor Heating & Plumbing Services, South East of Ireland"
          />
          <div className="absolute top-0 left-0 w-full flex flex-row">
            <div className="relative z-[1] flex lg:w-[65%] max-w-full flex-col items-stretch pl-14 lg:py-12 lg:px-12 md:py-12 md:px-12 sm:py-6 sm:px-6 max-md:pl-5">
              <h4 className="text-white lg:text-6xl md:text-5xl sm:text-4xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Experience the ultimate heating comfort
              </h4>
              <h5 className="text-white lg:text-3xl md:text-4xl sm:text-2xl lg:w-[90%] font-semibold leading-8 mt-7 max-md:max-w-full">
                Upgrade your home with underfloor heating a low temperature
                heating system
              </h5>
              <div className="flex gap-2 lg:mt-6 self-start items-start max-md:mt-8">
                <div className="text-white lg:text-2xl md:text-2xl sm:text-xl font-semibold leading-7 whitespace-nowrap mt-1.5">
                  <h6>Call Liam 087 - 2605262</h6>
                  <h6 className="lg:mt-4 md:mt-4 sm:mt-2">
                    Call Damien 087 - 7618255
                  </h6>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6 mb-4">
                <div className="text-white text-lg font-medium">
                  Serving only the South East of Ireland with Premier Plumbing
                  and Underfloor Heating Solutions
                </div>
              </div>
            </div>
          </div>
        </picture>
      </div>
    </div>
  );
}
