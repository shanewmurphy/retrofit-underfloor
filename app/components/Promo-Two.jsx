export default function PromoTwo() {
  return (
    <div>
      <div className="w-full lg:h-auto md:h-auto sm:h-screen bg-zinc-100 relative">
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
            className="w-full lg:h-full md:h-full sm:h-[85%] object-cover"
            src="./boy/little-boy-watching-films-laptop-600-min.jpg"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full flex flex-row">
            <div className="relative z-[1] flex lg:w-[60%] max-w-full flex-col items-stretch pl-14 pr-px py-12 max-md:pl-5">
              <h4 className="text-white lg:text-6xl md:text-5xl sm:text-4xl font-bold leading-[58px] mt-8 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Experience the ultimate heating comfort
              </h4>
              <h5 className="text-white lg:text-3xl md:text-4xl sm:text-2xl lg:w-[90%] font-semibold leading-8 mt-7 max-md:max-w-full">
                Upgrade your home with underfloor heating a low temperature
                heating system
              </h5>
              <div className="flex gap-2 mt-12 self-start items-start max-md:mt-10">
                <div className="text-white text-2xl font-semibold leading-7 whitespace-nowrap mt-1.5">
                  Call Us
                </div>
                <div className="text-white text-2xl font-semibold leading-10 self-stretch grow whitespace-nowrap">
                  086-1777288
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 mb-4 self-start">
                <div className="text-white text-lg font-semibold leading-6 whitespace-nowrap my-auto">
                  Email Us
                </div>
                <div className="text-white text-xl font-medium leading-9 self-stretch grow whitespace-nowrap">
                  myemail@gmail.com
                </div>
              </div>
            </div>
          </div>
        </picture>
      </div>
    </div>
  );
}
