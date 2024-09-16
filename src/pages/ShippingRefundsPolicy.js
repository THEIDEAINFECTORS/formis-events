import Navbar from "../components/Main/Navbar/Navbar";
import Expandable from "../components/Policies/Expandable";
import Footer from "../components/Footer/Footer";

const ShippingRefundsPolicy = ({ dropdown, setDropdown }) => {
  return (
    <div className="">
      <Navbar dropdown={dropdown} setDropdown={setDropdown} isLoaded={true} />

      <div className="lg:flex justify-around lg:gap-[30px] pt-[160px] px-[20px] lg:px-[60px] 2xl:px-[180px] text-white">
        <section className="lg:w-[70%]">
          <div className="pb-8">
            <h2 className="text-[28px] font-medium mb-5">
              FORMIS SHIPPING POLICY
            </h2>
            <p className="opacity-70">
              At Kitsa, we prioritize your health and convenience. Our goal is
              to provide a seamless and rapid delivery experience, ensuring you
              get your medications without delay. Here’s everything you need to
              know about our shipping policy:
            </p>

            <h3 className="text-[20px] my-5 font-medium">
              Introduction to Formis.
            </h3>
            <p className="opacity-70">
              Formis crafts an array of services, from healthcare management
              apps to IT solutions, aiding millions daily in novel interactions
              with the world, including platforms and integrated products in
              third-party applications. Our services are versatile, offering
              privacy management options, accessible with or without an account,
              and customizable to fit your privacy needs, allowing you to
              explore, create, manage, or simply enjoy content with the
              assurance of control over your personal information.
            </p>
          </div>

          <Expandable
            id={1}
            title="Shipping Methods and Delivery Time"
            description="Our products come with a warranty that is as robust as it is reassuring. Adhering strictly to manufacturer guidelines, we ensure that every item you purchase through us is backed by a promise of quality and reliability. Should there be a hiccup (though we doubt it!), we’re on it faster than you can say 'Kitsa!'"
          />
          <Expandable
            id={2}
            title="Delivery Area"
            description="We currently deliver to limited regions of Delhi/NCR. Our network is constantly expanding, so if we don’t cover your area yet, stay tuned!"
          />
          <Expandable
            id={3}
            title="Customer Support"
            description="Our customer support team is available 24/7 to assist you with any queries or issues. You can reach us through our WhatsApp number or via email."
          />
        </section>

        <section className="hidden lg:flex lg:w-[30%]">
          <ul className="border-l border-white flex flex-col">
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#1"
            >
              Shipping Methods and Delivery Time
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#2"
            >
              Delivery Area
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#3"
            >
              Customer Support
            </a>
          </ul>
        </section>
      </div>

      <div className="lg:flex justify-around lg:gap-[30px] pt-[160px] px-[20px] lg:px-[60px] 2xl:px-[180px] text-white">
        <section className="lg:w-[70%]">
          <div className="pb-8">
            <h2 className="text-[28px] font-medium mb-5">
              FORMIS RETURN POLICY
            </h2>
            <p className="opacity-70">
              At Kitsa, our commitment isn’t just about delivering your
              medicines swiftly; it’s about ensuring you get the right
              treatment, right at your doorstep, with the right consumer
              protections baked in. So, here’s our straightforward yet robust
              policy on warranties, returns, and refunds—ensuring you can trust
              us not just with your health, but also with your peace of mind.
            </p>

            <h3 className="text-[20px] my-5 font-medium">
              Introduction to Formis.
            </h3>
            <p className="opacity-70">
              Formis crafts an array of services, from healthcare management
              apps to IT solutions, aiding millions daily in novel interactions
              with the world, including platforms and integrated products in
              third-party applications. Our services are versatile, offering
              privacy management options, accessible with or without an account,
              and customizable to fit your privacy needs, allowing you to
              explore, create, manage, or simply enjoy content with the
              assurance of control over your personal information.
            </p>
          </div>

          <Expandable
            id={4}
            title="Warranties"
            description="Our products come with a warranty that is as robust as it is reassuring. Adhering strictly to manufacturer guidelines, we ensure that every item you purchase through us is backed by a promise of quality and reliability. Should there be a hiccup (though we doubt it!), we’re on it faster than you can say 'Kitsa!'"
          />
          <Expandable
            id={5}
            title="Returns And Refunds"
            description="If your order from Kitsa isn't quite right, don't worry—our returns and refunds process is quick and hassle-free! Here's how it works:"
          />
          <Expandable id={6} title="Returns And Refunds Terms">
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>
                Eligibility: You can return products if they are damaged,
                expired, or not what you ordered.
              </li>
              <li>
                Process: Contact us, and we'll arrange a speedy pickup of the
                item.
              </li>
              <li>
                Refund Timeframe: Once we receive and verify the returned item,
                we'll process your refund immediately—no delays!
              </li>
            </ul>
          </Expandable>
        </section>

        <section className="hidden lg:flex lg:w-[30%]">
          <ul className="border-l border-white flex flex-col">
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#4"
            >
              Warranties
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#5"
            >
              Returns And Refunds
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#6"
            >
              Returns And Refunds Terms
            </a>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingRefundsPolicy;
