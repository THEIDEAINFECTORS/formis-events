import AwardsMarquee from "../../AwardsMarquee";
import hero from "../../../assets/WebsiteHeader5.png";

const Hero = ({isLoaded}) => {
  return (
    <header className={`transition-opacity duration-1000 ${
      isLoaded ? "opacity-100" : "opacity-0"
    }`}>
      <section className="bg-cover bg-no-repeat h-[100svh] relative z-40 px-[40px] ">
        <section className="h-[80%] lg:h-[75%] pt-[80px] lg:pt-[150px]">
          <div className="flex flex-col justify-center">
            <div className="mt-5 lg:mt-[55px] text-[30px] md:text-6xl lg:text-[60px] max-w-[920px] mx-auto text-formisWhitef5 text-center">
              <h1 className="leading-[3rem] md:leading-[4.5rem] lg:leading-[5rem] font-[500]">
                Health Essentials at Your Door. 20 Minutes—Because Who Has Time
                to Wait?
              </h1>
            </div>
            <div className="text-2xl font-light text-formisWhitef5 max-w-[850px] text-center mx-auto mt-7">
              <p className="text-[14px] leading-[20px] lg:leading-[25px] lg:text-[20px] text-white opacity-60 font-[200]">
                From daily health essentials to life-enhancing products, KITSA<span className="text-[8px] align-super">™</span>{" "}
                delivers everything you need in just 20 minutes. No delivery
                fees, no hidden charges, no minimum cart value—just fast,
                simple, reliable service. Because there's a cure for everything.{" "}
                <span className="border-b-2 border-[#f1edeb]">
                  And you've got KITSA<span className="text-[8px] align-super">™</span>.
                </span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-center font-[500] mt-10">
              <button
                className="text-formisBlack15 text-[12px] border border-[#f1edeb] bg-[#f1edeb] h-[40px] md:h-[47px] rounded-full px-4 
                          hover:bg-transparent hover:text-white transition-colors"
              >
                ORDER NOW ON WHATSAPP
              </button>
              <button
                className="hidden lg:block text-[#f1edeb] text-[13px] border border-[#f1edeb] h-[47px] rounded-full px-4 
                                hover:bg-[#f1edeb] hover:text-formisBlack15 transition"
              >
                UNLOCK KITSA<span className="text-[8px] align-super">™</span>.LIFE
              </button>
            </div>
          </div>
        </section>

        <div className="mt-14 h-[20%] lg:h-[25%] px-[20px] md:mx-[40px] lg:mx-[60px] 2xl:mx-[90px]">
          <AwardsMarquee />
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${hero})` }}
        className="h-[70vh] lg:h-screen bg-cover lg:bg-cover bg-center bg-no-repeat -mt-[20%] md:-mt-[30%] lg:-mt-[20%] xl:-mt-[10%]"
      ></section>
    </header>
  );
};

export default Hero;

// import AwardsMarquee from "../../AwardsMarquee";
// import hero from "../../../assets/WebsiteHeader5.png";

// const Hero = () => {
//   return (
//     <header className="">
//       <section className="bg-cover bg-no-repeat h-[100svh] px-[40px] ">
//         <section>
//           <div className="bg-white size-4 rounded-full"></div>
//           <div className="bg-white size-4 rounded-full"></div>
//           <div className="bg-white size-4 rounded-full"></div>
//           <div className="bg-white size-4 rounded-full"></div>
//         </section>
//         <div className="h-[70%] lg:h-[80%] flex flex-col justify-center">
//           <div className="mt-28 lg:mt-[55px] text-[32px] md:text-6xl lg:text-[60px] max-w-[920px] mx-auto text-formisWhitef5 text-center">
//             <h1 className="leading-[3rem] md:leading-[4.5rem] lg:leading-[5rem] font-[500]">
//               Health Essentials at Your Door. 20 Minutes—Because Who Has Time to
//               Wait?
//             </h1>
//           </div>
//           <div className="text-2xl font-light text-formisWhitef5 max-w-[850px] text-center mx-auto mt-7">
//             <p className="text-[14px] leading-[20px] lg:leading-[25px] lg:text-[20px] text-white opacity-60 font-[200]">
//               From daily health essentials to life-enhancing products, KITSA
//               delivers everything you need in just 20 minutes. No delivery fees,
//               no hidden charges, no minimum cart value—just fast, simple,
//               reliable service. Because there's a cure for everything.{" "}
//               <span className="border-b-2 border-[#f1edeb]">
//                 And you've got KITSA.
//               </span>
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-center font-[500] mt-10">
//             <button
//               className="text-formisBlack15 text-[12px] bg-[#f1edeb] h-[47px] rounded-full px-4 hover:bg-transparent
//                               hover:border hover:border-white hover:text-white transition-colors"
//             >
//               ORDER NOW ON WHATSAPP
//             </button>
//             <button
//               className="hidden lg:block text-white text-[13px] border border-white h-[47px] rounded-full px-4
//                                 hover:bg-white hover:text-formisBlack15 transition"
//             >
//               UNLOCK KITSA.LIFE
//             </button>
//           </div>
//         </div>

//         <div className="mt-14 h-[30%] lg:h-[20%] px-[20px] md:mx-[40px] lg:mx-[60px] 2xl:mx-[90px]">
//           <AwardsMarquee />
//         </div>
//       </section>

//       <section
//         style={{ backgroundImage: `url(${hero})` }}
//         className=" h-[70vh] lg:h-screen bg-cover lg:bg-cover bg-center bg-no-repeat -mt-[50%] md:-mt-[30%] lg:-mt-[20%] xl:-mt-[10%]"
//       ></section>
//     </header>
//   );
// };

// export default Hero;
