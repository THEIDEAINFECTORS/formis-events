import { MdArrowBackIos } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const MenuMobile = ({ toggleMobileMenu, toggleMenu }) => {
  const handleClose = () => {
    toggleMobileMenu(); // Close the sliding menu
    toggleMenu(); // Close the entire navbar menu
  };
  
  return (
    <div className="text-black">
      <section className="flex items-center justify-between h-[100px] px-[20px]">
        <p
          className="flex items-center text-[14px] font-semibold"
          onClick={toggleMobileMenu}
        >
          <MdArrowBackIos /> Back
        </p>
        <IoMdClose
          onClick={handleClose}
          className="cursor-pointer text-2xl lg:text-3xl"
        />
      </section>

      <section className="px-[20px] overflow-scroll">
        <h5 className="text-[#9b9c9e] text-[16px] mb-[24px] tracking-widest">HOME</h5>
        <div className="flex flex-col gap-4">
          <div className="pb-[16px] border-b border-[#9b9c9e]">
            <p className="text-[16px] mb-[6px]">
              Real-time data infrastructure
            </p>
            <p className="text-[14px] pr-[100px] text-[#9b9c9e]">
              Orchestrate end-to-end data seamlessly
            </p>
          </div>
          <div className="pb-[16px] border-b border-[#9b9c9e]">
            <p className="text-[16px] mb-[6px]">
              Real-time data infrastructure
            </p>
            <p className="text-[14px] pr-[100px] text-[#9b9c9e]">
              Orchestrate end-to-end data seamlessly
            </p>
          </div>
          <div className="pb-[16px] border-b border-[#9b9c9e]">
            <p className="text-[16px] mb-[6px]">
              Real-time data infrastructure
            </p>
            <p className="text-[14px] pr-[100px] text-[#9b9c9e]">
              Orchestrate end-to-end data seamlessly
            </p>
          </div>
          <div className="pb-[16px] border-b border-[#9b9c9e]">
            <p className="text-[16px] mb-[6px]">
              Real-time data infrastructure
            </p>
            <p className="text-[14px] pr-[100px] text-[#9b9c9e]">
              Orchestrate end-to-end data seamlessly
            </p>
          </div>
          <div className="pb-[16px] border-b border-[#9b9c9e]">
            <p className="text-[16px] mb-[6px]">
              Real-time data infrastructure
            </p>
            <p className="text-[14px] pr-[100px] text-[#9b9c9e]">
              Orchestrate end-to-end data seamlessly
            </p>
          </div>
          <div className="pb-[16px] border-b border-[#9b9c9e]">
            <p className="text-[16px] mb-[6px]">
              Real-time data infrastructure
            </p>
            <p className="text-[14px] pr-[100px] text-[#9b9c9e]">
              Orchestrate end-to-end data seamlessly
            </p>
          </div>

          <div className="flex text-[14px] flex-col gap-[16px]">
              <p className="flex items-center font-medium gap-2 cursor-pointer">
                Platform overview <FaArrowRightLong />
              </p>
              <p className="flex items-center font-medium gap-2 cursor-pointer">
                Pricing <FaArrowRightLong />
              </p>
              <p className="flex items-center font-medium gap-2 cursor-pointer">
                Integrations <FaArrowRightLong />
              </p>
            </div>

            <div>
                <button></button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MenuMobile;
