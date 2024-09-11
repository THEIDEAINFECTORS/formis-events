import React, { useState } from "react";
import img1 from "../assets/highlights/slide1.jpeg";
import img2 from "../assets/highlights/slide2.jpeg";
import img3 from "../assets/highlights/slide3.jpeg";
import Navbar from "../components/Events/Navbar";
import Footer from "../components/Footer/Footer";
import AwardsMarquee from "../components/AwardsMarquee";
import Hero from "../components/Events/Hero";
import Carousel from "../components/Carousel";
import Features from "../components/Events/Features/Features";
import { slides, mainTitle1, mainTitle2 } from "../components/Events/eventsCarouselData";

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Navbar />

      <section className="text-formisWhitef5 relative pt-[100px] h-[100svh]">
        {/* Background */}
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="absolute h-full w-full inset-0 bg-cover bg-center lg:bg-top filter grayscale -z-10"
        ></div>
        <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-80 z-10"></div>

        {/* Hero */}
        <section className={`flex items-center justify-center relative px-[20px] h-[100%] text-center ${isOpen ? "z-30" : "z-10"}`}>
          <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>

        {/* Marquee */}
        {/* <div className="z-10 relative h-[25%] flex items-center justify-center px-[20px] md:mx-[40px] lg:mx-[60px] 2xl:mx-[90px]">
          <AwardsMarquee />
        </div> */}
      </section>

      <section className="relative h-[100svh]">
        <div
          style={{ backgroundImage: `url(${img2})` }}
          className="absolute inset-0 bg-cover bg-center lg:bg-top filter grayscale -z-10"
        ></div>
        <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-70 z-10"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-40">
          <h1 className="text-[4rem] lg:text-[12rem] text-center text-formisOrange">
            WET ZONE
          </h1>
          <div className="text-formisWhitef5 text-sm lg:text-3xl text-center">
            <p>WHERE THE WATER SPORTS MAGIC HAPPENS</p>
          </div>
        </div>
      </section>

      <section
        id="events-carousel"
        className="bg-formisWhitef0 text-formisBlack14"
      >
        <Carousel slides={slides} mainTitle1={mainTitle1} mainTitle2={mainTitle2} />
      </section>

      <section className="relative h-[100svh]">
        <div
          style={{ backgroundImage: `url(${img3})` }}
          className="absolute inset-0 bg-cover bg-center lg:bg-top filter grayscale -z-10"
        ></div>
        <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-60 z-10"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-40">
          <h1 className="text-[4rem] lg:text-[12rem] text-center text-formisOrange">
            DRY ZONE
          </h1>
          <div className="text-formisWhitef5 text-sm lg:text-3xl text-center">
            <p>WHERE THE WATER SPORTS MAGIC HAPPENS</p>
          </div>
        </div>
      </section>

      <section id="dry-zone-schedule-section" >
        <Features />
      </section>

      <div className="relative h-[100svh]">
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="absolute inset-0 bg-cover bg-center lg:bg-top filter grayscale -z-10"
        ></div>
        <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-60 z-10"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-40">
          <h1 className="text-[4rem] lg:text-[8rem] lg:leading-[7rem] text-center text-formisOrange">
            HEALTH AND WELLNESS <br /> BY FORMIS
          </h1>
          <div className="text-formisWhitef5 text-sm lg:text-3xl text-center">
            <p>WHERE THE WATER SPORTS MAGIC HAPPENS</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Events;