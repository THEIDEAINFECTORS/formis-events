import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { slides } from "./carouselData.js";

const Carousel = () => {
  return (
    <div className="px-[20px] lg:px-[60px] xl:px-[90px] py-20">
      <section className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium font-[Hind] mb-10 lg:mb-16">
        <h1 className="leading-[2.5rem] md:leading-[4.5rem] lg:leading-[7rem]">
          Do more with <br /> more of your data.
        </h1>
      </section>
      <Swiper
        spaceBetween={30}
        slidesPerView={3.75}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Navigation]}
        breakpoints={{
          200: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="text-formisBlack14">
              <div className="">
                <img
                  src={slide.imageUrl}
                  alt={`Carousel ${index}`}
                  className="w-full aspect-auto"
                />
              </div>

              <div className="h-[325px] md:h-[300px] flex flex-col justify-between">
                <div>
                  <h2 className="text-[18px] lg:text-[24px] my-4">{slide.title}</h2>
                  <p className="text-[16px] lg:text-[18px] text-[#9b9c9e]">
                    {slide.description}
                  </p>
                </div>
                <button href="#"
                  className="font-medium w-fit cursor-pointer transition-opacity duration-300
                            border-b border-formisBlack14 border-opacity-50 hover:border-opacity-100"
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="flex gap-5 mt-10 justify-end mr-[0px] lg:mr-[60px] xl:mr-[90px]">
        <button className="bg-formisOrange prev-btn font-light text-xs p-4 rounded-[5px]">
          <FaArrowLeft />
        </button>
        <button className="bg-formisOrange next-btn font-light text-xs p-4 rounded-[5px]">
          <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

export default Carousel;
