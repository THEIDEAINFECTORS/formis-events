import { useEffect, useState } from "react";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import gsap from "gsap";
import whitelogo from "../../assets/logo-full-white.png";
import img1 from "../../assets/highlights/slide1.jpeg";

import { Toaster } from "sonner";

const Hero = ({ isOpen, setIsOpen }) => {
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let mm = gsap.matchMedia();

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

      // setReset(true);
    }

    mm.add("(min-width: 300px)", () => {
      gsap.to("#hydrovibe-text", {
        right: "18%",
        bottom: "36.5%",
        scale: 0.85,
        delay: 7,
        duration: 0.5,
        onComplete: () => {
          gsap.to("#hydrovibe-text", { opacity: 0 });
        },
      });
    });
    mm.add("(min-width: 1028px)", () => {
      gsap.to("#hydrovibe-text", {
        right: "35%",
        bottom: "43%",
        scale: 0.15,
        delay: 7,
        duration: 0.5,
        onComplete: () => {
          gsap.to("#hydrovibe-text", { opacity: 0 });
        },
      });
    });
    mm.add("(min-width: 1440px)", () => {
      gsap.to("#hydrovibe-text", {
        right: "35%",
        bottom: "43.5%",
        scale: 0.2,
        delay: 7,
        duration: 0.5,
        onComplete: () => {
          gsap.to("#hydrovibe-text", { opacity: 0 });
        },
      });
    });
    mm.add("(min-width: 1680px)", () => {
      gsap.to("#hydrovibe-text", {
        right: "37%",
        bottom: "44.5%",
        scale: 0.175,
        delay: 7,
        duration: 0.5,
        onComplete: () => {
          gsap.to("#hydrovibe-text", { opacity: 0 });
        },
      });
    });
    mm.add("(min-width: 1920px)", () => {
      gsap.to("#hydrovibe-text", {
        right: "38.625%",
        bottom: "44.5%",
        scale: 0.15,
        delay: 7,
        duration: 0.5,
        onComplete: () => {
          gsap.to("#hydrovibe-text", { opacity: 0 });
        },
      });
    });
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setReset(false);
  };

  return (
    <div>
      <div className="relative flex items-center justify-center mx-auto h-screen w-screen">
        <h1
          id="hydrovibe-text"
          className="tracking-tighter hydrovibe relative z-0 font-bold
                    text-[50px] md:text-[100px] lg:text-[170px] xl:text-[210px] 2xl:text-[260px] 3xl:text-[300px] 4xl:text-[350px]"
        >
          HYDROVIBE{" "}
          <span
            className="hydrovibe2 absolute -z-10 left-0 lg:left-1
                          text-[51px] md:text-[101px] lg:text-[171px] xl:text-[211px] 2xl:text-[261px] 3xl:text-[301px] 4xl:text-[351px]"
          >
            HYDROVIBE
          </span>
        </h1>
      </div>
      <div className="flex absolute inset-x-0 bottom-1/4 gap-5 items-center justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className={`text-formisWhitef5 relative border border-formisWhitef0 font-bold text-[14px] h-[46.8px] rounded-[10px] px-4 hover:brightness-125 transition `}
        >
          Register Now
        </button>
      </div>

      {isOpen && (
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
                <p className="text-xl text-left lg:text-[32px] mb-6 lg:leading-[2.5rem] text-formisWhitef5 font-semibold">
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
                onClick={handleClose}
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

                <RegistrationForm reset={reset} />
              </div>
            </section>
            <div className="absolute">
              <Toaster
                position="top-right"
                expand={false}
                closeButton
                richColors
                visibleToasts={2}
                toastOptions={{
                  // classNames: {
                  //   error: "text-red-400",
                  //   success: "text-green-400",
                  //   warning: "text-yellow-400",
                  //   info: "bg-blue-400",
                  // },
                }}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Hero;
