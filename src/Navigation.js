import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookNow from "../src/components/BookNow";
import BookNowFlightDetails from "./components/BookNow/BookNowFlightDetails";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/BookNowFlightDetails"
          element={<BookNowFlightDetails />}
        />
      </Routes>
    </Router>
  );
}

export default Navigation;
