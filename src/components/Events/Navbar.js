import { useState } from "react";
import blacklogo from "../../assets/logo-full-black1.png";
import whitelogo from "../../assets/logo-full-white.png";
import { IoIosMenu } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isInCarousel, setIsInCarousel] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  }, []);

  return (
    <nav
      id="navbar"
      className={`h-[100px] w-full fixed z-[30] px-[20px] lg:px-[60px] 2xl:px-[90px]
        flex items-center justify-between
        transition-colors duration-300 ${
          isInCarousel
            ? "text-formisBlack14 bg-formisWhitef0"
            : "text-formisWhitef5"
        } ${isInFooter ? "text-formisWhitef5 bg-formisBlack15" : ""}`}
    >
      <img
        src={isInCarousel ? blacklogo : whitelogo}
        alt="logo"
        className="max-w-[220px] sm-la:max-w-[260px]"
      />
      <ul className="hidden lg:flex gap-3">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>

      {/* Mobile View */}
      <IoIosMenu className="lg:hidden text-3xl cursor-pointer" />
    </nav>
  );
};

export default Navbar;
