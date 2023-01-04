import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
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
  const karachi =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
  const Lahore =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Islamabad =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Peshawar =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Sialkot =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
  const bookCard = [
    {
      id: 1,
      description: karachi,
      mainTitle: "Cheap Flights To Karachi, Pakistan From UK",
      fromImg: require("../../asstes/images/image1.jpg"),
      width: "91.5%",
      height: "35%",
    },
    {
      id: 2,
      description: Lahore,
      mainTitle: "Cheap Flights To Lahore, Pakistan From UK",
      fromImg: require("../../asstes/images/image7.jpg"),
      width: "91.5%",
      height: "38.5%",
    },
    {
      id: 3,
      description: Islamabad,
      mainTitle: "Cheap Flights To Islamabad, Pakistan From UK",
      fromImg: require("../../asstes/images/image6.jpg"),
      width: "91.5%",
      height: "35%",
    },
    {
      id: 4,
      description: Peshawar,
      mainTitle: "Cheap Flights To Peshawar, Pakistan From UK",
      fromImg: require("../../asstes/images/image5.jpg"),
      width: "91.5%",
      height: "35%",
    },
    {
      id: 5,
      description: Sialkot,
      mainTitle: "Cheap Flights To Sialkot, Pakistan From UK",
      fromImg: require("../../asstes/images/image4.jpg"),
      width: "91.5%",
      height: "35%",
    },
  ];
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
                            navigation("/BookNowFlightDetails", {
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
                    navigation("/BookNowFlightDetails", { state: data })
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
        <div className={styling ? "nav_bar" : "nav_bar_wrapper"}>
          <div className="nav_bar_inner">
            <div className="nav_logo" onClick={() => navigation("/")}>
              <img
                className="logo_style"
                style={{ marginLeft: -25 }}
                src={require("../../asstes/images/logo.png")}
              />
            </div>
            <div className="nav_right_sec">
              <div
                style={{ color: styling ? "white" : "black" }}
                className="nav_items"
                onClick={() => navigation("/")}
              >
                Home
              </div>
              <div
                style={{ color: styling ? "white" : "black" }}
                className="nav_items"
                onClick={() => navigation("/WhatWeDo")}
              >
                What We Do
              </div>
              <div
                style={{ color: styling ? "white" : "black" }}
                className="nav_items"
                onClick={() => navigation("/BookingTerms")}
              >
                Booking Terms
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: styling ? "white" : "black",
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
                            color: styling ? "white" : "black",
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
                            color: styling ? "white" : "black",
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
                  color: styling ? "white" : "black",
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
                  color: styling ? "white" : "black",
                }}
                className="nav_bar_rig_title"
              >
                Call Our Travel Experts On
              </div>

              <a
                className={styling ? "nav_bar_phone_styling" : "nav_bar_phone"}
                style={{ textDecoration: "none" }}
                href="tel:0208-004-4475"
              >
                0208-638-6789
              </a>

              <div
                style={{
                  color: styling ? "white" : "black",
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
            src={require("../../asstes/images/logo.png")}
          />
        </div>
        {mobileOpen ? (
          <>
            <div onClick={handleMobileOpen}>
              <CloseIcon
                style={{
                  color: styling ? "white" : "black",
                  fontSize: 25,
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div onClick={handleMobileClose}>
              <MenuIcon
                style={{ color: styling ? "white" : "black", fontSize: 25 }}
              />
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default NavBar;
