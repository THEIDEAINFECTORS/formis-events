// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const Carousel = ({ slides, mainTitle1, mainTitle2 }) => {
//   return (
//     <div className="px-[40px] lg:px-[60px] xl:px-[90px] py-20">
//       <section className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium font-[Hind] mb-10 lg:mb-16">
//         <h1 className="leading-[2.5rem] md:leading-[4.5rem] lg:leading-[7rem]">
//           {mainTitle1} <br /> {mainTitle2}
//         </h1>
//       </section>
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={2.75}
//         pagination={{ clickable: true }}
//         navigation={{
//           nextEl: ".next-btn",
//           prevEl: ".prev-btn",
//         }}
//         modules={[Navigation]}
//         breakpoints={{
//           200: {
//             slidesPerView: 1.5,
//             spaceBetween: 30,
//           },
//           600: {
//             slidesPerView: 2.5,
//             spaceBetween: 30,
//           },
//           768: {
//             slidesPerView: 3.5,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="text-formisBlack14">
//               <div className="">
//                 <img
//                   src={slide.imageUrl}
//                   alt={`Carousel ${index}`}
//                   className="w-full aspect-auto"
//                 />
//               </div>

//               <div className="h-[325px] md:h-[200px] flex flex-col justify-around">
//                 <h2 className="text-[18px] lg:text-[24px] my-4">
//                   {slide.title}
//                 </h2>
//                 <p className="text-[16px] lg:text-[18px] text-[#9b9c9e]">
//                   {slide.description}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <section className="flex gap-5 mt-10 justify-end">
//         <div className="flex gap-3 items-center">
//           <button className="bg-formisOrange prev-btn font-light text-xs p-4 rounded-[5px]">
//             <FaArrowLeft />
//           </button>
//           <button className="bg-formisOrange next-btn font-light text-xs p-4 rounded-[5px]">
//             <FaArrowRight />
//           </button>
//         </div>

//         <div className="flex gap-3 items-center">
//           <a
//             href="https://api.whatsapp.com/send/?phone=919773910084&text=Hi%21+Kitsa&type=phone_number&app_absent=0"
//             className="mb-[32px] lg:mb-0 bg-formisOrange h-[47px] px-4 flex items-center justify-center rounded-full text-white cursor-pointer border border-formisOrange
//                           hover:bg-transparent hover:border hover:border-formisOrange hover:text-formisBlack15 transition-colors"
//           >
//             Order Now On Whatsapp
//           </a>
//           <a
//             className="mb-[32px] lg:mb-0 bg-formisOrange h-[47px] px-4 flex items-center justify-center rounded-full text-white cursor-pointer border border-formisOrange
//                           hover:bg-transparent hover:border hover:border-formisOrange hover:text-formisBlack15 transition-colors"
//           >
//             Get Hydrovibe Tickets
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Carousel;




import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = ({ slides, mainTitle1, mainTitle2 }) => {
  return (
    <div className="px-[40px] xl:px-[90px] py-20">
      <section className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium font-[Hind] mb-10 lg:mb-16">
        <h1 className="leading-[2.5rem] md:leading-[4.5rem] lg:leading-[7rem]">
          {mainTitle1}<span className="text-formisOrange">.</span> <br /> {mainTitle2}
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
          1024: {
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

              <div className="h-[400px] 3xl:h-[270px] flex flex-col justify-between">
                <div className="">
                  <h2 className="h-[90px] text-[16px] lg:text-[20px] my-4">
                    {slide.title}
                  </h2>
                  <p className="text-[14px] lg:text-[16px] text-formisBlack15 opacity-60">
                    {slide.description}
                  </p>
                </div>
                <button
                  href="#"
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

      <section className="flex flex-col-reverse md:flex-row gap-3 md:gap-6 mt-10 justify-end">
        <div className="flex flex-wrap justify-end gap-4">
          <a
            href="https://api.whatsapp.com/send/?phone=919773910084&text=Hi%21+Kitsa&type=phone_number&app_absent=0"
            className="bg-transparent h-[40px] px-4 rounded-full text-formisBlack15 cursor-pointer border border-formisOrange
                      flex items-center justify-center text-[14px] md:text-[14px] font-[500]
                      hover:bg-formisOrange hover:border-formisOrange hover:text-formisBlack15 transition-colors"
          >
            Order Now On Whatsapp
          </a>
          <a
            className="bg-transparent h-[40px] px-4 rounded-full text-formisBlack15 cursor-pointer border border-formisOrange
                        flex items-center justify-center text-[14px] font-[500]
                          hover:bg-formisOrange hover:border-formisOrange hover:text-formisBlack15 transition-colors"
          >
            Get Hydrovibe Tickets
          </a>
        </div>

        <div className="flex gap-4 justify-end">
          <button className="bg-formisOrange prev-btn font-light text-xs h-[40px] w-[40px] flex items-center justify-center rounded-full">
            <FaArrowLeft />
          </button>
          <button className="bg-formisOrange next-btn font-light text-xs h-[40px] w-[40px] flex items-center justify-center rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
