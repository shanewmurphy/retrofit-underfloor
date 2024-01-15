export default function BelowFoldSection() {
  return (
    <div>
      <div className="bg-zinc-800 self-stretch flex w-full flex-col justify-center items-stretch lg:py-11 max-md:max-w-full">
        <div className="flex-col stroke-[60px] stroke-stone-50 overflow-hidden relative  flex min-h-[425px] w-full justify-center items-stretch px-16 py-12 max-md:max-w-full max-md:px-5">
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ff73bd11fc89824000e591bc133d0353961e4da50a218dc3a3013ad3ed434d0?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
            className="absolute h-full w-full object-cover object-center inset-0"
          /> */}
          <div className="relative mt-16 mb-16 max-md:max-w-full max-md:mr-1.5 max-md:my-10">
            <div className="gap-12 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                <div className="relative flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                  <div className="text-white max-md:max-w-full antialiased">
                    <h3 className="font-bold lg:text-4xl md:text-4xl sm:text-3xl mb-2 antialiased">
                      Transform Any Floor into a Underfloor Heating System
                    </h3>
                  </div>
                  <div className="text-gray-300 font-semibold mt-2 max-md:max-w-full">
                    <h5 className="lg:text-2xl md:text-3xl sm:text-xl">
                      Without the need to remove or raise the existing screed
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                <div className="leading-6 relative my-auto max-md:max-w-full max-md:mt-8">
                  <p className="text-white text-base font-medium">
                    Our Concrete Milling creates 16mm channels for the heating
                    pipes, providing a dust-free and bespoke solution our system
                    provides affordable, quick, and eco-friendly heating
                    solutions that saves on energy bills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
