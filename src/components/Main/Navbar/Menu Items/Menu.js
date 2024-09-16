import { FaArrowRightLong } from "react-icons/fa6";
import video from "../../../../assets/video2.mp4";

const Menu = () => {
  return (
    <section>
      <div className="border-b border-[#9b9c9e] blur-sm"></div>
      <div className="h-[68vh] flex flex-col justify-center">
        <h5
          className="text-[#9b9c9e] mb-[33px] 
                    xl:px-[60px] 2xl:px-0 2xl:pl-[382px] 4xl:pl-[390px]"
        >
          HOME
        </h5>

        <div
          className="flex items-center justify-between 
                      xl:px-[60px] 2xl:px-0 2xl:pl-[382px] 4xl:pl-[390px]"
        >
          <div>
            <div className="grid grid-cols-2 xl:gap-[63px] 2xl:gap-[30px] 3xl:gap-[63px] 4xl:gap-[113px]">
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
                  <p className="text-[16px] mb-[11px]">
                    Artificial Intelligence
                  </p>
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

          <div className="w-[572px] h-[424px] 2xl:w-[400px] 2xl:h-[224px] 3xl:w-[502px] 3xl:h-[354px] 4xl:w-[572px] 4xl:h-[424px]
                          relative rounded-[10px] 2xl:mr-[90px]">
            <video
              className="w-[572px] h-[424px] 2xl:w-[400px] 2xl:h-[224px] 3xl:w-[502px] 3xl:h-[354px] 4xl:w-[572px] 4xl:h-[424px]
                        object-cover mx-auto rounded-[10px]"
              loop
              autoPlay
              muted
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="video w-[572px] h-[424px] 2xl:w-[400px] 2xl:h-[224px] 3xl:w-[502px] 3xl:h-[354px] 4xl:w-[572px] 4xl:h-[424px]
                          absolute top-0 left-0 bg-gradient-to-b z-[40] from-transparent to-formisOrange opacity-[0.45] rounded-[10px]"></div>
            {/* <div className="video w-[572px] h-[424px] absolute top-0 left-0 bg-formisWhitef0 bg-opacity-10 z-[50] rounded-[10px]"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
