export default function UnderfloorHeating() {
  return (
    <div>
      <div className="w-11/12 pt-24 py-24 mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="max-md:max-w-full max-md:mt-10">
              <h4 className="text-zinc-800 lg:text-5xl md:text-6xl sm:text-4xl font-bold leading-snug mb-6">
                Experience the Comfort of Underfloor Heating
              </h4>
            </div>
          </div>
          <div>
            <p className="text-base text-lightgrey font-medium">
              Our underfloor heating system offers numerous advantages. It
              serves as the primary heat source, providing the most comfortable
              and uniform level of warmth. The system is highly efficient, using
              very low water temperatures, which not only saves energy but also
              reduces your gas bill. It is also eco-friendly, making it a
              sustainable choice for your home.
            </p>
          </div>
        </div>
        <div>
          <div className="w-full relative mt-6">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="./girl/girl-floor-1600-min.jpg"
              ></source>
              <source
                media="(min-width: 900px)"
                srcSet="./girl/girl-floor-1600-min.jpg"
              ></source>

              <source
                media="(min-width: 600px)"
                srcSet="./girl/girl-floor-500-min.jpg"
              ></source>
              <img
                className="w-full h-full object-cover"
                src="./girl/girl-floor-500-min.jpg"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full lg:h-56 md:h-48 sm:h-28 flex">
                <p className="text-white lg:text-6xl md:text-5xl sm:text-3xl lg:pl-8 md:pl-8 sm:pl-4 lg:w-[60%] md:w-[80%] font-bold">
                  Feel the heat in every corner of the room
                </p>
              </div>
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
