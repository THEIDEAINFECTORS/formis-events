import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoaderAnimation = ({ isLoaded }) => {
  useGSAP(() => {
    gsap.to("#textloader", {
      duration: 3,
      backgroundPosition: "200% 0",
      ease: "power2.inOut",
      repeat: -1,
      repeatDelay: 0.5,
    });
  }, []);

  return (
    <div className="bg-[#15171c] fixed h-screen w-screen overflow-hidden">
      {/* <div className="background1 opacity-0"></div>
      <div className="background2"></div> */}
      <div
        className={`fixed h-full w-full flex items-center justify-center transition-opacity duration-500 ${
          isLoaded ? "hidden" : "block"
        }`}
      >
        <p
          id="textloader"
          className="text-[27px] md:text-[40px] font-[800] hero-subheader opacity-70 loading-text text-center"
        >
          FASTPASS HAS EVOLVED.
          <br />
          <span>MEET KITSA™️</span>.
        </p>
      </div>
    </div>
  );
};

export default LoaderAnimation;
