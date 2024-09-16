import React, { useState } from "react";

const Expandable = ({ id, title, description, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="text-white" id={id}>
      <div className="border-b border-white my-[40px]"></div>
      <h4 className="text-lg">{title}</h4>
      <p className={`mt-[16px] ${isExpanded ? "block" : "hidden"}`}>
        {description}
        {children}
      </p>
      <button className="mt-[24px]" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <div>- Collapse</div> : <div>+ Expand</div>}
      </button>
    </div>
  );
};

export default Expandable;
