import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-t border-white text-white font-medium flex justify-between items-center w-full py-[13px]"
      >
        <span className="text-[16px] md:text-[20px] text-left">{title}</span>

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
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="mb-[8px] font-light text-[14px] md:text-[16px] text-white overflow-hidden">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
