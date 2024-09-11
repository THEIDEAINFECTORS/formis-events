import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import video from "../../../assets/video2.mp4";

const Dropdown = ({ isOpen }) => {
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight("618px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <section
      style={{
        height: height,
        transition: "height 0.3s ease-in-out",
        overflow: "hidden",
      }}
      className="pl-[353px] 3xl:pl-[451px] pr-[60px] bg-[#f0f0f0] fixed top-[100px] left-0 w-full z-[100]"
    >
      {/* Top Border */}
      <div className="border-b border-[#9b9c9e] blur-sm mb-[60px]"></div>

      <h5 className="text-[#9b9c9e] mb-[33px] ">CAPABILITES</h5>

      <div className=" font-normal flex items-center">
        <div>
          <div className="grid grid-cols-2 gap-[93px] max-w-[724px]">
            <div className="font-medium">
              <div className="mb-[31px]">
                <p className="text-[16px] mb-[11px]">
                  Real-time data infrastructure
                </p>
                <p className="text-[#9b9c9e] w-fit pb-[27px]">
                  Orchestrate end-to-end data seamlessly
                </p>
                <div className="border-b border-[#9b9c9e] opacity-50"></div>
              </div>
              <div className="mb-[31px]">
                <p className="text-[16px] mb-[11px]">Customer 360°</p>
                <p className="text-[#9b9c9e] w-fit pb-[27px]">
                  Unifying data for a complete customer view
                </p>
                <div className="border-b border-[#9b9c9e] opacity-50"></div>
              </div>
              <div>
                <p className="text-[16px] mb-[11px]">Segmentation</p>
                <p className="text-[#9b9c9e] w-fit pb-[27px]">
                  Deliver personalized experiences in real time
                </p>
                <div className="border-b border-[#9b9c9e] opacity-50"></div>
              </div>
            </div>

            <div className="font-medium">
              <div className="mb-[31px]">
                <p className="text-[16px] mb-[11px]">Artificial Intelligence</p>
                <p className="text-[#9b9c9e] w-fit pb-[27px]">
                  Understand customer journeys & behavior
                </p>
                <div className="border-b border-[#9b9c9e] opacity-50"></div>
              </div>
              <div className="mb-[31px]">
                <p className="text-[16px] mb-[11px]">Customer 360°</p>
                <p className="text-[#9b9c9e] w-fit pb-[27px]">
                  Unifying data for a complete customer view
                </p>
                <div className="border-b border-[#9b9c9e] opacity-50"></div>
              </div>
              <div>
                <p className="text-[16px] mb-[11px]">Segmentation</p>
                <p className="text-[#9b9c9e] w-fit pb-[27px]">
                  Deliver personalized experiences in real time
                </p>
                <div className="border-b border-[#9b9c9e] opacity-50"></div>
              </div>
            </div>
          </div>

          <div className="flex mt-[92px] gap-[41px]">
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
        </div>

        <div className="w-[572px] h-[424px] relative rounded-[10px]">
          <video
            className="w-[572px] h-[424px] object-cover mx-auto rounded-[10px]"
            loop
            autoPlay
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="video w-[572px] h-[424px] absolute top-0 left-0 bg-gradient-to-b z-[40] from-transparent to-formisOrange opacity-[0.45] rounded-[10px]"></div>
          {/* <div className="video w-[572px] h-[424px] absolute top-0 left-0 bg-formisWhitef0 bg-opacity-10 z-[50] rounded-[10px]"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Dropdown;