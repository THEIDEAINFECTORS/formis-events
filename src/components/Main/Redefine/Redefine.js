import redefine1 from "../../../assets/redefine/redefine1.jpeg";
import redefine2 from "../../../assets/redefine/redefine2.jpeg";

const Redefine = () => {
  return (
    <section
      className="bg-white text-formisBlack14 
                  px-[40px] xl:px-[90px] pt-10 lg:pt-20 pb-[48px] lg:pb-20"
    >
      <div className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium font-[Hind] mb-10 lg:mb-20">
        <h1 className="leading-[2.5rem] md:leading-[4.5rem] lg:leading-[7rem]">
          Redefine The CDP<span className="text-formisOrange">.</span>
        </h1>
      </div>

      <div className="mb-[40px] lg:mb-[96px] lg:flex lg:gap-[32px]">
        <img src={redefine1} alt="redefine" className="lg:w-[70%] 2xl:max-w-[60%]" />
        <div className="">
          <h3 className="text-[20px] lg:text-[24px] xl:text-[34px] my-[24px] lg:my-0 lg:mb-[24px]">
            Our easy-to-use AI-driven platform gives you the power to do so much
            more than manage data.
          </h3>
          <div>
            <ul className="flex flex-col gap-[16px] font-[500] text-[14px]">
              <li>Real-time data infrastructure</li>
              <li>Customer 360°</li>
              <li>Segmentation</li>
              <li>Analytics</li>
              <li>Artificial Intelligence</li>
              <li>Governance</li>
            </ul>

            <a
              href="https://api.whatsapp.com/send/?phone=919773910084&text=Hi%21+Kitsa&type=phone_number&app_absent=0"
              className="lg:mb-0 bg-formisOrange h-[40px] px-4 text-[14px] font-[500] max-w-[200px] mt-[24px]
                flex items-center justify-center rounded-full text-formisBlack15 cursor-pointer border border-formisOrange
                hover:bg-transparent hover:border-formisOrange hover:text-formisBlack15 transition-colors"
            >
              Order Now On Whatsapp
            </a>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row-reverse lg:gap-[32px]">
        <img src={redefine2} alt="redefine" className="lg:max-w-[70%] 2xl:max-w-[60%]" />
        <div>
          <h3 className="text-[20px] lg:text-[24px] xl:text-[34px] my-[24px] lg:my-0 lg:mb-[24px]">
            One platform, one goal: Turning customer data into customer joy
          </h3>
          <p>
            Introducing the next evolution of the CDP. We’re excited to announce
            the unification of Indicative (now Analytics) and Vidora (now
            Cortex) into the mParticle platform. We also are thrilled to unveil
            a fresh, new brand identity and visual interface that revolutionizes
            how customers interact with the mParticle platform.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=919773910084&text=Hi%21+Kitsa&type=phone_number&app_absent=0"
            className="lg:mb-0 bg-formisOrange h-[40px] px-4 text-[14px] font-[500] max-w-[200px] mt-[24px]
                flex items-center justify-center rounded-full text-formisBlack15 cursor-pointer border border-formisOrange
                hover:bg-transparent hover:border-formisOrange hover:text-formisBlack15 transition-colors"
          >
            Order Now On Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Redefine;
