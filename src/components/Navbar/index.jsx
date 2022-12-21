import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const NavBar = ({ styling }) => {
  const [flights, setFlights] = useState(false);
  const handlePopoverOpen = (event) => {
    setFlights(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setFlights(null);
  };

  const navigation = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleOpenModal = () => {
    navigation("/Flights");
  };

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleMobileClose = () => {
    setMobileOpen(!mobileOpen);
  };

 

  return (
    <>
      {mobileOpen && (
        <>
          <div style={{ display: "flex" }}>
            <div className="Mobille_navbar">
              <div className="nav_items1">Home</div>
              <div className="nav_items1">What We Do</div>
              <div className="nav_items1">Booking Terms</div>
              <div className="nav_items1">Flights</div>
              <div className="nav_items1">Contact Us</div>
            </div>
          </div>
        </>
      )}

      {flights ? (
        <>
          <div onMouseLeave={handlePopoverClose} className="drowpDownBoxStyle">
            <div className="dropdownTextContainer">
              <div className="dropdownText">
                Cheap Flights To Lahore,Pakistan from UK
              </div>
              <div className="dropdownText">
                Cheap Flights To Peshawar,Pakistan from UK
              </div>
              <div className="dropdownText">
                Cheap Flights To Islamabad,Pakistan from UK
              </div>
              <div className="dropdownText">
                Cheap Flights To karachi,Pakistan from UK
              </div>
              <div className="dropdownText">
                Cheap Flights To Sialkot,Pakistan from UK
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
          flexDirection: "row-reverse",
          marginRight: 5,
        }}
      >
        <div className={styling ? "nav_bar" : "nav_bar_wrapper"}>
          <div className="nav_bar_inner">
            <div className="nav_logo">FlightsFlair</div>
            <div className="nav_right_sec">
              <div className="nav_items" onClick={() => navigation("/")}>
                Home
              </div>
              <div
                className="nav_items"
                onClick={() => navigation("/WhatWeDo")}
              >
                What We Do
              </div>
              <div
                className="nav_items"
                onClick={() => navigation("/BookingTerms")}
              >
                Booking Terms
              </div>
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="nav_items"
                onMouseEnter={handlePopoverOpen}
                onClick={handleOpenModal}
              >
                <div className="overlay"></div>
                <div className="FiightText">
                  Flights
                  <div style={{ height: 10, marginBottom: 5 }}>
                    <ArrowDropDownIcon />
                  </div>
                </div>
              </div>
              <div
                className="nav_items"
                onClick={() => navigation("/ContactUs")}
              >
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          marginRight: 5,
          justifyContent: "space-between",
          height: 80,
          alignItems: "center",
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <div className="nav_logo">FlightsFlair</div>
        {mobileOpen ? (
          <>
            <div onClick={handleMobileOpen}>
              <CloseIcon
                style={{
                  color: "black",
                  fontSize: 25,
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div onClick={handleMobileClose}>
              <MenuIcon style={{ color: "black", fontSize: 25 }} />
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default NavBar;
