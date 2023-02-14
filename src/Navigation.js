import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookNowFlightDetails from "./components/BookNow/BookNowFlightDetails";
import BookingTerms from "./components/BookingTerms";
import ContactUs from "./components/ContactUs";
import WhatWeDo from "./components/WhatWeDo";
import InstantFlight from "./components/InstantFlights";
import Blog from "./components/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import FlightKarachi from "./components/CheapFlights/FlightKarachi.jsx";
import FlightLahore from "./components/CheapFlights/FlightLahore.jsx";
import FlightIslamabad from "./components/CheapFlights/FlightIslamabad.jsx";
import FlightPeshawar from "./components/CheapFlights/FlightPeshawar.jsx";
import FlightSialkot from "./components/CheapFlights/FlightSialkot.jsx";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:pageUrl" element={<BookNowFlightDetails />} /> */}
        <Route path="/cheapflightstokarachi" element={<FlightKarachi />} />
        <Route path="/cheapflightstolahore" element={<FlightLahore />} />
        <Route path="/cheapflightstoislamabad" element={<FlightIslamabad />} />
        <Route path="/cheapflightstopeshawar" element={<FlightPeshawar />} />
        <Route path="/cheapflightstosialkot" element={<FlightSialkot />} />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BookingTerms" element={<BookingTerms />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <InstantFlight />
    </Router>
  );
}

export default Navigation;
