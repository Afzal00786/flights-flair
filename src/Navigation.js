import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookNowFlightDetails from "./components/BookNow/BookNowFlightDetails";
import BookNow from "../src/components/BookNow";
import BookingTerms from "./components/BookingTerms";
import Flights from "./components/Flights";
import ContactUs from "./components/ContactUs";
import WhatWeDo from "./components/WhatWeDo";
import InstantFlight from "./components/InstantFlights";

// import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
// import BookingTerms from "./components/BookingTerms/BookingTerms";
// import Flights from "./components/Flights/Flights";
// import ContactUs from "./components/ContactUs/ContactUs";
function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booknowflightdetails"
          element={<BookNowFlightDetails />}
        />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/BookingTerms" element={<BookingTerms />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <InstantFlight />
    </Router>
  );
}

export default Navigation;
