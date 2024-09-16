import slide1 from "../../../assets/highlights/slide1.jpeg";
import about from "../../../assets/about.png";
import Accordian from "./Accordian";

const About = () => {
  return (
    <main>
      <section className="px-[40px] xl:px-[90px] pb-[96px] bg-white">
        <img
          src={about}
          alt="About"
          className="mx-auto xl:w-[90vw] h-[15vh] md:h-[25vh] lg:h-[50vh] mb-10"
        />
        <h2 className="text-[20px] mb-10">More Than Just Medicine Delivery</h2>
        <div className="mb-10 text-[14px]">
          <p className="mb-2">
            Let’s get one thing clear: KITSA<span className="text-[8px] align-super">™</span> isn’t just about medicine delivery
            . We’re here for your health essentials , lifestyle needs , and
            life-enhancing products . Think glowing skin, wellness supplements,
            pain relief aids—everything that keeps you thriving. If you’re still
            thinking about " buy medicine online " or endlessly searching for a
            "chemist open near me," you're thinking too small.
          </p>
          <p>
            At KITSA<span className="text-[8px] align-super">™</span>, the cure is around the corner , literally. In just 20
            seconds, you can place an order, and in 20 minutes, it’s at your
            door. Powered by FORMIS , KITSA<span className="text-[8px] align-super">™</span> turns the hassle of health products
            into a thing of the past. No apps, no extra steps—just WhatsApp ,
            and you’re done.
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=919773910084&text=Hi%21+Kitsa&type=phone_number&app_absent=0"
          className="lg:mb-0 bg-formisOrange h-[40px] px-4 text-[14px] font-[500] max-w-[200px]
                flex items-center justify-center rounded-full text-formisBlack15 cursor-pointer border border-formisOrange
                hover:bg-transparent hover:border-formisOrange hover:text-formisBlack15 transition-colors"
        >
          Order Now On Whatsapp
        </a>
        {/* <p className="mt-10">
        <span className="font-bold">COMING SOON : </span>KITSA<span className="text-[8px] align-super">™</span> is leveling up even further. We’ll soon be{" "}
        delivering <span className="font-bold">lab needs</span> and <span className="font-bold">consultations</span> right to your door, making
        healthcare more understandable, inclusive, and built just for you.{" "}
        <span className="font-bold">Healthcare, simplified</span> —the way it should be.
      </p> */}
      </section>

      
      {/* FAQ */}
      <section className="my-20 bg-formisBlack15 px-[40px] xl:px-[90px]">
        <div className="text-4xl md:text-6xl lg:text-[5.5rem] text-white font-medium font-[Hind] mb-10 lg:mb-10">
          <h1 className="leading-[2.5rem] md:leading-[4.5rem] lg:leading-[7rem]">
            Frequently Asked Questions
            <span className="text-formisOrange">.</span>
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          <Accordian title="Q: What kind of products does KITSA™️ deliver?">
            <p>
              A: KITSA™️ delivers everything from daily health essentials to
              lifestyle-enhancing products . You’ll get every cure that
              contributes to making you feel as healthy as you were in your
              youthful fit —and then some.
            </p>
          </Accordian>
          <Accordian title="Q: Do you charge delivery fees for online medicine?">
            <p>
              A: Nope. At KITSA™️, healthcare is simplified —there are no hidden
              fees, no delivery charges, and no minimum order value. Just fast,
              reliable service.
            </p>
          </Accordian>
          <Accordian title="Q: Do I need an app to use KITSA™️?">
            <p>
              A: Absolutely not. All you need is WhatsApp. KITSA™️ keeps it
              simple, so you never need to worry about downloading another app.
              The cure is around the corner, without the clutter.
            </p>
          </Accordian>
          <Accordian title="Q: How do I join KITSA™️.LIFE?">
            <p className="mb-4">
              A: When you order through KITSA™️, you automatically unlock
              KITSA™️.LIFE. That means free access to exclusive life-enhancing
              events and experiences designed to keep you energized and youthful
              fit.
            </p>
            <button
              className="text-formisBlack15 text-[12px] bg-[#f1edeb] h-[47px] rounded-full px-4 hover:bg-transparent 
                            hover:border hover:border-white hover:text-white transition-colors"
            >
              UNLOCK KITSA™️.LIFE
            </button>
          </Accordian>
        </div>
      </section>
    </main>
  );
};

export default About;
