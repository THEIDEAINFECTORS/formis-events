import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-t border-[#545454] font-medium flex justify-between items-center w-full py-[13px]"
      >
        <span className="text-[18px]">{title}</span>

        {isOpen ? (
          <div className="text-xl font-light transition-all duration-500">
            <FiMinus />
          </div>
        ) : (
          <div className="text-xl font-light transition-all duration-500">
            <FiPlus />
          </div>
        )}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-teal-950 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="mb-[8px] font-light text-[14px] text-formisWhitef5 overflow-hidden">
          <div className="flex flex-col gap-[16px] last:mb-[14px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
