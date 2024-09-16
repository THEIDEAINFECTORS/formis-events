import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosMenu, IoIosCall, IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import greenlogo from "../../../assets/KISTAGreen.png";
import whitelogo from "../../../assets/KITSAWhite3.png";
import ExpandNavbar from "./ExpandNavbar";
import Menu from "./Menu Items/Menu";
import gsap from "gsap";
import MenuMobile from "./Menu Items/MenuMobile";

import { Link } from "react-router-dom";

const Navbar = ({ bg, text, dropdown, setDropdown, isLoaded }) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMobileMenu = (menuItem) => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMenu(menuItem);

    if (!mobileMenuOpen) {
      gsap.to("#mobile-menu", {
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to("#mobile-menu", {
        x: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const controlNavbar = () => {
  //   if (window.scrollY === 0) {
  //     setIsAtTop(true);
  //   } else {
  //     setIsAtTop(false);
  //   }

  //   if (window.scrollY > lastScrollY) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  //   setLastScrollY(window.scrollY);
  // };

  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
      setShow(false);
    } else {
      setIsAtTop(false);

      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <main>
      <nav
        id="navbar"
        // onMouseEnter={() => setIsLogoHovered(true)}
        // onMouseLeave={() => setIsLogoHovered(false)}
        className={`text-[12px] 2xl:text-[13px] 3xl:text-[15px] fixed z-[100] xl:px-[60px] 2xl:px-[90px] active ${
          show ? "hidden1" : ""
        } w-full h-[80px] hidden xl:flex items-center justify-between transition-colors duration-500 ease-in-out ${
          isAtTop
            ? "bg-transparent text-white"
            : "bg-formisWhitef0 text-formisBlack15"
        } 
        ${isLoaded ? "translate-y-0" : "-translate-y-full"}`}
      >
        <section className="hidden xl:flex items-center gap-4 2xl:gap-8 3xl:gap-10">
          <Link to="/">
            <img
              src={isLogoHovered ? greenlogo : isAtTop ? whitelogo : greenlogo}
              alt="logo"
              className="transition-transform ease-in-out object-fit max-w-[132px]"
            />
          </Link>
          {/* <div>
            <ul className="flex gap-[11px]">
              <li
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                className="flex items-center gap-[3px] h-[100px]"
              >
                Home <TiArrowSortedDown />
                {dropdown && (
                  <ExpandNavbar isOpen={dropdown}>
                    <Menu />
                  </ExpandNavbar>
                )}
              </li>
              <li className="flex items-center gap-[3px]">
                Services <TiArrowSortedDown />
              </li>
              <li className="flex items-center gap-[3px]">
                Events <TiArrowSortedDown />
              </li>
              <li className="flex items-center gap-[3px]">
                Curated Offers <TiArrowSortedDown />
              </li>
            </ul>
          </div> */}
        </section>

        <section className="hidden xl:flex gap-[18px] items-center">
          {/* <ul className="flex items-center">
            <FiSearch className="mr-[18px]" />
            <li className="flex items-center gap-[3px] mr-[11px]">
              Health Portal <TiArrowSortedDown />
            </li>
            <li className="flex items-center gap-[3px]">
              Resources <TiArrowSortedDown />
            </li>
          </ul> */}
          <div className="flex items-center gap-[12px] text-[12px] font-[400] 2xl:font-[600]">
            <button
              className={`${
                isAtTop
                  ? "bg-[#f1edeb] text-formisBlack15 hover:bg-transparent hover:text-white hover:border hover:border-white transition-colors"
                  : "bg-formisOrange text-formisBlack15"
              } h-[47px] xl:w-[200px] rounded-full 
               group-hover:bg-formisBlack15 group-hover:text-white`}
            >
              ORDER NOW ON WHATSAPP
            </button>
            <button
              className={`${
                isAtTop
                  ? "bg-[#f1edeb] text-formisBlack15 hover:bg-transparent hover:text-white hover:border hover:border-white transition-colors"
                  : "bg-formisOrange text-formisBlack15"
              } h-[47px] xl:w-[186px] rounded-full 
              group-hover:bg-formisBlack15 group-hover:text-white`}
            >
              GET HYDROVIBE TICKETS
            </button>
            <button
              className={`${
                isAtTop
                  ? "bg-[#f1edeb] text-formisBlack15 hover:bg-transparent hover:text-white hover:border hover:border-white transition-colors"
                  : "bg-formisOrange text-formisBlack15"
              } size-[47px] rounded-full text-lg flex items-center justify-center 
              group-hover:bg-formisBlack15 group-hover:text-white`}
            >
              <IoIosCall />
            </button>
          </div>
        </section>
      </nav>

      {/* Mobile View */}
      <nav
        className={`fixed w-full z-[100] active ${show ? "hidden1" : ""} ${
          isAtTop
            ? "bg-transparent text-white"
            : "bg-formisWhitef0 bg-opacity-[0.97] text-formisBlack15"
        } ${isLoaded ? "translate-y-0" : "-translate-y-full"}`}
      >
        <section
          className="xl:hidden flex items-center justify-between
                  px-[20px] md:px-[40px] lg:px-[60px] h-[80px]"
        >
          <div>
            <img
              src={isAtTop || menuOpen ? whitelogo : greenlogo}
              alt="Logo"
              className="w-[104px]"
            />
          </div>
          {/* <div className="flex gap-2 text-2xl lg:text-3xl">
            <IoIosMenu className="cursor-pointer" onClick={toggleMenu} />
          </div> */}
          <button
            className={`${
              isAtTop ? "bg-[#f1edeb]" : "bg-formisOrange text-white"
            } text-[12px] font-[500] text-formisBlack15 rounded-full px-4 py-2`}
          >
            GET HYDROVIBE TICKETS
          </button>
        </section>

        <div
          className={`fixed top-0 left-0 ${
            menuOpen ? "block" : "hidden"
          } h-[100vh] w-screen bg-formisWhitef0 text-formisBlack15 z-[200] px-[20px] md:px-[40px] lg:px-[60px]`}
        >
          <section className="flex items-center justify-between h-[100px]">
            <img
              src={greenlogo}
              alt="logo"
              className="w-[180px] md:w-[200px] lg:w-[260px]"
            />
            <IoMdClose
              onClick={toggleMenu}
              className="cursor-pointer text-2xl lg:text-3xl"
            />
          </section>

          <section className="flex flex-col justify-between h-full w-full ">
            <ul className="flex flex-col gap-[16px]">
              <li
                className="flex justify-between"
                onClick={() => toggleMobileMenu("Home")}
              >
                <p className="font-medium">Home</p>
                <MdKeyboardArrowRight className="text-2xl" />
              </li>
              <li className="flex justify-between" onClick={toggleMobileMenu}>
                <p className="font-medium">Services</p>
                <MdKeyboardArrowRight className="text-2xl" />
              </li>
              <li className="flex justify-between">
                <p className="font-medium">Events</p>
                <MdKeyboardArrowRight className="text-2xl" />
              </li>
              <li className="flex justify-between">
                <p className="font-medium">Curated Offers</p>
                <MdKeyboardArrowRight className="text-2xl" />
              </li>
              <li className="flex justify-between">
                <p className="font-medium">Health Portal</p>
                <MdKeyboardArrowRight className="text-2xl" />
              </li>
              <li className="flex justify-between">
                <p className="font-medium">Resources</p>
                <MdKeyboardArrowRight className="text-2xl" />
              </li>
            </ul>

            <div className="mb-64 flex flex-col gap-2">
              <button className="bg-formisOrange rounded-[10px] py-3">
                Order Here
              </button>
              <button className="bg-formisOrange rounded-[10px] py-3">
                Book Diagnostics
              </button>
            </div>
          </section>
        </div>

        {/* Mobile Sliding Menu */}

        {/* <div
          id="mobile-menu"
          className="fixed top-0 left-0 z-[300] translate-x-[-100%] w-screen h-screen bg-formisWhitef5"
        >
          //Conditionally render content based on the active menu item
          {activeMenu === "Home" && (
            <MenuMobile
              toggleMobileMenu={toggleMobileMenu}
              toggleMenu={toggleMenu}
            />
          )}
          {activeMenu === "Services" && <div>Services Content</div>}
          {activeMenu === "Events" && <div>Events Content</div>}
          {activeMenu === "Offers" && <div>Curated Offers Content</div>}
        </div> */}
      </nav>
    </main>
  );
};

export default Navbar;
