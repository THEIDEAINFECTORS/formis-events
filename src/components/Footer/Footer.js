import { FaArrowRightLong } from "react-icons/fa6";
import "./footer.css";
import logo from "../../assets/logo-full-white.png";
import Accordian from "./Accordian";

const Footer = () => {
  return (
    <footer id="footer-section" className="h-fit text-formisWhitef5 mx-[20px] lg:mx-[90px] py-[80px]">
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
              <p className="text-[16px] md:text-[18px] max-w-[80%] md:max-w-[90%] lg:max-w-[60%]">
                Lorem Ipsum is Lorem Ipsum, Lorem Ipsum Lorem Ipsum. Lorem Ipsum
                is Lorem Ipsum is Lorem
              </p>
            </div>
            <div className="self-end">
              <FaArrowRightLong />
            </div>
          </div>

          <div className="flex w-full lg:w-[50%] border border-[#545454] hover:border-[#f0f0f0] transition cursor-pointer p-8">
            <div>
              <h3 className="text-[18px] md:text-[24px] mb-[16px]">
                Explore the demo
              </h3>
              <p className="text-[16px] md:text-[18px] max-w-[80%] md:max-w-[90%] lg:max-w-[60%]">
                Lorem Ipsum is Lorem Ipsum, Lorem Ipsum Lorem Ipsum. Lorem Ipsum
                is Lorem Ipsum is Lorem
              </p>
            </div>
            <div className="self-end">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </section>

      {/* Only on larger screen sizes */}
      <section className="hidden md:grid grid-cols-5 gap-[32px] mt-[80px]">
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
      </section>

      {/* Mobile View */}
      <section className="md:hidden mt-8 flex flex-col">
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
      </section>

      <section className="mt-[48px] lg:mt-28">
        <img
          src={logo}
          alt="logo"
          className="max-w-[260px] max-h-[54.2px] mb-[40px]"
        />
        <div className="grid grid-cols-2 md:flex flex-wrap gap-[20px] text-[14px] text-[#545454]">
          <p className="cursor-pointer">© 2024 Formis, Inc.</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Cookie Policy</p>
          <p className="cursor-pointer">Website terms of service</p>
          <p className="cursor-pointer">Platform terms of service</p>
          <p className="cursor-pointer">
            Do Not Sell or Share My Personal Data
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;