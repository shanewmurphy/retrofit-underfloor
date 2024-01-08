"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
  const swiper = useSwiper();

  return (
    <div className="w-full bg-slate-100">
      <div className="lg:w-9/12 mx-auto lg:p-28 md:p-24 sm:p-6 sm:pt-24">
        <div>
          <h4 className="text-center text-zinc-800 lg:text-5xl md:text-5xl sm:text-4xl font-bold">
            What Our Customers Say
          </h4>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="w-7/12 mx-auto">
            <div>
              {data.map((user) => (
                <SwiperSlide>
                  <div key={user.id}>
                    <p className="text-center font-medium lg:text-2xl md:text-2xl sm:text-base mt-6">
                      {user.Comment}
                    </p>
                    <h2 className="text-center mt-4">{user.name}</h2>
                    <p className="text-center text-sm">{user.location}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
