"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const data = [
  {
    id: "01",
    title: "Expertise in Handling All Your Plumbing Needs",
    body: "Our commitment to quality service, reliability, and expertise ensures that your plumbing needs are met with the utmost care and professionalism.",
    iconUrl: "/service-icon-01.svg",
  },
  {
    id: "02",
    title: "Efficient Solutions for Your Plumbing Problems",
    body: "We pride ourselves on providing efficient solutions for a wide range of plumbing issues, ensuring that your plumbing system functions flawlessly.",
    iconUrl: "/service-icon-02.svg",
  },
  {
    id: "03",
    title: "Plumbing Services for Your Peace of Mind",
    body: "With over 40 years of experience, our team of skilled plumbers delivers reliable services that you can trust, giving you peace of mind.",
    iconUrl: "/service-icon-03.svg",
  },
];

export default function Services() {
  const swiperRef = useRef();

  return (
    <div className="w-full bg-secondary">
      <div className="lg:w-11/12 mx-auto lg:p-28 md:p-12 sm:p-6 sm:pt-24 sm:pb-24">
        <div>
          <div className="lg:w-[70%] md:w-[70%] sm:w-[90%] mx-auto">
            <h3 className="text-white text-center font-bold mb-8 lg:text-5xl md:text-4xl sm:text-3xl">
              Providing Quality Plumbing Services You Can Rely On
            </h3>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          autoplay={{
            delay: 8500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="w-11/12 mx-auto">
            <div className="my-swiper">
              {data.map((user) => (
                <SwiperSlide key={user.id}>
                  <div className="bg-white py-6 px-8 min-h-80 rounded-lg">
                    <div>
                      <picture>
                        <img src={user.iconUrl} />
                      </picture>
                    </div>
                    <div key={user.id}>
                      <h5 className="mt-2 font-semibold text-mygrey lg:text-2xl md:text-xl sm:text-xl">
                        {user.title}
                      </h5>
                      <p className="text-base font-medium text-mygrey mt-2">
                        {user.body}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
        <div className="mt-8 lg:hidden md:visible mx-auto">
          <div className="flex justify-end">
            <div className="mr-4">
              <button onClick={() => swiperRef.current.slidePrev()}>
                <LeftArrow />
              </button>
            </div>
            <div>
              <button onClick={() => swiperRef.current.slideNext()}>
                <RightArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function LeftArrow() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 -9.78513e-07 25 -2.18557e-06C11.1929 -3.39263e-06 3.39263e-06 11.1929 2.18557e-06 25C9.78513e-07 38.8071 11.1929 50 25 50ZM31.0082 39.3043C30.8518 39.3104 30.6957 39.2857 30.5489 39.2314C30.402 39.1771 30.2674 39.0945 30.1525 38.9881L15.8668 25.8929C15.7432 25.7812 15.6444 25.6449 15.5768 25.4927C15.5092 25.3405 15.4742 25.1758 15.4742 25.0093C15.4742 24.8428 15.5092 24.6781 15.5768 24.5259C15.6444 24.3737 15.7432 24.2374 15.8668 24.1257L30.1525 11.0305C30.2684 10.9247 30.4041 10.8428 30.5517 10.7895C30.6993 10.7363 30.856 10.7127 31.0128 10.7201C31.1696 10.7276 31.3233 10.7659 31.4652 10.833C31.6072 10.9 31.7344 10.9944 31.8398 11.1108C31.9451 11.2271 32.0264 11.3631 32.079 11.511C32.1316 11.6588 32.1546 11.8156 32.1464 11.9724C32.1383 12.1291 32.0993 12.2827 32.0316 12.4243C31.964 12.5659 31.869 12.6928 31.7522 12.7976L18.4338 25L31.7522 37.221C31.931 37.3784 32.0585 37.5859 32.1181 37.8166C32.1777 38.0473 32.1667 38.2906 32.0866 38.5149C32.0065 38.7393 31.8609 38.9345 31.6686 39.0752C31.4763 39.2159 31.2463 39.2957 31.0082 39.3043Z"
        fill="#FFFF"
      />
    </svg>
  );
}
function RightArrow() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM18.9918 10.6957C19.1482 10.6896 19.3043 10.7143 19.4511 10.7686C19.598 10.8229 19.7326 10.9055 19.8475 11.0119L34.1332 24.1071C34.2568 24.2188 34.3556 24.3551 34.4232 24.5073C34.4908 24.6595 34.5258 24.8242 34.5258 24.9907C34.5258 25.1572 34.4908 25.3219 34.4232 25.4741C34.3556 25.6263 34.2568 25.7626 34.1332 25.8743L19.8475 38.9695C19.7316 39.0753 19.5959 39.1572 19.4483 39.2105C19.3007 39.2637 19.144 39.2873 18.9872 39.2799C18.8304 39.2724 18.6767 39.2341 18.5348 39.167C18.3928 39.1 18.2656 39.0056 18.1602 38.8892C18.0549 38.7729 17.9736 38.6369 17.921 38.489C17.8684 38.3412 17.8455 38.1844 17.8536 38.0276C17.8617 37.8709 17.9007 37.7173 17.9684 37.5757C18.036 37.4341 18.131 37.3072 18.2478 37.2024L31.5662 25L18.2478 12.779C18.069 12.6216 17.9415 12.4141 17.8819 12.1834C17.8223 11.9527 17.8333 11.7094 17.9134 11.4851C17.9935 11.2607 18.1391 11.0655 18.3314 10.9248C18.5237 10.7841 18.7537 10.7043 18.9918 10.6957Z"
        fill="#FFFF"
      />
    </svg>
  );
}
