import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingRefundsPolicy from "./pages/ShippingRefundsPolicy";
import TermsPolicy from "./pages/TermsPolicy";
import ScrollToTop from "./pages/ScrollToTop";
import Ticket from "./pages/Ticket";

const App = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<Events />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-and-refunds-policy" element={<ShippingRefundsPolicy />} />
        <Route path="/terms" element={<TermsPolicy />} />
        <Route path="/events/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
