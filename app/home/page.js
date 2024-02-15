export default function HomeNew() {
  return (
    <div>
      <div className="relative">
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[500px] w-full items-stretch px-16 py-12 max-md:max-w-full max-md:px-5">
          <picture>
            <img
              srcSet="/hmeImgs/Home-hero-img-min.jpg"
              className="absolute h-full w-full object-cover object-center inset-0"
              alt="B&L Underfloor Heating & Plumbing Services, South East of Ireland"
            />
          </picture>
          <div className="relative lg:max-w-4xl md:w-full">
            <h1 className="text-white lg:text-5xl md:text5xl sm:text-3xl mt-36 w-[75%] font-bold antialiased">
              Local Plumbing Services with Over 40 Years of Experience in the
              Southeast of Ireland
            </h1>
          </div>
        </div>
      </div>
      <section>
        <div className="w-10/12 mx-auto my-36">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="lg:text-4xl md:text-3xl sm:text-3xl font-semibold">
                Experience Reliable Plumbing Services with Unmatched Quality and
                Expertise
              </h2>
              <p className="text-base mt-6">
                At our plumbing business in the southeast of Ireland, we are
                committed to providing reliable service, using high-quality
                materials, and delivering long-lasting workmanship. With over 40
                years of experience, we have built a reputation for excellence
                in handling a wide range of plumbing needs.
              </p>
            </div>
            <div>
              <picture>
                <img
                  src="/hmeImgs/Van-sideview-min.png"
                  className="object-cover object-center"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
