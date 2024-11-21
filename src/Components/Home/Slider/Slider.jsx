import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/0cCNVDq/Mountain-Trek-to-Everest-Base-Camp.jpg",
      alt: "Mount trek Adventure",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/pWMJZm4/ecoTour1.jpg",
      alt: "Ocean Dive Adventure",
    },
    
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[500px]" // Adjust height as needed
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="bg-black/40 w-full h-full flex justify-center items-center">
                <h2 className="text-white text-4xl font-bold">
                  {slide.alt}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
