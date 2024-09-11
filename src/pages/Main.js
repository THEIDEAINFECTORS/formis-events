import React from "react";
import Navbar from "../components/Main/Navbar/Navbar";
import Hero from "../components/Main/Hero/Hero";
import Features from "../components/Main/Features/Features";
import Highlights from "../components/Main/Highlights/Highlights";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer/Footer";
import {
  slides,
  mainTitle1,
  mainTitle2,
} from "../components/Main/carouselData";

const Main = ({ dropdown, setDropdown }) => {
  return (
    <>
      <Navbar dropdown={dropdown} setDropdown={setDropdown} />
      <div
        className={`${
          dropdown
            ? "opacity-10 transition-opacity duration-300"
            : "opacity-100"
        }`}
      >
        <Hero />
        <Features />
        <Highlights />
        <div className="bg-formisWhitef0 text-formisBlack14">
          <Carousel
            slides={slides}
            mainTitle1={mainTitle1}
            mainTitle2={mainTitle2}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;