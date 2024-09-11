import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosMenu, IoIosCall, IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import blacklogo from "../../../assets/logo-full-black1.png";
import whitelogo from "../../../assets/logo-full-white.png";
import ExpandNavbar from "./ExpandNavbar";
import Menu from "./Menu Items/Menu";

const Navbar = ({ dropdown, setDropdown }) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }

    if (window.scrollY > lastScrollY) {
      setShow(true);
    } else {
      setShow(false);
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
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
        className={`text-[12px] 2xl:text-[13px] 3xl:text-[15px] fixed z-[100] xl:px-[60px] 2xl:px-[90px] active ${
          show ? "hidden1" : ""
        } w-full h-[100px] hidden xl:flex items-center justify-between transition-colors duration-500 ease-in-out ${
          isAtTop
            ? "bg-transparent text-formisWhitef5"
            : "bg-formisWhitef0 text-formisBlack14"
        } hover:bg-formisWhitef0 hover:text-formisBlack14 group`}
      >
        <section className="hidden xl:flex items-center gap-4 2xl:gap-8 3xl:gap-10">
          <img
            src={isLogoHovered ? blacklogo : isAtTop ? whitelogo : blacklogo}
            alt="logo"
            className="transition-transform ease-in-out object-fit max-w-[260px]"
          />
          <div>
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
          </div>
        </section>

        <section className="hidden xl:flex gap-[18px] items-center">
          <ul className="flex items-center">
            <FiSearch className="mr-[18px]" />
            <li className="flex items-center gap-[3px] mr-[11px]">
              Health Portal <TiArrowSortedDown />
            </li>
            <li className="flex items-center gap-[3px]">
              Resources <TiArrowSortedDown />
            </li>
          </ul>
          <div className="flex items-center gap-[12px] font-semibold 2xl:font-bold">
            <button
              className={`${
                isAtTop
                  ? "bg-formisOrange text-formisBlack14"
                  : "bg-formisBlack15 text-formisWhitef5"
              } h-[47px] xl:w-[110px] 2xl:w-[130px] 3xl:w-[135px] rounded-[10px] group-hover:bg-formisBlack15 group-hover:text-formisWhitef5`}
            >
              Order Here
            </button>
            <button
              className={`${
                isAtTop
                  ? "bg-formisOrange text-formisBlack14"
                  : "bg-formisBlack15 text-formisWhitef5"
              } h-[47px] xl:w-[140px] 2xl:w-[160px] 3xl:w-[166px] rounded-[10px] group-hover:bg-formisBlack15 group-hover:text-formisWhitef5`}
            >
              Book Diagnostics
            </button>
            <button
              className={`${
                isAtTop
                  ? "bg-formisOrange text-formisBlack14"
                  : "bg-formisBlack15 text-formisWhitef5"
              } size-[47px] rounded-full text-lg flex items-center justify-center group-hover:bg-formisBlack15 group-hover:text-formisWhitef5`}
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
            ? "bg-transparent text-formisWhitef5"
            : "bg-formisWhitef0 text-formisBlack14"
        }`}
      >
        <section
          className="xl:hidden flex items-center justify-between
                  px-[20px] md:px-[40px] lg:px-[60px] h-[100px]"
        >
          <div>
            <img
              src={isAtTop || menuOpen ? whitelogo : blacklogo}
              alt="Logo"
              className="w-[180px] md:w-[200px] lg:w-[260px]"
            />
          </div>
          <div className="flex gap-2 text-2xl lg:text-3xl">
            
          <IoIosMenu className="cursor-pointer" onClick={toggleMenu} />
          </div>
        </section>

        <div
          className={`fixed top-0 left-0 ${
            menuOpen ? "block" : "hidden"
          } h-[100svh] w-screen bg-formisWhitef0 text-formisBlack14 z-[200] px-[20px] md:px-[40px] lg:px-[60px]`}
        >
          <section className="flex items-center justify-between h-[100px]">
            <img
              src={blacklogo}
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
              <li className="flex justify-between">
                <p className="font-medium">Home</p>
                <MdKeyboardArrowRight className="text-2xl" />
              </li>
              <li className="flex justify-between">
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

            <div className="mb-32 flex flex-col gap-2">
              <button className="bg-formisOrange rounded-[10px] py-3">
                Order Here
              </button>
              <button className="bg-formisOrange rounded-[10px] py-3">
                Book Diagnostics
              </button>
            </div>
          </section>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;