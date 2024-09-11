import { useState } from "react";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const [image, setImage] = useState(img1);
  const images = [img1, img2, img3];
  useGSAP(() => {
    const sections = gsap.utils.toArray("#scrollbar > div");

    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": function () {
        sections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            // markers: true,
            onEnter: () => setImage(images[index]),
            onEnterBack: () => setImage(images[index]),
          });
        });

        gsap.to("#split-container", {
          scrollTrigger: {
            trigger: "#split-container",
            pin: "#image-section",
            end: "bottom bottom",
          },
        });
      },
    });
  }, []);

  return (
    <div className="bg-formisWhitef0 text-formisBlack14 
                    px-[20px] lg:px-[90px] pt-10 lg:pt-20 pb-[48px] lg:pb-0">
      <div className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium font-[Hind] mb-10 lg:mb-0">
        <h1 className="leading-[2.5rem] md:leading-[4.5rem] lg:leading-[7rem]">
          Do more with <br /> more of your data.
        </h1>
      </div>

      <div id="split-container" className="flex lg:h-[300vh]">
        {/* ScrollBar */}
        <section
          id="scrollbar"
          className="flex flex-col gap-[48px] lg:block lg:max-w-[50%]"
        >
          <div className="lg:h-[100vh] flex flex-col items-start justify-center">
            <div className="flex gap-2 items-center mb-5">
              <div className="size-3 rounded-full bg-formisOrange"></div>
              <span className="text-sm md:text-lg font-medium">01</span>
            </div>
            <div className="text-[22px] md:text-[34px] leading-[1.75rem] md:leading-[2.5rem] mb-[16px] md:mb-5">
              <h3>Less Guesswork.</h3>
              <h3>Better Results.</h3>
            </div>
            <p className="text-[16px] md:text-[18px] lg:max-w-[50%] mb-[32px] lg:mb-0">
              AI-powered customer insights and predictions power informed
              decisions at scale. With a strong data foundation as your single
              source of truth, your data is always accurate, secure, and usable.
            </p>
            <img src={img1} alt="feature1" className="block lg:hidden" />
          </div>

          <div className="lg:h-[100vh] flex flex-col items-start justify-center">
            <div className="flex gap-2 items-center mb-5">
              <div className="size-3 rounded-full bg-formisOrange"></div>
              <span className="text-sm md:text-lg font-medium">02</span>
            </div>
            <div className="text-[22px] md:text-[34px] leading-[1.75rem] md:leading-[2.5rem] mb-[16px] md:mb-5">
              <h3>Less Guesswork.</h3>
              <h3>Better Results.</h3>
            </div>
            <p className="text-[16px] md:text-[18px] lg:max-w-[50%] mb-[32px] lg:mb-0">
              AI-powered customer insights and predictions power informed
              decisions at scale. With a strong data foundation as your single
              source of truth, your data is always accurate, secure, and usable.
            </p>
            <img src={img2} alt="feature2" className="block lg:hidden" />
          </div>

          <div className="lg:h-[100vh] flex flex-col items-start justify-center">
            <div className="flex gap-2 items-center mb-5">
              <div className="size-3 rounded-full bg-formisOrange"></div>
              <span className="text-sm md:text-lg font-medium">03</span>
            </div>
            <div className="text-[22px] md:text-[34px] leading-[1.75rem] md:leading-[2.5rem] mb-[16px] md:mb-5">
              <h3>Less Guesswork.</h3>
              <h3>Better Results.</h3>
            </div>
            <p className="text-[16px] md:text-[18px] lg:max-w-[50%] mb-[32px] lg:mb-0">
              AI-powered customer insights and predictions power informed
              decisions at scale. With a strong data foundation as your single
              source of truth, your data is always accurate, secure, and usable.
            </p>
            <img src={img3} alt="feature3" className="block lg:hidden" />
          </div>
        </section>

        {/* SideBar Images */}
        <section
          className="hidden lg:flex place-self-start h-screen items-center max-w-[50%]"
          id="image-section"
        >
          <img
            src={image}
            className="rounded-lg transition-opacity duration-500"
            alt="Feature"
          />
        </section>
      </div>
    </div>
  );
};

export default Features;
