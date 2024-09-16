import { useEffect, useState } from "react";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const [image, setImage] = useState(img1);
  const images = [img1, img2, img3];
  useGSAP(() => {
    const sections = gsap.utils.toArray("#scrollbar > div");

    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          end: "bottom 40%",
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
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);

  return (
    <div
      className="bg-formisWhitef0 text-formisBlack14 
                    px-[40px] lg:px-[90px] pt-10 lg:pt-20 pb-[48px] lg:pb-0"
    >
      <div className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium font-[Hind] mb-10 lg:mb-0">
        <h1 className="leading-[2.5rem] md:leading-[4.5rem] lg:leading-[7rem]">
          HOW IT WORKS<span className="text-formisOrange">.</span>
        </h1>
      </div>

      <div id="split-container" className="flex lg:h-[300vh] lg:px-[50px]">
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
              <h3>Order in 20 Seconds</h3>
              {/* <h3>Better Results.</h3> */}
            </div>
            <p className="text-[16px] md:text-[18px] lg:max-w-[50%] mb-5">
              Forget clunky apps—use <span className="font-bold">WhatsApp</span>{" "}
              to order your <span className="font-bold">health essentials</span>{" "}
              in seconds. Whether it’s a wellness kit or something for your
              lifestyle, KITSA<span className="text-[8px] align-super">™</span>{" "}
              delivers it effortlessly.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=919773910084&text=Hi%21+Kitsa&type=phone_number&app_absent=0"
              className="mb-[32px] lg:mb-0 bg-formisOrange h-[40px] px-4 flex items-center justify-center rounded-full text-white cursor-pointer
                          hover:bg-transparent hover:border hover:border-formisOrange hover:text-formisBlack15 transition-colors"
            >
              Order Now On Whatsapp
            </a>
            <img src={img1} alt="feature1" className="block lg:hidden" />
          </div>

          <div className="lg:h-[100vh] flex flex-col items-start justify-center">
            <div className="flex gap-2 items-center mb-5">
              <div className="size-3 rounded-full bg-formisOrange"></div>
              <span className="text-sm md:text-lg font-medium">02</span>
            </div>
            <div className="text-[22px] md:text-[34px] leading-[1.75rem] md:leading-[2.5rem] mb-[16px] md:mb-5">
              <h3>Delivered in 20 Minutes</h3>
              {/* <h3>Better Results.</h3> */}
            </div>
            <p className="text-[16px] md:text-[18px] lg:max-w-[50%] mb-[32px] lg:mb-0">
              <span className="font-bold">
                Experience seamless and swift care delivery within just 20
                minutes.{" "}
              </span>
              Whatever you need,{" "}
              <span className="font-bold">
                KITSA<span className="text-[8px] align-super">™</span>
              </span>{" "}
              delivers fast, powered by{" "}
              <span className="font-bold">FORMIS</span>.
            </p>
            <img src={img2} alt="feature2" className="block lg:hidden" />
          </div>

          <div className="lg:h-[100vh] flex flex-col items-start justify-center">
            <div className="flex gap-2 items-center mb-5">
              <div className="size-3 rounded-full bg-formisOrange"></div>
              <span className="text-sm md:text-lg font-medium">03</span>
            </div>
            <div className="text-[22px] md:text-[34px] leading-[1.75rem] md:leading-[2.5rem] mb-[16px] md:mb-5">
              <h3>Zero Extra Costs</h3>
              {/* <h3>Better Results.</h3> */}
            </div>
            <p className="text-[16px] md:text-[18px] lg:max-w-[50%] mb-[32px] lg:mb-0">
              No hidden fees. No delivery charges. Whether you’re grabbing{" "}
              <span className="font-bold">
                lifestyle products or health aids, the cure is around the
                corner,
              </span>{" "}
              and it won’t cost you extra.
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
            className="rounded-lg h-auto w-full"
            alt="Feature"
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
};

export default Features;
