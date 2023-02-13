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

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pageUrl" element={<BookNowFlightDetails />} />
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
