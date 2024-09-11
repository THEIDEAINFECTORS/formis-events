import AwardsMarquee from "../../AwardsMarquee";
import hero from "../../../assets/hero.png";

const Hero = () => {
  return (
    <header className="">
      <section className="h-[100svh] px-[20px]">
        <div className="h-[85%] flex flex-col justify-center">
          <div className="text-4xl md:text-6xl lg:text-[5.5rem] max-w-[950px] mx-auto text-formisWhitef5 text-center font-[Hind]">
            <h1 className="leading-[3rem] md:leading-[4.5rem] lg:leading-[7rem]">
              Why Go Out? <br /> When You Can Fast Pass.
            </h1>
          </div>
          <div className="text-2xl font-light text-formisWhitef5 max-w-[820px] text-center mx-auto mt-5">
            <p className="text-base lg:text-[22px]">
              Focus on feeling better. Fast Pass will deliver the medications,
              essentials, and needs you require in just a few minutes. Rest up!
              Because by the time you wear your slippers, take the lift
              downstairs, and turn your engine on, we'll already be at your
              doorstep.
            </p>
          </div>

          <div className="flex gap-5 items-center justify-center mt-10">
            <button className="text-formisBlack15 font-bold text-[13px] bg-[#fe915f] h-[46.8px] rounded-[10px] px-4 hover:brightness-125 transition">
              Order Now on Whatsapp
            </button>
            <button className="text-formisWhitef0 font-bold text-[13px] border border-[#f0f0f0] h-[46.8px] rounded-[10px] px-4 hover:brightness-125 transition">
              Order Now on Whatsapp
            </button>
          </div>
        </div>

        <div className="h-[15%] px-[20px] md:mx-[40px] lg:mx-[60px] 2xl:mx-[90px]">
          <AwardsMarquee />
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${hero})` }}
        className="h-[80vh] bg-cover lg:bg-contain bg-center bg-no-repeat -mt-[60%] md:-mt-[30%] lg:-mt-[20%] xl:-mt-[10%]"
      ></section>
    </header>
  );
};

export default Hero;
