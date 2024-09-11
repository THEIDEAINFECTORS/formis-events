import { useEffect, useState } from "react";

const ExpandNavbar = ({ isOpen, children }) => {
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    if (isOpen) {
      setHeight("70vh");
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
      className="bg-[#f0f0f0] absolute top-[100px] left-0 w-full z-[100]"
    >
      {children}
    </section>
  );
};

export default ExpandNavbar;
