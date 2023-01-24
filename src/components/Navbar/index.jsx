import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { bookCard } from "../BookingDummyData";

const NavBar = () => {
  const [flights, setFlights] = useState(false);
  const handlePopoverOpen = (event) => {
    setFlights(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setFlights(null);
  };

  const navigation = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [flightsOpen, setFlightsOpen] = React.useState(false);

  const handleFlightsOpen = () => {
    setFlightsOpen(!flightsOpen);
  };
  const handleFlightsClose = () => {
    setFlightsOpen(!flightsOpen);
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
              <div className="nav_items1" onClick={() => navigation("/")}>
                Home
              </div>
              <div
                className="nav_items1"
                onClick={() => navigation("/WhatWeDo")}
              >
                What We Do
              </div>
              <div
                className="nav_items1"
                onClick={() => navigation("/BookingTerms")}
              >
                Booking Terms
              </div>
              <div className="nav_items1" onClick={() => navigation("/Blog")}>
                Blog
              </div>
              <div className="nav_items1">
                <div className="FiightText1">
                  <div>Flights</div>
                  <div>
                    {flightsOpen ? (
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}
                      >
                        <div
                          onClick={handleFlightsClose}
                          style={{
                            color: "black",
                          }}
                        >
                          <ArrowDropUpIcon />
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}
                      >
                        <div
                          onClick={handleFlightsOpen}
                          style={{
                            color: "black",
                          }}
                        >
                          <ArrowDropDownOutlinedIcon />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {flightsOpen && (
                  <div style={{ position: "absolute", width: "90%" }}>
                    {bookCard.map((data) => {
                      return (
                        <div
                          className="mobiledropdownContainer"
                          onClick={() =>
                            navigation(`/${data.flightUrl}`, {
                              state: data,
                            })
                          }
                        >
                          <h3 className="mobiledropdownText">
                            {data.mainTitle}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div
                className="nav_items1"
                onClick={() => navigation("/ContactUs")}
              >
                Contact Us
              </div>
            </div>
          </div>
        </>
      )}

      {flights ? (
        <>
          <div onMouseLeave={handlePopoverClose} className="drowpDownBoxStyle">
            <div className="box"></div>
            {bookCard.map((data) => {
              return (
                <div
                  className="dropdownTextContainer"
                  onClick={() =>
                    navigation(`/${data.flightUrl}`, { state: data })
                  }
                >
                  <div className="dropdownText">{data.mainTitle}</div>
                </div>
              );
            })}
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
        <div className="nav_bar_wrapper">
          <div className="nav_bar_inner">
            <div className="nav_logo" onClick={() => navigation("/")}>
              <img
                className="logo_style"
                style={{ marginLeft: -25 }}
                src={require("../../asstes/images/logo.webp")}
                alt="logo"
              />
            </div>
            <div className="nav_right_sec">
              <div
                style={{ color: "black" }}
                className="nav_items"
                onClick={() => navigation("/")}
              >
                Home
              </div>
              <div
                style={{ color: "black" }}
                className="nav_items"
                onClick={() => navigation("/WhatWeDo")}
              >
                What We Do
              </div>
              <div
                style={{ color: "black" }}
                className="nav_items"
                onClick={() => navigation("/BookingTerms")}
              >
                Booking Terms
              </div>
              <div
                style={{ color: "black" }}
                className="nav_items"
                onClick={() => navigation("/Blog")}
              >
                Blog
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "black",
                  }}
                  className="nav_items"
                  onMouseEnter={handlePopoverOpen}
                >
                  <div className="FiightText">
                    <div>Flights</div>
                  </div>
                  <div>
                    {flightsOpen ? (
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}
                      >
                        <div
                          onClick={handleFlightsClose}
                          style={{
                            color: "black",
                          }}
                        >
                          <ArrowDropUpIcon />
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}
                      >
                        <div
                          onClick={handleFlightsOpen}
                          style={{
                            color: "black",
                          }}
                        >
                          <ArrowDropDownOutlinedIcon />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "black",
                }}
                className="nav_items"
                onClick={() => navigation("/ContactUs")}
              >
                Contact Us
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div
                style={{
                  color: "black",
                }}
                className="nav_bar_rig_title"
              >
                Call Our Travel Experts On
              </div>

              <a
                className={"nav_bar_phone"}
                style={{ textDecoration: "none" }}
                href="tel:0208-004-4475"
              >
                0208-638-6789
              </a>

              <div
                style={{
                  color: "black",
                }}
                className="nav_bar_rig_title2"
              >
                Lines Open 24 Hours 7 Days A Week
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
          paddingRight: 3,
        }}
      >
        <div className="nav_logo" onClick={() => navigation("/")}>
          <img
            width={200}
            style={{ marginLeft: -20 }}
            height={200}
            src={require("../../asstes/images/logo.webp")}
            alt="logo"
          />
        </div>
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
