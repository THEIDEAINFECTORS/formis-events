import { useState } from "react";
import blacklogo from "../../assets/logo-full-black1.png";
import whitelogo from "../../assets/logo-full-white.png";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isInCarousel, setIsInCarousel] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);
  const [isInDryZone, setIsInDryZone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#events-carousel",
      start: "top 100px",
      end: "bottom 0",
      onEnter: () => setIsInCarousel(true),
      onLeave: () => setIsInCarousel(false),
      onEnterBack: () => setIsInCarousel(true),
      onLeaveBack: () => setIsInCarousel(false),
    });

    ScrollTrigger.create({
      trigger: "#footer-section",
      start: "top 100px",
      end: "bottom 0",
      onEnter: () => setIsInFooter(true),
      onLeave: () => setIsInFooter(false),
      onEnterBack: () => setIsInFooter(true),
      onLeaveBack: () => setIsInFooter(false),
    });

    ScrollTrigger.create({
      trigger: "#dry-zone-schedule-section",
      start: "top 100px",
      end: "bottom 0",
      onEnter: () => setIsInDryZone(true),
      onLeave: () => setIsInDryZone(false),
      onEnterBack: () => setIsInDryZone(true),
      onLeaveBack: () => setIsInDryZone(false),
    });
  }, []);

  return (
    <nav
      id="navbar"
      className={`h-[100px] w-full fixed z-20 px-[20px] lg:px-[60px] 2xl:px-[90px]
        flex items-center justify-between
        transition-colors duration-300 ${
          isInCarousel || isInDryZone
            ? "text-formisBlack14 bg-formisWhitef0"
            : "text-formisWhitef5"
        } ${isInFooter ? "text-formisWhitef5 bg-formisBlack15" : ""}`}
    >
      <img
        src={isInCarousel || isInDryZone ? blacklogo : whitelogo}
        alt="logo"
        className="max-w-[220px] sm-la:max-w-[260px]"
      />

      <div className="hidden lg:flex items-center gap-5">
        <ul className="flex gap-4 font-medium">
          <li
            className={`cursor-pointer underline-hover ${
              isInCarousel || isInDryZone ? "after:bg-formisBlack15" : "after:bg-formisWhitef0"
            }`}
          >
            Home
          </li>
          <li
            className={`cursor-pointer underline-hover ${
              isInCarousel || isInDryZone ? "after:bg-formisBlack15" : "after:bg-formisWhitef0"
            }`}
          >
            Upcoming Events
          </li>
          <li
            className={`cursor-pointer underline-hover ${
              isInCarousel || isInDryZone ? "after:bg-formisBlack15" : "after:bg-formisWhitef0"
            }`}
          >
            Event Schedule
          </li>
          <li
            className={`cursor-pointer underline-hover ${
              isInCarousel || isInDryZone ? "after:bg-formisBlack15" : "after:bg-formisWhitef0"
            }`}
          >
            Spotlight
          </li>
        </ul>
        <button className="bg-formisOrange text-formisBlack14 font-semibold h-[47px] rounded-[10px] px-3">
          Order Medicines
        </button>
      </div>

      {/* Mobile View */}
      <IoIosMenu
        className="lg:hidden text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <div
        className={`fixed z-[100] top-0 left-0 ${
          menuOpen ? "block" : "hidden"
        } h-[100vh] w-screen bg-formisWhitef0 text-formisBlack14 px-[20px] md:px-[40px] lg:px-[60px]`}
      >
        <section className="h-[100px] flex justify-between items-center">
          <img
            src={blacklogo}
            alt="logo"
            className="max-w-[220px] sm-la:max-w-[260px]"
          />
          <IoMdClose
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-2xl lg:text-3xl"
          />
        </section>

        <section className="flex flex-col justify-between h-[70vh]">
          <div className="flex flex-col gap-[10px] font-medium">
            <p>Home</p>
            <p>Upcoming Events</p>
            <p>Event Schedule</p>
            <p>Spotlight</p>
          </div>

          <div className="flex flex-col gap-5">
            <button className="bg-formisOrange text-formisBlack14 font-semibold h-[47px] rounded-[10px] px-3">
              Order Medicines
            </button>

            <div className="flex justify-between">
              <div className="bg-[#545454] bg-opacity-10 rounded-full p-3 text-3xl">
                <FaFacebookF />
              </div>
              <div className="bg-[#545454] bg-opacity-10 rounded-full p-3 text-3xl">
                <CiInstagram />
              </div>
              <div className="bg-[#545454] bg-opacity-10 rounded-full p-3 text-3xl">
                <CiTwitter />
              </div>
              <div className="bg-[#545454] bg-opacity-10 rounded-full p-3 text-3xl">
                <CiLinkedin />
              </div>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;