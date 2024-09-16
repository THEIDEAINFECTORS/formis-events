import { useEffect, useState } from "react";
import Navbar from "../components/Main/Navbar/Navbar";
import Hero from "../components/Main/Hero/Hero";
import Features from "../components/Main/Features/Features";
import Highlights from "../components/Main/Highlights/Highlights";
import About from "../components/Main/About/About";
import Redefine from "../components/Main/Redefine/Redefine";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer/Footer";
import LoaderAnimation from "../components/LoaderAnimation";
import {
  slides,
  mainTitle1,
  mainTitle2,
} from "../components/Main/carouselData";

const Main = ({ dropdown, setDropdown }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavbarLoaded, setIsNavbarLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const headerTimer = setTimeout(() => {
        setIsNavbarLoaded(true);
      }, 200);
      return () => clearTimeout(headerTimer);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <div>
      <LoaderAnimation isLoaded={isLoaded} />
      <Navbar
        dropdown={dropdown}
        setDropdown={setDropdown}
        isLoaded={isLoaded}
      />
      <div
        className={`relative ${
          dropdown
            ? "opacity-10 transition-opacity duration-300"
            : "opacity-100"
        }`}
      >
        {isLoaded && (
          <div>
            <Hero isLoaded={isNavbarLoaded} />
            <Features />
            <Highlights />
            <div className="bg-formisWhitef0 text-formisBlack14">
              <Carousel
                slides={slides}
                mainTitle1={mainTitle1}
                mainTitle2={mainTitle2}
              />
            </div>
            <About />
            <Redefine />
            <Footer />
          </div>
        )}
      </div>

      {/* Automatic Modal */}
      <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
        <div
          id="modal"
          className={`${
            openModal ? "opacity-100 z-[105]" : "opacity-0 -z-50"
          } transition-all duration-500 flex
        fixed bottom-0 right-0 md2:bottom-5 md2:right-5 lg:bottom-10 lg:right-10 h-[450px] md:h-[350px] `}
        >
          <div
            id="auto-modal-image"
            className={`hidden md:block transition-opacity ${
              openModal ? "translate-x-0 transition-transform duration-1000 opacity-100" : "translate-x-full opacity-0"
            } max-h-[350px] md2:rounded-l-[10px] md:rounded-tl-[10px] relative z-[103]`}
          >
            <img
              src="https://concept-theme-tech.myshopify.com/cdn/shop/files/newsletter-banner.webp?v=1708359634&width=1200"
              className="md2:rounded-l-[10px] md:rounded-tl-[10px] h-[350px]"
            />
          </div>
          <div className="relative z-[104] flex flex-col justify-between w-screen md:w-[500px] h-full bg-white px-[34px] py-[64px] 
                        rounded-t-[10px] md:rounded-t-[0px] md:rounded-tr-[10px] md2:rounded-r-[10px]">
            <span onClick={()=>setOpenModal(false)} className="absolute right-5 top-5 font-semibold text-[20px] cursor-pointer">Close</span>
            <h4 className="text-[30px] font-bold leading-[30px]">
              Sign up and get 20% off your first order
            </h4>
            <p>
              Subscribe to our newsletter and be the first to hear about our new
              arrivals, special promotions and online exclusives.
            </p>
            <div className="text-[14px] flex flex-wrap gap-4 font-medium">
              <a target="_blank" href="https://www.facebook.com/kitsaindia/">
                Facebook
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/showcase/kitsaindia/about/"
              >
                LinkedIn
              </a>
              <a target="_blank" href="https://x.com/KITSAINDIA">
                X
              </a>
              <a target="_blank" href="https://www.instagram.com/KITSAINDIA">
                Instagram
              </a>
              <a target="_blank" href="https://www.youtube.com/@KITSAINDIA">
                Youtube
              </a>
              <a target="_blank" href="https://www.threads.net/@kitsaindia">
                Threads
              </a>
            </div>
          </div>
        </div>

        <div
          id="modal-overlay"
          onClick={() => setOpenModal(false)}
          onMouseEnter={() =>
            (document.body.style.cursor =
              "url(./assets/cursor_ad12rf.png), auto;")
          }
          className={`cross-cursor h-screen w-screen fixed top-0 left-0 bg-formisBlack15 transition-all ${
            openModal ? "opacity-90 z-[101]" : " opacity-0 -z-50"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Main;
