import { FaArrowRightLong } from "react-icons/fa6";
import "./footer.css";
import logo from "../../assets/KITSAWhite3.png";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="h-fit text-formisWhitef5 mx-[20px] lg:mx-[60px] xl:mx-[90px] py-[80px]"
    >
      <section>
        <h2 className="text-[22px] lg:text-[34px] mb-[48px]">
          See what's possible with us.
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-10 lg:h-[322px]">
          <div className="flex w-full lg:w-[50%] border border-[#545454] hover:border-[#f0f0f0] transition cursor-pointer p-8">
            <div>
              <h3 className="text-[18px] md:text-[24px] mb-[16px]">
                Contact us
              </h3>
              <p className="text-[16px] md:text-[18px] max-w-[80%] md:max-w-[90%] lg:max-w-[70%]">
                At KITSA™️, your health isn’t just a priority—it’s personal.
                We’re not just delivering products; we’re delivering care,
                convenience, and a better way of living.
              </p>
            </div>
            <div className="self-end">
              <FaArrowRightLong />
            </div>
          </div>

          <div className="flex w-full lg:w-[50%] border border-[#545454] hover:border-[#f0f0f0] transition cursor-pointer p-8">
            <div>
              <h3 className="text-[18px] md:text-[24px] mb-[16px]">
                KITSA™️.LIFE
              </h3>
              <p className="text-[16px] md:text-[18px] max-w-[80%] md:max-w-[90%] lg:max-w-[70%]">
                It's your gateway to a re-energized, stress-free life. Exclusive
                experiences, meaningful connections, and a life-enhancing
                journey designed to keep you feeling youthful and alive.
              </p>
            </div>
            <div className="self-end">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </section>

      {/* Only on larger screen sizes */}
      {/* <section className="hidden md:grid grid-cols-5 gap-[32px] mt-[80px]">
        <div className="footer-item flex flex-col gap-[16px]">
          <span className="text-[#545454] text-[12px]">PLATFORM</span>
          <p>Overview</p>
          <p>Real-time data infrastructure</p>
          <p>Customer 360°</p>
          <p>Segmentation</p>
          <p>Analytics</p>
        </div>

        <div className="footer-item flex flex-col gap-[16px]">
          <span className="text-[#545454] text-[12px]">USE CASES</span>
          <p>Create a customer 360°</p>
          <p>Improve understanding of customers</p>
          <p>Lower customer acquisition cost</p>
          <p>Boost customer lifetime value</p>
          <p>Drive operational efficiencies</p>
        </div>

        <div className="footer-item flex flex-col gap-[16px]">
          <span className="text-[#545454] text-[12px]">INDUSTRIES</span>
          <p>Media & entertainment</p>
          <p>QSR</p>
          <p>Retail</p>
          <p>Travel & hospitality</p>
          <p>Financial services</p>
        </div>

        <div>
          <div className="footer-item flex flex-col gap-[16px] mb-[24px]">
            <span className="text-[#545454] text-[12px]">RESOURCES</span>
            <p>Blog</p>
            <p>Resources</p>
            <p>Developer Docs</p>
          </div>
          <div className="footer-item flex flex-col gap-[16px]">
            <span className="text-[#545454] text-[12px]">GET STARTED</span>
            <p>Contact Sales</p>
          </div>
        </div>

        <div className="footer-item flex flex-col gap-[16px]">
          <span className="text-[#545454] text-[12px]">COMPANY</span>
          <p>About</p>
          <p>Careers</p>
          <p>Partners</p>
          <p>Contact Us</p>
          <p>Security</p>
        </div>
      </section> */}

      {/* Mobile View */}
      {/* <section className="md:hidden mt-8 flex flex-col">
        <Accordian title="Platform">
          <p>Overview</p>
          <p>Real-time data infrastructure</p>
          <p>Customer 360°</p>
          <p>Segmentation</p>
          <p>Analytics</p>
        </Accordian>
        <Accordian title="Platform">
          <p>Overview</p>
          <p>Real-time data infrastructure</p>
          <p>Customer 360°</p>
          <p>Segmentation</p>
          <p>Analytics</p>
        </Accordian>
        <Accordian title="Platform">
          <p>Overview</p>
          <p>Real-time data infrastructure</p>
          <p>Customer 360°</p>
          <p>Segmentation</p>
          <p>Analytics</p>
        </Accordian>
      </section> */}

      <section className="mt-[48px] lg:mt-28">
        <div className="flex flex-wrap gap-5 mb-[40px]">
          <p className="">Social Handles</p>
          <a
            target="_blank"
            className="hover:opacity-70 transition-opacity"
            href="https://www.facebook.com/kitsaindia/"
          >
            Facebook
          </a>
          <a
            target="_blank"
            className="hover:opacity-70 transition-opacity"
            href="https://www.linkedin.com/showcase/kitsaindia/about/"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            className="hover:opacity-70 transition-opacity"
            href="https://x.com/KITSAINDIA"
          >
            X
          </a>
          <a
            target="_blank"
            className="hover:opacity-70 transition-opacity"
            href="https://www.instagram.com/KITSAINDIA"
          >
            Instagram
          </a>
          <a
            target="_blank"
            className="hover:opacity-70 transition-opacity"
            href="https://www.youtube.com/@KITSAINDIA"
          >
            Youtube
          </a>
          <a
            target="_blank"
            className="hover:opacity-70 transition-opacity"
            href="https://www.threads.net/@kitsaindia"
          >
            Threads
          </a>
        </div>

        <img src={logo} alt="logo" className="max-w-[132px] mb-[40px]" />

        <div className="grid grid-cols-2 md:flex flex-wrap gap-[20px] text-[14px] text-[#545454]">
          <p>© 2024 Formis Health Technologies Pvt. Ltd.</p>
          <p className="cursor-pointer hover:text-white transition-colors duration-300">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
          {/* <p className="cursor-pointer hover:text-white transition-colors duration-300">Cookie Policy</p> */}
          <p className="cursor-pointer hover:text-white transition-colors duration-300">
            <Link to="/terms">Terms of Usage</Link>
          </p>
          <p className="cursor-pointer hover:text-white transition-colors duration-300">
            <Link to="/shipping-and-refunds-policy">
              Shipping and Refunds Policy
            </Link>
          </p>
          {/* <p className="cursor-pointer hover:text-white transition-colors duration-300">
            Do Not Sell or Share My Personal Data
          </p> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
