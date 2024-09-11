import { useState, useEffect } from "react";
import { slides, slidesTitle } from "./highlightsData";

const Highlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[80vh] relative">
      <section className="flex pt-5">
        {slidesTitle.map((title, index) => (
          <div className="flex items-center justify-center z-20 w-screen max-w-screen">
            <section className="flex justify-between bg-transparent text-formisWhitef5">
              <div
                className="cursor-pointer"
                onClick={() => setCurrentSlide(index)}
              >
                <div className="h-1 w-[21vw] bg-[#545454] opacity-70 rounded-full mb-1 lg:mb-4">
                  <div
                    className={`h-1 ${
                      currentSlide === index ? "w-full" : "w-0"
                    } bg-formisOrange`}
                  ></div>
                </div>
                {/* <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">{title}</h1> */}
              </div>
            </section>
          </div>
        ))}
      </section>

      {slides.map((slide, index) => (
        <section
          key={index}
          style={{ backgroundImage: `url(${slide.img})` }}
          className={`h-[80vh] w-screen bg-top bg-cover bg-no-repeat px-[20px] lg:px-[90px] absolute top-0 left-0 z-10 flex items-end pb-20 text-formisWhitef5
            ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out absolute inset-0`}
        >
          <div className="absolute top-0 left-0 h-full w-full bg-formisBlack15 opacity-50 z-20"></div>
          <div className="z-30 w-screen flex md:gap-4 lg:gap-6 xl:gap-0 items-end justify-between">
            <div className="hidden md:block">
              <h1 className="text-5xl lg:text-9xl">{slide.leftHeader}</h1>
              <p>{slide.leftDesc}</p>
            </div>

            <div className="max-w-[490px]">
              <h3 className="text-[22px] lg:text-[34px] font-medium leading-[1.75rem] lg:leading-[2.5rem] mb-4 md:mb-7">
                {slide.rightHeader}
              </h3>
              <p className="text-base md:text-[18px] mb-7">{slide.rightDesc}</p>
              <button className="bg-formisOrange text-formisBlack14 px-4 md:px-6 py-3 md:py-4 rounded-[10px] font-medium">
                Read customer story
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Highlights;
