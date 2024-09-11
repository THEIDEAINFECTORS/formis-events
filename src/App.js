import React, { useState } from "react";
import Events from "./pages/Events";
import Main from "./pages/Main";

const App = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      {/* <Main dropdown={dropdown} setDropdown={setDropdown}/> */}
      <Events />
    </>
  );
};

export default App;
