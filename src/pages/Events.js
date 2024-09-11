import React, { useState } from "react";
import img1 from "../assets/highlights/slide1.jpeg";
import img2 from "../assets/highlights/slide2.jpeg";
import img3 from "../assets/highlights/slide3.jpeg";
import Navbar from "../components/Events/Navbar";
import Footer from "../components/Footer/Footer";
import AwardsMarquee from "../components/AwardsMarquee";
import Hero from "../components/Events/Hero";
import Carousel from "../components/Carousel/Carousel";

const Events = () => {
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
        <section className="flex items-center justify-center relative px-[20px] h-[75%] z-40">
          <Hero />
        </section>

        {/* Marquee */}
        <div className="z-10 relative h-[25%] flex items-center justify-center px-[20px] md:mx-[40px] lg:mx-[60px] 2xl:mx-[90px]">
          <AwardsMarquee />
        </div>
      </section>

      <div className="relative pt-[100px] h-[100svh]">
        <div
          style={{ backgroundImage: `url(${img2})` }}
          className="absolute inset-0 bg-cover bg-center lg:bg-top filter grayscale -z-10"
        ></div>
        <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-60 z-10"></div>
      </div>

      <div className="relative pt-[100px] h-[100svh]">
        <div
          style={{ backgroundImage: `url(${img3})` }}
          className="absolute inset-0 bg-cover bg-center lg:bg-top filter grayscale -z-10"
        ></div>
        <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-60 z-10"></div>
      </div>

      <section id="events-carousel" className="bg-formisWhitef0 text-formisBlack14">
        <Carousel />
      </section>

      <div className="relative pt-[100px] h-[100svh]">
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="absolute inset-0 bg-cover bg-center lg:bg-top filter grayscale -z-10"
        ></div>
        <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-60 z-10"></div>
      </div>

      <Footer />
    </main>
  );
};

export default Events;