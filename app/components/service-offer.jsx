export default function ServiceOffer() {
  return (
    <div>
      <div className="flex-col overflow-hidden relative flex min-h-[550px] lg:mt-32 pl-14 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
        <picture>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf66373c66580082c772d0565f1476db76e3eec2c3bcdd4f5c403ab471f75a7?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
            className="absolute h-full w-full object-cover object-center inset-0"
            alt=""
          />
        </picture>
        <div className="relative text-white text-4xl font-bold max-w-[650px] mt-9 max-md:max-w-full">
          We are one-stop solution for all your heating and plumbing needs
        </div>
        <div>
          <h3 className="relative font-semibold text-white lg:text-3xl md:text-3xl sm:text-2xl max-w-[650px] mt-6 max-md:max-w-full">
            We are also expert plumbers with over 40 years experience
          </h3>
        </div>
        <div className="relative text-white text-xl font-semibold max-w-[650px] mt-4 max-md:max-w-full">
          You won&apos;t need to hire a separate plumber for the connection. We
          handle the entire process from start to finish.
        </div>
        <div className="text-white text-lg font-medium relative mt-6 max-w-[650px] max-md:max-w-full">
          Serving only the South East of Ireland with Premier Plumbing and
          Underfloor Heating Solutions
        </div>
      </div>
    </div>
  );
}
