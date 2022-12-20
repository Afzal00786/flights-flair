import React from "react";
import "./navbar.css";

const NavBar = ({ styling }) => {
  return (
    <div className={styling ? "" : "nav_bar_wrapper"}>
      <div className="nav_bar_inner">
        <div className="nav_logo">FlightsFlair</div>
        <div className="nav_right_sec">
          <div className="nav_items">Home</div>
          <div className="nav_items">What We Do</div>
          <div className="nav_items">Booking Terms</div>
          <div className="nav_items">Flights</div>
          <div className="">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
