"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const data = [
  {
    id: 1,
    name: "Jane M",
    location: "Cork",
    Comment:
      "Choosing underfloor heating was the best decision for our home, and this service made it a breeze. The team worked efficiently, and we didn't have to deal with any mess or reconstruction. Our floors are now not only warm but also as beautiful as ever. Highly recommend!",
  },
  {
    id: 2,
    name: "John P",
    location: "Wicklow",
    Comment:
      "I was looking for a heating solution that was both efficient and eco-friendly. This underfloor heating service exceeded my expectations. The installation process was seamless, and I love having control over different heating zones. A great investment for comfort and sustainability.",
  },
  {
    id: 3,
    name: "Sarah L",
    location: "Wicklow",
    Comment:
      "As someone who values a minimalist lifestyle, I was hesitant about adding traditional radiators. This underfloor heating conversion changed everything. It's silent, invisible, and adds a touch of luxury to our home without compromising on space. Truly impressed!",
  },
  {
    id: 4,
    name: "David H",
    location: "Wicklow",
    Comment:
      "The integrated smart features of this underfloor heating system are a game-changer. Being able to control the heating from my smartphone is not only convenient but also energy-efficient. The team behind the installation was professional and ensured a quick, non-invasive upgrade. I'm a satisfied customer!",
  },
];
export default function Testimonials() {
  const swiperRef = useRef();

  return (
    <div className="w-full bg-zinc-100">
      <div className="lg:w-9/12 mx-auto lg:p-28 md:p-24 sm:p-6 sm:pt-24">
        <div>
          <h4 className="text-center text-zinc-800 lg:text-5xl md:text-5xl sm:text-4xl font-bold">
            What Our Customers Say
          </h4>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="w-7/12 mx-auto">
            <div>
              {data.map((user) => (
                <SwiperSlide key={user.id}>
                  <div key={user.id}>
                    <p className="text-center text-lightgrey font-medium lg:text-2xl md:text-2xl sm:text-base mt-6">
                      {user.Comment}
                    </p>
                    <h2 className="text-center text-zinc-800 text-xl font-semibold mt-4">
                      {user.name}
                    </h2>
                    <p className="text-center text-lightgrey font-medium text-sm">
                      {user.location}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
        <div className="lg:w-1/6 md:w-1/4 sm:w-4/12 mt-8 mx-auto">
          <div className="flex justify-between">
            <div>
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
        fill="#3C3B3B"
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
        fill="#3C3B3B"
      />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.3427 16.736H35.0002V16.6668H20.0002V23.3335H29.4193C28.0452 27.2143 24.3527 30.0002 20.0002 30.0002C14.4777 30.0002 10.0002 25.5227 10.0002 20.0002C10.0002 14.4777 14.4777 10.0002 20.0002 10.0002C22.5493 10.0002 24.8685 10.9618 26.6343 12.5327L31.3485 7.8185C28.3718 5.04433 24.3902 3.3335 20.0002 3.3335C10.796 3.3335 3.3335 10.796 3.3335 20.0002C3.3335 29.2043 10.796 36.6668 20.0002 36.6668C29.2043 36.6668 36.6668 29.2043 36.6668 20.0002C36.6668 18.8827 36.5518 17.7918 36.3427 16.736Z"
        fill="#FFC107"
      />
      <path
        d="M5.25488 12.2427L10.7307 16.2585C12.2124 12.5902 15.8007 10.0002 19.9999 10.0002C22.5491 10.0002 24.8682 10.9618 26.6341 12.5327L31.3482 7.8185C28.3716 5.04433 24.3899 3.3335 19.9999 3.3335C13.5982 3.3335 8.04655 6.94766 5.25488 12.2427Z"
        fill="#FF3D00"
      />
      <path
        d="M20.0001 36.6668C24.3051 36.6668 28.2168 35.0192 31.1743 32.3401L26.0159 27.9751C24.3426 29.2426 22.2626 30.0001 20.0001 30.0001C15.6651 30.0001 11.9843 27.2359 10.5976 23.3784L5.1626 27.5659C7.92093 32.9634 13.5226 36.6668 20.0001 36.6668Z"
        fill="#4CAF50"
      />
      <path
        d="M36.3425 16.7357H35V16.6665H20V23.3332H29.4192C28.7592 25.1973 27.56 26.8048 26.0133 27.9757L26.0158 27.974L31.1742 32.339C30.8092 32.6707 36.6667 28.3332 36.6667 19.9998C36.6667 18.8823 36.5517 17.7915 36.3425 16.7357Z"
        fill="#1976D2"
      />
    </svg>
  );
}
