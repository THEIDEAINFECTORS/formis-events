import { useEffect, useState } from "react";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import gsap from "gsap";
import whitelogo from "../../assets/logo-full-white.png";
import img1 from "../../assets/highlights/slide1.jpeg";

const Hero = ({isOpen, setIsOpen}) => {

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        "#register-text",
        { y: 100 },
        { y: 0, duration: 1, ease: "power2.inOut" }
      );
      gsap.fromTo(
        "#register-image",
        { x: 650 },
        { x: 0, duration: 1.5, ease: "power2.inOut" }
      );
    }
  }, [isOpen]);

  return (
    <div>
      <div className="text-4xl md:text-6xl lg:text-[12rem] mx-auto text-formisWhitef5">
        <h1 className="relative z-0 font-bold">
          HYDROVIBE <br />
          <span className="tracking-normal">2024</span>
        </h1>
      </div>
      {/* <div className="text-2xl font-light text-formisWhitef5 max-w-[820px] text-center mx-auto mt-5">
        <p className="text-base lg:text-[22px]">
          Focus on feeling better. Fast Pass will deliver the medications,
          essentials, and needs you require in just a few minutes. Rest up!
          Because by the time you wear your slippers, take the lift downstairs,
          and turn your engine on, we'll already be at your doorstep.
        </p>
      </div> */}

      <div className="flex gap-5 items-center justify-center mt-10">
        <button
          onClick={() => setIsOpen(true)}
          className="text-formisWhitef5 border border-formisWhitef0 font-bold text-[14px] h-[46.8px] rounded-[10px] px-4 hover:brightness-125 transition"
        >
          Register Now
        </button>
      </div>

      <Modal open={isOpen}>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="relative z-[100] bg-cover bg-center lg:bg-top bg-formisWhitef0 text-formisBlack14
                      h-screen w-screen flex justify-between"
        >
          <div className="h-full w-full bg-formisBlack15 absolute top-0 left-0 opacity-60 z-10"></div>

          <section
            className="relative z-[100] ml-[20px] lg:ml-[90px]
                              hidden md:flex flex-col justify-between"
          >
            <div className="h-[100px] flex items-center">
              <img
                src={whitelogo}
                alt="logo"
                className="max-w-[200px] lg:max-w-[260px]"
              />
            </div>

            <div className="mb-20 max-w-[600px]">
              <p className="text-xl lg:text-[32px] mb-6 lg:leading-[2.5rem] text-formisWhitef5 font-semibold">
                Join <span className="text-formisOrange">8 Million</span>{" "}
                Businesses that Trust Razorpay to Supercharge their Business
              </p>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 xl:gap-5 text-[12px] lg:text-[14] xl:text-[18px] text-formisWhitef5 font-semibold">
                <p>100+ Payment Methods</p>
                <p>Easy Integration</p>
                <p>Powerful Dashboard</p>
              </div>
            </div>
          </section>

          <section
            className="relative z-[100] bg-formisWhitef0 h-screen md:h-[98vh] p-[32px] md:p-[40px] lg:p-[56px] w-full md:w-[380px] lg:w-[520px] flex-shrink-0
                        md:mx-3 my-auto flex flex-col md:rounded-[10px]"
          >
            <p
              onClick={() => setIsOpen(false)}
              className="place-self-end cursor-pointer font-bold text-xl"
            >
              Close
            </p>
            <div className="h-[95%] flex flex-col items-center justify-center">
              <div className="mb-6 overflow-hidden h-9">
                <p
                  id="register-text"
                  className="text-xl lg:text-[32px] font-bold text-center w-fit"
                >
                  Register Now
                </p>
              </div>

              <RegistrationForm />
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;